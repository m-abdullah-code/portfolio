import { experiences } from '../../constants'
import { useTheme } from '../../context/ThemeContext'

const Experience = () => {
  const { theme } = useTheme();

  return (
    <section id='experience'
      className={`py-24 pb-24 px-5 font-sans clip-path-custom-2 ${theme === 'dark' ? 'bg-skills-gradiant' : 'bg-slate-50'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <div className='text-center mb-16'>
          <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Professional Experience</h2>
          <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
          <p className={`mt-4 text-lg font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>A collection of my work experience and the roles I have taken in various organizations</p>
        </div>

        {/* Experience Cards */}
        <div className='flex flex-col gap-10'>
          {experiences.map((experience) => (
            <div key={experience.id}
              className={`w-full p-6 sm:p-10 rounded-3xl border backdrop-blur-md transform transition-all duration-300 hover:shadow-2xl ${theme === 'dark'
                ? 'bg-gray-900 border-white/10 shadow-[0_0_30px_rgba(130,69,236,0.15)]'
                : 'bg-white border-gray-100 shadow-xl'}`}>
              
              {/* Header: Company and Date */}
              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6'>
                <div className='flex flex-col gap-1'>
                  <h3 className={`text-2xl sm:text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                    {experience.company}
                  </h3>
                  <div className='flex items-center gap-2'>
                    <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                      {experience.role}
                    </h4>
                  </div>
                  {experience.location && (
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                      {experience.location}
                    </p>
                  )}
                </div>
                
                {/* Date Badge */}
                <span className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap self-start sm:self-center ${
                  theme === 'dark' 
                  ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30' 
                  : 'bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white shadow-lg'
                }`}>
                  {experience.date}
                </span>
              </div>

              {/* Description Bullet Points */}
              <div className='mt-4 space-y-3'>
                {experience.desc.map((point, idx) => (
                  <div key={idx} className='flex items-start gap-4'>
                    <span className='mt-1.5 flex-shrink-0'>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 7L15 12L10 17" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <p className={`text-sm sm:text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600 font-medium'}`}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills List */}
              <div className='mt-8 pt-6 border-t border-gray-100/10'>
                <div className='flex items-center gap-2 mb-3'>
                   <span className={`text-sm font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Key Skills:</span>
                </div>
                <ul className='flex flex-wrap gap-2'>
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className={`px-4 py-1.5 text-xs sm:text-sm rounded-xl border transition-all duration-300 ${theme === 'dark'
                        ? 'bg-[#8245ec]/10 text-purple-300 border-purple-500/20 hover:bg-[#8245ec]/20 hover:border-purple-500/40'
                        : 'bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100'}`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
