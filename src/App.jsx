import { lazy } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/navbar"
const Hero = lazy(() => import("./Components/Hero/Hero"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const Contact = lazy(() => import("./Components/Contact/contact"));
const Education = lazy(() => import("./Components/Education/education"));
const Experience = lazy(() => import("./Components/Experience/experience"))
const Footer = lazy(() => import("./Components/Footer/footer"))
const Skills = lazy(() => import("./Components/Skills/skills"))
const Work = lazy(() => import("./Components/Work/work"));
const BlurBlob = lazy(() => import('./BlurBlob'))

import { ThemeProvider, useTheme } from './context/ThemeContext'

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-[#050414]' : 'bg-slate-50'} transition-colors duration-300 min-h-screen relative`}>
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }}></BlurBlob>

      <div className={`fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ${theme === 'dark' ? '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' : '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]'}`}></div>

      <div className="relative">
        <Navbar />
        <Hero />
        <AboutUs />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
