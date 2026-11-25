import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Fingerprint,
  Github,
  GraduationCap,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  ScanSearch,
  ShieldCheck,
  X,
} from "lucide-react";
import gsap from "gsap";
import { certifications, experiences, navigation, projectFilters, projects, toolGroups } from "./data/portfolio.js";
import SectionLabel from "./components/SectionLabel.jsx";
import ExternalLinkIcon from "./components/ExternalLinkIcon.jsx";



function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path
        className="brand-mark-body"
        d="M8.5 53.5 24.9 10.5h14.2l16.4 43H43.7L32 23.2 20.3 53.5H8.5Z"
      />
      <path className="brand-mark-crossbar" d="M22.8 38.5h18.4l3 8H19.8l3-8Z" />
      <path className="brand-mark-accent" d="m38.5 10.5 10.4 0-7.3 8.1-3.1-8.1Z" />
    </svg>
  );
}

function BrandIdentity({ footer = false, onClick }) {
  return (
    <a className={`brand brand-identity${footer ? " brand-footer" : ""}`} href="#home" onClick={onClick} aria-label="ALPH4_X3 home">
      <span className="brand-symbol"><BrandMark /></span>
      <span className="brand-name"><span className="brand-name-main">ALPH4_X3</span></span>
    </a>
  );
}

const MR_ROBOT_GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#$%&@";

function ScrambledText({ text, enabled = true, className = "" }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!enabled || reduceMotion) {
      setDisplay(text);
      return undefined;
    }

    const characters = Array.from(text);
    const duration = 820;
    let frame = 0;
    let start = 0;
    let lastPaint = 0;

    const animate = (time) => {
      if (!start) start = time;
      if (time - lastPaint >= 34 || time - start >= duration) {
        lastPaint = time;
        const progress = Math.min((time - start) / duration, 1);
        const resolved = Math.floor(progress * characters.length);
        const next = characters.map((character, index) => {
          if (/\s/.test(character) || index < resolved || progress >= 1) return character;
          return MR_ROBOT_GLYPHS[Math.floor(Math.random() * MR_ROBOT_GLYPHS.length)];
        }).join("");
        setDisplay(next);
      }
      if (time - start < duration) frame = window.requestAnimationFrame(animate);
      else setDisplay(text);
    };

    frame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frame);
  }, [text, enabled]);

  return <span className={`mr-robot-text ${className}`.trim()} aria-hidden="true">{display}</span>;
}

function MrRobotHeading({ first, second, className = "" }) {
  const headingRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return undefined;
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { threshold: 0.32 });
    observer.observe(heading);
    return () => observer.disconnect();
  }, []);

  return (
    <h2 ref={headingRef} className={`mr-robot-heading ${className}`.trim()} aria-label={`${first} ${second}`}>
      <ScrambledText text={first} enabled={active} />
      <br />
      <em><ScrambledText text={second} enabled={active} /></em>
    </h2>
  );
}

