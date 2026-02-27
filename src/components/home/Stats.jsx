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
    <section className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Key Milestones
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            Our Growth in <span className="text-primary">Numbers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) =>
          <div
            key={s.label}
            className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            
              <div className="text-4xl lg:text-5xl font-extrabold text-primary mb-2">
                <Counter target={s.value} prefix={s.prefix} />
                {s.suffix}
              </div>
              <p className="text-white/70 font-medium">{s.label}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}