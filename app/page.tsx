import Link from "next/link";
import HeroSlider from "./HeroSlider";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import { ArrowUpRight, Check } from "./components/Icons";
import { clients, services, stats, ticker, tiles, features } from "./site";

function Arrow() { return <span className="arrow" aria-hidden><ArrowUpRight size={13} /></span>; }

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <SiteNav />
        <div className="hero-body">
          <p className="eyebrow">Karachi - working with clients worldwide</p>
          <h1>Websites that connect your <em>brand</em> to customers.</h1>
          <p className="lead">Karachi-based designers and developers building fast, mobile-ready websites for businesses in 15+ countries. From powerful brand identities to high-performing websites, we help businesses turn ideas into meaningful digital experiences.</p>
          <div className="row">
            <Link className="btn" href="/contact">Let&apos;s Talk About Your Project <Arrow /></Link>
            <Link className="btn btn-ghost" href="/portfolio">Explore Our Work</Link>
          </div>
        </div>
        <HeroSlider />
      </section>

      {/* TICKER */}
      <section className="ticker-sec">
        <div className="ticker"><div className="ticker-track">
          {[0, 1].map((g) => (
            <div className="ticker-group" key={g} aria-hidden={g === 1}>
              {ticker.map((t) => <span key={t}>{t}</span>)}
            </div>
          ))}
        </div></div>
      </section>

      {/* EVERYTHING ONLINE */}
      <section className="white curve">
        <div className="wrap">
          <h2 className="navy">Everything your business needs online</h2>
          <p className="muted">From the first logo sketch to a live, searchable Store.</p>
          <div className="svc-grid">
            {services.map(([a, b]) => (
              <div key={a} className="svc-row"><strong>{a}</strong><span>{b}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        {stats.map(([n, l]) => <div key={n}><b>{n}</b><span>{l}</span></div>)}
      </section>

      {/* ABOUT */}
      <section className="dark about">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">Who we are ?</p>
            <h2>Your Trusted Digital Partner for <em>Business Growth</em></h2>
            <p className="lead">Webexperts is a full-service digital agency based in Pakistan, helping businesses build a powerful online presence and achieve their digital goals. From creative graphic design and professional website development to e-commerce solutions, digital marketing, SEO, and reliable web hosting, we provide everything your business needs to grow in the digital world. Our team combines creativity, technology, and strategic thinking to deliver tailored solutions that strengthen your brand, connect you with your audience, and turn ideas into measurable results.</p>
            <div className="features">{features.map((f) => <div key={f} className="feature"><i><Check size={14} /></i>{f}</div>)}</div>
          </div>
          <div className="about-imgs">
            <div className="img big" style={{ backgroundImage: "url(/images/about-1.svg)" }} />
            <div className="img sm" style={{ backgroundImage: "url(/images/about-2.svg)" }} />
            <div className="img sm green" />
          </div>
        </div>
        <div className="center"><Link className="btn btn-sm" href="/about">Learn More About Us <Arrow /></Link></div>
      </section>

      {/* CLIENTS */}
      <section className="white">
        <div className="wrap">
          <div className="clients-head">
            <p className="eyebrow">Our clients</p>
            <h2>Brands We&apos;re Proud to Work With</h2>
            <p>We partner with ambitious businesses to create meaningful digital experiences and lasting success.</p>
          </div>
          <div className="clients-grid">
            {clients.map((c) => (
              <div key={c} className="client"><span>{c}</span></div>
            ))}
          </div>
          <div className="center"><Link className="btn btn-sm" href="/about">Learn More Our Clients</Link></div>
        </div>
      </section>

      {/* SERVICES TILES */}
      <section className="dark tiles-sec">
        <div className="wrap">
          <p className="eyebrow">Our services</p>
          <h2>Everything Your Business Needs to Grow <em>Digitally</em></h2>
          <p className="lead">Creative Design. Smart Technology. Powerful Digital Marketing</p>
          <div className="tiles">
            {tiles.map(([t, c]) => <Link key={t} href="/services" className={`tile ${c}`}>{t}<Arrow /></Link>)}
          </div>
          <div className="center"><Link className="btn btn-sm" href="/services">Learn More Our Services</Link></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
