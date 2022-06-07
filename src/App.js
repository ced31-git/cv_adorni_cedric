import Navbar from "./components/Navbar";
import SocialIconsMobile from "./components/Social_Icons_Mobile";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education_ProfessionalExperiences";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <SocialIconsMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/*<Home />
      <About />
      <Education />
      <Skills />
      <Work /> 
  <Contact />*/}
    </>
  );
}

export default App;
