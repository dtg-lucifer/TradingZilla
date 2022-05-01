import React from 'react'
import { FaGithub } from 'react-icons/fa'
import {
    HiMail,
    HiPhone
} from 'react-icons/hi'

function Footer() {
    return (
        <div className='bg-TZ_LIGHT h-1/2 flex md:flex-row flex-col justify-around items-center p-20 bottom-0'>
            <div className='p-5'>
                <ul className='flex flex-col items-center text-center'>
                    <p className='font-bold text-3xl pb-6 cursor-pointer text-white'>
                        Trading<span className='text-blue-500'>Zilla</span>
                    </p>
                    <div className="flex gap-6 pb-5">
                        <HiMail className='footer-icon' />
                        <HiPhone className='footer-icon' />
                        <FaGithub className='footer-icon' />
                    </div>
                </ul>
            </div>
            <div className="p-5">
                <ul className='text-center md:text-left'>
                    <p className='font-bold text-grya-800 text-2xl pb-4 text-blue-500/70'>
                        Services we provide.
                    </p>
                    <li className='text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer transition-all duration-200 ease-in-out'>
                        Flawless trading between sellers and buyers.
                    </li>
                    <li className='text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer transition-all duration-200 ease-in-out'>
                        No interfarence of third persons.
                    </li>
                    <li className='text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer transition-all duration-200 ease-in-out'>
                        Everything at a suitable range of money to buy.
                    </li>
                    <li className='text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer transition-all duration-200 ease-in-out'>
                        Anyone can sell or buy anything over the web through our website which is legal to buy or sell 
                    </li>
                </ul>
            </div>
            <div className="p-5">
                <ul className='text-center md:text-left'>
                    <p className="font-bold text-2xl pb-4 cursor-pointer text-white">
                        Company
                    </p>
                    <li className='text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer transition-all duration-200 ease-in-out'>
                        About
                    </li>
                    <li className='text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer transition-all duration-200 ease-in-out'>
                        Contact
                    </li>
                    <li className='text-gray-400 text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer transition-all duration-200 ease-in-out'>
                        Get Started
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer