import Navbar from "./components/Navbar";
import SocialIconsMobile from "./components/Social_Icons_Mobile";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education_ProfessionalExperiences";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <SocialIconsMobile />
      <Routes>
        <Route path="/cv_adorni_cedric" element={<Home />} />
        <Route path="/cv_adorni_cedric/about" element={<About />} />
        <Route path="/cv_adorni_cedric/education" element={<Education />} />
        <Route path="/cv_adorni_cedric/skills" element={<Skills />} />
        <Route path="/cv_adorni_cedric/work" element={<Work />} />
        <Route path="/cv_adorni_cedric/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
