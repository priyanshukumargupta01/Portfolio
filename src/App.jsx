
import Navbar from "./componenets/Navbar";
import customCursor from "./componenets/CustomCursor"
import ParticalBackground from "./componenets/ParticleBackground"
import About from "./sections/About"
import Home from "./sections/Home";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Project from "./sections/Projects";
import Skill from "./sections/Skills";
import Testimonial from "./sections/Testimonials"; 

const App = () => {
  return (
    <div className="relative gradient text-black">
      <customCursor />
      <ParticalBackground /> 
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />

    </div>
  )
}

export default App