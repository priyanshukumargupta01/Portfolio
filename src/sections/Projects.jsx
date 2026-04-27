import { i, img } from 'framer-motion/client';
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
    id : 0,
    title: "SmartPark",
    description: "SmartParking is an online parking management system for malls that allows users to pre-book parking slots in advance. It helps reduce waiting time, manage parking space efficiently, and improve the overall user experience.", 
    img: logo, 
    tags: ["React","HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB" ,"tailwind", "framer-motion"],
    github: "https://github.com/user/project-one",
    web: "https://example.com/project-one"
  },
  {
    id : 1,
    title: "Project Two",
    description: "My portfolio is my personal website where I showcase my projects, skills, and basic information about myself. It is designed to be simple, responsive, and easy to use, so anyone can quickly understand my work and experience.", 
    img: Car,
    tags: ["React","HTML", "CSS", "JavaScript", "tailwind", "framer-motion"],
    github: "https://github.com/user/project-two",
    web: "https://example.com/project-two"
  }
];

const Projects = () => {
  return (
    <section
      className='min-h-screen bg-black w-full'
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
      <div>
        <h2 className='text-4xl font-bold mb-4 justify-center flex'>My Projects</h2>
        <div className='w-32 h-1 bg-white mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold flex justify-center'>Here are some of my recent projects:</p>
      </div> 
    </section>
  )
}

export default Projects