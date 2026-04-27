import { section } from "framer-motion/client";
import ParticalBackground from "../componenets/ParticleBackground";
import React from "react";
import astra from "../assets/astra.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  return(

    

    <section
      id="contact" 
      className="w-full min-h-screen relative flex items-center bg-black mb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-contact-gradient overflow-hidden"
      >
        <ParticalBackground />
        <div>
          <img 
          src={astra} 
          alt="Astra" 
          className="h-50 w-50 md:h-50 md:w-50 lg:h-100 lg:w-100 animate-pulse"
          />
        </div>
        <div className="absolute flex flex-col space-y-4 bg-transparent backdrop-blur-md px-10 py-8 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send</button>
        </div>

    </section>
    );
};

export default Contact;
