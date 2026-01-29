import { Code, Server, Wrench, Globe, User, Briefcase, GraduationCap, Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export const personalDetails = {
  name: "MUHAMMAD YASEEN C",
  role: "Full Stack Developer (MERN)",
  tagline: "Passionate about creating beautiful, functional, and user-friendly web applications.",
  about: "I am a passionate MERN Stack developer focused on building modern, scalable, and responsive web applications. I enjoy working on real-world projects that combine clean UI, performance, and user experience. I am continuously learning and improving my skills in full-stack development.",
  email: "contact@example.com",
  phone: "+91 98765 43210", // Added
  location: "Kerala, India", // Added
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
    desc: "A full-featured AI-powered e-commerce platform with premium UI and scalable architecture. Includes secure authentication, payment integration, and multi-role dashboards.", // Renamed description -> desc
    features: ["OTP-based login", "JWT authentication", "Razorpay payment integration", "Admin panel", "Seller panel", "User dashboard", "Premium modern UI", "Fully responsive design"],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"], // Renamed techStack -> stack
    link: "#", // Renamed liveLink -> link
    github: "#", // Renamed githubLink -> github
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1632&auto=format&fit=crop" // Renamed image -> img
  },
  {
    id: 2,
    title: "Smart Car Control System",
    desc: "IoT based car control system allowing remote operation and monitoring.",
    stack: ["IoT", "React", "Node.js"],
    link: "#",
    github: "#",
    img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Bank Management System",
    desc: "Comprehensive system for managing bank accounts, transactions, and customer data.",
    stack: ["Java", "SQL"],
    link: "#",
    github: "#",
    img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1470&auto=format&fit=crop"
  }
];

export const education = [
  {
    course: "Diploma in Computer Engineering", // Renamed degree -> course
    institution: "Polytechnic College",
    date: "2025", // Renamed year -> date
    desc: "Focused on core computer science foundations, software engineering, and practical programming skills.", // Added desc
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    course: "MERN Stack Training",
    institution: "OneTeam, Kochi Branch",
    date: "6 Months",
    desc: "Intensive training program covering MongoDB, Express.js, React, and Node.js with real-world project development.",
    icon: <Code className="w-6 h-6" />
  }
];
