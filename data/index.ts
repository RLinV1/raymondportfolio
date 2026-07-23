export const navItems = [
  { name: "experience", link: "/experience" },
  { name: "projects", link: "/projects" },
];

export const socials = [
  { name: "GitHub", link: "https://github.com/RLinv1" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/raymond-lin-796b8326b/" },
  { name: "Email", link: "mailto:rlin7289@gmail.com" },
];

export const hero = {
  eyebrow: "Software Engineer · New York",
  name: "Raymond Lin",
  lede: "I build full-stack systems and AI developer tooling, from backend services and cloud infrastructure to agentic pipelines.",
  bio: "Computer Science Honors student at Stony Brook University (GPA 3.87, 5x Dean's List). I work across the stack, with a focus on distributed backends, Kubernetes-based platforms, and LLM-driven automation.",
  status: "SDE Intern @ Clearwater Analytics",
  now: "Going deeper on AI and building agentic projects.",
};

export const experience = [
  {
    company: "Clearwater Analytics",
    role: "Software Development Engineer Intern",
    period: "Jun 2026 - Present",
    points: [
      "Owned a full-stack product end-to-end — design, implementation, testing, and security review — applying agentic AI to reduce manual operational work.",
      "Integrated MCP servers and Claude to automate internal diagnostics and root-cause workflows.",
      "Built backend services in Kotlin with Quarkus and Caffeine caching across data stores; deployed to EKS with CloudBees and ArgoCD.",
      "Helped own a Python service on AWS end-to-end, from design doc to code review, automating previously manual work alongside Clearwater software engineers.",
    ],
    tech: ["Kotlin", "Quarkus", "Python", "AWS", "Terraform", "Claude", "MCP", "EKS", "ArgoCD"],
  },
  {
    company: "SwiftControl Systems",
    role: "Software Engineer",
    period: "Nov 2022 - Present",
    points: [
      "Led backend development of a core scheduling service in Go and PostgreSQL on Docker and Kubernetes, achieving 96% uptime for 300+ staff and 5,800+ students.",
      "Collaborated with 5+ engineers in a cross-functional Scrum environment on a Kubernetes-based deployment platform, contributing to the policy-based authorization system.",
      "Maintaining Resin — testing and fixing a Go/GraphQL architecture graph exposed to AI coding agents over MCP, with an Angular and Cytoscape.js front end.",
    ],
    tech: ["Go", "PostgreSQL", "GraphQL", "Kubernetes", "Angular", "MCP"],
  },
  {
    company: "CodePath",
    role: "AI301 Student",
    period: "Jun 2026 - Present",
    points: [
      "Contributed to real open-source projects using Claude Code through hands-on experience in AI-assisted development workflows, focused on modern, AI-powered software engineering practices.",
    ],
    tech: ["Claude Code", "Open Source", "Git"],
  },
  {
    company: "BASTA",
    role: "Software Engineering Mentee",
    period: "Oct 2025 - Dec 2025",
    points: [
      "Selected as one of 250 students from 2,100+ applicants for a 10-week mentorship with a Google Software Engineer, focused on data structures, algorithms, and technical interviews.",
    ],
    tech: ["Data Structures", "Algorithms", "Systems Design"],
  },
  {
    company: "EV Buddy",
    role: "Web Development Intern",
    period: "Aug 2025 - Oct 2025",
    points: [
      "Developed evbuddy.net using React, implementing a responsive, user-friendly interface that improved accessibility.",
    ],
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    company: "Stony Brook University",
    role: "Teaching Assistant",
    period: "Jan 2025 - May 2025",
    points: [
      "Led interactive computer science lab sessions for an intro Java course, guiding groups of 15-20 students through programming exercises.",
    ],
    tech: ["Java", "Teaching"],
  },
  {
    company: "Potter Home Education Center",
    role: "Teacher",
    period: "Jul 2023 - Aug 2023",
    points: [
      "Taught students entering 5th and 6th grade Common Core and STEM subjects.",
      "Worked in unison with a supervisor and another teacher to facilitate learning.",
    ],
    tech: ["Common Core", "STEM"],
  },
];

type Project = {
  title: string;
  year: string;
  description: string;
  tech: string[];
  link: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Flow",
    year: "2026",
    description:
      "Multi-agent SDLC pipeline: seven Claude agents turn a Jira ticket into reviewed, tested code and an OWASP Top 10-mapped security report, streaming every agent's output live over SSE. Deployed to k3s via ArgoCD GitOps with a GitHub Actions CI/CD pipeline.",
    tech: ["Python", "FastAPI", "Claude API", "React", "PostgreSQL", "Kubernetes"],
    link: "https://github.com/RLinV1",
  },
  {
    title: "Plutus",
    year: "2026",
    description:
      "AI stock research assistant that answers plain-English portfolio questions by driving Claude over a 22-tool MCP server, fusing live market data, news, and a RAG knowledge library with a VaR/CVaR, beta, and Sharpe analytics engine.",
    tech: ["Python", "MCP", "RAG", "FastAPI", "React", "AWS"],
    link: "https://plutustrading.tech",
    repo: "https://github.com/RLinV1/Plutus",
  },
  {
    title: "Discord Messaging Platform",
    year: "2026",
    description:
      "Cloud microservices chat platform built by a 4-person team, deployed across 14 instances behind Nginx, serving 5,700+ users at a peak of 331 msg/s with p95 under 1s delivery. Runs on Cassandra, Redis pub/sub, and OpenSearch, provisioned end-to-end with Ansible.",
    tech: ["Next.js", "Fastify", "Cassandra", "Redis", "OpenSearch", "Ansible"],
    link: "https://github.com/PluralV/group9-not-discord",
  },
];

