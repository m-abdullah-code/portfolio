import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import ProfileImg from '../../assets/profile2.png'
import ReactParallaxTilt from 'react-parallax-tilt'

const about = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >

      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>

        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-light'>
            Hi, I am
          </h1>
          {/* name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-light'>Muhammad Abdullah</h2>
          {/* Skills heading with typing effect */}
          <h3 className='text-xl sm:text-2xl font-semibold mb-4 text-[#8245ec] leading-light'>
            <span className='text-white mr-2'>
              I am a
            </span>
            <span style={{ color: '#8245ec' }}>
              <Typewriter
                words={['Front end Developer', 'React Developer', 'UI/UX Designe', 'Custom Web Design', 'Coder', 'Performance Optimization']}
                loop
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
          {/* About ME paragraph */}
          <p className='text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            {/* Creative and detail-oriented Front-End Developer with 2+ years of experience building responsive, user-friendly websites from sleek portfolios to dynamic eCommerce platforms. Skilled in HTML, CSS, Bootstrap, JavaScript, and jQuery, with a strong focus on clean design, performance, and cross-browser compatibility. Adept at both developing from scratch and optimizing existing sites to enhance functionality and visual appeal. Currently expanding expertise in React.js to deliver modern, component-based web applications that align with user needs and business goals. */}
            Front-End Developer with 2+ years of experience creating responsive, user-friendly websites, from portfolios to eCommerce platforms. Skilled in HTML, CSS, Bootstrap, JavaScript, and jQuery, with a focus on clean design and performance. Currently enhancing expertise in React.js to deliver modern, dynamic web applications tailored to client needs.
          </p>
          {/* Resume button */}
          <a href="https://drive.google.com/file/d/1SuijmLslpX2V1E7l2bD9VIErbK38qWhd/view?usp=sharing" target='_black' rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}>
            DOWNLOAD CV
          </a>
        </div>

        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <ReactParallaxTilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            scale={1.05}
            transitionSpeed={2000}
            className=" rounded-full  bg-white w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 overflow-hidden drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
          >
            <div className="w-full h-full">
              <img
                src={ProfileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </ReactParallaxTilt>
        </div>


      </div>

    </section>
  )
}

export default about
