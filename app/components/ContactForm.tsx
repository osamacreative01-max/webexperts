"use client";
import { useState } from "react";
import { Send } from "./Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); e.currentTarget.reset(); }}>
      <div className="two-in">
        <label className="field"><span>Your name</span><input name="name" type="text" placeholder="Ali Khan" required /></label>
        <label className="field"><span>Phone / WhatsApp</span><input name="phone" type="tel" placeholder="+92 300 0000000" /></label>
      </div>
      <div className="two-in">
        <label className="field"><span>Email</span><input name="email" type="email" placeholder="you@company.com" required /></label>
        <label className="field"><span>Service needed</span>
          <select name="service" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Web design &amp; development</option>
            <option>Logo &amp; graphic design</option>
            <option>E-commerce website</option>
            <option>Digital marketing</option>
            <option>SEO</option>
            <option>Web hosting</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label className="field"><span>Project details</span><textarea name="message" placeholder="Tell us about your business, goals and rough budget..." required /></label>
      <button className="btn" type="submit"><Send size={17} />Send message</button>
      {sent && <p className="form-ok">Thanks — your message has been received. We usually reply within one business day.</p>}
    </form>
  );
}
