import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import Cta from "../components/Cta";
import { Check } from "../components/Icons";
import { clients, process, stats, values } from "../site";

export const metadata = {
  title: "About us | Webexperts",
  description: "Webexperts is a Karachi-based full-service digital agency building brands and websites for businesses in 15+ countries.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Who we are"
        title={<>A digital partner that treats your <em>growth</em> as the brief.</>}
        lead="Webexperts is a full-service digital agency based in Karachi, Pakistan. Since day one we have helped businesses turn ideas into brands, websites and campaigns that actually bring customers."
      />

      <section className="white pad">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="navy">Creative thinking, engineering discipline</h2>
            <p className="muted" style={{ marginTop: 16 }}>
              We started with a simple belief: small and mid-size businesses deserve the same quality of design and
              development as big brands. Today our team of designers, developers and marketers works with clients across
              15+ countries - from local Karachi businesses to international startups.
            </p>
            <p className="muted" style={{ marginTop: 14 }}>
              Every project runs through the same process: understand the goal, design with intent, build for speed, then
              measure and improve. No templates thrown together at the last minute, no jargon, no surprise invoices.
            </p>
            <div className="features" style={{ marginTop: 24 }}>
              <div className="feature"><i><Check size={14} /></i>Strategy first, pixels second</div>
              <div className="feature"><i><Check size={14} /></i>Design &amp; development under one roof</div>
              <div className="feature"><i><Check size={14} /></i>Support long after launch</div>
            </div>
          </div>
          <div className="about-imgs">
            <div className="img big" style={{ backgroundImage: "url(/images/about-1.svg)" }} />
            <div className="img sm" style={{ backgroundImage: "url(/images/about-2.svg)" }} />
            <div className="img sm green" />
          </div>
        </div>
      </section>

      <section className="stats">
        {stats.map(([n, l]) => <div key={n}><b>{n}</b><span>{l}</span></div>)}
      </section>

      <section className="dark pad">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">What we value</p>
            <h2>Principles behind every <em>project</em></h2>
          </div>
          <div className="grid-2">
            {values.map((v) => (
              <div className="card" key={v.t}><h3>{v.t}</h3><p>{v.d}</p></div>
            ))}
          </div>

          <div className="sec-head mt">
            <p className="eyebrow">How we work</p>
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
          <div className="clients-head">
            <p className="eyebrow">Our clients</p>
            <h2>Brands We&apos;re Proud to Work With</h2>
            <p>We partner with ambitious businesses to create meaningful digital experiences and lasting success.</p>
          </div>
          <div className="clients-grid">
            {clients.map((c) => <div key={c} className="client"><span>{c}</span></div>)}
          </div>
        </div>
      </section>

      <Cta title={"Let's build something worth showing off"} text="Tell us about your project and we will come back with a plan, a timeline and a fixed quote." label="Start a conversation" />
      <SiteFooter />
    </main>
  );
}
