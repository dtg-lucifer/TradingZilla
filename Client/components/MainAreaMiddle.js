import React, { useEffect } from "react";
import HomeCategory from "./HomeCategory";
import dummyData from "../dummyData.json";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    let [...data] = dummyData.allItems;
    useEffect(() => {
        inView &&
            animation.start({
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.3,
                    ease: easing,
                },
            });
    }, [inView]);
    const stagger = {
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
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: easing,
            },
        },
    };
    return (
        <div className="py-20">
            {data.map((e, i) => (
                <motion.div
                    ref={ref}
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div
                        variants={fadeInUp}
                        whileInView={{ opacity: 1 }}
                        initial="initial"
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                bounce: 0.3,
                                delay: i * 0.2,
                            },
                        }}
                    >
                        <HomeCategory
                            key={e.items[i].itemsId}
                            category={e.category}
                            index={i}
                        />
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}
