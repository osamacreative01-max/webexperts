"use client";
import { useEffect, useState } from "react";

const slides = [
  { title: "Web design & development", text: "Custom, responsive sites that load fast on every device.", img: "/images/slide-1.svg", bg: "#16224a" },
  { title: "Logo & graphic design", text: "Identity that sticks, one look everywhere.", img: "/images/slide-2.svg", bg: "#1a6a72" },
  { title: "E-commerce stores", text: "Online stores that sell 24/7.", img: "/images/slide-3.svg", bg: "#0aa37f" },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <div className="hero-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel" aria-label="Our services">
      {slides.map((s, n) => (
        <div key={s.title} className={`slide ${n === i ? "on" : ""}`} aria-hidden={n !== i}
          style={{ backgroundColor: s.bg, backgroundImage: `linear-gradient(to top, rgba(15,26,56,.85), rgba(15,26,56,.1)), url(${s.img})` }}>
          <div className="slide-text"><h3>{s.title}</h3><p>{s.text}</p></div>
        </div>
      ))}
      <div className="dots">
        {slides.map((s, n) => (
          <button key={s.title} className={n === i ? "on" : ""} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`} />
        ))}
      </div>
    </div>
  );
}
