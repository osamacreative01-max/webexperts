import PageHero from "../components/PageHero";
import SiteFooter from "../components/SiteFooter";
import Cta from "../components/Cta";
import { ArrowUpRight } from "../components/Icons";
import { posts } from "../site";

export const metadata = {
  title: "Blog | Webexperts",
  description: "Practical articles on web design, SEO, e-commerce and digital marketing from the Webexperts team.",
};

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title={<>Practical notes on building a <em>stronger</em> online presence</>}
        lead="Design, development, SEO and marketing — written for business owners who want clear answers, not jargon."
      />

      <section className="white pad">
        <div className="wrap">
          <div className="post-grid">
            {posts.map((p) => (
              <article className="post" key={p.title}>
                <div className={`thumb ${p.tone}`} />
                <div className="body">
                  <p className="meta">{p.cat} · {p.date}</p>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="more">Read article <ArrowUpRight size={14} /></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Cta title={"Want this thinking applied to your website?"} text="Book a free 20-minute call and we will review your current site live." label="Book a free call" />
      <SiteFooter />
    </main>
  );
}
