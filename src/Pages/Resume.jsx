import React, {useEffect} from 'react';
import resumeImage from '/2025Resume.jpg'; // Adjust the path to your image file.
import resumePDF from '/2025Resume.pdf'; // Adjust the path to your image file.
import CoolButton from '../Components/CoolButton';
import { FiDownload } from "react-icons/fi";
import { PiReadCvLogoLight } from "react-icons/pi";

import { motion } from "motion/react"

const Resume = () => {
    useEffect(() => {
            document.title = "My Resume - Malik Awesu";
          }, []);
    return (
        <div className="resume-container flex flex-col md:flex-col-reverse items-center justify-center r-major-element">
            <div className="md:absolute top-[70px]">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.8 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className='julius font-bold text-[90px] md:text-[240px] uppercase text-white/10 mt-10 md:mt-0'>resume</h1>
                </motion.div>
            </div>
            <motion.div
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.8 }}
                    transition={{ duration: 0.8 }}
                >

            <img src={resumeImage} alt="" className="mx-auto rounded-none md:scale-[120%] md:my-[130px]" />
                </motion.div>

            <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.98 }}
                whileHover={{ scale: 1.01 }}
                transition={{
                    duration: 0.3,
                    scale: { type: 'spring', stiffness: 200, damping: 20 },
                }}
            >
                <a
                    href={resumePDF}
                    download="AbdulmalikAwesuResume.jpg"
                    className="text-xs mb-5 sticky"
                >
                    <div className="flex items-center h-[45px] mt-[50px] gap-[-10px] w-fit">
                        <div className="core w-fit px-5 py-3 h-full uppercase text-sm normal border-[0.5px] rounded-none border-[#9BC59D] text-[#9BC59D] ease-in duration-150">
                            Download My Resume
                        </div>
                        <div className="shape w-[45px] h-full text-[25px] bg-[#9BC59D] text-[#04232478] rounded-none flex items-center justify-center">
                            <PiReadCvLogoLight className='rounded-none text-black' />
                        </div>
                    </div>
                </a>
            </motion.div>
        </div>
    );
};

export default Resume;
