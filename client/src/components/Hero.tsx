/** Personal research portfolio style: asymmetric document-and-margin hero with measured technical atmosphere and evidence-first copy. */
import { ArrowDownRight, Download, Github, LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { ProfileImage } from "@/components/ProfileImage";

export function Hero() {
  const [cvState, setCvState] = useState<"checking" | "available" | "missing">("checking");
  useEffect(() => {
    fetch(profile.cvPath, { method: "HEAD" }).then((response) => setCvState(response.ok ? "available" : "missing")).catch(() => setCvState("missing"));
  }, []);

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-art" aria-hidden="true" />
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="section-kicker"><span>00</span>{profile.eyebrow}</p>
          <h1 id="hero-title">AI/ML, <em>Cybersecurity</em> &amp; Intelligent Communication</h1>
          <p className="hero-subheading">B.Sc. in Information and Communication Engineering at Bangladesh University of Professionals</p>
          <p className="hero-bio">I am a B.Sc. student in Information and Communication Engineering at Bangladesh University of Professionals, exploring research-driven applications of AI/ML, cybersecurity, intelligent networks, IoT security, and emerging communication systems.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#research">Explore research <ArrowDownRight size={17} /></a>
            {cvState === "available" ? <a className="button-secondary" href={profile.cvPath} download><Download size={16} /> Download CV</a> : <button className="button-secondary is-disabled" disabled>{cvState === "checking" ? <LoaderCircle className="animate-spin" size={16} /> : <Download size={16} />} {cvState === "checking" ? "Checking CV" : "CV to be added"}</button>}
          </div>
          <div className="hero-metadata" aria-label="Profile metadata">
            <div><span>Based in</span><strong>{profile.location}</strong></div>
            <div><span>Study</span><strong>ICE · BUP</strong></div>
            <div><span>Focus</span><strong>AI/ML · Security · Communication</strong></div>
          </div>
        </div>
        <aside className="hero-profile-card">
          <ProfileImage className="hero-profile-image" />
          <div className="profile-caption"><span>ICE / BUP</span><strong>Emerging researcher in communication systems</strong></div>
          <a className="profile-github" href={profile.githubUrl} target="_blank" rel="noreferrer"><Github size={15} /> github.com/{profile.githubUsername}</a>
        </aside>
      </div>
      <div className="hero-index" aria-hidden="true"><span>SCROLL TO EXPLORE</span><i /></div>
    </section>
  );
}
