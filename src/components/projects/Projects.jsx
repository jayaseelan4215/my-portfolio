import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "All-in-One Social Media Management Platform",
    subtitle: "Post • Messaging • Campaigns • AI Insights",
    description:
      "A full-stack social media management SaaS that allows users to create, schedule, and publish posts across multiple platforms from a single dashboard. Includes inbox messaging, media management, campaign tracking, and AI-powered insights for engagement and performance analysis.",
    tags: [
      "React",
      "Laravel",
      "REST APIs",
      "Social Media APIs",
      "Post Scheduling",
      "Messaging System",
      "Campaign Management",
      "AI Insights",
      "Analytics",
      "RBAC",
    ],
    image: "/social.jpeg",
    liveDemo: "#",
    githubRepo: "#",
    projectColor: "#4f46e5",
  },
  {
    title: "Booking & Delivery Management System",
    subtitle: "Role-Based Web Application",
    description:
      "A complete booking and delivery platform with role-based access for admins, drivers, and users. Features real-time booking status, driver assignment, notifications, and API-driven communication.",
    tags: [
      "Laravel",
      "React",
      "Role Management",
      "Live Updates",
      "REST APIs",
    ],
    image: "/billing.jpeg",
    liveDemo: "#",
    githubRepo: "#",
    projectColor: "#2563eb",
  },
  {
    title: "Payment Gateway Integration Module",
    subtitle: "Secure Transaction Processing",
    description:
      "Secure payment gateway integration handling transactions, callbacks, validation, failure recovery, and transaction history with strong focus on security and reliability.",
    tags: [
      "Laravel",
      "Payment Gateway",
      "Webhooks",
      "Security",
      "Transactions",
    ],
    image: "/payment.jpg",
    liveDemo: "#",
    githubRepo: "#",
    projectColor: "#16a34a",
  },
  {
    title: "React Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    description:
      "A modern, responsive portfolio built with React, Tailwind CSS, and Framer Motion featuring dynamic theming, smooth animations, and reusable components.",
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Redux",
      "Responsive Design",
    ],
    image: "/image.png",
    liveDemo: "#",
    githubRepo: "#",
    projectColor: "#ea580c",
  },
  {
    title: "Task & Employee Management System",
    subtitle: "Internal Business Tool",
    description:
      "An internal tool to manage employees, assign tasks, track progress, and monitor productivity with role-based access and clean dashboard UI.",
    tags: [
      "React",
      "Laravel",
      "RBAC",
      "Dashboard",
      "CRUD",
    ],
    image: "/task.jpeg",
    liveDemo: "#",
    githubRepo: "#",
    projectColor: "#0f766e",
  },
  {
    title: "Progressive Web Application (PWA)",
    subtitle: "Offline & Performance Optimized",
    description:
      "A PWA with offline support, service workers, caching strategies, and performance optimizations for faster load times and mobile-first experience.",
    tags: [
      "PWA",
      "React",
      "Service Workers",
      "Caching",
      "Performance",
    ],
    image: "/pwa.jpg",
    liveDemo: "#",
    githubRepo: "#",
    projectColor: "#9333ea",
  },
];

const ProjectTimeline = () => {
  const { themeColors } = useSelector((state) => state.themeReducer);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: themeColors.bg }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-10"
            style={{
              backgroundColor: project.projectColor,
              width: `${Math.random() * 300 + 120}px`,
              height: `${Math.random() * 300 + 120}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(70px)",
            }}
            animate={{
              x: [0, Math.random() * 120 - 60],
              y: [0, Math.random() * 120 - 60],
            }}
            transition={{
              duration: Math.random() * 30 + 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold inline-block relative"
            style={{ color: themeColors.primaryColor }}
          >
            Latest Works
            <span
              className="block h-1 mt-3 mx-auto w-24"
              style={{ backgroundColor: themeColors.primaryColor }}
            />
          </h2>
        </motion.div>

        {/* Timeline line */}
        <div
          className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5"
          style={{ backgroundColor: themeColors.primaryColor }}
        />

        {/* Projects */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isHovered={hoveredProject === index}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <motion.div
        className="max-w-2xl mx-auto mt-24 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p
          className="text-lg leading-relaxed text-center"
          style={{ color: themeColors.summeryText }}
        >
          These projects represent my <strong>best work</strong> — designed,
          developed, and optimized end-to-end, showcasing strong ownership of
          <strong> architecture, UI/UX, scalability, and system logic</strong>.
        </p>
      </motion.div>
    </section>
  );
};

export default ProjectTimeline;
