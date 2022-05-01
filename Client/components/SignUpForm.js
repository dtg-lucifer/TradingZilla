import Head from "next/head";
import React, { useState, useRef } from "react";
import {
    MdOutlineBusinessCenter,
    MdMailOutline,
    MdLockOutline,
} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/router";
import { BiCategory } from "react-icons/bi";
import { auth, db } from "../firebase";
import { signIn } from "next-auth/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { registered } from "../store/slices/authState";
import { useDispatch } from "react-redux";

const SignUpForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [passw, setPassw] = useState("");
    const [confPassw, setConfPassw] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [businessCat, setBusinessCat] = useState("");
    const [name, setName] = useState("");
    const isSellerRef = useRef();
    const dispatch = useDispatch();
    const registerHandler = (e) => {
        !email && alert("Enter email, it must not be Empty!");
        !passw && alert("Enter password, it must not be Empty!");
        !businessName && alert("Enter businessname, it must not be Empty!");
        !businessCat && alert("Enter business category, it must not be Empty!");
        !isSellerRef.current.value &&
            alert(
                "Define whether you are seller or buyer, it must not be empty!"
            );
        dispatch(registered(true));
        createUserWithEmailAndPassword(auth, email, passw).then(
            async (userCred) => {
                try {
                    await signIn("email", { email, callbackUrl: "/" });
                    const doc = await addDoc(collection(db, "users"), {
                        registered: true,
                        name: name,
                        email: email,
                        username: name.split(" ").join("_").toLowerCase(),
                        uid: auth.currentUser.uid,
                        businessName: businessName,
                        businessCat: businessCat,
                        isSeller:
                            isSellerRef.current.value === "SELLER"
                                ? "SELLER"
                                : "BUYER",
                    });
                } catch (err) {
                    router.push("/server-error");
                }
                router.push("/");
            }
        );
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
            <Head>
                <title>
                    Trading Zilla | The ultimate trading website for selllers
                    and buyers
                </title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                    <div className="w-5 p-5 font-semibold">
                        <div className="text-left">
                            Trading<span className="text-blue-500">Zilla</span>
                        </div>
                        <div className="ml-96 items-center">
                            <h2 className=" text-3xl mb-2 pt-10 text-blue-500">
                                Register
                            </h2>
                            {/* LINE UNDER THE REGISTER FONT */}
                            <div className="ml-7 border-2 border-blue-500 w-16 inline-block mb-2"></div>
                            <div className="ml-12 flex flex-col items-center">
                                <div className="bg-gray-200 w-96 p-2 flex items-center mb-3">
                                    <FaRegUser className="text-gray-400 m-2" />
                                    <input
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="bg-gray-200 outline-none text-sm flex-1"
                                    />
                                </div>
                                <div className="bg-gray-200 w-96 p-2 flex items-center mb-3">
                                    <MdOutlineBusinessCenter className="text-gray-400 m-2" />
                                    <input
                                        value={businessName}
                                        onChange={(e) =>
                                            setBusinessName(e.target.value)
                                        }
                                        type="text"
                                        name="business-name"
                                        placeholder="Business Name"
                                        className="bg-gray-200 outline-none text-sm flex-1"
                                    />
                                </div>
                                <div className="bg-gray-200 w-96 p-2 flex items-center mb-3">
                                    <BiCategory className="text-gray-400 m-2" />
                                    <input
                                        value={businessCat}
                                        onChange={(e) =>
                                            setBusinessCat(e.target.value)
                                        }
                                        type="text"
                                        name="business-category"
                                        placeholder="Business Category"
                                        className="bg-gray-200 outline-none text-sm flex-1"
                                    />
                                </div>
                                <div className="bg-gray-200 w-96 p-2 flex items-center mb-3">
                                    <MdMailOutline className="text-gray-400 m-2" />
                                    <input
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="bg-gray-200 outline-none text-sm flex-1"
                                    />
                                </div>
                                <div className="bg-gray-200 w-96 p-2 flex items-center mb-3">
                                    <MdLockOutline className="text-gray-400 text-xl m-2" />
                                    <input
                                        value={passw}
                                        onChange={(e) =>
                                            setPassw(e.target.value)
                                        }
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="bg-gray-200 outline-none text-sm flex-1"
                                    />
                                </div>
                                <div className="bg-gray-200 w-96 p-2 flex items-center mb-3">
                                    <MdLockOutline className="text-gray-400 text-xl m-2" />
                                    <input
                                        value={confPassw}
                                        onChange={(e) =>
                                            setConfPassw(e.target.value)
                                        }
                                        type="password"
                                        name="password"
                                        placeholder="Confirm Password"
                                        className="bg-gray-200 outline-none text-sm flex-1"
                                    />
                                </div>
                                <div className="w-96 p-2 flex justify-evenly items-center mb-3">
                                    <div className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            ref={isSellerRef}
                                            name="radio"
                                            type="radio"
                                            value="SELLER"
                                            className="bg-gray-200 outline-none text-sm flex-1 cursor-pointer"
                                        />
                                        <div>Seller</div>
                                    </div>
                                    <div className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            ref={isSellerRef}
                                            name="radio"
                                            type="radio"
                                            value="BUYER"
                                            className="bg-gray-200 outline-none text-sm flex-1 cursor-pointer"
                                        />
                                        <div>Buyer</div>
                                    </div>
                                </div>
                                <div className="flex justify-between w-96 mb-5">
                                    <label className="flex items-center text-xs hover:cursor-pointer">
                                        <input
                                            onChange={(e) =>
                                                console.log(e.target.value)
                                            }
                                            type="checkbox"
                                            name="remember"
                                            className="mr-3"
                                        />
                                        Remember me
                                    </label>{" "}
                                    <a className="text-xs text-blue-500 hover:cursor-pointer">
                                        {" "}
                                        Forgot Password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    onClick={registerHandler}
                                    className="border-2 border-blue-500 shadow-2xl rounded-full px-12 py-2 cursor-pointer font-smeibold hover:font-normal inline-block hover:bg-blue-500 hover:text-white transition-all duration-200"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
