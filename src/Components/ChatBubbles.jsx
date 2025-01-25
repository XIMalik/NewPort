import React from 'react'
import { motion } from 'framer-motion'
import logo from "/logo.png"
import ff from "/ff.png"

const ChatBubbles = () => {
    return (
        <div className="w-full flex flex-col gap-4 animate-[subtleBounce_2s_ease-in-out_infinite]">
            <motion.div
                className="chat chat-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={ff}
                        />
                    </div>
                </div>
                <div className="chat-header flex gap-3 items-end">
                    +1 (415) 555-7683
                    <time className="text-xs opacity-50">22:45</time>
                </div>
                <div className="chat-bubble my-2 flex hover:scale-[102%] ease-in duration-150 items-center rounded-none">Hi, I'm Armando. I'd like an automated admin portal for my brand. </div>
            </motion.div>

            <motion.div
                className="chat chat-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={logo}
                            className="object-cover h-full w-full scale-[120%]"
                        />
                    </div>
                </div>
                <div className="chat-header flex gap-3 items-end">
                    Malik
                    <time className="text-xs opacity-50">23:55</time>
                </div>
                <div className="chat-bubble rounded-none bg-[#9BC59D] hover:scale-[102%] ease-in duration-150 text-black flex my-2 items-center">
                    What's up Armando, I can help with that
                </div>
            </motion.div>
            <motion.div
                className="chat chat-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2 }}
            >
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={ff}
                        />
                    </div>
                </div>
                <div className="chat-header flex gap-3 items-end">
                    Armando - Client
                    <time className="text-xs opacity-50">23:59</time>
                </div>
                <div className="chat-bubble my-2 flex items-center hover:scale-[102%] ease-in duration-150 rounded-none">Awesome, let's do it!</div>
            </motion.div>
        </div>
    )
}

export default ChatBubbles
