import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import { Route, Routes } from "react-router-dom"
import EcommerceAPI from "./Pages/EcommerceAPI"

function App() {

  return (
    <div className="app out-container">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/ecommerce-api" element={<EcommerceAPI />} />
      </Routes>
      <div className="divider" />
      <Footer />
    </div>
  )
}

export default App
