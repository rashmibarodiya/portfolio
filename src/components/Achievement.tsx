
import { motion } from "framer-motion";
import exp from "/badge/exp.png"
import trail from "/badge/trail.png"
import adven from "/badge/adven.png"

const hfest = import.meta.env.VITE_HACKTOBERFEST!
export default function Achievements() {
    return (
        <div className="border-b border-neutral-900 text-white">
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 2 }}
                className="text-4xl font-thin text-center my-20">
                Achievements
            </motion.h1>
            <div>

                <div className="flex flex-wrap justify-center pb-8">
                    <div className="w-full lg:w-1/4 items-center p-2">
                        <motion.img
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 2 }}
                            src={exp} alt="img" width={150} height={150}
                            className=" rounded-sm mb-6 items-center font-thin  " />
                            Earned for 60 points
                    </div>
                    <div className="w-full lg:w-1/4 items-center p-2 ">
                        <motion.img
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 2 }}
                            src={adven} alt="img" width={150} height={150}
                            className=" rounded-sm mb-6 items-center font-thin " />
                            Earned for 140 points
                    </div>
                    <div className="w-full lg:w-1/4 p-2 items-center">
                        <motion.img
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 2 }}
                            src={trail} alt="img" width={150} height={150}
                            className=" rounded-sm mb-6 items-center font-thin" />
                            Earned for 200 points
                    </div>
                    <div>
                    <div className="lg:mt-24 p-4">
                    <a
                    href={hfest}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500  hover:underline "
                >
                    See more badges
                </a>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    )

}