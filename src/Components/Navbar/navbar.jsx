import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from '../../context/ThemeContext';
import ThemeTogglerButton from './ThemeTogglerButton';

const navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Check scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 max-w-7xl mx-auto px-5 right-0 left-0 ${isScrolled
      ? (theme === 'dark' ? "bg-[#050414]/50 backdrop-blur-md shadow-md" : "bg-white/70 backdrop-blur-md shadow-sm")
      : "bg-transparent"
      }`}>
      <div className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'} py-5 flex justify-between items-center`}>

        <div className='text-lg font-semibold cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Logo */}
          <span className='text-[#8245ec]'>&lt;</span>
          <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Muhammad</span>
          <span className='text-[#8245ec]'>/</span>
          <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Abdullah</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] transition-colors ${activeSection === item.id ? "text-[#8245ec]" : ""
              } `}>
              <button className='cursor-pointer font-medium' onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media Icons & Theme Toggle */}
        <div className='hidden md:flex items-center space-x-6'>
          <div className='flex space-x-4'>
            <a href="https://github.com/M-Abdullah-code" target='_blank' className={`${theme === 'dark' ? 'text-gray-300 hover:text-[#8245ec]' : 'text-gray-600 hover:text-[#8245ec]'} transition-colors`}>
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/m-abdullah557" target='_blank' className={`${theme === 'dark' ? 'text-gray-300 hover:text-[#8245ec]' : 'text-gray-600 hover:text-[#8245ec]'} transition-colors`}>
              <FaLinkedin size={22} />
            </a>
          </div>

          <ThemeTogglerButton />
        </div>

        {/* Mobile Menu Toggle & Theme Toggle */}
        <div className='md:hidden flex items-center space-x-4'>
          <ThemeTogglerButton />

          {
            isOpen ? (
              <FiX className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(true)} />
            )
          }
        </div>

      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] ${theme === 'dark' ? 'bg-[#050414]/90' : 'bg-white/95'} backdrop-blur-lg z-50 rounded-2xl shadow-xl overflow-hidden border ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
          <ul className={`flex flex-col items-center space-y-5 py-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {menuItems.map((item) => (
              <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] font-medium transition-colors ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}

            <div className='flex space-x-6 pt-4'>
              <a href="https://github.com/M-Abdullah-code" target='_blank' className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <FaGithub size={26} />
              </a>
              <a href="https://www.linkedin.com/in/m-abdullah557" target='_blank' className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                <FaLinkedin size={26} />
              </a>
            </div>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default navbar
