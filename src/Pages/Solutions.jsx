import React, { useState, useEffect } from 'react'
import Project from '../Components/Project'
import { motion } from 'motion/react'
import { FaPersonChalkboard } from "react-icons/fa6";
import one from '/svg1.svg'
import two from '/svg2.svg'
import CoolButton from '../Components/CoolButton';
import { IoChatbubble } from "react-icons/io5";
import { TbDeviceImacFilled } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { CiDesktop } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { DiResponsive } from "react-icons/di";
import { IoIosLaptop } from "react-icons/io";



const Solutions = () => {
    const handleScroll = () => {
        const imgElements = document.querySelectorAll('.img-parallax');
        const scrollPosition = window.pageYOffset;
        const windowHeight = window.innerHeight;

        imgElements.forEach((img) => {
            const imgParent = img.parentElement;
            const imgSpeed = parseFloat(img.getAttribute('data-speed'));
            const imgTop = imgParent.offsetTop;
            const imgHeight = imgParent.offsetHeight;

            // Check if the image is in the viewport
            if (scrollPosition + windowHeight > imgTop && scrollPosition < imgTop + imgHeight) {
                // Calculate parallax effect
                const imgBottom = (scrollPosition + windowHeight - imgTop) * imgSpeed;
                const imgMaxDistance = windowHeight + imgHeight;
                const imgPercentage = ((imgBottom / imgMaxDistance) * 100) + (50 - imgSpeed * 50);

                // Apply the parallax effect
                img.style.top = `${imgPercentage}%`;
                img.style.transform = `translate(-50%, -${imgPercentage}%)`;
            }
        });
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        // Run once on mount to initialize parallax positions
        handleScroll();

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const services = [
        {
            title: "Web Development",
            icon: <TbDeviceImacFilled className="text-[120px] rounded-none text-[#9BC59D]" />,
            description: "Building responsive and interactive websites using modern web technologies like React, HTML, CSS, and JavaScript."
        },
        {
            title: "Backend Development",
            icon: <FaPython className="text-[120px] rounded-none text-[#9BC59D]" />,
            description: "Developing server-side applications with Node.js, Express, and databases like MongoDB and PostgreSQL."
        },
        {
            title: "Database Design",
            icon: <FaDatabase className="text-[120px] rounded-none text-[#9BC59D]" />,
            description: "Designing efficient, scalable databases using relational and NoSQL technologies."
        },
    ];

    const [expanded, setExpanded] = useState(false);
    return (
        <div className='portfolio major-element flex mt-[50px] flex-col items-start rounded-none'>
            <div className="">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ amount: 0.8 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className='julius font-bold text-[100px] lg:text-[150px] uppercase  text-white/5'>solutions</h1>
                </motion.div>
            </div>

            <div className="flex items-start justify-center gap-5">
                <div className="partone w-[60%] flex flex-col gap-4">
                    <h1 className='section-title text-[#9BC59D]'>your web presence starts here</h1>
                    <p>Technology is the new gold. Let’s build something meaningful together. Whether you're looking to scale, automate, or create, I’m here to bring your ideas to life with precision and flair.</p>
                    <CoolButton text="let's talk" shape={IoChatbubble} link="/contact" />
                </div>
                <div className='w-[40%] h-[300px]'>
                    <img src={two} className='rounded-none scale-[50%] h-full w-full    ' alt="" />
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className='julius font-bold text-[100px] lg:text-[150px] uppercase text-white/5'>i provide</h1>
            </motion.div>
            <div className="flex h-[500px] w-full gap-5">
                {/* {services.map((service, index) => (
                    <div key={index} className="big-green w-[33%] h-[300px] hover:scale-[105%] ease-in duration-300 hover:bg-black relative gap-5 flex justify-end items-start flex-col border-[0.5px] border-[#9BC59D] rounded-none p-5">
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }} // Start with opacity 0, slightly lower on the Y-axis, and small scale
                            whileInView={{ opacity: 1, y: 0, scale: 1 }} // Pop up to original position and scale 1
                            viewport={{ amount: 0.8 }} // Trigger the animation when 80% of the element is in view
                            transition={{
                                opacity: { duration: 3.5, delay: 0.3 }, // Fade in effect
                                y: { type: 'spring', stiffness: 100, damping: 15, duration: 0.8 }, // Smooth upward movement
                                scale: { type: 'spring', stiffness: 150, damping: 20, duration: 0.6 }, // Pop-up scale effect
                            }}
                        >
                            {service.icon}
                        </motion.div>
                        <h1 className="julius text-[#9BC59D]">{service.title}</h1>
                        <p>{service.description}</p>
                    </div>
                ))} */}

                <div className='flex relative items-center p-0 border-l-[0.5px] w-[60%] text-white/50 hover:text-white border-r-[10.5px] border-[#9BC59D]/50 hover:border-[#9BC59D] ease-in duration-300 px-10 rounded-none'>
                    <IoIosLaptop className='absolute text-[450px] text-[#9BC59D]/30 z-0' />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ amount: 0.8 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className='relative z-10 text-[25px] w-[100%]'><span className='text-[35px]'>Responsive Web Development</span>, ensuring your website looks great and works seamlessly on any device. From mobile to desktop, I create designs that automatically adjust to provide an optimal user experience, helping you reach more visitors and enhance engagement.                    </h1>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Solutions