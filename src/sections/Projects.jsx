import { motion } from "framer-motion";
import React from 'react'
import logo from '../assets/logo.png';
import Car from '../assets/car.jpg';


// const glows = [
//   "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
//   "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
//   "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
// ];


const projects = [
  {
    id: 0,
    title: "SmartPark",
    description: "SmartParking is an online parking management system for malls that allows users to pre-book parking slots in advance. It helps reduce waiting time, manage parking space efficiently, and improve the overall user experience.",
    img: Car,
    tags: ["React", "HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB", "tailwind", "framer-motion"],
    github: "https://github.com/user/project-one",
    web: "https://example.com/project-one"
  },
  {
    id: 1,
    title: "Portfolio",
    description: "My portfolio is my personal website where I showcase my projects, skills, and basic information about myself. It is designed to be simple, responsive, and easy to use, so anyone can quickly understand my work and experience.",
    img: logo,
    tags: ["React", "HTML", "CSS", "JavaScript", "tailwind", "framer-motion"],
    github: "https://github.com/user/project-two",
    web: "https://example.com/project-two"
  }
];

const Projects = () => {
  return (
    <section
      className='h-min-screen bg-black w-full'
      id='project'
    >
      {/* <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div> */}
      <div className='text-center mb-16 '>
        <h2 className='text-4xl font-bold mb-4 justify-center flex'>My Projects</h2>
        <div className='w-32 h-1 bg-white mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold flex justify-center'>Here are some of my recent projects:</p>
      </div>
      <div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      >
        {projects.map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            key={project.id} 
            className='bg-gray-950 hover:scale-95 rounded-lg overflow-hidden m-10 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'>
            <img src={project.img} alt={project.title} className='hover:scale-95 w-full h-56 object-cover' />
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
              <p className='text-gray-400 mb-4'>{project.description}</p>
              <div className='flex flex-wrap gap-2'>
                {project.tags.map((tag, index) => (
                  <span key={index} className='bg-gray-700  hover:scale-105  text-white text-xs px-2 py-1 rounded'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}


      </div>
    </section>
  )
}

export default Projects