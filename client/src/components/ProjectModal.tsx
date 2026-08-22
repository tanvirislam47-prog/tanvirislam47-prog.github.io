/** Personal research portfolio style: a focused project dossier that only renders public, verified details. */
import { ArrowUpRight, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/projects";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [onClose]);

  const study = project.caseStudy;
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <div className="modal-topline"><span>PROJECT DOSSIER / {project.domain.toUpperCase()}</span><button onClick={onClose} aria-label="Close project details"><X size={20} /></button></div>
        <h2 id="project-modal-title">{project.name}</h2>
        <p className="modal-lede">{study?.overview || project.description}</p>
        {study ? <div className="modal-grid">
          {study.objective && <article><h3>Objective</h3><p>{study.objective}</p></article>}
          {study.approach && <article><h3>Approach</h3><p>{study.approach}</p></article>}
          {study.dataset && <article><h3>Dataset</h3><p>{study.dataset}</p></article>}
          {study.methodology && <article><h3>Methodology</h3><p>{study.methodology}</p></article>}
          {study.features && <article className="modal-wide"><h3>Verified project elements</h3><ul>{study.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></article>}
          {study.futureScope && <article className="modal-wide"><h3>Future scope</h3><p>{study.futureScope}</p></article>}
        </div> : <div className="modal-note"><h3>Repository details</h3><p>Additional case-study fields will appear here as they are documented and verified. The public repository remains the source of current project information.</p></div>}
        <div className="modal-tags">{(study?.technologies || project.technologies).map((technology) => <span key={technology}>{technology}</span>)}</div>
        <a className="button-primary" href={project.url} target="_blank" rel="noreferrer">Open GitHub repository <ArrowUpRight size={17} /></a>
      </section>
    </div>
  );
}
