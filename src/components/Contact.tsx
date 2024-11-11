
const phone = import.meta.env.VITE_PHONE!
const email = import.meta.env.VITE_EMAIL!

import {motion} from "framer-motion"
export default function Contact() {
    return (
        <div className="border-b border-neutral-800 pb-4">

            <motion.h1
             whileInView={{y:0,opacity:1}}
             initial={{y:-100,opacity:0}}
             transition={{duration:1.7}}
            className="font-thin text-4xl m-10 text-white text-center">
                Ready to Connect?
            </motion.h1>

            <div className="font-thin text-center text-neutral-400">
                <motion.h1
                 whileInView={{x:0,opacity:1}}
                 initial={{x:-100,opacity:0}}
                 transition={{duration:1.7}}
                >{phone}</motion.h1>
                <motion.h1
                 whileInView={{x:0,opacity:1}}
                 initial={{x:100,opacity:0}}
                 transition={{duration:1.7}}
                >{email}</motion.h1>
            </div>
        </div>
    )
}