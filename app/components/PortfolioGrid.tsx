"use client";
import { useState } from "react";
import { projectCats, projects } from "../site";

export default function PortfolioGrid() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.cat === cat);

  return (
    <>
      <div className="filters">
        {projectCats.map((c) => (
          <button key={c} className={c === cat ? "on" : ""} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="work-grid">
        {list.map((p) => (
          <article className={`work ${p.tone}`} key={p.title}>
            <span className="tag">{p.cat}</span>
            <div className="meta"><b>{p.title}</b><small>{p.note}</small></div>
          </article>
        ))}
      </div>
    </>
  );
}
