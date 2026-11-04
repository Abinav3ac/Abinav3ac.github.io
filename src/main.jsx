import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Shield, Terminal, Cpu, Code2, Network, ExternalLink, ChevronRight } from "lucide-react";
import gsap from "gsap";
import "./styles.css";

const projects = [
  { name: "HELLCORP", type: "Enterprise Vulnerability Lab", status: "PROJECT", desc: "A realistic enterprise attack-simulation environment for practicing advanced web exploitation, business-logic abuse, infrastructure pivoting, and multi-stage vulnerability chaining.", tags: ["Enterprise simulation", "Web security", "Attack paths"], url: "https://github.com/Abinav3ac/Hell-Corp", kind: "Independent" },
  { name: "AGENT389", type: "LDAP Injection Agent", status: "PROJECT", desc: "A multi-phase autonomous LDAP injection framework for reconnaissance, adaptive payload mutation, behavioral verification, and vulnerability handoff.", tags: ["LDAP security", "Autonomous testing", "Python"], url: "https://github.com/project-hellhound-org/Agent389", kind: "Independent" },
  { name: "CROSSFORGE", type: "CSRF Detection Agent", status: "IN DEVELOPMENT", desc: "An adaptive CSRF detection concept focused on cross-origin scenarios, token validation, state-change analysis, and multi-session verification.", tags: ["CSRF", "Detection", "In development"], url: "", kind: "Independent" },
  { name: "GATEFORGE", type: "SSRF Detection Agent", status: "PROJECT", desc: "An SSRF reconnaissance and validation framework focused on unsafe server-side requests, internal network exposure, cloud metadata access, and blind outbound interactions.", tags: ["SSRF", "Reconnaissance", "Validation"], url: "https://github.com/project-hellhound-org/GateForge", kind: "Independent" }
];
const arsenal = [
  ["SPECTRE", "Hellhound arsenal", "ACTIVE"],
  ["WAF BUSTER", "Hellhound arsenal", "ACTIVE"],
  ["SURFACE AUDITOR", "Hellhound arsenal", "ACTIVE"],
  ["TRANSPORT AUDITOR", "Hellhound arsenal", "ACTIVE"],
  ["FUZZ-HUNTER", "Hellhound arsenal", "ACTIVE"],
  ["TECH-PROFILE", "Hellhound arsenal", "ACTIVE"]
];
const experience = [
  ["CYARTVAPT", "Security Engagement", "DEC 2025 — AUG 2026", "Completed an engagement with CyArtVAPT. This entry is kept intentionally concise until the exact role, responsibilities, and deliverables are confirmed."],
  ["CYBER SECURED INDIA", "Hardware Hacking Intern", "SEP 2025 — NOV 2025", "Internship focused on hardware hacking. The experience is listed here as a distinct engagement from the cybersecurity and digital forensics internship."],
  ["CYBER SECURED INDIA", "Cybersecurity & Digital Forensics Intern", "APR 2025 — JUN 2025", "Internship covering cybersecurity and digital forensics. Specific tools, casework, and deliverables can be added once the exact work completed is confirmed."],
  ["PONDICHERRY CYBER CRIME DEPARTMENT", "Internship", "JAN 2025", "Internship experience with the Pondicherry Cyber Crime Department. Further detail can be added after confirming the responsibilities and activities undertaken."]
];
const certifications = ["Hands-On Penetration Testing", "Cybersecurity Educator Professional (CCEP)", "Cisco Ethical Hacking", "EC-Council — Digital Forensics", "EC-Council — Network Defense"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [identity, setIdentity] = useState("RITHISH ABINAV A C");
  const [identityGlitch, setIdentityGlitch] = useState(false);
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const identities = ["RITHISH ABINAV A C", "ALPH4_X3"];
    let current = 0;
    let glitchTimer;
    const cycle = window.setInterval(() => {
      setIdentityGlitch(true);
      const target = identities[(current + 1) % identities.length];
      const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#$%";
      let frame = 0;
      const scramble = window.setInterval(() => {
        frame += 1;
        setIdentity(target.split("").map((char, index) => {
          if (char === " ") return " ";
          return index < frame * 2 ? char : glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join(""));
        if (frame >= Math.ceil(target.length / 2)) {
          window.clearInterval(scramble);
          current = (current + 1) % identities.length;
          setIdentity(target);
          setIdentityGlitch(false);
        }
      }, 42);
      glitchTimer = scramble;
    }, 5200);
    const ctx = gsap.context(() => {
      gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions", { y: 24, opacity: 0, duration: 0.85, stagger: 0.12, ease: "power3.out" });
      gsap.utils.toArray(".reveal").forEach((el) => gsap.from(el, { y: 34, opacity: 0, duration: 0.75, ease: "power2.out", scrollTrigger: undefined, delay: 0.05 }));
    });
    return () => {
      window.clearInterval(cycle);
      if (glitchTimer) window.clearInterval(glitchTimer);
      ctx.revert();
    };
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <div className="ambient-background" aria-hidden="true"><video autoPlay muted loop playsInline preload="auto"><source src="/assets/ambient-loop.mp4" type="video/mp4"/></video></div>
    <div className="noise" aria-hidden="true" />
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">A<span>_</span></span><span>ALPH4_X3</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? "nav open" : "nav"}>
        {["about","experience","projects","arsenal","credentials","contact"].map(x => <a key={x} href={`#${x}`} onClick={closeMenu}>{x}</a>)}
      </nav>
      <div className="availability"><span className="pulse"/> SECURITY RESEARCH / PORTFOLIO</div>
    </header>

    <main>
      <section className="hero" id="home">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto" poster="/assets/profile.png" aria-hidden="true"><source src="/assets/hero-background.mp4" type="video/mp4"/></video>
        <div className="hero-overlay"/>
        <div className="hero-grid"/>
        <div className="hero-content">
          <div className="hero-kicker"><span className="kicker-line"/> OFFENSIVE SECURITY / AUTONOMOUS SYSTEMS / WEB SECURITY</div>
          <h1 className={`hero-title identity-title ${identityGlitch ? "is-glitching" : ""}`} aria-label="Rithish Abinav A C, also known as ALPH4_X3"><span className="identity-text" aria-hidden="true">{identity}</span><span className="identity-cursor" aria-hidden="true">_</span></h1>
          <div className="alias-line"><span className="bracket">[</span> HANDLE // ALPH4_X3 <span className="bracket">]</span></div>
          <p className="hero-copy">I focus on web application security, explore how real-world attack paths emerge, and build security tools that make testing more structured, repeatable, and useful. My interests sit at the intersection of offensive security, autonomous assessment, and AI-agent security.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">EXPLORE PROJECTS <ArrowUpRight size={16}/></a><a className="button button-ghost" href="mailto:rithish81abinav@gmail.com">CONTACT ME <ArrowUpRight size={16}/></a></div>
          <div className="hero-meta"><span><i/> WEB APPLICATION SECURITY</span><span><i/> AUTONOMOUS PENTESTING</span><span><i/> AI AGENT SECURITY</span></div>
        </div>
        <div className="hero-index"><span>PORTFOLIO / 2026</span><span>ALPH4_X3 / PERSONAL PORTFOLIO</span></div>
        <a className="scroll-cue" href="#about"><ArrowDownRight size={16}/> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="section-label"><span>01</span> / WHO I AM</div>
        <div className="intro-layout">
          <div className="portrait-frame"><img src="/assets/profile.png" alt="Portrait of Rithish Abinav A C"/><div className="portrait-caption">RITHISH ABINAV A C <span>ALPH4_X3</span></div></div>
          <div className="intro-copy reveal">
            <p className="eyebrow">OFFENSIVE SECURITY ENGINEER / SECURITY TOOL BUILDER</p>
            <h2>Breaking assumptions.<br/><em>Building better</em> security tools.</h2>
            <p>I'm Rithish Abinav A C, also known as ALPH4_X3. My primary technical interest is web application security: understanding application behavior, identifying weaknesses in trust boundaries, and evaluating how vulnerabilities can affect real systems.</p>
            <p>I am interested in making security assessment more systematic through focused tooling and autonomous workflows. Rather than treating a scan as a conclusion, I value the process behind a finding: understanding the attack surface, validating the behavior, assessing impact, and communicating the result clearly.</p>
            <p>I hold a B.E. in Cybersecurity from Mahendra Engineering College. My broader areas of interest include AI agent security and autonomous penetration testing.</p>
            <div className="focus-grid"><div><Shield/><b>WEB APPLICATION SECURITY</b></div><div><Cpu/><b>AI AGENT SECURITY</b></div><div><Terminal/><b>AUTONOMOUS PENTESTING</b></div></div>
          </div>
        </div>
      </section>

      <section className="experience section-wrap" id="experience">
        <div className="section-label"><span>02</span> / FIELD EXPERIENCE</div>
        <div className="section-heading"><h2>Experience<span className="green">.</span></h2><p>Experience and internships spanning cybersecurity assessment, digital forensics, hardware security, and cybercrime investigation environments.</p></div>
        <div className="timeline">{experience.map((e,i)=><article className="timeline-item reveal" key={e[0]}><div className="timeline-index">0{i+1}</div><div className="timeline-body"><div className="timeline-top"><span>{e[0]}</span><time>{e[2]}</time></div><h3>{e[1]}</h3><p>{e[3]}</p></div></article>)}</div>
      </section>

      <section className="projects section-wrap" id="projects">
        <div className="section-label"><span>03</span> / INDEPENDENT SECURITY PROJECTS</div>
        <div className="section-heading"><h2>Built to <em>investigate.</em></h2><p>Independent builds exploring focused security problems, from enterprise-style attack simulation to vulnerability-specific assessment workflows. Select a project to open its source repository where one is available.</p></div>
        <div className="project-grid">{projects.map((p,i)=><article className="project-card reveal" key={p.name} onClick={() => setActiveProject(activeProject===p.name?null:p.name)}><div className="project-top"><span>PROJECT / 0{i+1}</span><span className="status">{p.status}</span></div><div className="project-symbol">{i===0?<Network/>:i===1?<Terminal/>:i===2?<Shield/>:<Code2/>}</div><h3>{p.name}</h3><div className="project-type">{p.type}</div><p>{p.desc}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="project-bottom"><button className="text-link" aria-expanded={activeProject===p.name}>SOURCE & DETAILS <ChevronRight size={15}/></button>{p.url&&<a href={p.url} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()} aria-label={`Open ${p.name} repository`}><Github size={17}/></a>}</div>{activeProject===p.name&&<div className="project-expanded"><strong>{p.name} / SOURCE ACCESS</strong><span>{p.url ? "The project source is available on GitHub. Open the repository to inspect its implementation, documentation, and development history." : "A public source repository has not been provided for this project yet."}</span>{p.url&&<a href={p.url} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}><Github size={14}/> NAVIGATE TO SOURCE ON GITHUB <ExternalLink size={13}/></a>}</div>}</article>)}</div>
      </section>

      <section className="arsenal section-wrap" id="arsenal">
        <div className="section-label"><span>04</span> / HELLHOUND ECOSYSTEM</div>
        <div className="arsenal-head"><div><h2>Hellhound <em>arsenal.</em></h2><p>Six named utilities grouped under the Hellhound ecosystem. Select a tool to reveal the source-navigation prompt and inspect the Hellhound repository on GitHub.</p></div><div className="arsenal-stamp"><span>HELLHOUND</span><b>TOOLSET / 06</b></div></div>
        <div className="arsenal-list">{arsenal.map((a,i)=><article className={`arsenal-item ${activeProject===a[0]?"selected":""}`} key={a[0]}><button className="arsenal-row" onClick={()=>setActiveProject(activeProject===a[0]?null:a[0])} aria-expanded={activeProject===a[0]}><span className="arsenal-num">0{i+1}</span><span className="arsenal-name">{a[0]}<small>{a[1]}</small></span><span className="status"><i/> {a[2]}</span><ArrowUpRight className="arsenal-arrow"/></button>{activeProject===a[0]&&<div className="arsenal-source"><span>HELLHOUND SOURCE / GITHUB</span><p>Open the Hellhound project repository to review the source and ecosystem documentation for this tool.</p><a href="https://github.com/l4zz3rj0d/Hellhound-Pentest" target="_blank" rel="noreferrer"><Github size={15}/> NAVIGATE TO SOURCE ON GITHUB <ExternalLink size={13}/></a></div>}</article>)}</div>
      </section>

      <section className="stack section-wrap" id="credentials">
        <div className="section-label"><span>05</span> / TECHNICAL PROFILE</div>
        <div className="stack-layout"><div><h2>Tools of the <em>trade.</em></h2><p>A practical toolkit for reconnaissance, web application testing, vulnerability assessment, traffic inspection, and isolated lab environments. The focus areas below describe current interests—not a claim of expertise in every adjacent discipline.</p></div><div className="stack-content"><div className="stack-group"><span>SECURITY TOOLS</span><div className="chips">{["Burp Suite","Nmap","Metasploit","Nuclei","Wireshark","Docker"].map(x=><b key={x}>{x}</b>)}</div></div><div className="stack-group"><span>FOCUS AREAS</span><div className="chips"><b>Web Application Security</b><b>AI Agent Security</b><b>Autonomous Pentesting</b></div></div></div></div>
        <div className="education"><div><span>EDUCATION</span><h3>B.E. Cybersecurity</h3><p>Mahendra Engineering College · 2026</p></div><strong>7.50 <small>CGPA</small></strong></div>
        <div className="cert-block"><span>CERTIFICATIONS</span><div className="cert-grid">{certifications.map((c,i)=><div key={c}><small>0{i+1}</small>{c}</div>)}</div></div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="section-label"><span>06</span> / ESTABLISH CONNECTION</div>
        <h2>Have a security problem?<br/><em>Let's investigate.</em></h2>
        <p>For professional opportunities, collaboration, and security-focused discussions.</p>
        <a className="contact-email" href="mailto:rithish81abinav@gmail.com"><Mail/> RITHISH81ABINAV@GMAIL.COM <ArrowUpRight/></a>
        <div className="socials"><a href="https://github.com/Abinav3ac" target="_blank" rel="noreferrer"><Github/> GITHUB <ArrowUpRight/></a><a href="https://www.linkedin.com/in/rithish06abinav/" target="_blank" rel="noreferrer"><Linkedin/> LINKEDIN <ArrowUpRight/></a></div>
      </section>
    </main>
    <footer><a className="brand" href="#home"><span className="brand-mark">A<span>_</span></span><span>ALPH4_X3</span></a><span>RITHISH ABINAV A C © 2026</span><span>BUILT WITH INTENT.</span></footer>
  </div>;
}
createRoot(document.getElementById("root")).render(<App/>);
