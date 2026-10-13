"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { contact, nav, ticker } from "../site";
import { Facebook, Instagram, LinkedIn, Pinterest, Send, XIcon } from "./Icons";

export default function SiteFooter() {
  const [done, setDone] = useState(false);

  return (
    <footer id="contact" className="dark footer">
      <div className="wrap foot-grid">
        <div>
          <Image src="/logo.svg" alt="Webexperts" width={150} height={42} />
          <h4>Get in <em>Touch</em></h4>
          <a className="phone" href={contact.phoneHref1}>{contact.phone1}</a>
          <a className="phone" href={contact.phoneHref2}>{contact.phone2}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <h4>Find us on social Media</h4>
          <div className="socials">
            <a href="#" aria-label="Facebook"><Facebook size={15} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={15} /></a>
            <a href="#" aria-label="LinkedIn"><LinkedIn size={15} /></a>
            <a href="#" aria-label="X"><XIcon size={14} /></a>
            <a href="#" aria-label="Pinterest"><Pinterest size={15} /></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          {nav.map((l) => <Link key={l.href} href={l.href}>- {l.label}</Link>)}
        </div>
        <div>
          <h4>Our Services</h4>
          {ticker.slice(0, 5).map((l) => <Link key={l} href="/services">{l}</Link>)}
        </div>
        <div>
          <h4>Sign up for our <em>Newsletter</em></h4>
          <form className="news" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
            <input type="email" placeholder="Enter your Email" aria-label="Email" required />
            <button type="submit" aria-label="Subscribe"><Send size={17} /></button>
          </form>
          {done && <p className="news-ok">Thanks — you are subscribed.</p>}
        </div>
      </div>
      <div className="copy"><span>© 2026 Webexperts. Karachi, Pakistan.</span><span>webexperts.com.pk</span></div>
    </footer>
  );
}
