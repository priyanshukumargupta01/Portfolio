import React from 'react'


// const glows = [
//   "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
//   "bottom-0 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
//   "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
// ];


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