import React from "react";
import HomeItemList from "./HomeItemList";
import { motion } from "framer-motion";

// import dummyData from '../dummyData.json'

function HomeCategory({ category, index }) {
    // let [...rawData] = dummyData.allItems
    // console.log(rawData[0].items[0].itemInfo.name)
    let products = [
        {
            name: "Object1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus voluptatibus, ipsam assumenda doloremque deleniti illo quae, impedit possimus",
            price: "1000$",
            image: "https://media.istockphoto.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?k=20&m=861188910&s=612x612&w=0&h=eeswopKXQPft8lh6sjcMy7xEAYh_YRd_psZ7luHQuJk=",
            category: "Grocery",
        },
        {
            name: "Object1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus voluptatibus, ipsam assumenda doloremque deleniti illo quae, impedit possimus",
            price: "1000$",
            image: "https://media.istockphoto.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?k=20&m=861188910&s=612x612&w=0&h=eeswopKXQPft8lh6sjcMy7xEAYh_YRd_psZ7luHQuJk=",
            category: "Grocery",
        },
        {
            name: "Object1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus voluptatibus, ipsam assumenda doloremque deleniti illo quae, impedit possimus",
            price: "1000$",
            image: "https://media.istockphoto.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?k=20&m=861188910&s=612x612&w=0&h=eeswopKXQPft8lh6sjcMy7xEAYh_YRd_psZ7luHQuJk=",
            category: "Grocery",
        },
        {
            name: "Object1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus voluptatibus, ipsam assumenda doloremque deleniti illo quae, impedit possimus",
            price: "1000$",
            image: "https://media.istockphoto.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?k=20&m=861188910&s=612x612&w=0&h=eeswopKXQPft8lh6sjcMy7xEAYh_YRd_psZ7luHQuJk=",
            category: "Grocery",
        },
        {
            name: "Object1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus voluptatibus, ipsam assumenda doloremque deleniti illo quae, impedit possimus",
            price: "1000$",
            image: "https://media.istockphoto.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?k=20&m=861188910&s=612x612&w=0&h=eeswopKXQPft8lh6sjcMy7xEAYh_YRd_psZ7luHQuJk=",
            category: "Grocery",
        },
        {
            name: "Object1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus voluptatibus, ipsam assumenda doloremque deleniti illo quae, impedit possimus",
            price: "1000$",
            image: "https://media.istockphoto.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?k=20&m=861188910&s=612x612&w=0&h=eeswopKXQPft8lh6sjcMy7xEAYh_YRd_psZ7luHQuJk=",
            category: "Grocery",
        },
        {
            name: "Object1",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus voluptatibus, ipsam assumenda doloremque deleniti illo quae, impedit possimus",
            price: "1000$",
            image: "https://media.istockphoto.com/photos/different-types-of-food-on-rustic-wooden-table-picture-id861188910?k=20&m=861188910&s=612x612&w=0&h=eeswopKXQPft8lh6sjcMy7xEAYh_YRd_psZ7luHQuJk=",
            category: "Grocery",
        },
    ];

    const stagger = {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const easing = [0.6, -0.05, 0.01, 0.99];
    const fadeInUp = {
        initial: {
            y: 60,
            opacity: 0,
            transition: { duration: 0.6, ease: easing },
        },
        animate: {
            y: 0,
            transition: {
                type: "spring",
                duration: 0.6,
                ease: easing,
            },
        },
    };

    return (
        <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="category relative w-full flex flex-col bg-white group"
        >
            <div className="flex text-4xl py-10 px-11 z-10 font-bold text-blue-500">
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    animate={{ transition: { type: "spring", bounce: 0.3 } }}
                    className="h-10 border-4 border-blue-500 mr-4 group-hover:scale-110 transition-all duration-150 ease-in-out"
                />
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    animate={{ transition: { type: "spring", bounce: 0.3 } }}
                    className="transition-all duration-200 ease-in-out"
                >
                    {category}
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex space-x-10 overflow-x-scroll scrollbar scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-indigo-100 scroll-smooth z-20"
            >
                {products.map((_, i) => (
                    <motion.div
                        initial={{
                            y: i % 2 === 0 ? '100vh' :'-100vh',
                            opacity: 0,
                            transition: { duration: 0.6, ease: easing },
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.3,
                                delay: i * 0.2,
                                ease: easing,
                                bounce: 0.3,
                            },
                        }}
                    >
                        <HomeItemList
                            key={i}
                            title={products[i].name}
                            desc={products[i].desc}
                            price={products[i].price}
                            imgUrl={products[i].image}
                            url="/"
                            productArr={products}
                        />
                    </motion.div>
                ))}
                <div className="absolute top-[10rem] right-0 bg-gradient-to-l from-white h-[20.65rem] w-1/12 z-30" />
            </motion.div>
        </motion.div>
    );
}

export default HomeCategory;
