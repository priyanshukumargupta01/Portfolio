
import Navbar from "./componenets/Navbar";
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
    <div>
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