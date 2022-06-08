import Navbar from "./components/Navbar";
import SocialIconsMobile from "./components/Social_Icons_Mobile";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education_ProfessionalExperiences";

function App() {
  return (
    <>
      <Navbar />
      <SocialIconsMobile />
      <Home />
      <About />
      <Education />
      <Skills />
      <Work /> 
      <Contact />
    </>
  );
}

export default App;
