import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from "/logo.png"

const Footer = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className='w-full flex items-center justify-between py-5 text-sm px-[50px] border-t-[#9BC59D]/10 border-t-[0.5px]'>
            <div className="div flex items-center gap-2">
                <div className="w-[20px] h-[20px]">
                    <img src={logo} alt="" className='object-cover h-full w-full' />
                </div>
                <h1>Malik Awesu</h1>
            </div>
            <span className='text-[#9BC59D] '>Fullstack Developer</span>
        </div>
    );
}

export default Footer;
