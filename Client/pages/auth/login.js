import { FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from "react-icons/md";
import Head from 'next/head'
import React, { useRef } from 'react'
import Router from 'next/router';
import { getProviders, signIn as signInProvider } from 'next-auth/react'
import Link from 'next/link'
import { signIn, useSession } from "next-auth/react"
import { motion } from 'framer-motion';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';



export default function login({ providers }) {
    const { data: session } = useSession();
    const emailRef = useRef();
    const passRef = useRef();
    const signInHandler = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, emailRef.current.value, passRef.current.value)
        session && Router.push("/")
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <Head>
                    <title>Trading Zilla | The ultimate trading website for selllers and buyers</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className="bg-white rounded-2xl shadow-xl flex w-2/3 max-w-4xl">
                    <form className='w-3/5 p-5 font-bold'>
                        <div className="text-left">
                            Trading<span className="text-blue-500">Zilla</span>
                        </div>
                        <h2 className="text-3xl font-bold mb-2 pt-10 text-blue-500">
                            Sign in
                        </h2>
                        <div className="border-2 border-blue-500 w-16 inline-block mb-2"></div>
                        <div className="flex justify-center my-2">
                            {Object.values(providers).map((provider) => (
                                <div key={provider.name} onClick={() => signInProvider(provider.id, { callbackUrl: '/' })} className="flex border-2 border-gray-200 rounded-full py-3 px-3 mx-1 hover:cursor-pointer hover:bg-blue-500 hover:text-white hover:border-white transition-all duration-300 ease-in-out">
                                    <FaGoogle className="text-xl mx-3" /> Sign in with Google
                                </div>
                            ))}
                        </div>
                        <p className='text-gray-400 my-3 text-sm font-thin'>
                            Or use your email account instead
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                <FaRegEnvelope className='text-gray-400 m-2' />
                                <input ref={emailRef} type="email" name="email" placeholder='Email' className="bg-gray-200 outline-none text-sm flex-1" />
                            </div>
                            <div className="bg-gray-200 w-64 p-2 flex items-center mb-3">
                                <MdLockOutline className='text-gray-400 text-xl m-2' />
                                <input ref={passRef} type="password" name="password" placeholder='Password' className="bg-gray-200 outline-none text-sm flex-1" />
                            </div>
                            <div className="flex justify-between w-64 mb-5">
                                <label className="flex items-center text-xs cursor-pointer"><input type="checkbox" name="remember" className='mr-3' />Remember me</label> <a className='text-xs text-blue-500 cursor-pointer'> Forgot Password?</a>
                            </div>
                        </div>
                        <motion.button whileTap={{scale:0.95}} type="submit" onSubmit={signInHandler} className='border-2 border-blue-500 shadow-2xl rounded-full px-12 py-2 cursor-pointer font-smeibold hover:font-normal inline-block hover:bg-blue-500 hover:text-white transition-all duration-200'>
                            Sign In
                        </motion.button>
                    </form>
                    <div className="w-2/5 p-5 bg-blue-500 text-white font-bold rounded-tr-2xl rounded-br-2xl py-36">
                        <h2 className="text-3xl font-bold mb-2">
                            Sign up
                        </h2>
                        <div className="border-2 w-16 inline-block mb-2"></div>
                        <p className="font-thin mb-16">
                            Click the button below and fillup the form with appropriate information to sign up, ang lets get into the world of <span className='text-xl'>Trading<span className='text-lime-400'>Zilla</span></span>
                        </p>
                        <Link href="/auth/signup" >
                            <motion.div whileTap={{scale:0.95}} className='border-2 font-smeibold hover:font-normal border-white shadow-2xl rounded-full px-12 py-2 cursor-pointer inline-block hover:bg-white hover:text-blue-500 transition-all duration-200'>
                                Sign Up
                            </motion.div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}
