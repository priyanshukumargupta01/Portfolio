import ParticalBackground from "../componenets/ParticleBackground";
import React, { useState, useEffect, useMemo } from "react";

export default function Home() {
  const roles = useMemo(() => ["Web Developer", "Software Developer"], []);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
      } else if (!deleting && subIndex === current.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((p) => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  return (
    <section
      id="Home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticalBackground />

      <div className="absolute inset-0">
        <div
          className="absolute -top-32 -left-32
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-([500px]) max-h-([500px])
          rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse"
        />

        <div
          className="absolute bottom-0 right-0
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-([500px]) max-h-([500px])
          rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00b8f8] to-[#1cd8d2]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse delay-500"
        />
      </div>

      {/* Typing text */}
      <h1 className="text-white text-3xl relative z-10">
        {roles[index].substring(0, subIndex)}
      </h1>
    </section>
  );
}