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
        React: <FaReact size={24} />,
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
        <div className="w-[100%] h-full bg-black/10 transform transition-transform duration-300 ease-in-out hover:translate-y-[-4px]">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.4 }}
                transition={{ duration: 0.8 }}
            >
                <div className="project md:aspect-video w-full rounded-none relative group overflow-hidden">
                    <img src={imageUrl} className='object-contain w-full h-full rounded-none' alt="" />

                    <div className="hidden md:flex absolute top-0 left-0 right-0 p-5 bottom-0 backdrop-blur-xs bg-black/50 opacity-0 rounded-none group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-start">
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

                    <div className="flex ">
                        <div className="p-5 pt-10 rounded-none flex flex-col relative justify-end items-start">
                            <ul className="flex absolute top-5 right-5 mb-5 gap-3 items-center">
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
                </div>
            </motion.div>
        </div>
    )
}

export default Project;
