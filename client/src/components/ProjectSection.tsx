/** Signal Ledger style: project work is presented as evidence, with disciplined metadata and progressive disclosure. */
import { ArrowUpRight, ChevronDown, Github, LoaderCircle, Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { featuredProjects, inferProjectCategory, type Project, type ProjectCategory } from "@/data/projects";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectModal } from "@/components/ProjectModal";

const categories: (ProjectCategory | "All")[] = ["All", "AI/ML", "Cybersecurity", "IoT", "Communication", "Software", "Other"];

type GithubRepo = { name: string; description: string | null; html_url: string; homepage: string | null; language: string | null; topics?: string[]; updated_at: string; stargazers_count: number; forks_count: number; };

function toProject(repo: GithubRepo): Project {
  const initial = { name: repo.name, description: repo.description || "No public description provided.", topics: repo.topics || [] };
  return { ...initial, repo: repo.name, domain: inferProjectCategory(initial), technologies: [...(repo.language ? [repo.language] : []), ...(repo.topics || []).slice(0, 3)], url: repo.html_url, homepage: repo.homepage, language: repo.language, updatedAt: repo.updated_at, stars: repo.stargazers_count, forks: repo.forks_count };
}

function ProjectCard({ project, index, onDetails }: { project: Project; index: number; onDetails: (project: Project) => void }) {
  return <article className="project-card">
    <div className="project-card-top"><span>0{index + 1}</span><span className="domain-badge">{project.domain}</span></div>
    <h3>{project.name}</h3>
    <p>{project.description}</p>
    <div className="tag-list">{project.technologies.filter(Boolean).slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}</div>
    <div className="project-actions"><a href={project.url} target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><button onClick={() => onDetails(project)}>Details <ArrowUpRight size={15} /></button></div>
  </article>;
}

export function ProjectSection() {
  const [allProjects, setAllProjects] = useState<Project[]>(featuredProjects);
  const [state, setState] = useState<"loading" | "ready" | "fallback">("loading");
  const [expanded, setExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${profile.githubUsername}/repos?per_page=100&sort=updated`, { signal: controller.signal, headers: { Accept: "application/vnd.github+json" } })
      .then((response) => { if (!response.ok) throw new Error("GitHub API unavailable"); return response.json() as Promise<GithubRepo[]>; })
      .then((repos) => { const projects = repos.filter((repo) => !repo.name.includes("tanvirislam47-prog")).map(toProject); if (!projects.length) throw new Error("No public repositories"); setAllProjects(projects); setState("ready"); })
      .catch(() => { if (!controller.signal.aborted) { setAllProjects(featuredProjects); setState("fallback"); } });
    return () => controller.abort();
  }, []);

  const filtered = useMemo(() => allProjects.filter((project) => {
    const searchable = `${project.name} ${project.description} ${project.technologies.join(" ")} ${project.domain}`.toLowerCase();
    return (category === "All" || project.domain === category) && searchable.includes(query.toLowerCase());
  }), [allProjects, category, query]);

  return <section id="projects" className="content-section project-section">
    <SectionHeading index="04" label="selected work" title="Projects that make ideas tangible." intro="A research-oriented view of public project work. Details are shown only where public documentation verifies them." align="split" />
    <div className="featured-project-grid">{featuredProjects.map((project, index) => <ProjectCard key={project.repo} project={project} index={index} onDetails={setSelected} />)}</div>
    <div className="project-ledger">
      <div className="ledger-heading"><div><p className="section-kicker"><span>04A</span>public repository index</p><h3>All project work</h3></div><button className="ledger-toggle" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>{expanded ? "Close index" : "View all projects"}<ChevronDown size={18} className={expanded ? "rotate-180" : ""} /></button></div>
      {expanded && <div className="all-projects-panel">
        <div className="repository-status">{state === "loading" ? <><LoaderCircle size={14} className="animate-spin" /> Refreshing public repository data</> : state === "ready" ? <><span className="status-dot" /> Live public GitHub data</> : <><span className="status-dot is-muted" /> Showing documented fallback projects; live data could not be reached</>}</div>
        <div className="project-controls"><label className="search-field"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search repositories" aria-label="Search repositories" /></label><div className="filter-list" aria-label="Filter projects"><SlidersHorizontal size={16} />{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={category === item ? "is-selected" : ""}>{item}</button>)}</div></div>
        <div className="all-project-list">{filtered.length ? filtered.map((project) => <article key={project.repo} className="repo-row"><div><span className="domain-badge">{project.domain}</span><h4>{project.name}</h4><p>{project.description}</p>{project.updatedAt && <small>Updated {new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(new Date(project.updatedAt))}</small>}</div><div className="repo-row-actions"><a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><Github size={18} /></a><button onClick={() => setSelected(project)}>Details <ArrowUpRight size={15} /></button></div></article>) : <div className="empty-search">No public repositories match this search or category.</div>}</div>
      </div>}
    </div>
    {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
  </section>;
}
