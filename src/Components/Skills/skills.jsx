import { SkillsInfo } from '../../constants'
import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id='skills' className={`py-24 px-5 relative overflow-hidden ${theme === 'dark' ? 'bg-[#050414]' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            Technical <span className="text-[#8245ec]">Proficiency</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className='h-1.5 bg-[#8245ec] mx-auto mt-4 rounded-full'
          ></motion.div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            A collection of my technical skills and expertise honed through various projects and experience.
          </p>
        </div>

        {/* Skills Categories */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {SkillsInfo.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, x: catIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-8 rounded-3xl border backdrop-blur-xl ${theme === 'dark' 
                ? 'bg-white/5 border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
                : 'bg-white border-gray-100 shadow-xl'}`}
            >
              <h3 className={`text-2xl font-bold mb-8 text-center bg-gradient-to-r from-[#8245ec] to-[#a855f7] bg-clip-text text-transparent`}>
                {category.title}
              </h3>

              <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 ${theme === 'dark' 
                      ? 'bg-white/5 border-white/10 hover:border-[#8245ec] hover:bg-[#8245ec]/5' 
                      : 'bg-gray-50 border-gray-100 hover:border-[#8245ec] hover:bg-white'}`}
                  >
                    <img src={skill.logo} alt={`${skill.name} logo`} className='w-12 h-12 object-contain mb-3' />
                    <span className={`text-sm font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
