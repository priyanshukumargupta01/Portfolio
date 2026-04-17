

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
    </section>
  );
};
 
export default Experience;