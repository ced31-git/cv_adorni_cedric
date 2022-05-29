import Navbar from "./components/Navbar";
import SocialIconsMobile from "./components/Social_Icons_Mobile";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
/*import Formation from "./components/Formation";*/

function App() {
  return (
    <div>
      <Navbar />
      <SocialIconsMobile />
      <Home />
      <About />
      {/* <Formation /> */}
      <Skills />
      <Work /> 
     <Contact />
    </div>
  );
}

export default App;
