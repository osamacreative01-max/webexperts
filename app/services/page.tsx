import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import Cta from "../components/Cta";
import { process, serviceDetails, ticker } from "../site";

export const metadata = {
  title: "Services | Webexperts",
  description: "Web design, development, e-commerce, branding, digital marketing, SEO and hosting — everything your business needs online.",
};

const faqs: [string, string][] = [
  ["How much does a website cost?", "It depends on scope. A focused one-page site starts small, while a custom e-commerce build costs more. After a short discovery call you get a fixed quote before any work begins."],
  ["How long does a project take?", "Most brochure sites take 3 to 5 weeks. E-commerce and custom platforms usually take 6 to 10 weeks, depending on content readiness and number of revisions."],
  ["Do you work with clients outside Pakistan?", "Yes. We work with clients in 15+ countries and handle everything over call, email and shared project boards, with timings that fit your time zone."],
  ["Will I be able to update the site myself?", "Absolutely. We hand over a CMS or a simple admin panel, plus a short training session and documentation so your team can edit content confidently."],
  ["Do you offer hosting and maintenance?", "Yes. We offer SSD cloud hosting with free SSL, daily backups and 24/7 monitoring, plus optional monthly maintenance for updates, security and small changes."],
  ["Can you improve an existing website?", "Yes. We audit speed, SEO and conversion, then fix what matters most — you do not always need a full rebuild."],
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our services"
        title={<>Everything your business needs to grow <em>digitally</em></>}
        lead="Creative design, smart technology and powerful digital marketing — delivered by one team that stays accountable from first sketch to launch day."
      />

      <section className="white pad">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="navy">Services we deliver</h2>
            <p className="muted">Pick a single service or let us run the whole digital side of your business.</p>
          </div>
          <div className="grid-3">
            {serviceDetails.map((s) => (
              <article className="svc-card" key={s.title}>
                <div className={`top ${s.tone}`} />
                <div className="body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  <span className="link">{s.points.length} key deliverables</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark pad">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">Our process</p>
            <h2>Four steps from first call to <em>launch</em></h2>
          </div>
          <div className="steps">
            {process.map((p) => (
              <div className="step" key={p.n}><b>{p.n}</b><h3>{p.t}</h3><p>{p.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="white pad">
        <div className="wrap">
          <div className="sec-head">
            <h2 className="navy">Popular services</h2>
            <p className="muted">The work clients ask us for most often.</p>
          </div>
          <div className="svc-grid">
            {ticker.map((t) => (
              <div className="svc-row" key={t}><strong>{t}</strong><span>Karachi, Pakistan</span></div>
            ))}
          </div>

          <div className="sec-head mt">
            <h2 className="navy">Frequently asked questions</h2>
          </div>
          <div className="grid-2">
            {faqs.map(([q, a]) => (
              <div className="card" key={q}><h3 className="navy">{q}</h3><p>{a}</p></div>
            ))}
          </div>
        </div>
      </section>

      <Cta title={"Not sure which service you need?"} text="Describe your goal in a sentence or two — we will tell you exactly what it takes and what it costs." label="Get a free quote" />
      <SiteFooter />
    </main>
  );
}
