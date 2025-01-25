import React from 'react';
import { motion } from 'motion/react';
import CoolButton from './CoolButton';
import { IoGlobeOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa6";
import { BiLogoNetlify } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { FaGitlab } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";

const Project = ({ name, description, type, link, techUsed, imageUrl }) => {

    const techIcons = {
        React: <FaReact size={24} />, // Adjust the size here
        Tailwind: <RiTailwindCssFill size={24} />,
        HTML: <FaHtml5 size={24} />,
        CSS: <SiCsswizardry size={24} />,
        Python: <FaPython size={24} />,
        Django: <SiDjango size={24} />,
        Postgres: <BiLogoPostgresql size={24} />,
        MongoDB: <SiMongodb size={24} />,
        Docker: <FaDocker size={24} />,
        Netlify: <BiLogoNetlify size={24} />,
        Vercel: <IoLogoVercel size={24} />,
        Gitlab: <FaGitlab size={24} />,
        Github: <TbBrandGithubFilled size={24} />,
    };

    return (
        <div className="w-[100%] h-full transform transition-transform duration-300 ease-in-out hover:translate-y-[-4px]">
            <motion.div
                initial={{ opacity: 0 }}  // Initially the opacity is 0 (hidden)
                whileInView={{ opacity: 1 }}  // When the element is in view, opacity becomes 1 (fully visible)
                viewport={{ amount: 0.4 }}  // Trigger animation when 80% of the element is in view
                transition={{ duration: 0.8 }} // Optional: smooth transition for opacity change
            >
                <div className="project h-[400px] w-full rounded-none relative group">
                    <div className="imageHolder h-[100%] bg-white/10 w-[100%] rounded-none">
                        <img src={imageUrl} className='object-cover w-full h-full rounded-none' alt="" />
                    </div>

                    <div className="absolute top-0 left-0 right-0 p-5 bottom-0 backdrop-blur-xs bg-black/50 opacity-0 rounded-none group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-start">
                        <ul className="flex absolute top-5 right-5 gap-3 items-center">
                            {techUsed.map(tech => (
                                <li key={tech} className='text-[15px]'>
                                    {techIcons[tech] || tech}
                                </li>
                            ))}
                        </ul>
                        <span>{type}</span>
                        <h1 className="text-2xl text-[#9BC59D]">{name}</h1>
                        <p className='my-4'>{description}</p>
                        <CoolButton text="Live Site" bgColor="[#9BC59D]" shape={IoGlobeOutline} link={link} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Project;
