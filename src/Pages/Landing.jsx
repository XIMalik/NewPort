import React, { useState, useEffect } from 'react'
import { motion } from "motion/react"
import { TfiLinkedin } from "react-icons/tfi";
import { VscGithubInverted } from "react-icons/vsc";
import { RiWhatsappLine } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import resumePDF from '/2025Resume.pdf'; // Adjust the path to your image file.
import { PiReadCvLogoLight } from "react-icons/pi";
import { TbBrandGithubFilled } from "react-icons/tb";


const Landing = () => {

    useEffect(() => {
        document.title = "Malik Awesu";
      }, []);

    const icons = [
        {
            Icon: TfiLinkedin,
            link: 'https://www.linkedin.com/in/malik-awesu',
            className: 'text-[25px]',
            delay: 1
        },
        {
            Icon: TbBrandGithubFilled,
            link: 'https://github.com/XIMalik',
            className: 'text-[25px]',
            delay: 1.2
        },
        {
            Icon: RiWhatsappLine,
            link: 'https://wa.me/8180991568',
            className: 'text-[25px]',
            delay: 1.4
        },
        {
            Icon: SiGmail,
            link: 'mailto:abdulmalikawesu@gmail.com',
            className: 'text-[25px]',
            delay: 1.6
        },
    ];

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    
    return (
        <div className='landing major-element flex flex-col justify-between gap-10 w-[100%] h-screen'>
            <div className="text-right flex items-center justify-end gap-2">
                <HiLocationMarker className='text-[#9BC59D]' />
                <h1>Lagos, Nigeria</h1>
            </div>
            <div className='text-center flex items-center flex-col'>
                {/* <h1 className='text-[120px] julius text-[#D0FCB3]'>Malik Awesu</h1> */}
                <h1 className='text-[#9BC59D]'>Fullstack Software Developer</h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.8 }}
                    transition={{ duration: 0.8 }}
                >

                    <h1 className='text-[120px] julius text-[#9BC59D]'>Malik Awesu</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: 1 }}
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                        scale: { type: 'spring', stiffness: 200, damping: 20 },
                    }}
                >
                    <a
                        href={resumePDF}
                        download="AbdulmalikAwesuResume.jpg"
                        className="text-xs mb-5 sticky"
                    >
                        <div className="flex items-center h-[45px] gap-[-10px] w-fit">
                            <div className="core w-fit px-5 py-3 h-full uppercase text-sm normal border-[0.5px] rounded-none border-[#9BC59D] text-[#9BC59D] ease-in duration-150">
                                Download My Resume
                            </div>
                            <div className="shape w-[45px] h-full text-[25px] bg-[#9BC59D] text-[#04232478] rounded-none flex items-center justify-center">
                                <PiReadCvLogoLight className='rounded-none' />
                            </div>
                        </div>
                    </a>
                </motion.div>
            </div>

            <div className="bottom flex justify-between">
                <div className="text-left flex gap-5 rounded-none">
                    {icons.map((icon, index) => (
                        <motion.a
                            key={index}
                            href={icon.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={icon.className}
                            initial={{opacity:0}}
                            whileInView={{opacity:1}}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                duration: 0.2,
                                delay: icon.delay
                            }}
                        >
                            <icon.Icon className='rounded-none' />
                        </motion.a>
                    ))}
                </div>

                <div className="local-time">
                    <h2>{time}</h2>
                </div>
            </div>

        </div>
    )
}

export default Landing