/** Personal research portfolio style: a compact, sticky document index with clear state and minimal motion. */
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  ["Home", "home"], ["About", "about"], ["Research", "research"], ["Skills", "skills"], ["Projects", "projects"], ["Journey", "journey"], ["Education", "education"], ["Publications", "publications"], ["Achievements", "achievements"], ["Contact", "contact"],
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -68% 0px", threshold: [0.1, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <button className="brand-mark" onClick={() => navigate("home")} aria-label="Back to top">
          <img src="/manus-storage/tlr-signal-monogram_81d4202a.png" alt="" />
          <span className="hidden sm:block">{profile.name.split(" ").slice(-2).join(" ")} — Research Portfolio</span>
        </button>
        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map(([label, id]) => <button key={id} onClick={() => navigate(id)} className={active === id ? "is-active" : ""}>{label}</button>)}
        </nav>
        <button className="menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && <nav className="mobile-menu" aria-label="Mobile navigation">{navItems.map(([label, id]) => <button key={id} onClick={() => navigate(id)} className={active === id ? "is-active" : ""}>{label}</button>)}</nav>}
    </header>
  );
}
