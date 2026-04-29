import React from 'react'
import { educations } from '../../constants';
import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const { theme } = useTheme();

  return (
    <section id='education'
      className={`py-24 px-5 relative overflow-hidden ${theme === 'dark' ? 'bg-[#050414]' : 'bg-slate-50'}`}>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8245ec] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <div className='text-center mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Educational <span className="text-[#8245ec]">Journey</span>
            </h2>
            <div className='w-24 h-1.5 bg-[#8245ec] mx-auto rounded-full'></div>
            <p className={`mt-6 text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                My academic background has been the foundation of my professional growth. Here's my educational history.
            </p>
          </motion.div>
        </div>

        {/* Modern Education Grid */}
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {educations.map((edu, index) => (
            <motion.div 
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-3xl border backdrop-blur-xl flex flex-col h-full transition-all duration-500 ${theme === 'dark'
                ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-[#8245ec]/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
                : 'bg-white border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]'}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl ${theme === 'dark' ? 'bg-[#8245ec]/20' : 'bg-[#8245ec]/10'}`}>
                   <GraduationCap className="w-8 h-8 text-[#8245ec]" />
                </div>
                <div className="w-16 h-16 bg-white rounded-2xl overflow-hidden p-2 shadow-inner">
                   <img src={edu.img} alt={edu.school} className='w-full h-full object-contain' />
                </div>
              </div>

              <div className="flex-grow">
                <h3 className={`text-2xl font-bold mb-2 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {edu.degree}
                </h3>
                <h4 className={`text-lg font-medium mb-4 text-[#8245ec]`}>
                  {edu.school}
                </h4>

                <div className="flex flex-col gap-3 mb-6">
                   <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>{edu.date}</span>
                   </div>
                   <div className="flex items-center gap-2 text-sm font-bold">
                      <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20">
                        {edu.grade || "Completed"}
                      </div>
                   </div>
                </div>

                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {edu.desc}
                </p>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#8245ec]">
                  Academic Excellence
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
