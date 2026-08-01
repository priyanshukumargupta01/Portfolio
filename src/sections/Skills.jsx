import { motion } from "framer-motion";

const SkillsInfo = [
  {
    title: "Data Analytics & BI",
    skills: [
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "SQL",
        logo: "https://www.svgrepo.com/show/331760/sql.svg",
      },
      {
        name: "Power BI",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
      },
      {
        name: "Excel",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
      },
      {
        name: "Tableau",
        logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
      },
    ],
  },
  {
    title: "Data Tools & Libraries",
    skills: [
      {
        name: "Pandas",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
      {
        name: "NumPy",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      {
        name: "Jupyter",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      },
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
    ],
  },
  {
    title: "Languages",
    skills: [
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "SQL",
        logo: "https://www.svgrepo.com/show/331760/sql.svg",
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "C",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
    ],
  },
];

const glows = [
  "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
  "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
  "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
];

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient w-full min-h-screen relative bg-black overflow-hidden"
  >
    <div className="absolute inset-0 pointer-events-none">
      {glows.map((c, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2] animate-pulse ${c}`}
        />
      ))}
    </div>
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#ffffff] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-xl font-semibold">
        A collection of my data analytics skills, tools, and technical expertise
      </p>
    </div>

    <motion.div
      className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-transparent backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex hover:scale-105 items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center transition-transform"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
                <span className="text-xs sm:text-sm text-gray-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  </section>
);

export default Skills;