import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from 'vite-plugin-compression';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  // ✅ Detect Vercel environment — skip heavy image processing on CI/CD
  const isVercel = !!process.env.VERCEL;

  return {
    plugins: [
      tailwindcss(),
      react(),
      visualizer({
        open: false,
        filename: "bundle-analysis.html",
        gzipSize: true,
        brotliSize: true,
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
      // ✅ VERCEL BYPASS: Skip image optimization during Vercel deploys.
      // This was causing 1hr+ build times due to processing 500MB+ of images.
      // Image optimization runs normally during local builds.
      !isVercel && ViteImageOptimizer({
        exclude: /\.(avif|AVIF)$/,
        png: { quality: 80 },
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
        webp: { lossless: true },
        avif: false,
        svg: {
          multipass: true,
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  cleanupNumericValues: false,
                },
              },
            },
            'cleanupIds',
          ],
        },
      }),
    ].filter(Boolean),

    server: {
      proxy: {
        '/whitelabel-assets': {
          target: 'https://whitelabelfox.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/whitelabel-assets/, '')
        }
      }
    },

    build: {
      target: 'esnext',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        },
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('gsap') || id.includes('tsparticles')) return 'vendor-heavy';
              return 'vendor';
            }
          },
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        }
      },
      chunkSizeWarningLimit: 2000,
      cssCodeSplit: true,
      cssMinify: "esbuild",
      sourcemap: false,
      assetsInlineLimit: 1024,
    },

    esbuild: {
      drop: ['console', 'debugger'],
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src")
      }
    },

    optimizeDeps: {
      include: [
        "react-icons/fa",
        "react-icons/si",
        "react-icons/md",
        "lucide-react",
        "@radix-ui/react-tooltip",
        "@radix-ui/react-toast",
        "clsx",
        "tailwind-merge"
      ]
    }
  };
});