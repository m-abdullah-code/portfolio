import React, { useState } from 'react'
import { projects } from '../../constants'
import { useTheme } from '../../context/ThemeContext'
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion'

const Work = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('All');
  
  const categories = ['All', 'React/Next', 'WordPress'];
  
  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id='work'
      className={`py-24 px-5 font-sans relative overflow-hidden ${theme === 'dark' ? 'bg-[#050414]' : 'bg-white'}`}
    >
      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Section Title */}
        <div className='text-center mb-16'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            My <span className="text-[#8245ec]">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className='h-1.5 bg-[#8245ec] mx-auto mt-4 rounded-full'
          ></motion.div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore my latest work across different technologies. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-16">
          <div className={`flex p-1.5 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-gray-100 border-gray-200'}`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative ${
                  activeTab === cat 
                    ? 'text-white' 
                    : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {activeTab === cat && (
                  <motion.div 
                    layoutId="active-tab"
                    className="absolute inset-0 bg-[#8245ec] rounded-xl shadow-[0_0_20px_rgba(130,69,236,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className={`group relative rounded-3xl backdrop-blur-md transition-all duration-500 border ${theme === 'dark'
                  ? 'bg-white/5 border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]'
                  : 'bg-white border-gray-100 shadow-xl'}`}
              >
                {/* Image Container */}
                <div className='relative w-full h-56 overflow-hidden'>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                  />
                  <div className='absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 gap-4'>
                    <a 
                      href={project.github} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='p-3 rounded-full bg-white text-gray-900 hover:bg-[#8245ec] hover:text-white transition-colors'
                    >
                      <FiGithub size={22} />
                    </a>
                    <a 
                      href={project.webapp} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='p-3 rounded-full bg-white text-gray-900 hover:bg-[#8245ec] hover:text-white transition-colors'
                    >
                      <FiExternalLink size={22} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className='p-8'>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded bg-[#8245ec]/10 text-[#8245ec] border border-[#8245ec]/20`}>
                       {project.category}
                    </span>
                  </div>
                  
                  <div className="relative group/desc">
                    <p 
                      className={`mb-6 text-sm leading-relaxed line-clamp-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} cursor-help`}
                    >
                      {project.description}
                    </p>
                    
                    {/* Premium Tooltip */}
                    <div className={`absolute bottom-full left-0 mb-4 w-full p-4 rounded-2xl opacity-0 invisible group-hover/desc:opacity-100 group-hover/desc:visible transition-all duration-300 z-50 border shadow-2xl backdrop-blur-xl translate-y-2 group-hover/desc:translate-y-0 ${
                      theme === 'dark' 
                        ? 'bg-[#1a1a2e]/95 border-white/10 text-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                        : 'bg-white/95 border-gray-200 text-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
                    }`}>
                      <p className="text-sm leading-relaxed">
                        {project.description}
                      </p>
                      {/* Arrow */}
                      <div className={`absolute top-full left-6 -mt-px border-8 border-transparent ${
                        theme === 'dark' ? 'border-t-[#1a1a2e]/95' : 'border-t-white/95'
                      }`}></div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-[10px] font-bold uppercase tracking-wider rounded-lg px-3 py-1.5 border ${theme === 'dark'
                          ? 'bg-[#8245ec]/10 text-purple-300 border-white/5'
                          : 'bg-purple-50 text-purple-600 border-purple-100'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
