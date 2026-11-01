import { useEffect } from "react"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import { Route, Routes, useLocation } from "react-router-dom"
import EcommerceAPI from "./Pages/EcommerceAPI/EcommerceAPI"
import SocailMediaAPI from "./Pages/SocialMediaAPI/SocialMediaAPI"
import Contact from "./Pages/Contact/Contact"
import HabitTrackerAPI from "./Pages/HabitTracker/HabitTrackerAPI"
import ToDoListAPI from "./Pages/ToDoListAPI/ToDoListAPI"
import AdvancedAUTHAPI from "./Pages/Advanced AUTH API/AdvancedAUTHAPI"
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail"
import DockerGuide from "./Pages/DockerGuide/DockerGuide"

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="w-[94%] sm:w-[90%] lg:w-[85%] max-w-7xl mx-auto my-4 sm:my-8 bg-zinc-900/90 light:bg-white text-zinc-100 light:text-zinc-900 rounded-2xl sm:rounded-3xl border border-zinc-800/80 light:border-zinc-200/90 shadow-2xl backdrop-blur-sm overflow-hidden flex flex-col transition-colors duration-300">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/social-media-api" element={<SocailMediaAPI />} />
          <Route path="/habit-tracker-api" element={<HabitTrackerAPI />} />
          <Route path="/advanced-auth-api" element={<AdvancedAUTHAPI />} />
          <Route path="/ecommerce-api" element={<EcommerceAPI />} />
          <Route path="/to-do-list-api" element={<ToDoListAPI />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/docker-guide" element={<DockerGuide />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
