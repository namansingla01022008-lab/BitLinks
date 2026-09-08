import React from 'react'
import { Poppins } from "next/font/google";


const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "900"],
    subsets: ["latin"],
});
const Footer = () => {
    return (
        <footer className='flex py-4 justify-between px-10 font-bold bg-purple-300'>
            <div className='flex items-center'>
                <span className={`${poppins.className} text-xl font-bold`}>&copy;</span>
                <span className={`${poppins.className}`}> 2026 BitLinks</span>
            </div>
            <div className={`${poppins.className} font-bold`}>Made with ❤️ By Naman</div>
        </footer>
    )
}

export default Footer
