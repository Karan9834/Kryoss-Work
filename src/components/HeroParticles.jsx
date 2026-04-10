import React, { useEffect, useState, useMemo, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const HeroParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesOptions = useMemo(() => ({
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 160,
                    links: {
                        opacity: 0.6,
                    },
                },
            },
        },
        particles: {
            color: {
                value: "#94a3b8",
            },
            links: {
                color: "#cbd5e1",
                distance: 160,
                enable: true,
                opacity: 0.45,
                width: 1,
                shadow: {
                    enable: true,
                    color: "#cbd5e1",
                    blur: 5,
                }
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 0.5,
                straight: false,
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 120,
            },
            opacity: {
                value: { min: 0.4, max: 0.8 },
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.4,
                    sync: false
                }
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 2.5 },
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 1,
                    sync: false
                }
            },
            shadow: {
                enable: true,
                color: "#94a3b8",
                blur: 5,
            }
        },
        detectRetina: true,
    }), []);

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            options={particlesOptions}
            className="absolute top-0 left-0 w-full h-full z-0"
        />
    );
};

export default memo(HeroParticles);
