import { useEffect, useRef, useState } from "react";

const stats = [
{ value: 8, suffix: "+", label: "Industry Expertise", prefix: "0" },
{ value: 250, suffix: "+", label: "Projects Delivered", prefix: "" },
{ value: 40, suffix: "+", label: "Skilled Developers", prefix: "" },
{ value: 70, suffix: "+", label: "Countries Served", prefix: "" }];


function Counter({ target, prefix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
    </span>);

}

export default function Stats() {
  return (
    <section className="py-24 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Key Milestones
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
            Our Growth in <span className="text-primary italic">Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) =>
          <div
            key={s.label}
            className="text-center p-10 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 group">
            
              <div className="text-4xl lg:text-5xl font-semibold text-primary mb-3">
                <Counter target={s.value} prefix={s.prefix} />
                {s.suffix}
              </div>
              <p className="text-sm font-medium text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">{s.label}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}