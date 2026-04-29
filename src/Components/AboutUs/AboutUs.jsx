import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { Award, Briefcase, Users, Code2 } from 'lucide-react'

const AboutUs = () => {
  const { theme } = useTheme();

  const stats = [
    { label: 'Years Experience', value: '2+', icon: <Briefcase className="w-6 h-6" /> },
    { label: 'Projects Completed', value: '20+', icon: <Code2 className="w-6 h-6" /> },
    { label: 'Happy Clients', value: '15+', icon: <Users className="w-6 h-6" /> },
    { label: 'Awards Won', value: '3', icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <section id="about" className={`py-24 relative overflow-hidden ${theme === 'dark' ? 'bg-[#050414]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              About <span className="text-[#8245ec]">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#8245ec] rounded-full mb-8"></div>
            
            <p className={`text-lg mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              I am a passionate Front-End React Developer dedicated to crafting immersive and high-performance web experiences. With a solid foundation in modern technologies like React.js, Next.js, and Tailwind CSS, I bridge the gap between complex backend logic and elegant user interfaces.
            </p>
            
            <p className={`text-lg mb-10 leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              My journey started with a fascination for how design meets code. Today, I specialize in building scalable dashboards, AI-integrated applications, and pixel-perfect landing pages that not only look stunning but also convert.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-2xl border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-100 shadow-sm'}`}
                >
                  <div className="text-[#8245ec] mb-3">{stat.icon}</div>
                  <h4 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{stat.value}</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80" 
                    alt="Work Setup" 
                    className="w-full h-auto object-cover hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white font-medium italic">"Design is not just what it looks like and feels like. Design is how it works."</p>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8245ec]/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
