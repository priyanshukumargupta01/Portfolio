import { motion } from "framer-motion";
import google from "../assets/google.png";

const experiences = [
  {
    id: 2,
    company: "Google",
    position: "Google Student Ambassador",
    duration: "March 2026 - Present",
    description: "As a selected Google Student Ambassador again, I continue to promote Google technologies and developer tools within my campus community. I organize events, share insights, and support fellow students in their tech journeys.",
    img: google
  },
  {
    id: 1,
    company: "Google",
    position: "Google Student Ambassador",
    duration: "July 2025 - December 2025",
    description: "As a Google Student Ambassador, I actively promoted Google technologies and developer tools within my campus community. I organized sessions, shared knowledge, and helped fellow students explore opportunities in technology while building a strong developer network.",
    img: google
  },
];

const glows = [
  "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
  "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
];


const Experience = () => {
  return (
    <section
      id='experience'
      className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-black min-h-screen font-sans bg-skills-gradient'
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] animate-pulse ${c}`}
          />
        ))}
      </div>
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>EXPERIENCE</h2>
        <div className='w-32 h-1 bg-white mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </div>

      {/* Experience Data */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
              }`}>

            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 w-10 h-10 bg-gray-400 border-4 border-[gray-400] rounded-full flex items-center hover:scale-110 justify-center">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-8 h-8 object-cover rounded-full"
              />
            </div>
            {/* content Section */}
            <motion.div
              className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.4 }}
              className="bg-[rgba(255,255,255,0.1)] text-white p-6 rounded-lg shadow-2xl w-full sm:w-1/2 ">
              <div className="flex mb-4 items-center">
                <img className="w-15 h-15 object-cover rounded" src={experience.img} />
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <h6>{experience.position}</h6>
                  <p className="text-gray-400">{experience.duration}</p>
                </div>
              </div>
              <p className="mt-4">{experience.description}</p>
            </motion.div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;