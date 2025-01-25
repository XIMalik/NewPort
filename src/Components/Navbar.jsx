import React, { useState } from 'react';
import { TbMenu3 } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { RiHome9Fill } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import logo from "/logo.png"

const Navbar = () => {
    // State to track if the menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation(); // Get the current route

    const links = [
        { text: 'Base', className: 'cursor-pointer', link: '/' },
        { text: 'Me', className: 'cursor-pointer', link: '/me' },
        { text: 'Portfolio', className: 'cursor-pointer', link: '/portfolio' },
        // { text: 'solutions', className: 'cursor-pointer', link: '/solutions' },
        { text: 'Contact', className: 'cursor-pointer', link: '/lets-talk' },
        { text: 'my Resume', className: 'cursor-pointer', link: '/resume' }
    ];

    return (
        <div className="major-element absolute top-0 z-10 w-[100%] flex justify-between items-center py-[50px]">
            {/* Menu icon */}
            <motion.div
                whileTap={{ scale: 0.95 }}  // Slightly scale down the icon when clicked
                whileHover={{ scale: 1.0 }}  // Optional: slightly scale up when hovered
                transition={{ type: 'spring', stiffness: 100, damping: 10 }} // Add subtle spring effect
            >
                <TbMenu3
                    className="text-[#9BC59D] text-[30px] cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)} // Toggle the menu visibility on click
                />
            </motion.div>

            <motion.div
                className="absolute left-[100px] text-white px-6 py-2 flex items-center space-x-6"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: menuOpen ? 1 : 0,
                    display: menuOpen ? 'flex' : 'none',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                }}
            >
                <div className="hidden md:flex justify-between">
                    <ul className="flex space-x-4 items-center julius text-sm">
                        {links.map((link, index) => {
                            const isActive = location.pathname === link.link;
                            return (
                                <motion.li
                                    key={index}
                                    className={link.className}
                                    whileHover={{ scale: 1.08, textDecoration: "line-through" }} // Strikethrough on hover
                                    whileTap={{ scale: 0.98 }} // Shrink on click
                                    transition={{
                                        duration: 0.2,
                                    }}
                                    style={{
                                        color: isActive ? "#9BC59D" : "", // Active color (e.g., DodgerBlue)
                                        fontWeight: isActive ? "bold" : "normal", // Bold active tab
                                        textDecoration: isActive ? "line-through" : "none"
                                    }}
                                >
                                    <Link to={link.link} className="rounded-none">
                                        {link.text}
                                    </Link>
                                </motion.li>
                            );
                        })}
                    </ul>
                </div>
            </motion.div>
            <div className="flex md:hidden absolute top-[100px] text-left z-50">
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: menuOpen ? 1 : 0,
                            display: menuOpen ? 'flex' : 'none',
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 25,
                        }}
                    >

                        <ul className="space-y-6 sticky top-0 text-left text-white p-10 bg-[#9BC59D] text-xl">
                            {links.map((link, index) => {
                                const isActive = location.pathname === link.link;

                                return (
                                    <motion.li
                                        key={index}
                                        className="text-lg"
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.98 }} // Shrink on click
                                        transition={{ duration: 0.2 }}
                                        style={{
                                            color: isActive ? "#000000" : "",
                                            fontWeight: isActive ? "bold" : "normal",
                                        }}
                                    >
                                        <Link
                                            to={link.link}
                                            onClick={() => setMenuOpen(false)}
                                            className="julius rounded-none"
                                            style={{
                                                textDecoration: isActive ? "line-through" : "none"  // Apply the line-through only to the Link
                                            }}
                                        >
                                            {link.text}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
