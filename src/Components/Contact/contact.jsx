import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { useTheme } from '../../context/ThemeContext'
import { motion } from 'framer-motion'
import { Mail, User, Tag, MessageSquare, Send } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const { theme } = useTheme();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dagy84p", 
        "template_phr7fnj", 
        form.current,
        "4f--HfXhDe-YUWbGh"   
      )
      .then(
        () => {
          form.current.reset(); 
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: theme === 'dark' ? 'dark' : 'light',
          });
        },
        (error) => {
          toast.error("Failed to send Message. Please Try Again", {
            position: "top-right",
            autoClose: 3000,
            theme: theme === 'dark' ? 'dark' : 'light',
          });
        }
      )
  }

  return (
    <section id='contact' className={`py-24 px-5 relative overflow-hidden ${theme === 'dark' ? 'bg-[#050414]' : 'bg-white'}`}>
      <ToastContainer />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className='text-center mb-16'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
          >
            Get In <span className="text-[#8245ec]">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className='h-1.5 bg-[#8245ec] mx-auto mt-4 rounded-full'
          ></motion.div>
          <p className={`mt-6 text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`lg:w-1/3 p-10 rounded-3xl border backdrop-blur-xl ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-100'}`}
          >
            <h3 className={`text-2xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact Information</h3>
            
            <div className="space-y-8">
              <a href="mailto:devmabdullah5@gmail.com" className="flex items-center gap-4 group cursor-pointer transition-transform hover:scale-105 origin-left">
                <div className="p-4 rounded-2xl bg-[#8245ec]/10 text-[#8245ec] group-hover:bg-[#8245ec] group-hover:text-white transition-colors shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider group-hover:text-[#8245ec] transition-colors">Email</p>
                  <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>devmabdullah5@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/923181414152" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer transition-transform hover:scale-105 origin-left">
                <div className="p-4 rounded-2xl bg-[#8245ec]/10 text-[#8245ec] group-hover:bg-[#25D366] group-hover:text-white transition-colors shadow-sm">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider group-hover:text-[#25D366] transition-colors">WhatsApp</p>
                  <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>+923181414152</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-[#8245ec]/10 text-[#8245ec]">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Availability</p>
                  <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Freelance / Full-time</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <div className="p-6 rounded-2xl bg-gradient-to-br from-[#8245ec] to-[#a855f7] text-white">
                  <p className="font-bold mb-2">Let's build something amazing together!</p>
                  <p className="text-sm opacity-80">I'm currently open to new opportunities and collaborations.</p>
               </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`lg:w-2/3 w-full p-8 md:p-12 rounded-3xl border backdrop-blur-xl ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100 shadow-2xl'}`}
          >
            <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className="space-y-2">
                <label className={`text-sm font-bold ml-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" name='user_name' placeholder='John Doe' required
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border focus:ring-2 focus:ring-[#8245ec] transition-all outline-none ${theme === 'dark' ? 'bg-white/5 text-white border-white/10' : 'bg-gray-50 text-gray-900 border-gray-200'}`} />
                </div>
              </div>

              <div className="space-y-2">
                <label className={`text-sm font-bold ml-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="email" name='user_email' placeholder='email@example.com' required
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border focus:ring-2 focus:ring-[#8245ec] transition-all outline-none ${theme === 'dark' ? 'bg-white/5 text-white border-white/10' : 'bg-gray-50 text-gray-900 border-gray-200'}`} />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className={`text-sm font-bold ml-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Subject</label>
                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="text" name='subject' placeholder='Project Inquiry' required
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border focus:ring-2 focus:ring-[#8245ec] transition-all outline-none ${theme === 'dark' ? 'bg-white/5 text-white border-white/10' : 'bg-gray-50 text-gray-900 border-gray-200'}`} />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className={`text-sm font-bold ml-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                  <textarea name="message" placeholder='Tell me about your project...' rows='5'
                    className={`w-full pl-12 pr-4 py-4 rounded-2xl border focus:ring-2 focus:ring-[#8245ec] transition-all outline-none resize-none ${theme === 'dark' ? 'bg-white/5 text-white border-white/10' : 'bg-gray-50 text-gray-900 border-gray-200'}`} ></textarea>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type='submit'
                className='md:col-span-2 w-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] py-5 text-white font-bold rounded-2xl shadow-xl shadow-purple-500/20 flex items-center justify-center gap-3 transition-all cursor-pointer'
              >
                <span>SEND MESSAGE</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
