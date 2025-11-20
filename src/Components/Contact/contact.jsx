import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const contact = () => {

  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dagy84p", //Replace with your EmailJs Services ID
        "template_phr7fnj", //Replace with your EmailJs template ID
        form.current,
        "4f--HfXhDe-YUWbGh" //Replace with your EmailJs public key    
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); //reset from fields after sending
          toast.success("Message send successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        },
        (error) => {
          toast.error("Error Sending Message.", error);
          toast.error("Failed to send Message. Please Try Again", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
          });
        }
      )
  }

  return (
    <section id='contact'
      className='flex flex-col items-center justify-center py-24  max-w-7xl mx-auto px-5'>

      <ToastContainer />

      {/* Section title */}
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-white'>Contact</h2>
        <div className='w-32 h-1 bg-purple-500 mx-auto mt-4'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>I’d love to hear from you—reach out for any opportunities or questions!</p>
      </div>

      {/* Contact form */}
      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700'>
        <h3 className='text-xl font-semibold text-white text-center'>
          Connect with me
        </h3>

        <form ref={form} onSubmit={sendEmail} className='mt-4 flex flex-col space-y-4'>
          <input type="email" name='user_email' placeholder='Your Email' required className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
          <input type="text" name='user_name' placeholder='Your Name' required className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
          <input type="text" name='subject' placeholder='Subject' required className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' />
          <textarea name="message" placeholder='Message' rows='4' className='w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500' ></textarea>

          {/* Send button */}
          <button type='submit' className='w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition cursor-pointer'>SEND</button>
        </form>
      </div>

    </section>
  )
}

export default contact
