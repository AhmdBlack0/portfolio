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

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="app out-container">
      <Header />
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
      </Routes>
      <div className="divider" />
      <Footer />
    </div>
  )
}

export default App