export const building: Project[] = [
  {
    title: "Plutus",
    year: "2026",
    description:
      "AI stock research assistant that answers plain-English portfolio questions by driving Claude over a 22-tool MCP server, fusing live market data, news, and a RAG knowledge library with a VaR/CVaR, beta, and Sharpe analytics engine.",
    tech: ["Python", "MCP", "RAG", "FastAPI", "React", "AWS"],
    link: "https://plutustrading.tech",
    repo: "https://github.com/RLinV1/Plutus",
  },
  {
    title: "Resin",
    year: "2026",
    description:
      "An AI context layer for software architecture: a structured knowledge graph that exposes your system to coding agents (Claude Code, Cursor) over MCP, giving them dependency-aware reasoning and instant change-impact analysis. Built on Go, GraphQL, and PostgreSQL with an interactive Angular and Cytoscape.js graph UI.",
    tech: ["Go", "GraphQL", "PostgreSQL", "MCP", "Angular"],
    link: "https://resin.swiftctl.com/",
  },
];

export const minorProjects = [
  {
    title: "Survive the Infected",
    description: "Endless bullet-hell game built with Java and LibGDX.",
    link: "https://github.com/RLinV1/Survive-the-Infected",
  },
  {
    title: "World's Hardest Game Clone",
    description: "Java remake of the classic browser game.",
    link: "https://github.com/RLinV1/World-Hardest-Game-Clone",
  },
];

export const stack = [
  {
    label: "Languages",
    hue: "amber",
    items: ["Java", "Python", "TypeScript", "JavaScript", "Go", "Kotlin", "C", "SQL", "Bash"],
  },
  {
    label: "Frameworks",
    hue: "cobalt",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Spring Boot",
      "FastAPI",
      "Express",
      "Quarkus",
      "Tailwind CSS",
      "GraphQL",
    ],
  },
  {
    label: "Infrastructure",
    hue: "sage",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Cassandra",
      "ArgoCD",
      "GitHub Actions",
      "Firebase",
      "Supabase",
    ],
  },
];
