/** Signal Ledger style: technical editorialism, asymmetrical reading rhythm, evidence before ornament. */
import { ArrowUpRight, ExternalLink, Github, Mail, MapPin, Network, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectSection } from "@/components/ProjectSection";
import { profile } from "@/data/profile";
import { researchInterests, currentlyExploring } from "@/data/research";
import { skillGroups } from "@/data/skills";
import { journey } from "@/data/timeline";
import { publications } from "@/data/publications";
import { achievements } from "@/data/achievements";

function PlaceholderLink({ label, icon: Icon }: { label: string; icon?: typeof Mail }) {
  return <button className="placeholder-link" onClick={() => undefined} title={`${label} link can be added in src/data/profile.ts`}><span>{Icon && <Icon size={16} />}{label}</span><small>To be added</small></button>;
}

export default function Home() {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  return (
    <div className="portfolio-shell">
      <Navbar />
      <aside className="identity-rail" aria-label="Portfolio identity">
        <div className="rail-mark"><img src="/manus-storage/tlr-signal-monogram_81d4202a.png" alt="TLR signal monogram" /></div>
        <div className="rail-name"><span>Md. Tanvir</span><strong>Islam Riyad</strong></div>
        <p className="rail-role">B.SC. ICE / BUP<br />RESEARCH-ORIENTED</p>
        <div className="rail-status"><i aria-hidden="true" /> <span>EXPLORING / ACTIVE</span></div>
        <div className="rail-rule" aria-hidden="true" />
        <a className="rail-github" href={profile.githubUrl} target="_blank" rel="noreferrer"><Github size={15} /><span>PUBLIC WORK</span><ArrowUpRight size={13} /></a>
      </aside>
      <main>
        <Hero />

        <section id="about" className="content-section about-section">
          <SectionHeading index="01" label="profile" title="A developing practice at the intersection of intelligent systems and security." intro="An academically grounded profile designed for research collaboration, technical discussion, and long-term documentation." align="split" />
          <div className="about-layout">
            <div className="about-statement"><p>I am pursuing a B.Sc. in Information and Communication Engineering at <strong>Bangladesh University of Professionals</strong>. My interests connect AI/ML, cybersecurity, network and IoT security, communication systems, and software development through the umbrella of <em>{profile.umbrella}</em>.</p><button className="text-link" onClick={() => setAboutExpanded((value) => !value)}>{aboutExpanded ? "Show concise profile" : "Read profile context"} <ArrowUpRight size={15} /></button>{aboutExpanded && <p className="about-reveal">This portfolio documents areas of exploration and public work without overstating credentials. It is structured to grow with future project documentation, publications, academic milestones, and research activity.</p>}</div>
            <dl className="credential-list"><div><dt>Programme</dt><dd>{profile.degree}</dd></div><div><dt>Institution</dt><dd>{profile.university}</dd></div><div><dt>Expected graduation</dt><dd>{profile.graduation}</dd></div><div><dt>Location</dt><dd>{profile.location}</dd></div></dl>
          </div>
        </section>

        <section id="research" className="content-section research-section">
          <SectionHeading index="02" label="research interests" title="Questions worth exploring." intro="Focused areas that connect present learning with a future research direction in secure intelligent networked systems." align="split" />
          <div className="research-layout"><div className="research-intro-panel"><div className="research-symbol"><Network size={28} /></div><p>Primary direction</p><h3>AI/ML + Cybersecurity</h3><span>Secondary: Network & IoT Security</span><span>Expansion: Intelligent & Quantum Communication</span></div><div className="research-card-grid">{researchInterests.map((interest, index) => { const Icon = interest.icon; return <article key={interest.title} className="research-card"><span>0{index + 1}</span><Icon size={20} /><h3>{interest.title}</h3><p>{interest.description}</p></article>; })}</div></div>
        </section>

        <section id="skills" className="content-section skills-section">
          <SectionHeading index="03" label="technical toolkit" title="Tools in active development." intro="A categorized toolkit used in coursework, practical experimentation, and public project work. No percentage claims, only clear scope." align="split" />
          <div className="skill-ledger">{skillGroups.map((group, index) => <article key={group.label} className="skill-group"><div className="skill-group-heading"><span>0{index + 1}</span><h3>{group.label}</h3></div><div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <ProjectSection />

        <section id="journey" className="content-section journey-section">
          <SectionHeading index="05" label="research journey" title="A timeline built for learning in public." intro="Directional milestones are intentionally marked as planned or expected. The structure can later accommodate research work, papers, internships, and awards." align="split" />
          <div className="timeline-list">{journey.map((item, index) => <article className="timeline-item" key={item.year}><div className="timeline-year"><span>{item.year}</span><i /></div><div className="timeline-content"><span className="status-label">{item.status}</span><h3>{item.title}</h3><p>{item.body}</p></div>{index === journey.length - 1 && <div className="timeline-terminal" aria-hidden="true" />}</article>)}</div>
        </section>

        <section id="education" className="content-section education-section">
          <SectionHeading index="06" label="education" title="Academic foundation." />
          <article className="education-card"><div className="education-icon"><ShieldCheck size={23} /></div><div><p className="section-kicker"><span>EDU</span>undergraduate study</p><h3>{profile.degree}</h3><p>{profile.university}</p></div><div className="education-date"><span>Expected</span><strong>{profile.graduation}</strong></div></article>
        </section>

        <section id="publications" className="content-section empty-section">
          <SectionHeading index="07" label="publications" title="Research work, when ready for release." />
          {publications.length ? <div className="publication-grid">{publications.map((publication) => <article key={publication.title}><span>{publication.area}</span><h3>{publication.title}</h3><p>{publication.authors}</p><small>{publication.venue} · {publication.year}</small></article>)}</div> : <div className="empty-state"><span>PUBLICATIONS / PENDING</span><p>Research publications and selected academic work will be added here as they become publicly available.</p></div>}
        </section>

        <section id="achievements" className="content-section empty-section">
          <SectionHeading index="08" label="achievements" title="A record reserved for verified milestones." />
          {achievements.length ? <div className="publication-grid">{achievements.map((achievement) => <article key={achievement.title}><span>{achievement.category}</span><h3>{achievement.title}</h3><p>{achievement.detail}</p><small>{achievement.date}</small></article>)}</div> : <div className="empty-state"><span>ACHIEVEMENTS / PENDING</span><p>Academic, research, and professional achievements will be added here.</p></div>}
        </section>

        <section id="exploring" className="content-section exploring-section">
          <div className="exploring-panel"><div><p className="section-kicker"><span>09</span>currently exploring</p><h2>Learning with a research horizon.</h2></div><div className="tag-list large-tags">{currentlyExploring.map((item) => <span key={item}>{item}</span>)}</div></div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="contact-grid"><div><p className="section-kicker"><span>10</span>contact</p><h2>Open to thoughtful technical conversations.</h2><p>Interested in research collaboration, technical projects, or academic opportunities? The public GitHub profile is the active point of contact while additional channels are added.</p></div><div className="contact-links"><a href={profile.githubUrl} target="_blank" rel="noreferrer"><span><Github size={17} /> GitHub</span><ArrowUpRight size={17} /></a><PlaceholderLink label="Email" icon={Mail} /><PlaceholderLink label="Google Scholar" icon={ExternalLink} /><PlaceholderLink label="ResearchGate" icon={ExternalLink} /><PlaceholderLink label="Facebook" icon={ExternalLink} /></div></div>
        </section>
      </main>
      <footer className="site-footer"><div><img src="/manus-storage/tlr-signal-monogram_81d4202a.png" alt="" /><span>{profile.name}</span></div><p>{profile.degree}<br />{profile.university}</p><p className="footer-location"><MapPin size={14} /> {profile.location}</p><p>© {new Date().getFullYear()}</p></footer>
    </div>
  );
}
