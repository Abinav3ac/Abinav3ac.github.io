import { Code2, Fingerprint, Layers3, Network, Radio, ShieldCheck, Terminal } from "lucide-react";

export const navigation = [
  ["about", "About"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["hellhound", "Hellhound"],
  ["credentials", "Credentials"],
  ["contact", "Contact"],
];

export const experiences = [
  {
    company: "CyArt Tech",
    role: "VAPT Engineer Apprentice",
    date: "JUN 2026 — OCT 2026",
    location: "Apprenticeship",
    credentialTarget: "#certifications",
    summary:
      "Worked within the Cyber Security Department, participating in practical assignments and day-to-day activities associated with Vulnerability Assessment and Penetration Testing.",
    detail:
      "Gained industry exposure to professional cybersecurity practices and developed practical knowledge of vulnerability assessment and penetration testing concepts. Participated in cybersecurity-related assignments while building familiarity with industry workflows, workplace standards, and the responsibilities of a VAPT Engineer.",
    highlights: [
      "Participated in practical cybersecurity assignments within the VAPT domain.",
      "Gained industry exposure to vulnerability assessment and penetration testing activities.",
      "Developed practical knowledge of cybersecurity concepts and their professional applications.",
      "Engaged in day-to-day activities within the Cyber Security Department.",
      "Strengthened technical understanding and workplace readiness through structured apprenticeship experience.",
    ],
  },
  {
    company: "CyArtVAPT",
    role: "VAPT Intern — CyTrack Platform",
    date: "DEC 2025 — AUG 2026",
    location: "Remote",
    summary:
      "Engineered autonomous agent layers for CyTrack, a multi-agent web penetration-testing platform designed for scalable and adaptive offensive security operations.",
    detail:
      "Developed Python-based security agents to identify and analyze web application vulnerability classes through automated reconnaissance, contextual analysis, and intelligent testing workflows. Contributed to collaborative agent execution and participated in deployment, testing, and validation against real-world targets, focusing on detection reliability and practical vulnerability verification.",
    highlights: [
      "Developed modular Python-based autonomous security agents.",
      "Implemented automated reconnaissance and vulnerability-assessment workflows.",
      "Contributed to multi-agent orchestration and collaborative testing architecture.",
      "Improved attack-surface analysis and contextual vulnerability detection.",
      "Validated agent reliability and detection logic through real-world testing.",
    ],
  },
  {
    company: "Cyber Secured India",
    role: "Hardware Hacking Intern",
    date: "SEP 2025 — NOV 2025",
    location: "Remote",
    summary:
      "Explored hardware security and IoT environments through ESP32-based experimentation, LoRa wireless communication, and embedded-device analysis.",
    detail:
      "Completed practical training and hands-on experimentation focused on long-range radio-frequency communication, low-power wireless transmission, and IoT connectivity. Studied common IoT attack surfaces, insecure communication channels, exposed interfaces, weak configurations, and protocol-level weaknesses.",
    highlights: [
      "ESP32-based hardware experimentation and embedded systems.",
      "LoRa wireless communication and RF fundamentals.",
      "IoT attack-surface identification and security analysis.",
      "Wireless communication vulnerabilities and protocol weaknesses.",
      "Hardware hacking fundamentals and embedded-device security.",
      "IoT exploitation concepts and wireless security research.",
    ],
  },
  {
    company: "Cyber Secured India",
    role: "Cybersecurity & Digital Forensics Intern",
    date: "APR 2025 — JUN 2025",
    location: "Remote",
    summary:
      "Completed structured cybersecurity training and practical exercises in web application security, penetration testing, and digital forensics.",
    detail:
      "Worked through PortSwigger Web Security Academy labs covering SQL injection, broken authentication, 2FA bypass, user and endpoint enumeration, and insecure session management. Applied Nmap, Burp Suite, Wireshark, and Metasploit in controlled exercises, and explored Android application security using Damn Insecure and Vulnerable App (DIVA).",
    highlights: [
      "Web application penetration testing and OWASP-based vulnerability assessment.",
      "SQL injection, authentication flaws, and session-management testing.",
      "PortSwigger Web Security Academy practical labs.",
      "Network reconnaissance with Nmap; traffic interception and analysis with Burp Suite and Wireshark.",
      "Controlled exploitation with Metasploit and Android testing with DIVA.",
      "Digital-forensics fundamentals and security investigation.",
    ],
  },
  {
    company: "Pondicherry Cyber Crime Department",
    role: "Cybersecurity Intern",
    date: "JAN 2025",
    location: "Pondicherry, India",
    summary:
      "Gained practical exposure to cybercrime investigation procedures, digital evidence handling, case analysis, and incident-tracing workflows in a government law-enforcement environment.",
    detail:
      "Participated alongside cybercrime personnel in an investigative case involving the tracking and recovery process of a victim's stolen mobile device. Independently explored embedded and wireless security through a prototype ESP32-based Bluetooth de-authentication device for controlled security research, studying Bluetooth connectivity behavior and potential disruption scenarios in embedded and IoT environments.",
    highlights: [
      "Cybercrime investigation procedures, case analysis, and investigative coordination.",
      "Digital-evidence handling and forensic-investigation fundamentals.",
      "Mobile-device tracing and recovery workflows.",
      "ESP32-based embedded security experimentation.",
      "Bluetooth wireless communication, protocol analysis, and controlled laboratory testing.",
      "Government law-enforcement cybersecurity protocols.",
    ],
  },
];

export const projects = [
  {
      name: "AGENT389",
      title: "LDAP Injection Agent",
      category: "Agents",
      status: "ACTIVE",
      description:
        "A multi-phase autonomous LDAP injection framework for intelligent reconnaissance, adaptive payload mutation, behavioral verification, and exploit-ready vulnerability handoff across web and raw LDAP attack surfaces.",
      tags: ["LDAP injection", "Adaptive payloads", "Python"],
      url: "https://github.com/project-hellhound-org/Agent389",
      icon: Fingerprint,
    },
  {
      name: "GATEFORGE",
      title: "SSRF Reconnaissance & Validation Agent",
      category: "Agents",
      status: "ACTIVE",
      description:
        "An autonomous SSRF reconnaissance and validation framework focused on unsafe server-side request handling, internal network exposure, cloud metadata access, and blind outbound interactions through adaptive payload analysis and proof-based verification.",
      tags: ["SSRF", "Internal exposure", "Validation"],
      url: "https://github.com/projecthellhound/GateForge",
      icon: Network,
    },
  {
      name: "CROSSFORGE",
      title: "SSRF Detection & Verification Agent",
      category: "Agents",
      status: "IN DEVELOPMENT",
      description:
        "An advanced SSRF detection, exploitation, and verification agent. Its multi-phase pipeline triages candidate parameters, performs differential probes, correlates out-of-band signals, and generates evidence-backed findings with reproducible proof-of-concept output.",
      tags: ["SSRF", "Differential probes", "OOB verification"],
      url: "https://github.com/projecthellhound/CrossForge",
      icon: ShieldCheck,
    },
  {
      name: "HELLCORP",
      title: "HellCorp Global Enterprise · Vulnerability Lab",
      category: "Tools & Labs",
      status: "ACTIVE",
      description:
        "A realistic enterprise attack-simulation platform for practicing advanced web exploitation, business-logic abuse, infrastructure pivoting, and multi-stage vulnerability chaining in modern corporate environments.",
      tags: ["Enterprise simulation", "Web security", "Attack paths"],
      url: "https://github.com/projecthellhound/HellCorp",
      icon: Layers3,
    },
  {
      name: "SPECTRE",
      title: "DNS Tunneling Detection Tool",
      category: "Tools & Labs",
      status: "ACTIVE",
      description:
        "A real-time DNS tunneling detection engine that identifies covert exfiltration and command-and-control activity through entropy analysis, anomalous query patterns, subdomain-abuse detection, and frequency-based behavioral correlation.",
      tags: ["DNS security", "Entropy analysis", "Detection"],
      url: "https://github.com/projecthellhound/Spectre",
      icon: Radio,
    },
  {
      name: "CONSTANT",
      title: "Personalized Routine Tracker",
      category: "Applications",
      status: "ACTIVE",
      description:
        "A personal productivity application combining habit tracking, task management, calendar scheduling, financial tracking, and productivity analytics. Its local-first architecture uses browser IndexedDB through Dexie, with optional AI assistance.",
      tags: ["Local-first", "IndexedDB", "Productivity"],
      url: "https://github.com/projecthellhound/Constant",
      icon: Code2,
    },
  {
      name: "HELLHOUND PENTEST",
      title: "Rule-Based Web Application Pentest Framework",
      category: "Tools & Labs",
      status: "ARCHIVED",
      description:
        "A modular web application penetration-testing framework that coordinates application discovery, security-audit modules, evidence collection, and controlled verification through a unified assessment workflow. Its core logic is rule-driven—not an autonomous AI agent.",
      details:
        "An earlier rule-based, semi-autonomous framework built around configured targets and mission context. It coordinated application discovery, selected audit modules, evidence collection, and controlled verification. Its module set covered attack-surface auditing, transport security checks, WAF profiling, fuzzing, and technology identification. This architecture was later superseded by the focused tools in the current ecosystem.",
      tags: ["Web assessment", "Rule engine", "Evidence"],
      url: "https://github.com/projecthellhound/HellHound-Pentest",
      icon: Terminal,
    }
];
export const certifications = [
  {
    name: "Digital Forensics",
    issuer: "EC-COUNCIL",
    url: "https://drive.google.com/file/d/1IgkmeVVjKivYX-Abf1mrEDyvyeN120gQ/view?usp=drive_link",
  },
  {
    name: "Network Defense",
    issuer: "EC-COUNCIL",
    url: "https://drive.google.com/file/d/1y5qHnJnwk424xPa0_3CR_phUstPmhZ2J/view?usp=drive_link",
  },
  {
    name: "Ethical Hacking",
    issuer: "EC-COUNCIL",
    url: "https://drive.google.com/file/d/1Mjo_Kv4TM8XoJXxdfssE6tWtMSE2eMGx/view?usp=drive_link",
  },
  {
    name: "Hands-On Penetration Testing with Metasploit",
    issuer: "INFOSYS",
    url: "https://drive.google.com/file/d/1IQE0iNrrYtytCNMk4BRlENBaobxTeXXt/view?usp=drive_link",
  },
  {
    name: "Ethical Hacking",
    issuer: "CISCO",
    url: "https://drive.google.com/file/d/1Evud3MDH7ROxKZvQwSSPV6MhVQIzGA9b/view?usp=drive_link",
  },
  {
    name: "Cybersecurity Educator Professional (CCEP)",
    issuer: "CYBERSECURITY EDUCATOR",
    url: "https://drive.google.com/file/d/1iE5Gf2KuFQpadYA9og8gIuQ70oS03umM/view?usp=drive_link",
  },
];

export const toolGroups = [
  {
    label: "Application & network security",
    items: ["Burp Suite", "Nmap", "Wireshark", "Metasploit Framework", "Nuclei"],
  },
  {
    label: "Platforms & lab work",
    items: ["Docker", "PortSwigger Web Security Academy", "DIVA", "Controlled testing labs"],
  },
  {
    label: "Hardware & wireless",
    items: ["ESP32", "LoRa", "Bluetooth security", "Embedded systems"],
  },
];

export const projectFilters = ["All", "Agents", "Tools & Labs", "Applications"];

