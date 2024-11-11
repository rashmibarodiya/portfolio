import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostgresql, SiPostman } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion"

const techMove = (duration: number) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse" as "reverse"

        }
    }
})

export default function Tech() {
    return (
        <div className="border-b border-neutral-800 pb-20">
            <motion.h1 
             whileInView={{x:0,opacity:1}}
             initial={{x:100,opacity:0}}
             transition={{duration:2.5}}
            className="text-4xl text-white font-thin py-10 text-center">
                Tech Stack

            </motion.h1>
            <motion.div 
            whileInView={{x:0,opacity:1}}
            initial={{x:-150,opacity:0}}
            transition={{duration:3.5}}
            className="flex flex-wrap gap-4 md-10 items-center justify-center">
                <motion.div
                    variants={techMove(3.5)}
                    animate="animate"
                    initial="initial"
                    className="border rounded-2xl p-4 border-neutral-800">
                    <FaReact className="text-7xl text-cyan-700" />
                </motion.div>


                <motion.div
                    variants={techMove(3.1)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={techMove(1.9)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <TbBrandTypescript className="text-7xl text-cyan-700" />
                </motion.div>
                <motion.div
                    variants={techMove(1.5)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <SiMongodb className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                    variants={techMove(1.4)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <TbBrandNextjs className="text-7xl text-white" />
                </motion.div>
                <motion.div
                    variants={techMove(2.3)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <SiExpress className="text-7xl text-white" />
                </motion.div>
                <motion.div
                    variants={techMove(1.8)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <SiPostgresql className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div
                    variants={techMove(1)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <RiJavascriptLine className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div
                    variants={techMove(2.5)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <RiTailwindCssFill className="text-7xl text-cyan-700" />
                </motion.div>
                <motion.div
                    variants={techMove(0.9)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <FaGithub className="text-7xl text-white" />
                </motion.div>
                <motion.div
                    variants={techMove(1.3)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <FaHtml5 className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div
                    variants={techMove(1.5)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <FaCss3Alt className="text-7xl text-cyan-700" />
                </motion.div>
                <motion.div
                    variants={techMove(2.2)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <SiPostman className="text-7xl text-orange-700" />
                </motion.div>
                <motion.div
                    variants={techMove(3.2)}
                    animate="animate"
                    initial="initial" className="border rounded-2xl p-4 border-neutral-800">
                    <VscVscode className="text-7xl text-cyan-700" />
                </motion.div>

            </motion.div>

        </div>
    )
}