
import Navbar from "./Navbar";
import Herosection from "./Herosection";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";


function App(){







  return(
 
  <div className="text-white bg-[#191923] dark:text-[#0f1729] dark:bg-white">
    
  <Navbar></Navbar>
  <Herosection></Herosection>
  <Skills></Skills>
  <Experience></Experience>
  <Projects></Projects>
  <Education></Education>
<Contact></Contact>
<Footer></Footer>
  </div>
  )
}
export default App;