import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiHome } from 'react-icons/hi'
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md"
import { useSession } from 'next-auth/react'
import { signOut } from "next-auth/react"
import { motion } from 'framer-motion';

const Navbar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();
    const signOutHandler = (e) => {
        e.preventDefault()
        try {
            signOut()
        } catch (err) {
            alert(err.message)
        }
    }
    const easing = [0.6, -0.05, 0.01, 0.99]
    const fadeInUp = {
        initial: {
            y: -100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easing,
                delay: 0.3
            }
        }
    }
    return (
        <div className="bg-TZ_DARK shadow-2xl text-white">
            <motion.nav variants={fadeInUp} initial="initial" animate="animate" className="w-full">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items items-center mx-20 justify-between w-full">
                            <div className='flex justify-center items-center flex-shrink-0'>
                                <h1 className="font-bold text-2xl cursor-pointer">
                                    Trading<span className="text-blue-500" >Zilla</span>
                                </h1>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-center space-x-4">
                                    <div onClick={() => session ? router.push('/home') : router.push('/auth/login')} className="flex items-center space-x-2 cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:scale-105 transition-all duaration-200 ease-in-out">
                                        <div className="text-2xl">
                                            {session ? <HiHome /> : <MdOutlineLogin />}
                                        </div>
                                        <div>
                                            {session ? "Home" : "Sign in"}
                                        </div>
                                    </div>
                                    {
                                        session && <div className='ml-10 flex items-center space-x-4'>
                                            <div onClick={signOutHandler} className='flex items-center spcae-x-2 cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:scale-105 transition-all duaration-200 ease-in-out'>
                                                <div className="mr-2">
                                                    Log Out
                                                </div>
                                                <div className="text-2xl">
                                                    <MdOutlineLogout />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="mr-10 flex md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-blue-600 inline-flex items-center p-2 rounded-md text-white hovevr:bg-blue-600 focus: outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white" aria-controls='mobile-menu' aria-expanded="false" >
                                <span className="sr-only">Open Menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div
                                ref={ref}
                                className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >
                                <Link
                                    href="/home"
                                    activeClass="home"
                                    to="home"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    activeClass="about"
                                    to="about"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </Link>

                                <Link
                                    href="/work"
                                    activeClass="work"
                                    to="work"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Projects
                                </Link>
                                <Link
                                    href="/services"
                                    activeClass="services"
                                    to="services"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Services
                                </Link>

                                <Link
                                    href="/contact"
                                    activeClass="work"
                                    to="work"
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </motion.nav>
        </div>
    )
}

Navbar.defaultProps = {
    loggedIn: false
}

export default Navbar