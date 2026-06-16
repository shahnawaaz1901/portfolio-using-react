import type { Achievement, Education, Experience, Project, SkillGroup } from "@/types/Portfolio";
import resume from "@/assets/resume.pdf";
export const profile = {
  name: "Shahnawaaz Ansari",
  title: "Frontend Engineer · React · Next.js · TypeScript",
  headline:
    "Software Engineer with 2+ years of experience specializing in Frontend Development across Startups and Enterprise Environments.",
  intro:
    "Frontend Engineer with 2+ years of experience building scalable web applications using React.js, Next.js, TypeScript, and modern frontend technologies. Experienced in developing enterprise-grade applications, role-based systems, reusable UI architectures, and performance-focused user experiences.",
  summary:
    "Results-driven Software Engineer with experience across startup and enterprise environments. Currently working as a Systems Engineer at Tata Consultancy Services (TCS), contributing to a UK-based Risk Management platform. Skilled in React.js, Next.js, TypeScript, JavaScript, Node.js, Express.js, MongoDB, Redux Toolkit, and modern frontend architecture. Passionate about creating scalable applications, intuitive user experiences, and high-performance web solutions.",
  location: "Kota, Rajasthan, India",
  email: "shaan.ansari1901@gmail.com",
  linkedin: "https://linkedin.com/in/shahnawaaz1901",
  github: "https://github.com/shahnawaaz1901",
  resumeUrl: (resume as any).url,
};

export const experiences: Experience[] = [
  {
    company: "Tata Consultancy Services",
    role: "Systems Engineer",
    duration: "April 2025 – Present",
    current: true,
    points: [
      "Frontend Engineer on a Risk Management platform for a UK-based Audit Firm",
      "Developed 3+ core enterprise modules",
      "Built centralized System Administration Module",
      "Implemented RBAC for 10+ user roles",
      "Delivered multiple production releases successfully",
      "Collaborated with international stakeholders",
      "Improved maintainability through reusable components and clean architecture",
    ],
  },
  {
    company: "CodeArrest Software Pvt Ltd",
    role: "Software Developer",
    duration: "January 2025 – March 2025",
    points: [
      "Developed modern React.js applications",
      "Worked on enterprise-level business applications",
      "Implemented API integrations",
      "Improved UI responsiveness and performance",
    ],
  },
  {
    company: "Mechlin Software Technology Pvt Ltd",
    role: "Software Developer Associate",
    duration: "August 2024 – January 2025",
    points: [
      "Developed frontend modules using React.js",
      "Built reusable UI components",
      "Worked on PDF rendering and e-signature applications",
      "Integrated REST APIs",
      "Participated in Agile development processes",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Technology — Computer Science Engineering",
    score: "8.24",
    total: "10",
    scoreType: "CGPA",
    year: "2024",
    subjects: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "OOPs",
    ],
  },
  {
    degree: "XII - Science Mathematics",
    score: "71.80",
    total: "100",
    scoreType: "Percentage",
    year: "2020",
    subjects: ["Physics", "Chemistry", "Mathematics"],
  },
  {
    degree: "X - Secondary School",
    score: "78.00",
    total: "100",
    scoreType: "Percentage",
    year: "2018",
    subjects: ["All"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
  },
  { category: "Backend", items: ["Node.js", "Express.js"] },
  { category: "Database", items: ["MongoDB"] },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "AWS EC2"],
  },
  {
    category: "Concepts",
    items: [
      "Data Structures & Algorithms",
      "REST APIs",
      "RBAC",
      "Authentication",
      "System Design Fundamentals",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Enterprise Risk Management Platform",
    stack: ["React.js", "TypeScript", "Redux Toolkit"],
    highlights: [
      "Developed multiple production modules",
      "Implemented RBAC system",
      "Delivered enterprise-grade solutions",
      "Used by multiple stakeholders",
    ],
  },
  {
    title: "EMA Workforce Management System",
    stack: ["Next.js", "React.js", "Node.js"],
    highlights: [
      "Role-based access implementation",
      "Clock In / Clock Out functionality",
      "User management system",
      "Admin dashboard",
    ],
  },
  {
    title: "DocSign Platform",
    stack: ["React.js", "PDF.js", "Node.js"],
    highlights: [
      "PDF rendering engine",
      "E-signature support",
      "Signature placement system",
      "Document workflow automation",
    ],
  },
  {
    title: "Portfolio Website",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "SEO optimized",
      "Fully responsive",
      "Dark/Light mode",
      "Performance focused",
    ],
  },
];

export const achievements: Achievement = [
  "Selected for TCS Prime",
  "Built multiple enterprise-grade production applications",
  "Successfully delivered 3+ phased releases",
  "Maintained strong academic performance with 8.24 CGPA",
  "Developed scalable RBAC architecture for enterprise systems",
  "2+ years of professional software development experience",
];
