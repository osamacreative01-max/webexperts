import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "../components/ContactForm";
import { Check, Clock, Mail, MapPin, Phone, WhatsApp } from "../components/Icons";
import { contact, features } from "../site";

export const metadata = {
  title: "Contact | Webexperts",
  description: "Get in touch with Webexperts, Karachi — free consultation, fixed quotes and replies within one business day.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact us"
        title={<>Let&apos;s talk about your <em>project</em></>}
        lead="Tell us what you are building. You will get a clear answer, an honest timeline and a fixed quote — usually within one business day."
      />

      <section className="dark pad">
        <div className="wrap contact-grid">
          <div>
            <div className="sec-head">
              <p className="eyebrow">Send a message</p>
              <h2>Free consultation, no <em>obligation</em></h2>
            </div>
            <ContactForm />
          </div>

          <aside>
            <div className="card">
              <h3>Reach us directly</h3>
              <div className="info-list">
                <div className="info"><i><Phone size={18} /></i><div><b>Call us</b><a href={contact.phoneHref1}>{contact.phone1}</a><br /><a href={contact.phoneHref2}>{contact.phone2}</a></div></div>
                <div className="info"><i><WhatsApp size={18} /></i><div><b>WhatsApp</b><a href={contact.whatsapp}>Chat with us</a></div></div>
                <div className="info"><i><Mail size={18} /></i><div><b>Email</b><a href={`mailto:${contact.email}`}>{contact.email}</a></div></div>
                <div className="info"><i><Clock size={18} /></i><div><b>Working hours</b><span>{contact.hours}</span></div></div>
                <div className="info"><i><MapPin size={18} /></i><div><b>Studio</b><span>{contact.address}</span></div></div>
              </div>
            </div>

            <div className="features" style={{ marginTop: 26 }}>
              {features.map((f) => <div key={f} className="feature"><i><Check size={14} /></i>{f}</div>)}
            </div>

            <div className="map">Karachi, Pakistan<br />Serving clients in 15+ countries</div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
