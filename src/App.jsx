"use client"

import { useState } from "react"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { ProductCategories } from "./components/ProductCategories"
import { VehicleBatteries } from "./components/VehicleBatteries"
import { HomeInverters } from "./components/HomeInverters"
import { IndustrialBatteries } from "./components/IndustrialBatteries"
import { Features } from "./components/Features"
import { About } from "./components/About"
import { Testimonials } from "./components/Testimonials"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { ScrollToTop } from "./components/ScrollToTop"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <ProductCategories />
      <VehicleBatteries />
      <HomeInverters />
      <IndustrialBatteries />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App

