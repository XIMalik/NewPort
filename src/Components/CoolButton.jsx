import React from 'react';
import { motion } from "motion/react";
import { IoGlobeOutline } from "react-icons/io5"; // Ensure you import your shape component

const CoolButton = ({ text, bgColor, shape: ShapeComponent, textColor, hoverColor, link }) => {
  const buttonContent = (
    <div className='flex items-center gap-[-10px] h-[45px] w-fit'>
      <div className={`w-fit h-full px-5 py-3 uppercase text-md rounded-none normal border-[0.5px] border-white ${textColor} ${hoverColor} ease-in duration-150 ${bgColor}`}>
        {text}
      </div>
      <div className="w-[50px] h-full text-[25px] bg-white rounded-none text-[#1a1a1a] flex items-center justify-center">
        <ShapeComponent className="rounded-none"/>
      </div>
    </div>
  );

  // Ensure the link is a valid full URL
  const getFullLink = (link) => {
    // If the link doesn't start with "http://" or "https://", add "https://"
    if (link && !/^https?:\/\//.test(link)) {
      return `https://${link}`;
    }
    return link;
  };

  // Conditionally render the component based on the presence of the 'link' prop
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      whileTap={{
        scale: 1,  // Shrink a bit on click
        rotate: 10,  // Slight rotation
      }}
      whileHover={{
        scale: 1.01,  // Slightly grow on hover
      }}
      transition={{
        duration: 2,
        delay: 0.5,
        scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
      }}
    >
      {link ? (
        // Render as a link if the 'link' prop is provided, ensure the link has a protocol
        <a href={getFullLink(link)} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      ) : (
        // Otherwise render as a div
        <div>
          {buttonContent}
        </div>
      )}
    </motion.div>
  );
}

export default CoolButton;
