import Link from "next/link";

export default function Cta({ title, text, label = "Let's Talk About Your Project" }: { title: React.ReactNode; text?: string; label?: string }) {
  return (
    <section className="dark cta">
      <div className="wrap">
        <p className="eyebrow">Ready when you are</p>
        <h2>{title}</h2>
        {text ? <p className="lead">{text}</p> : null}
        <div className="center">
          <Link className="btn" href="/contact">{label}</Link>
        </div>
      </div>
    </section>
  );
}
