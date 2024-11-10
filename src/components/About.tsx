
import avt from "../../public/avt3.svg"
import { ABOUT } from "../content/Intro"
import {motion} from "framer-motion"
export default function About() {
    return (
        <div className="border-b border-neutral-900 ">
            <h1 className="text-white text-center font-thin my-16 text-4xl ">
                About
                <span className="text-neutral-500 ml-2">
                    Me
                </span>
            </h1>


            <div className=" flex flex-wrap  items-center lg:items-start">

                <div className="w-full lg:w-1/2">
                <div className="flex justify-center">
                <motion.img
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:0.5}}
                src={avt} alt="avt"  width={250} height={250} className="" />
                </div>
                    
                </div>
                <div className=" w-full lg:w-1/2 ">
                    <motion.div
                     whileInView={{opacity:1,x:0}}
                     initial={{opacity:0,x:100}}
                     transition={{duration:0.5}}
                    className="text-neutral-300 max-w-xl lg:mt-8 justify-center lg:justify-left">
                        {ABOUT}
                    </motion.div>

                </div>
            </div>
           
        </div>
    )
}