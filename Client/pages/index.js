import { useRouter } from "next/router";
import { useSession } from 'next-auth/react'
import { auth, db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
import { motion } from "framer-motion"

const home = () => {
  const { data: session } = useSession();
  const router = useRouter();
  // const allDocs = await getDocs(collection(db, "users"))
  // const q = query(collection(db, "users"), where("registered", "==", true));
  // const querySnapshot = await getDocs(q);
  const getStartedClickHandler = () => {
    if (!session) {
      router.push('/auth/login')
    } else {
      router.push("/home")
    }
  }
  const easing = [0.6, -0.05, 0.01, 0.99]
  const fadeInLeft = {
    initial: {
      x: -100,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
        delay: 1
      }
    }
  }
  return (
    <div  className='bg-TZ_LIGHT relative text-white shadow-2xl'>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 1, ease: easing, duration: 1 }} className='flex flex-col items-center justify-center min-h-screen scrollbar scrollbar-thin scrollbar-thumb-blue-400'>
        <div>
          <div className="border-l-8 border-blue-500 text-bold text-9xl">
            <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} variants={fadeInLeft} className='pl-4 z-40 text-white'>
              Trading<span className='text-blue-500'>Zilla</span>
            </motion.div>
          </div>
          <p className='pt-[3.5rem]'>The ultimate website for trading betweeen sellers and buyer without the interfarence of third party which causes market price increment. Which is responsible for the low profit percentage of the actual seller e.g <span className='text-blue-400 font-bold'>Rural craftsmen</span></p>
        </div>
      </motion.div>
      <div className='absolute left-[8rem] top-[65vh]'>
        <button onClick={getStartedClickHandler} className='flex text-white items-center justify-center border-2 rounded-[3rem] h-[3.5rem] w-[20rem] border-blue-500 hover:text-white cursor-pointer hover:bg-blue-500 focus:scale-95 transition-all duration-200 ease-in-out'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default home