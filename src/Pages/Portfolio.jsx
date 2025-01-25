import React, { useState, useEffect } from 'react';
import Project from '../Components/Project';
import { motion } from 'motion/react';
import { VscSettings } from "react-icons/vsc";
import { AiOutlineRobot } from "react-icons/ai";
import { IoChatboxSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GiTalk } from "react-icons/gi";

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const [error, setError] = useState('');
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const projectTypes = ['All', 'Frontend', 'Backend', 'Fullstack'];

    useEffect(() => {
        document.title = "My Portfolio - Malik Awesu";
    }, []);

    // Filter the projects based on the selected filter
    const filteredProjects = filter === 'All' ? projects : projects.filter(project => project.type === filter);

    useEffect(() => {
        getProjects();
    }, []);

    async function getProjects() {
        try {
            const response = await fetch(
                "https://eu-west-2.cdn.hygraph.com/content/cm63jbkpe01id07wcjd5qxlgj/master",
                {
                    method: "POST",
                    body: JSON.stringify({
                        query: `{
                            projects {
                                id
                                description
                                link
                                projectTitle
                                techUsed
                                type
                                image {
                                    url
                                }
                            }
                        }`,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.ok) {
                const data = await response.json(); // Parse the response as JSON
                setProjects(data.data.projects); // Set your data here
                setIsLoading(false);
                setError(""); // Clear any previous errors
            } else {
                throw new Error("Error fetching data");
            }
        } catch (error) {
            console.error(error);
            setError("Error fetching data");
            setIsLoading(false); // Stop loading even if there's an error
        }
    }

    // Skeleton loader component for project items
    const SkeletonLoader = () => (
        <div class="card">
            <div class="loader">
                <p>Loading</p>
                <div class="words">
                    <span class="word">Cards</span>
                    <span class="word">Thumbnails</span>
                    <span class="word">Icons</span>
                    <span class="word">Buttons</span>
                    <span class="word">Projects</span>
                </div>
                <span className='ml-2'>..</span>
            </div>
        </div>


    );

    return (
        <div className='portfolio major-element flex mt-[50px] flex-col items-start rounded-none'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.8 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className='julius font-bold text-[50px] md:text-[100px] lg:text-[150px] uppercase text-white/10'>portfolio</h1>
            </motion.div>

            <div className="filter-buttons my-4 flex gap-2 items-center">
                <VscSettings />
                {projectTypes.map(type => (
                    <button
                        key={type}
                        className={`px-2 rounded-none hover:text-white/50 hover:line-through ease-in duration-150 ${filter === type ? 'bg-none line-through text-[#9BC59D]' : 'text-white/10'}`}
                        onClick={() => setFilter(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {isLoading ? (
                <div className="projects flex flex-wrap gap-4 w-[100%] rounded-none my-10">
                    {Array(1).fill(null).map((_, index) => (
                        <SkeletonLoader key={index} />
                    ))}
                </div>
            ) : (
                <div className="projects grid grid-cols-1 md:grid-cols-2 gap-4 w-full rounded-none my-10">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(project => (
                            <Project
                                key={project.id}
                                name={project.projectTitle}
                                description={project.description}
                                type={project.type}
                                link={project.link}
                                techUsed={project.techUsed}
                                imageUrl={project.image[0]?.url} // Safe check for image URL
                            />
                        ))
                    ) : (
                        <div className='flex items-center justify-center'>
                            <AiOutlineRobot className='text-[150px] text-[#9BC59D] animate-[subtleBounce_2s_ease-in-out_infinite]' />
                            <h1>No <span className='line-through text-[#9BC59D]'>{filter}</span> projects at the moment</h1>
                        </div>
                    )}
                </div>
            )}
            <motion.div
                initial={{ opacity: 0 }}  // Initially the opacity is 0 (hidden)
                whileInView={{ opacity: 1 }}  // When the element is in view, opacity becomes 1 (fully visible)
                viewport={{ amount: 0.4 }}  // Trigger animation when 80% of the element is in view
                transition={{ duration: 0.8 }} // Optional: smooth transition for opacity change
                className='w-full'
            >

                <div className="like? w-full bg-black/30 p-5 border-r-[0.5px] items-start gap-10 flex flex-col-reverse items-start sm:flex-row justify-between sm:items-center border-r-[#9BC59D]">
                    <div className="">
                        <h1 className='section-title'>Like what you see?</h1>
                        <p>I'm excited to help you build something unique. Let’s get started!</p>
                        <motion.div
                            initial={{ opacity: 0, scale: 1 }}
                            whileInView={{ opacity: 1 }}
                            whileTap={{ scale: 0.98 }}
                            whileHover={{ scale: 1.01 }}
                            transition={{
                                duration: 0.3,
                                scale: { type: 'spring', stiffness: 200, damping: 20 },
                            }}
                            className="w-fit"
                        >
                            <Link to="/lets-talk" className="flex items-center h-[45px] gap-[-10px] w-fit my-6">
                                <div className="core w-fit px-5 py-3 h-full uppercase text-sm normal border-[0.5px] rounded-none border-white text-white ease-in duration-150">
                                    LET'S TALK
                                </div>
                                <div className="shape w-[45px] h-full text-[25px] bg-white text-black rounded-none flex items-center justify-center">
                                    <IoChatboxSharp className="rounded-none" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="comms pr-10"><GiTalk className='text-[50px] animate-[subtleBounce_2s_ease-in-out_infinite]' /></div>
                </div>
            </motion.div>
        </div>
    );
}

export default Portfolio;
