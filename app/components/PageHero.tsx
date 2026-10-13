import SiteNav from "./SiteNav";
import HeroSlider from "../HeroSlider";

export default function PageHero({ eyebrow, title, lead }: { eyebrow?: string; title: React.ReactNode; lead?: string }) {
  return (
    <section className="page-hero">
      <SiteNav />
      <div className="wrap">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
      </div>
      <HeroSlider />
    </section>
  );
}
