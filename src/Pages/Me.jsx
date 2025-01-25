import React, { useEffect } from 'react'
import avatar from "/SLS.png"
import { motion } from "motion/react"
import { GiLaptop } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import { PiGameControllerFill } from "react-icons/pi";
import { GiBasketballBall } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { CgGym } from "react-icons/cg";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { BiLogoNetlify } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { FaGitlab } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { MdOutlinePhonelink } from "react-icons/md";

const Me = () => {
    useEffect(() => {
        document.title = "About me - Malik Awesu";
    }, []);
    return (
        <div className='major-element me flex flex-col items-center justify-center font-normal'>
            <div className="absolute top-[150px]">
                <motion.div
                    initial={{ opacity: 0 }}  // Initially the opacity is 0 (hidden)
                    whileInView={{ opacity: 1 }}  // When the element is in view, opacity becomes 1 (fully visible)
                    viewport={{ amount: 0.8 }}  // Trigger animation when 80% of the element is in view
                    transition={{ duration: 0.8 }} // Optional: smooth transition for opacity change
                >
                    <h1 className='julius font-bold hidden md:flex md:text-[125px] lg:text-[140px] text-center uppercase text-white/10'>malik awesu</h1>
                    <h1 className='julius font-bold text-[100px] md:hidden text-center uppercase text-white/10'>malik <br /> awesu</h1>
                </motion.div>
            </div>
            <div className="absolute top-[100px] animate-[subtleBounce_2s_ease-in-out_infinite]">
                <img src={avatar} alt="" />
            </div>
            <div className="w-full">
                <div className="w-full mt-[500px] lg:mt-[550px] flex flex-col md:flex-row gap-10 text-[#9BC59D] justify-between text-md leading-loose">
                    {/* First Paragraph with Fade In */}
                    <motion.p
                        className='w-full md:w-[50%]'
                        initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
                        whileInView={{ opacity: 1 }}  // When the element is in view, opacity becomes 1 (fully visible)
                        viewport={{ amount: 0.8 }}  // Trigger animation when 80% of the element is in view transition={{ duration: 1 }} // Duration of fade-in effect
                    >
                        <p>Hey, I'm Malik Awesu, a fullstack web developer with a keen eye for clean UI, efficient development, and scalable code. I specialize in building modern web applications.</p>
                    </motion.p>

                    {/* Second Paragraph with Fade In and Delay */}
                    <motion.p
                        className='w-full md:w-[50%]'
                        initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
                        whileInView={{ opacity: 1 }}  // When the element is in view, opacity becomes 1 (fully visible)
                        viewport={{ amount: 0.8 }}  // Trigger animation when 80% of the element is in view
                    >
                        As a developer, I'm committed to continuous learning and creating innovative solutions. My focus is on building products that deliver value and provide a great user experience.                    </motion.p>
                </div>
                <div className="me-info mt-[100px] w-full flex flex-col gap-10 md:gap-0 items-start md:flex-row md:items-end justify-between text-left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.8 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className='w-full md:w-[50%]'>
                            When I'm not coding, you can find me unwinding with some PS4 gaming, hitting the basketball court or gym, or enjoying a football match.</h1>

                    </motion.div>
                    <div className="flex gap-5 flex-wrap md:flex-nowrap w-fit">
                        <MdOutlinePhonelink className='text-[50px] text-[#9BC59D]' />
                        <FaCode className='text-[50px] text-[#9BC59D]' />
                        <PiGameControllerFill className='text-[50px] text-[#9BC59D]' />
                        <GiBasketballBall className='text-[50px] text-[#9BC59D]' />
                        <CgGym className='text-[50px] text-[#9BC59D]' />
                    </div>
                </div>
                <div className="me-info mt-[100px] w-full flex flex-col gap-10 items-start md:flex-row md:items-end justify-between text-left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.8 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='w-full md:w-[50%] '>
                            <h1 className='section-title'>My Stack</h1>
                            <p>On the frontend, I use React for its dynamism, along with Tailwind for styling and Framer for animations to build engaging, functional UIs.</p>
                        </div>

                    </motion.div>
                    <div className="flex gap-5 flex-wrap md:flex-nowrap w-fit">
                        <FaReact className='text-[50px] text-[#9BC59D] rounded-none' />
                        <RiTailwindCssFill className='text-[50px] text-[#9BC59D] rounded-none' />
                        <FaHtml5 className='text-[50px] text-[#9BC59D] rounded-none' />
                        <SiCsswizardry className='text-[50px] text-[#9BC59D] rounded-none' />
                        <SiJavascript className='text-[50px] text-[#9BC59D] rounded-none' />
                    </div>
                </div>
                <div className="me-info mt-[100px] w-full flex flex-col gap-10 items-start md:flex-row md:items-end justify-between text-left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.8 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='w-full md:w-[50%] '>
                            <p>On the backend, I write Python, using the framework, Django, creating API's that serve multiple purposes. To store data, I use PostgreSQL or MongoDB.  </p>
                        </div>

                    </motion.div>
                    <div className="flex gap-5 flex-wrap md:flex-nowrap w-fit">
                        <FaPython className='text-[50px] text-[#9BC59D] rounded-none' />
                        <SiDjango className='text-[50px] text-[#9BC59D] rounded-none' />
                        <BiLogoPostgresql className='text-[50px] text-[#9BC59D] rounded-none' />
                        <SiMongodb className='text-[50px] text-[#9BC59D] rounded-none' />
                    </div>
                </div>
                <div className="me-info mt-[100px] w-full flex flex-col gap-10 items-start md:flex-row md:items-end justify-between text-left">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.8 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className='w-full md:w-[50%] '>
                            <p>Docker for easy deployment, Netlify for static sites, and I manage versions with Git. VSCode is my editor of choice for its powerful plugin support.</p>
                        </div>

                    </motion.div>
                    <div className="flex gap-5 flex-wrap md:flex-nowrap w-fit">
                        <FaDocker className='text-[50px] text-[#9BC59D] rounded-none' />
                        <BiLogoNetlify className='text-[50px] text-[#9BC59D] rounded-none' />
                        <IoLogoVercel className='text-[50px] text-[#9BC59D] rounded-none' />
                        <FaGitlab className='text-[50px] text-[#9BC59D] rounded-none' />
                        <TbBrandGithubFilled className='text-[50px] text-[#9BC59D] rounded-none' />
                        <VscVscode className='text-[50px] text-[#9BC59D] rounded-none' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Me





