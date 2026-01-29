import { Code, Server, Wrench, Globe, User, Briefcase, GraduationCap, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export const personalDetails = {
  name: "MUHAMMAD YASEEN C",
  role: "Full Stack Developer (MERN)",
  tagline: "Passionate about creating beautiful, functional, and user-friendly web applications.",
  about: "I am a passionate MERN Stack developer focused on building modern, scalable, and responsive web applications. I enjoy working on real-world projects that combine clean UI, performance, and user experience. I am continuously learning and improving my skills in full-stack development.",
  email: "contact@example.com", // Placeholder
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:contact@example.com"
  }
};

export const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "Responsive Design"], icon: <Globe className="w-6 h-6" /> },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "JWT Authentication", "REST APIs"], icon: <Server className="w-6 h-6" /> },
  { category: "Tools", items: ["Git", "GitHub", "Postman"], icon: <Wrench className="w-6 h-6" /> }
];

export const projects = [
  {
    id: 1,
    title: "AI Powered E-Commerce Web Application",
    description: "A full-featured AI-powered e-commerce platform with premium UI and scalable architecture. Includes secure authentication, payment integration, and multi-role dashboards.",
    features: ["OTP-based login", "JWT authentication", "Razorpay payment integration", "Admin panel", "Seller panel", "User dashboard", "Premium modern UI", "Fully responsive design"],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop" // Placeholder image
  },
  {
    id: 2,
    title: "Smart Car Control System",
    description: "IoT based car control system allowing remote operation and monitoring.",
    techStack: ["IoT", "React", "Node.js"],
    liveLink: "#",
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Bank Management System",
    description: "Comprehensive system for managing bank accounts, transactions, and customer data.",
    techStack: ["Java", "SQL"],
    liveLink: "#",
    githubLink: "#",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1470&auto=format&fit=crop"
  }
];

export const education = [
  {
    degree: "Diploma in Computer Engineering",
    institution: "Polytechnic College",
    year: "2025",
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    degree: "MERN Stack Training",
    institution: "OneTeam, Kochi Branch",
    year: "6 Months",
    icon: <Code className="w-6 h-6" />
  }
];
