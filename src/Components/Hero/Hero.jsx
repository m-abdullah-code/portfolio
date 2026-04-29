import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import ProfileImg from '../../assets/profile2.png'
import ReactParallaxTilt from 'react-parallax-tilt'
import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'

const Hero = () => {
  const { theme } = useTheme();

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center py-20 px-5 overflow-hidden'
    >
      
      <div className='max-w-7xl mx-auto w-full relative z-10'>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-12'>

          {/* Left side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className={`text-3xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Hi, I am
            </h1>
            <h2 className={`text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#8245ec] to-[#a855f7] bg-clip-text text-transparent`}>
              Muhammad Abdullah
            </h2>
            
            <h3 className='text-xl sm:text-2xl font-semibold mb-6 flex items-center justify-center md:justify-start gap-2'>
              <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                I am a
              </span>
              <span className="text-[#8245ec]">
                <Typewriter
                  words={['Front end Developer', 'React Developer', 'API Integration', 'UI/UX Designer', 'Custom Web Design', 'Performance Optimization']}
                  loop
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>

            <p className={`text-base sm:text-lg mb-10 leading-relaxed max-w-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Front-End React Developer with 2+ years of experience in building modern, responsive, and scalable web applications. I specialize in creating clean UI/UX, dynamic components, and AI-assisted interfaces.
            </p>

            <div className='flex flex-wrap justify-center md:justify-start gap-4'>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/1WJ81H-qKYxJyGgDR2z1XaUM5wc_zr3eK/view?usp=drive_link" 
                target='_black' 
                rel="noopener noreferrer"
                className="inline-block text-white py-4 px-10 rounded-full text-lg font-bold transition shadow-lg"
                style={{
                  background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                  boxShadow: theme === 'dark' ? '0 0 30px rgba(130, 69, 236, 0.4)' : '0 10px 20px rgba(130, 69, 236, 0.3)',
                }}>
                DOWNLOAD CV
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#work"
                className={`inline-block py-4 px-10 rounded-full text-lg font-bold transition border-2 ${theme === 'dark' ? 'border-[#8245ec] text-white hover:bg-[#8245ec]/10' : 'border-gray-200 text-gray-900 hover:bg-gray-50'}`}
              >
                VIEW PROJECTS
              </motion.a>
            </div>
          </motion.div>

          {/* Right side - 3D Profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className='md:w-1/2 flex justify-center md:justify-end perspective-1000'
          >
            <ReactParallaxTilt
              glareEnable={true}
              glareMaxOpacity={0.4}
              glareColor="#ffffff"
              glarePosition="all"
              scale={1.1}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              transitionSpeed={2500}
              className="relative group"
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#8245ec] to-[#a855f7] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              <div className={`relative rounded-3xl w-64 h-64 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] border-4 border-white/20 overflow-hidden backdrop-blur-xl shadow-2xl ${theme === 'dark' ? 'bg-white/5' : 'bg-white/20'}`}>
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                />
                
                {/* Floating Tech Badges */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="react" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-20 left-5 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-8 h-8" alt="js" />
                </motion.div>
              </div>
            </ReactParallaxTilt>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
