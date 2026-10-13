"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SEL = [
  ".hero-body > *",
  ".page-hero .wrap > *",
  ".sec-head",
  ".wrap > h2",
  ".svc-grid > *",
  ".stats > div",
  ".two-col > *",
  ".features > *",
  ".about-imgs > *",
  ".clients-head",
  ".clients-grid > *",
  ".tiles > *",
  ".grid-2 > *",
  ".grid-3 > *",
  ".steps > *",
  ".work-grid > *",
  ".post-grid > *",
  ".info-list > *",
  ".cta .wrap > *",
  ".foot-grid > *",
].join(",");

export default function ScrollReveal() {
  const path = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const vh = window.innerHeight;
    const seen = new Map<Element, number>();
    const els = Array.from(document.querySelectorAll<HTMLElement>(SEL)).filter((el) => {
      if (el.classList.contains("reveal") || el.classList.contains("is-in")) return false;
      if (el.getBoundingClientRect().top < vh * 0.92) return false;
      const i = seen.get(el.parentElement ?? el) ?? 0;
      seen.set(el.parentElement ?? el, i + 1);
      el.classList.add("reveal");
      if (i > 0) {
        const ms = Math.min(i, 6) * 70;
        el.style.transitionDelay = `${ms}ms`;
        el.dataset.rd = String(ms);
      }
      return true;
    });
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("is-in");
          io.unobserve(el);
          const rd = Number(el.dataset.rd ?? 0);
          window.setTimeout(() => { el.style.transitionDelay = ""; }, rd + 700);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  return null;
}
