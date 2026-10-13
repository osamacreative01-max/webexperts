"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact, nav, ticker } from "../site";
import { ChevronDown, WhatsApp } from "./Icons";

export default function SiteNav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setStuck(y > 12);
      if (y < 80) { setHide(false); last = y; return; }
      if (y > last + 6) { setHide(true); last = y; }
      else if (y < last - 6) { setHide(false); last = y; }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${stuck ? " stuck" : ""}${hide && !open ? " nav-hide" : ""}`}>
      <Link href="/" onClick={() => setOpen(false)}>
        <Image src="/logo.svg" alt="Webexperts" width={130} height={36} priority />
      </Link>
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span /><span />
      </button>
      <nav className={open ? "open" : ""}>
        {nav.map((n) => {
          const active = path === n.href;
          if (n.href === "/services") {
            return (
              <div className="has-drop" key={n.href}>
                <Link href={n.href} className={active ? "on" : ""} onClick={() => setOpen(false)}>Services<ChevronDown size={13} /></Link>
                <div className="drop">
                  {ticker.map((s) => (
                    <Link key={s} href="/services" onClick={() => setOpen(false)}>{s}</Link>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <Link key={n.href} href={n.href} className={active ? "on" : ""} onClick={() => setOpen(false)}>{n.label}</Link>
          );
        })}
        <a className="chip" href={contact.whatsapp} aria-label="WhatsApp"><WhatsApp size={25} /></a>
        <Link className="btn btn-sm" href="/contact" onClick={() => setOpen(false)}>Get a quote</Link>
      </nav>
    </header>
  );
}
