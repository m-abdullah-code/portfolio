import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext'

const footer = () => {
  const { theme } = useTheme();

  // Smooth Scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className={`py-12 max-w-7xl mx-auto px-5 border-t ${theme === 'dark' ? 'text-white border-white/5' : 'text-gray-900 border-gray-100'}`}>
      <div className='container mx-auto text-center'>
        <h2 className='text-2xl font-bold bg-gradient-to-r from-[#8245ec] to-[#a855f7] bg-clip-text text-transparent italic'>
          Muhammad Abdullah
        </h2>

        {/* Navigation Links */}
        <nav className='flex flex-wrap justify-center gap-6 mt-6'>
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experiences", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className={`text-sm sm:text-base font-medium transition-colors cursor-pointer ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
            >
              {item.name}
            </button>
          ))
          }
        </nav>

        {/* Social Media Icons */}
        <div className='flex justify-center space-x-6 mt-8'>
          {[
            { icon: <FaLinkedin size={22} />, link: "https://www.linkedin.com/in/m-abdullah557/" },
            { icon: <FaGithub size={22} />, link: "https://github.com/M-Abdullah-code" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
              className={`transition-all transform hover:scale-110 ${theme === 'dark' ? 'text-gray-400 hover:text-[#8245ec]' : 'text-gray-500 hover:text-[#8245ec]'}`}
            >
              {item.icon}
            </a>
          ))
          }
        </div>

        {/* Copyright text */}
        <p className={`text-xs sm:text-sm mt-8 font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
          © {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default footer
