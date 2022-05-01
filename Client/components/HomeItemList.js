import React, { Component } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeItemList(props) {
  const stagger = {
    initial: {
      opacity: 0,
    },
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{
        animate: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      whileTap={{ scale: 0.95 }}
      className="px-10 py-10"
    >
      <div className="w-60 shadow-2xl border border-blue-100 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 hover:shadow-4xl">
        <img
          src={props.imgUrl}
          alt=""
          className="h-40 object-cover rounded-xl"
        />
        <div className="p-2">
          <h2 className="font-bold text-lg">{props.title}</h2>
          <p className="line-clamp-2 text-sm text-gray-600">{props.desc}</p>
          <p className="text-lg font-bold text-blue-600">
            Price: {props.price}
          </p>
        </div>
        <div className="m-2">
          <Link href={props.url}>
            <a className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-800 duration-300 transition-all ease-in-out hover:shadow-lg">
              Learn More
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
