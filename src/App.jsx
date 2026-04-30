import { lazy, Suspense } from 'react'
import './App.css'
import Navbar from "./Components/Navbar/navbar"
import BlurBlob from './BlurBlob'
import { ThemeProvider, useTheme } from './context/ThemeContext'

const Hero = lazy(() => import("./Components/Hero/Hero"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const Contact = lazy(() => import("./Components/Contact/contact"));
const Education = lazy(() => import("./Components/Education/education"));
const Experience = lazy(() => import("./Components/Experience/experience"));
const Footer = lazy(() => import("./Components/Footer/footer"));
const Skills = lazy(() => import("./Components/Skills/skills"));
const Work = lazy(() => import("./Components/Work/work"));

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-transparent">
    <div className="relative w-16 h-16">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-[#8245ec]/20 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-[#8245ec] border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
);


const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-[#050414]' : 'bg-slate-50'} transition-colors duration-300 min-h-screen relative`}>
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      <div className={`fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ${theme === 'dark' ? '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' : '[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]'}`}></div>

      <div className="relative">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Hero />
          <AboutUs />
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footer />
        </Suspense>
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

