import React, { useEffect } from 'react'
import ChatBubbles from '../Components/ChatBubbles'
import { motion } from 'motion/react';
import { IoIosPaperPlane } from "react-icons/io";
import { RiWhatsappLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { TbBrandGithubFilled } from "react-icons/tb";
import { TfiLinkedin } from "react-icons/tfi";
import { useForm, ValidationError } from '@formspree/react';
import { BiSolidError } from "react-icons/bi";
import { GiPrayer } from "react-icons/gi";


const Contact = () => {
  const [state, handleSubmit] = useForm("mzzdbyda");
  const icons = [
    {
      Icon: TfiLinkedin,
      link: 'https://www.linkedin.com/in/malik-awesu',
      className: 'text-[25px] hover:text-[#9BC59D]',
      delay: 1.6
    },
    {
      Icon: TbBrandGithubFilled,
      link: 'https://github.com/XIMalik',
      className: 'text-[25px] hover:text-[#9BC59D]',
      delay: 1.4
    },
    {
      Icon: RiWhatsappLine,
      link: 'https://wa.me/8180991568',
      className: 'text-[25px] hover:text-[#9BC59D]',
      delay: 1.2
    },
    {
      Icon: SiGmail,
      link: 'mailto:abdulmalikawesu@gmail.com',
      className: 'text-[25px] hover:text-[#9BC59D]',
      delay: 1
    },
  ];

  useEffect(() => {
    document.title = "Let's Talk - Malik Awesu";
  }, []);

  return (
    <div className='major-element mt-[50px] flex flex-col h-full gap-10 my-10 justify-between items-start rounded-none'>
      <div className="flex w-full items-start gap-5 md:items-center flex-col md:flex-row text-left justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.8 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className='julius font-bold text-[110px] lg:text-[150px] uppercase text-white/10'>Let's Talk</h1>
        </motion.div>
        <div className="bottom flex justify-between px-10 py-5 md:border-r-[#9BC59D] md:border-r-[0.5px] border-l-[#9BC59D] border-l-[0.5px] md:border-l-0">
        <div className="text-left flex gap-5 rounded-none">
            {icons.map((icon, index) => (
              <motion.a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className={icon.className}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.2,
                  delay: icon.delay,
                }}
              >
                <icon.Icon className='rounded-none' />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <span className='my-10 border-r-[0.5px] pr-10
       border-r-[#9BC59D]'>Leave a message or reach me via any of my social media!</span>
      <div className="flex flex-col justify-between gap-[70px] w-full lg:flex-row-reverse items-center">

        <div className="w-full lg:w-[50%]">
          <ChatBubbles />
        </div>

        <div className="w-full lg:w-[50%]">
          {/* Conditionally render form or success message */}
          {!state.succeeded ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
              <h1 className='julius text-[#9BC59D]'>Contact Form</h1>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Armando Broja"
                required
                className="input rounded-none bg-[#04232478] border-l-[#9BC59D] w-full placeholder-white/30 hover:scale-[101%] focus:scale-[102%] ease-in duration-300 focus:border-l-[#9BC59D] focus:outline-none"
              />
              <ValidationError prefix="name" field="name" errors={state.errors} />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="armandob@gmail.com"
                required
                className="input rounded-none bg-[#04232478] border-l-[#9BC59D] w-full placeholder-white/30 hover:scale-[101%] focus:scale-[102%] ease-in duration-300 focus:border-l-[#9BC59D] focus:outline-none"
              />
              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
                className="text-red-600 uppercase"
              />

              <textarea
                id="message"
                name="message"
                placeholder="Can we talk about the building of a web application for my small business?"
                required
                className="textarea textarea-bordered text-md bg-[#04232478] border-l-[#9BC59D] rounded-none placeholder-white/30 textarea-lg w-full hover:scale-[101%] focus:scale-[102%] ease-in duration-300 focus:border-l-[#9BC59D] focus:outline-none"
              ></textarea>

              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.01 }}
                transition={{
                  duration: 0.3,
                  scale: { type: 'spring', stiffness: 200, damping: 20 },
                }}
              >
                <button type="submit" disabled={state.submitting} className="flex items-center h-[45px] gap-[-10px] w-full">
                  <div className="core w-[90%] px-5 py-3 h-full uppercase text-sm normal border-l-[0.5px] rounded-none border-l-[#9BC59D] text-[#9BC59D] ease-in duration-150">
                    {state.submitting
                      ? 'Submitting...' // Change button text when submitting
                      : state.succeeded
                        ? 'Submitted!' // Change button text after successful submission
                        : 'Submit'} {/* Default button text */}
                  </div>
                  <div className="shape w-[10%] h-full text-[25px] bg-[#9BC59D] text-[#04232478] rounded-none flex items-center justify-center">
                    <IoIosPaperPlane className="rounded-none" />
                  </div>
                </button>
              </motion.div>
            </form>
          ) : (
            <motion.div
              className="chat chat-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >

              <div className="w-full flex justify-center items-center p-5 border-[#9BC59D] text-[#9BC59D] text-center flex-col gap-3 rounded-md">
                <GiPrayer className='text-[50px] text-[#9BC59D] animate-[subtleBounce_2s_ease-in-out_infinite]' />
                <h1>Thanks for reaching out! I’ve got your message and I’ll be in touch soon — stay tuned!</h1>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact