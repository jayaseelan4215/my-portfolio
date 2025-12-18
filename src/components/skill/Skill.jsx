import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../SectionHeader";

const SkillsSection = () => {
  const { themeColors, theme } = useSelector((state) => state.themeReducer);
  const [hoveredTech, setHoveredTech] = useState(null);

  const techCategories = {
    frontend: {
      title: "Frontend Architecture & UI",
      description:
        "Building scalable, responsive, and high-performance user interfaces for modern web and SaaS platforms.",
      icons: [
        {
          name: "HTML5",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          tooltipColor: "#E34F26",
        },
        {
          name: "CSS3",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          tooltipColor: "#1572B6",
        },
        {
          name: "JavaScript",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          tooltipColor: "#F7DF1E",
        },
        {
          name: "jQuery",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
          tooltipColor: "#0769AD",
        },
        {
          name: "Bootstrap",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
          tooltipColor: "#7952B3",
        },
        {
          name: "Tailwind CSS",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          tooltipColor: "#38B2AC",
        },
        {
          name: "SCSS",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
          tooltipColor: "#CC6699",
        },
        {
          name: "Material UI",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
          tooltipColor: "#0081CB",
        },
        {
          name: "React",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          tooltipColor: "#61DAFB",
        },
        {
          name: "Framer Motion",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
          tooltipColor: "#FF0080",
        },
      ],
    },

    backend: {
      title: "Backend, APIs & Security",
      description:
        "Secure and scalable backend systems powering social platforms, messaging, campaigns, and analytics.",
      icons: [
        {
          name: "Laravel",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
          tooltipColor: "#FF2D20",
        },
        {
          name: "CodeIgniter",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
          tooltipColor: "#EF4223",
        },
        {
          name: "PHP",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          tooltipColor: "#777BB4",
        },
        {
          name: "MySQL",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          tooltipColor: "#4479A1",
        },
        {
          name: "REST API",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          tooltipColor: "#68A063",
        },
        {
          name: "JWT Authentication",
          src: "https://jwt.io/img/pic_logo.svg",
          tooltipColor: "#000000",
        },
        {
          name: "Bcrypt / Security",
          src: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
          tooltipColor: "#555555",
        },
      ],
    },

    other: {
      title: "AI, DevOps & Workflow",
      description:
        "Tools and workflows supporting AI insights, automation, analytics, and team collaboration.",
      icons: [
        {
          name: "Git",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          tooltipColor: "#F05032",
        },
        {
          name: "GitHub",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          tooltipColor: "#181717",
        },
        {
          name: "Postman",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
          tooltipColor: "#FF6C37",
        },
        {
          name: "Figma",
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
          tooltipColor: "#F24E1E",
        },
        {
          name: "Prettier",
          src: "https://prettier.io/icon.png",
          tooltipColor: "#F7B93E",
        },
        {
          name: "AI Tools",
          src: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
          tooltipColor: "#FF9800",
        },
      ],
    },
  };


  return (
    <section id="skills" className="py-28 px-4 relative" style={{ backgroundColor: themeColors.bg }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Explore My"
          highlight="Skills"
          subtitle="Technologies powering full-stack SaaS, social media & AI-driven platforms"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(techCategories).map(([key, category], i) => (
            <motion.div
              key={key}
              className="p-8 rounded-3xl"
              style={{
                background: `${themeColors.cardBg}55`,
                border: `1px solid ${themeColors.border}`,
                backdropFilter: "blur(16px)",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2" style={{ color: themeColors.primaryColor }}>
                {category.title}
              </h3>
              <p className="text-sm mb-6" style={{ color: themeColors.summeryText }}>
                {category.description}
              </p>

              <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                {category.icons.map((tech) => (
                  <div
                    key={tech.name}
                    className="relative flex flex-col items-center"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <motion.div
                      className="w-16 h-16 flex items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: themeColors.cardBg,
                        border: `1px solid ${themeColors.border}`,
                      }}
                      whileHover={{
                        scale: 1.15,
                        boxShadow: `0 0 18px ${tech.tooltipColor}55`,
                      }}
                    >
                      <img src={tech.src} alt={tech.name} className="w-8 h-8" />
                    </motion.div>

                    <AnimatePresence>
                      {hoveredTech === tech.name && (
                        <motion.div
                          className="absolute bottom-full mb-2 px-3 py-1 text-xs rounded-md text-white"
                          style={{ backgroundColor: tech.tooltipColor }}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                        >
                          {tech.name}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
