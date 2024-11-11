import { HERO_CONTENT } from "../content/Intro";
import Billa from "/BillaImage.jpeg"
import { motion } from "framer-motion"


const contain = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})
export default function Intro() {
    return (

        <div className="border-b border-neutral-900 py-4 lg:mb-35">
            <div className="flex flex-wrap text-neutral-300">
                <div className="w-full lg:w-1/2 ">
                    <div className="flex flex-col items-center lg:items-start ">
                        <motion.h1
                            variants={contain(0)}
                            initial="hidden"
                            animate="visible"


                            className=" text-5xl pb-16 font-thin tracking-tight lg:mt-16  lg:text-7xl  ">
                            Rashmi Barodiya
                        </motion.h1>
                        <motion.span
                            variants={contain(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text
            tracking-tight text-transparent text-4xl ">
                            Full Stack Developer
                        </motion.span>
                        <motion.p

                            variants={contain(1)}
                            initial="hidden"
                            animate="visible"

                            className=" my-2 py-6 font-thin max-w-xl tracking-tight">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 lg:p-8 lg:mt-16">
                    <motion.img 
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:1.3}}
                    src={Billa} alt="billa" className="w-80 h-80" />
                </div>

            </div>
        </div>
    )
}