import Contacts from "./components/contact/Contacts";
import Features from "./components/feature/Features";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navabar/NavBar";
import Projects from "./components/project/Projects";
import Resume from "./components/resume/Resume";
import Testimonials from "./components/testimonial/Testimonials";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightTextColor">
   <div className="max-w-screen-2xl max-auto px-16">
   <NavBar/>
   <Hero/>
   <Features/>
   <Projects/>
   <Resume/>
   <Testimonials/>
   <Contacts/>
   </div>
    </div>
  );
}

export default App;
