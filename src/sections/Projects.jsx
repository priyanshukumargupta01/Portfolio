import { motion } from "framer-motion";
import React from 'react';
import logo from '../assets/logo.png';
import Car from '../assets/car.jpg';

const projects = [
  {
    id: 0,
    title: "ParkNova",
    description: "Smart parking management system that enables real-time slot availability, pre-booking, and usage analytics to track peak parking trends and occupancy metrics.",
    img: Car,
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Data Analytics", "Framer Motion"],
    github: "https://github.com/priyanshukumargupta01/ParkNova",
    web: "https://example.com/parknova"
  },
  {
    id: 1,
    title: "Data Analyst Portfolio",
    description: "Interactive personal portfolio designed to showcase data analytics skills, visualizations, experience, and projects with a responsive, modern UI.",
    img: logo,
    tags: ["React", "JavaScript", "Tailwind CSS", "Framer Motion", "Data Visualization"],
    github: "https://github.com/priyanshukumargupta01",
    web: "#"
  }
];

const Projects = () => {
  return (
    <section
      className="min-h-screen bg-black text-white py-20 px-6 md:px-16 w-full relative overflow-hidden"
      id="project"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-wide">My Projects</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#1cd8d2] via-[#00b8f8] to-[#302b63] mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(0,184,248,0.5)]"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          Here are some of my recent projects featuring web development and analytical insights
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            key={project.id}
            className="bg-gray-950 border border-gray-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(0,184,248,0.2)] flex flex-col justify-between"
          >
            <div>
              {/* Image Banner */}
              <div className="overflow-hidden h-56 bg-gray-900 flex items-center justify-center">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Description */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tags & Action Links */}
            <div className="px-6 pb-6 mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-white/5 border border-white/10 text-cyan-300 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors font-semibold"
                >
                  GitHub Repository →
                </a>
                <a
                  href={project.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline font-semibold"
                >
                  Live Preview ↗
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;