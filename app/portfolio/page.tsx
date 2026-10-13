import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import Cta from "../components/Cta";
import PortfolioGrid from "../components/PortfolioGrid";
import { stats } from "../site";

export const metadata = {
  title: "Portfolio | Webexperts",
  description: "Selected web design, e-commerce, branding and marketing projects delivered by Webexperts, Karachi.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our work"
        title={<>Projects we are <em>proud</em> to put our name on</>}
        lead="A selection of websites, online stores, brand identities and campaigns built for businesses in Pakistan and abroad."
      />

      <section className="white pad">
        <div className="wrap">
          <PortfolioGrid />
        </div>
      </section>

      <section className="stats">
        {stats.map(([n, l]) => <div key={n}><b>{n}</b><span>{l}</span></div>)}
      </section>

      <Cta title={"Want your project featured here next?"} text="Share your goals and we will show you similar work, a timeline and a fixed price." label="Discuss your project" />
      <SiteFooter />
    </main>
  );
}