function HeroIdentity() {
  const [aliasMode, setAliasMode] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;
    const interval = window.setInterval(() => setAliasMode((current) => !current), 6000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className={`hero-title ${aliasMode ? "is-alias" : ""}`} aria-label={aliasMode ? "ALPH4_X3" : "Rithish Abinav A C"}>
        {aliasMode ? (
          <span className="hero-title-alias"><ScrambledText text="ALPH4_X3" /></span>
        ) : (
          <>
            <span className="hero-title-line"><ScrambledText text="RITHISH" /></span>
            <span className="hero-title-line hero-title-line-accent"><ScrambledText text="ABINAV" /> <i><ScrambledText text="A C." /></i></span>
          </>
        )}
      </h1>
      <div className={`hero-handle ${aliasMode ? "is-suppressed" : ""}`} aria-hidden={aliasMode}>
        <span>[</span> <b className="brand-alias-type">ALPH4_X3</b> <span>]</span>
      </div>
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [projectFilter, setProjectFilter] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState(() => new Set());
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [copied, setCopied] = useState(false);
  const heroRef = useRef(null);
  const heroVideoRef = useRef(null);

  const visibleProjects = useMemo(
    () =>
      projectFilter === "All"
        ? projects
        : projects.filter((project) => project.category === projectFilter),
    [projectFilter],
  );

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      video.pause();
      return undefined;
    }

    const playWhenVisible = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !document.hidden) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    };

    if (!("IntersectionObserver" in window)) {
      video.play().catch(() => {});
      return () => video.pause();
    }

    const observer = new IntersectionObserver(playWhenVisible, { threshold: 0.12 });
    observer.observe(video);
    const onVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        const bounds = video.getBoundingClientRect();
        if (bounds.bottom > 0 && bounds.top < window.innerHeight) video.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      video.pause();
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hero = heroRef.current;

    if (!reduceMotion && hero) {
      const context = gsap.context(() => {
        gsap.fromTo(
          ".hero-eyebrow, .hero-title-line, .hero-summary, .hero-actions, .hero-proof",
          { autoAlpha: 0, y: 26 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.11,
            ease: "power3.out",
            delay: 0.18,
          },
        );
        gsap.fromTo(
          ".hero-portrait",
          { autoAlpha: 0, y: 22, scale: 0.985 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1.1, ease: "power3.out", delay: 0.3 },
        );
      }, hero);
      return () => context.revert();
    }
    return undefined;
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    if (!("IntersectionObserver" in window)) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActiveSection(current.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rithish81abinav@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:rithish81abinav@gmail.com";
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="topbar">
        <BrandIdentity onClick={closeMenu} />

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav id="primary-navigation" className={`nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navigation.map(([id, label]) => (
            <a
              key={id}
              className={activeSection === id ? "is-active" : ""}
              href={`#${id}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="topbar-contact" href="mailto:rithish81abinav@gmail.com">
          <span className="availability-dot" />
          <span>GET IN TOUCH</span>
          <ExternalLinkIcon />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="home" ref={heroRef}>
          <video ref={heroVideoRef} className="hero-video" muted loop playsInline autoPlay preload="metadata" poster="/assets/hero-background-poster.webp" aria-hidden="true">
            <source src="/assets/hero-background.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-shade" />
          <div className="hero-grid-lines" aria-hidden="true" />
          <div className="hero-shell page-shell">
            <div className="hero-content">
              <div className="hero-eyebrow mono-label">
                <span className="eyebrow-rule" />
                OFFENSIVE SECURITY <span>/</span> AUTONOMOUS SYSTEMS <span>/</span> WEB SECURITY
              </div>
              <p className="hero-pretitle">SECURITY ENGINEER & TOOL BUILDER</p>
              <HeroIdentity />
              <p className="hero-summary">
                I research how web applications break, build tools that automate the process, and document what I learn. My work sits across offensive security, adaptive vulnerability discovery, and AI-agent security testing.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  EXPLORE THE WORK <ArrowUpRight size={18} />
                </a>
                <a className="button button-secondary" href="mailto:rithish81abinav@gmail.com">
                  START A CONVERSATION <ArrowUpRight size={18} />
                </a>
              </div>
              <div className="hero-proof">
                <span><i /> WEB APPLICATION SECURITY</span>
                <span><i /> SECURITY AUTOMATION</span>
                <span><i /> AI / LLM SECURITY</span>
              </div>
            </div>

            <div className="hero-visual" role="group" aria-label="Portrait and identity">
              <div className="hero-portrait">
                <div className="portrait-orbit portrait-orbit-one" aria-hidden="true" />
                <div className="portrait-orbit portrait-orbit-two" aria-hidden="true" />
                <div className="portrait-frame-corner portrait-frame-corner-top" aria-hidden="true" />
                <div className="portrait-frame-corner portrait-frame-corner-bottom" aria-hidden="true" />
                <div className="portrait-image-wrap">
                  <img src="/assets/profile.webp" alt="Portrait of Rithish Abinav A C" fetchPriority="high" />
                </div>
                <div className="portrait-crosshair crosshair-top" aria-hidden="true" />
                <div className="portrait-crosshair crosshair-bottom" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="hero-bottom page-shell">
            <span>INDEPENDENT RESEARCH / OPEN-SOURCE ENGINEERING</span>
            <a href="#about">SCROLL TO EXPLORE <ArrowDownRight size={16} /></a>
          </div>
        </section>

        <section className="about section-block" id="about">
          <div className="page-shell">
            <SectionLabel>THE PERSON BEHIND THE WORK</SectionLabel>
            <div className="about-layout">
              <div className="about-aside" data-reveal>
                <div className="aside-stamp">
                  <Fingerprint size={28} strokeWidth={1.3} />
                  <span>IDENTITY / CORE PROFILE</span>
                </div>
                <div className="aside-quote">
                  <span className="quote-mark">“</span>
                  <p>Understand the behavior. Validate the weakness. Make the finding useful.</p>
                  <span className="quote-credit">— RESEARCH PRINCIPLE</span>
                </div>
              </div>

              <div className="about-copy" data-reveal>
                <p className="eyebrow">ABOUT / WHO I AM</p>
                <MrRobotHeading first="Curiosity with an" second="adversarial mindset." />
                <p className="about-lead">
                  I'm Rithish Abinav AC — an Offensive Security Engineer, open-source vulnerability-detection agent creator, and autonomous security tool builder focused on web security, adaptive offensive automation, and intelligent vulnerability discovery.
                </p>
                <p>
                  I build dynamically adaptive offensive security tools and contribute to open-source research focused on scalable vulnerability detection, attack-surface analysis, and real-world exploitation methodologies. I hold a B.E. in Cybersecurity from Mahendra Engineering College.
                </p>
                <p>
                  I contributed to Project Hellhound and Hellhound Pentest, working around offensive security engineering and adaptive testing workflows. The Hell-Hound Pentest framework is modular and rule-based: it coordinates application discovery, audit modules, evidence collection, and controlled verification rather than operating as an autonomous AI agent.
                </p>
                <div className="focus-grid">
                  <div className="focus-card"><ShieldCheck /><strong>WEB APPLICATION<br />SECURITY</strong></div>
                  <div className="focus-card"><Cpu /><strong>AI / LLM<br />SECURITY TESTING</strong></div>
                  <div className="focus-card"><ScanSearch /><strong>AUTONOMOUS<br />ASSESSMENT</strong></div>
                </div>
              </div>
            </div>

            <div className="method-strip" data-reveal>
              <div className="method-intro">
                <span className="eyebrow">HOW I APPROACH THE WORK</span>
                <p>Security findings matter when they are understood, verified, and communicated.</p>
              </div>
              <div className="method-step"><strong>MAP</strong><p>Understand the application and its attack surface.</p></div>
              <div className="method-step"><strong>VALIDATE</strong><p>Test behavior and verify whether a weakness is real.</p></div>
              <div className="method-step"><strong>DOCUMENT</strong><p>Record evidence and make the result actionable.</p></div>
            </div>
          </div>
        </section>

        <section className="experience section-block" id="experience">
          <div className="page-shell">
            <SectionLabel>FIELD EXPERIENCE</SectionLabel>
            <div className="section-heading-row" data-reveal>
              <div>
                <p className="eyebrow">PROFESSIONAL DEVELOPMENT</p>
                <MrRobotHeading first="Where I've" second="put in the work." />
              </div>
              <p className="section-intro">
                Internships, platform engineering, and practical exposure across offensive security, digital forensics, hardware security, and cybercrime investigation.
              </p>
            </div>

            <div className="experience-list">
              {experiences.map((experience, index) => {
                const isOpen = expandedExperience === experience.role;
                const panelId = `experience-panel-${index}`;
                return (
                  <article className={`experience-item ${isOpen ? "is-expanded" : ""}`} key={`${experience.company}-${experience.role}`} data-reveal>
                    <div className="experience-main">
                      <div className="experience-topline">
                        <span className="experience-company">{experience.company}</span>
                        <span className="experience-date">{experience.date}</span>
                      </div>
                      <div className="experience-role-heading">
                        <h3>{experience.role}</h3>
                        {experience.credentialTarget && (
                          <a
                            className="experience-credential-link"
                            href={experience.credentialTarget}
                            aria-label="Navigate to credentials and training"
                            title="View credentials and training"
                          >
                            <ArrowUpRight size={17} />
                          </a>
                        )}
                      </div>
                      <p className="experience-summary">{experience.summary}</p>
                      <div className="experience-more-wrap">
                        <button
                          className="text-action"
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setExpandedExperience(isOpen ? null : experience.role)}
                        >
                          {isOpen ? "CLOSE DETAILS" : "VIEW ROLE DETAILS"}
                          <ChevronDown className={isOpen ? "rotate" : ""} size={17} />
                        </button>
                        <span className="experience-location">{experience.location}</span>
                      </div>
                      {isOpen && (
                        <div className="experience-details" id={panelId}>
                          <p>{experience.detail}</p>
                          <div className="experience-highlights">
                            <span className="eyebrow">SCOPE & CONTRIBUTIONS</span>
                            <ul>{experience.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="projects section-block" id="projects">
          <div className="page-shell">
            <SectionLabel>SELECTED BUILDS & RESEARCH</SectionLabel>
            <div className="section-heading-row" data-reveal>
              <div>
                <p className="eyebrow">TOOLS / AGENTS / ENVIRONMENTS</p>
                <MrRobotHeading first="Built to" second="investigate." />
              </div>
              <p className="section-intro">
                A collection of independent tools and systems exploring specific security problems—from vulnerability-focused agents to enterprise-style attack simulation and practical applications.
              </p>
            </div>

            <div className="project-toolbar" data-reveal>
              <div className="filter-list" role="group" aria-label="Filter projects">
                {projectFilters.map((filter) => (
                  <button
                    type="button"
                    className={projectFilter === filter ? "filter-button is-selected" : "filter-button"}
                    key={filter}
                    onClick={() => setProjectFilter(filter)}
                    aria-pressed={projectFilter === filter}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <span className="project-count mono-label">PROJECT PORTFOLIO</span>
            </div>

            <div className="project-grid">
              {visibleProjects.map((project) => {
                const Icon = project.icon;
                const isOpen = expandedProjects.has(project.name);
                const projectId = project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
                return (
                  <article className={`project-card ${isOpen ? "is-expanded" : ""}`} key={project.name} data-project-name={project.name} data-reveal>
                    <div className="project-card-top">
                      <span className={`project-status ${project.status === "IN DEVELOPMENT" ? "status-progress" : project.status === "ARCHIVED" ? "status-archived" : ""}`}><i />{project.status}</span>
                    </div>
                    <div className="project-icon"><Icon size={27} strokeWidth={1.35} /></div>
                    <p className="project-category">{project.category.toUpperCase()} <span>—</span> {project.title}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="project-card-footer">
                      <button
                        className="text-action"
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`project-details-${projectId}`}
                        onClick={() => setExpandedProjects((current) => {
                          const next = new Set(current);
                          if (next.has(project.name)) next.delete(project.name);
                          else next.add(project.name);
                          return next;
                        })}
                      >
                        {isOpen ? "LESS INFORMATION" : "PROJECT DETAILS"}
                        <ChevronDown className={isOpen ? "rotate" : ""} size={17} />
                      </button>
                      {project.url ? (
                        <a className="icon-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.name} on GitHub`}>
                          <Github size={18} /><ExternalLink size={13} />
                        </a>
                      ) : (
                        <span className="source-unlisted">SOURCE NOT LISTED</span>
                      )}
                    </div>
                    {isOpen && (
                      <div className="project-detail-panel" id={`project-details-${projectId}`} role="region" aria-label={`${project.name} project details`}>
                        <span className="eyebrow">SOURCE & AVAILABILITY</span>
                        <p>{project.details || (project.url ? "Public source repository available for technical review." : "A public repository link is not currently listed for this project.")}</p>
                        {project.url ? (
                          <a href={project.url} target="_blank" rel="noopener noreferrer">OPEN REPOSITORY <ArrowUpRight size={15} /></a>
                        ) : null}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="hellhound section-block" id="hellhound">
          <div className="page-shell">
            <SectionLabel>PROJECT HELLHOUND ECOSYSTEM</SectionLabel>

            <div className="hellhound-heading" data-reveal>
              <div className="hellhound-heading-copy">
                <div className="hellhound-identity-row" aria-label="Project Hellhound identity">
                  <a className="hellhound-emblem-tile" href="https://projecthellhound.github.io/" target="_blank" rel="noopener noreferrer" aria-label="Open Project Hellhound website">
                    <img
                      src="https://projecthellhound.github.io/assets/logo.png"
                      alt="Project Hellhound wolf emblem"
                      className="hellhound-emblem-image"
                      loading="eager"
                      decoding="async"
                      onError={(event) => {
                        event.currentTarget.classList.add("is-unavailable");
                        event.currentTarget.parentElement.classList.add("has-fallback");
                      }}
                    />
                  </a>
                  <a className="hellhound-wordmark-tile" href="https://projecthellhound.github.io/" target="_blank" rel="noopener noreferrer">
                    <span className="hellhound-wordmark-overline">INDEPENDENT / OPEN-SOURCE COMMUNITY</span>
                    <strong className="hellhound-wordmark-title">
                      <span>PROJECT</span>
                      <span className="hellhound-wordmark-name">HELLHOUND</span>
                    </strong>
                    <span className="hellhound-wordmark-bottom"><i /> BUILD IN PUBLIC <i /> RESEARCH IN PRACTICE</span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
                <p className="eyebrow">OPEN-SOURCE SECURITY ENGINEERING</p>
                <MrRobotHeading first="One ecosystem." second="Specialized tools." />
              </div>
              <div className="hellhound-heading-aside">
                <div className="hellhound-aside-kicker"><span className="availability-dot" /> ORGANIZATION / PROJECT PROFILE</div>
                <p>
                  Project Hellhound began as an independent GitHub organization built to create useful tools around real research and practical ideas. It has grown into an open-source home for focused security projects, reconnaissance systems, automation, developer utilities, applications, and hands-on training environments.
                </p>
                <p className="hellhound-community-principle">
                  Each project has a defined purpose. We build it, validate it through practical use, document the work, and publish what can be shared.
                </p>
                <div className="hellhound-actions">
                  <a className="button button-primary" href="https://projecthellhound.github.io/" target="_blank" rel="noopener noreferrer">
                    PROJECT HELLHOUND WEBSITE <ArrowUpRight size={18} />
                  </a>
                </div>
                <div className="cofounder-card hellhound-cofounder">
                  <span className="cofounder-avatar">RA</span>
                  <div><strong>Rithish Abinav AC</strong><span>CO-FOUNDER / @ABINAV3AC</span></div>
                  <a className="cofounder-github-link" href="https://github.com/Abinav3ac" target="_blank" rel="noopener noreferrer" aria-label="Rithish Abinav AC GitHub profile"><Github size={18} /><span>GITHUB PROFILE</span><ExternalLink size={13} /></a>
                </div>
              </div>
            </div>

            <div className="hellhound-focus-strip" data-reveal>
              <div>
                <span className="eyebrow">OPEN SOURCE</span>
                <strong>Tools developed and published in the open</strong>
              </div>
              <div>
                <span className="eyebrow">COMMUNITY</span>
                <strong>A shared home for researchers and builders</strong>
              </div>
              <div>
                <span className="eyebrow">WIDER SCOPE</span>
                <strong>Security, developer utilities, applications and labs</strong>
              </div>
            </div>

            <div className="hellhound-engineering-note" data-reveal>
              <div className="engineering-note-index">HOW WE BUILD</div>
              <div className="engineering-note-copy">
                <span className="eyebrow">A PRACTICAL ENGINEERING MODEL</span>
                <p>Across the ecosystem, each build starts with a specific problem and a clear scope. The work moves through implementation, practical validation, and documentation—then into the open, where researchers and builders can inspect it, use it, and help improve what comes next.</p>
              </div>
              <div className="engineering-note-signoff"><span>BUILD</span><i /><span>VALIDATE</span><i /><span>PUBLISH</span></div>
            </div>
          </div>
        </section>

        <section className="credentials section-block" id="credentials">
          <div className="page-shell">
            <SectionLabel>TECHNICAL PROFILE & EDUCATION</SectionLabel>
            <div className="section-heading-row" data-reveal>
              <div>
                <p className="eyebrow">TOOLS / KNOWLEDGE / FORMATION</p>
                <MrRobotHeading first="Built on practice." second="Driven by research." />
              </div>
              <p className="section-intro">
                A practical foundation across web security, network analysis, controlled exploitation, digital forensics, and embedded systems.
              </p>
            </div>

            <div className="technical-layout">
              <div className="toolkit-panel" data-reveal>
                <div className="panel-heading"><span>TECHNICAL TOOLKIT</span><Code2 size={19} /></div>
                {toolGroups.map((group) => (
                  <div className="tool-group" key={group.label}>
                    <div><h3>{group.label}</h3><div className="tool-chips">{group.items.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
                  </div>
                ))}
              </div>

              <div className="education-panel" data-reveal>
                <div className="panel-heading"><span>EDUCATION</span><GraduationCap size={20} /></div>
                <div className="degree-card">
                  <span className="degree-label">UNDERGRADUATE / 2026</span>
                  <h3>B.E. Cybersecurity</h3>
                  <p>Mahendra Engineering College (MEC), Salem</p>
                  <div className="degree-score"><strong>7.50</strong><span>CGPA</span></div>
                </div>
                <div className="school-record">
                  <div><span>HIGHER SECONDARY / HSLC</span><strong>Vidyaa Vikas Matric Hr. Sec. School, Morpalayam</strong><small>Biology · 68%</small></div>
                  <div><span>SECONDARY / SSLC</span><strong>Vidyaa Vikas Matric Hr. Sec. School, Morpalayam</strong><small>58%</small></div>
                </div>
              </div>
            </div>

            <div className="certification-panel" id="certifications" data-reveal>
              <div className="panel-heading"><span>CERTIFICATIONS & TRAINING</span><Award size={20} /></div>
              <div className="certification-grid">
                {certifications.map((certification) => (
                  <a
                    className="certification-item"
                    key={`${certification.issuer}-${certification.name}`}
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${certification.name} certificate`}
                  >
                    <span className="certification-issuer">{certification.issuer}</span>
                    <strong>{certification.name}</strong>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-block" id="contact">
          <div className="page-shell">
            <SectionLabel>ESTABLISH A CONNECTION</SectionLabel>
            <div className="contact-content" data-reveal>
              <p className="eyebrow">PROFESSIONAL OPPORTUNITIES / COLLABORATION / RESEARCH</p>
              <MrRobotHeading first="Have something" second="worth investigating?" />
              <p className="contact-description">For security-focused discussions, professional opportunities, and open-source collaboration, start a conversation.</p>
              <div className="contact-actions">
                <a className="contact-email" href="mailto:rithish81abinav@gmail.com"><Mail size={20} /> RITHISH81ABINAV@GMAIL.COM <ArrowUpRight size={18} /></a>
                <button className="copy-email" type="button" onClick={copyEmail} aria-label="Copy email address">
                  {copied ? <Check size={17} /> : <Code2 size={17} />}{copied ? "COPIED" : "COPY EMAIL"}
                </button>
              </div>
              <div className="social-links">
                <a href="https://github.com/Abinav3ac" target="_blank" rel="noopener noreferrer"><Github size={19} /> GITHUB <ExternalLink size={13} /></a>
                <a href="https://www.linkedin.com/in/rithish06abinav/" target="_blank" rel="noopener noreferrer"><Linkedin size={19} /> LINKEDIN <ExternalLink size={13} /></a>
                <a href="https://tryhackme.com/p/ALPH4X3" target="_blank" rel="noopener noreferrer"><LockKeyhole size={19} /> TRYHACKME <ExternalLink size={13} /></a>
              </div>
              <a
                className="contact-cv-link"
                href="https://drive.google.com/uc?export=download&id=1HDrKNk2O7-ZSyijhVbJget7UhWlzDQ9n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={17} /> DOWNLOAD CV <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-shell footer-inner">
          <BrandIdentity footer />
          <div className="footer-signature" aria-label="Portfolio ownership and copyright">
            <span className="footer-signature-kicker">OFFENSIVE SECURITY / RESEARCH</span>
            <strong>RITHISH ABINAV A C</strong>
            <span className="footer-signature-meta"><b className="brand-alias-type">ALPH4_X3</b><i /> © 2026</span>
          </div>
          <a className="back-to-top" href="#home">BACK TO TOP <ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </div>
  );
}


export default App;
