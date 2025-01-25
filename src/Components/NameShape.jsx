import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const NameShape = () => {

  const getRandomColor = () => {
    const colors = [
      "text-red-900",
      "text-blue-600",
      "text-green-600",
      "text-yellow-600",
      "text-purple-600",
      "text-pink-600",
      "text-teal-600",
      "text-[#8BAAAD]",
      "text-orange-600",
    ];
    // Pick a random color from the array
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Array of texts and their corresponding classes for styling
  const texts = [
    { text: "Malik Awesu", className: `jose uppercase ${getRandomColor()}` },
    { text: "Malik Awesu", className: `syncopate-regular uppercase ${getRandomColor()}` },
    { text: "Malik Awesu", className: `kolker-brush-regular uppercase ${getRandomColor()}` },
    { text: "Malik Awesu", className: `kranky-regular uppercase ${getRandomColor()}` },
    { text: "Malik Awesu", className: `kings-regular uppercase ${getRandomColor()}` },
    { text: "Malik Awesu", className: `libre-barcode-39-text-regular uppercase ${getRandomColor()}` },
  ];

  // State to track the current text index
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Use effect to change the current text index every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [texts.length]);

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <motion.div
        whileHover={{ scale: 1.1 }}  // Scale on hover
        whileTap={{ scale: 0.95 }}   // Scale on tap
        onHoverStart={() => console.log('hover started!')}  // Log when hover starts
        className="flex items-center justify-center"
      >
        <h1 className={`text-[20px] ${texts[currentTextIndex].className}`}>
          {texts[currentTextIndex].text}
        </h1>
      </motion.div>
    </div>
  );
};

export default NameShape;
