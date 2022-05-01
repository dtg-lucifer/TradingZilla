import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    HiOutlineUserCircle,
    HiHome,
    HiOutlineTag,
    HiOutlineCollection,
    HiOutlineNewspaper,
    HiOutlineCog,
    HiOutlineMap,
} from 'react-icons/hi';
import { MdOutlineLogin } from 'react-icons/md';
import { useSession } from 'next-auth/react';
import { motion, AnimateSharedLayout } from 'framer-motion';

const Navbar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession();
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: 0.3,
                    delay: 0.5,
                },
            }}
            exit={{ opacity: 0, y: -100 }}
        >
            <nav className="shadow-xl fixed w-full bg-white z-50">
                <div className="w-full">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items items-center mx-20 justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0">
                                <h1 className="font-bold text-2xl cursor-pointer">
                                    Trading
                                    <span className="text-blue-500">Zilla</span>
                                </h1>
                            </div>
                            <AnimateSharedLayout layout>
                                <div className="hidden md:block">
                                    <motion.div className="ml-10 flex items-center space-x-4">
                                        <motion.div
                                            onClick={() =>
                                                session
                                                    ? router.push('/home')
                                                    : router.push('/auth/login')
                                            }
                                            whileTap={{ scale: 0.90 }}
                                            className="flex items-center space-x-2 cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:scale-105 transition-all duaration-200 ease-in-out"
                                        >
                                            <div className="text-2xl">
                                                {session ? (
                                                    <HiHome />
                                                ) : (
                                                    <MdOutlineLogin />
                                                )}
                                            </div>
                                            <div>
                                                {session ? 'Home' : 'Sign in'}
                                            </div>
                                        </motion.div>
                                        <motion.div
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() =>
                                                session
                                                    ? router.push('/about')
                                                    : router.push('/auth/login')
                                            }
                                            className="flex space-x-2 hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out hover:scale-105"
                                        >
                                            <div className="text-2xl">
                                                <HiOutlineNewspaper />
                                            </div>
                                            <div>Info</div>
                                        </motion.div>
                                        <motion.div
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() =>
                                                session
                                                    ? router.push('/category')
                                                    : router.push('/auth/login')
                                            }
                                            className="flex space-x-2 hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out hover:scale-105"
                                        >
                                            <div className="text-2xl">
                                                <HiOutlineTag />
                                            </div>
                                            <div>Category</div>
                                        </motion.div>
                                        <motion.div
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() =>
                                                session
                                                    ? router.push('/news')
                                                    : router.push('/auth/login')
                                            }
                                            className="flex space-x-2 hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out hover:scale-105"
                                        >
                                            <div className="text-2xl">
                                                <HiOutlineCollection />
                                            </div>
                                            <div>News</div>
                                        </motion.div>
                                        <motion.div
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() =>
                                                session
                                                    ? router.push('/settings')
                                                    : router.push('/auth/login')
                                            }
                                            className="flex space-x-2 hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out hover:scale-105"
                                        >
                                            <div className="text-2xl">
                                                <HiOutlineCog />
                                            </div>
                                            <div>Settings</div>
                                        </motion.div>
                                        <motion.div
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() =>
                                                session
                                                    ? router.push('/account')
                                                    : router.push('/auth/login')
                                            }
                                            className="flex items-center space-x-2 hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out hover:scale-105"
                                        >
                                            <div className="text-2xl">
                                                <HiOutlineUserCircle />
                                            </div>
                                            <div>Account</div>
                                        </motion.div>
                                        {/* <div onClick={() => session ? router.push('/contact') : router.push('/auth/login')} className="flex space-x-2 hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out hover:scale-105">
                                        <div className="text-2xl">
                                            <HiOutlinePhone />
                                        </div>
                                        <div>
                                            Contact
                                        </div>
                                    </div> */}
                                        <motion.div
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() =>
                                                session
                                                    ? router.push('/')
                                                    : router.push('/auth/login')
                                            }
                                            className="flex space-x-2 hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-all duration-200 ease-in-out hover:scale-105"
                                        >
                                            <div className="text-2xl">
                                                <HiOutlineMap />
                                            </div>
                                            <div>Get Started</div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </AnimateSharedLayout>
                        </div>
                        <div className="mr-10 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-blue-600 inline-flex items-center p-2 rounded-md text-white hovevr:bg-blue-600 focus: outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
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
            </nav>
        </motion.div>
    );
};

Navbar.defaultProps = {
    loggedIn: false,
};

export default Navbar;
