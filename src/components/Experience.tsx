import { EXP } from "../content/Exp";
import { motion } from "framer-motion";

export default function Exp() {
    return (
        <div className="border-b border-neutral-800 pb-8">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 3.5 }}
                className="text-white font-thin text-center my-20  text-4xl">Open Source Experience</motion.h1>
            <div className="flex flex-wrap justify-center text-white">
                <div className="w-full text-sm items-center text-center text-neutral-400 lg:w-1/2">
                    <motion.p
                        whileInView={{ x: 0, opacity: 1 }}
                        initial={{ x: -100, opacity: 0 }}
                        transition={{ duration: 3.5 }}
                    >{EXP.year}</motion.p>

                </div>
                <motion.div
                    whileInView={{ x: 0, opacity: 1 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 3.5 }}
                    className="w-full lg:w-1/2 ">
                    <p className="font-semibold mb-4">{EXP.company}</p>
                    <p className="font-thin max-w-2xl  mb-4">{EXP.description}</p>
                    <div className="my-4">
                        {EXP.technologies.map((tech, index) => {
                            return <span key={index} className="mr-2  rounded-sm p-1 text-purple-800 bg-neutral-800 gap-4">
                                {tech}</span>
                        })}
                    </div>

                </motion.div>

            </div>
        </div>
    )
}