import { PROJECTS } from "../content/Project";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div className="border-b border-neutral-900 text-white">
            <motion.h1
             whileInView={{y:0,opacity:1}}
             initial={{y:-100,opacity:0}}
             transition={{duration:3.5}}
            className="text-4xl font-thin text-center my-20">
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="flex flex-wrap lg:justify-center pb-8">
                        <div className="w-full lg:w-1/4 items-center">
                            <motion.img
                             whileInView={{x:0,opacity:1}}
                             initial={{x:-100,opacity:0}}
                             transition={{duration:3.5}}
                             src={project.image} alt="img" width={150} height={150} 
                             className=" rounded-sm mb-6 items-center "/>
                        </div>
                        <motion.div 
                         whileInView={{x:0,opacity:1}}
                         initial={{x:100,opacity:0}}
                         transition={{duration:3.5}}
                        className="w-full max-w-xl lg:w-3/4 ">
                            <div className="font-semibold mb-4  p-1 mr-3 flex flex-wrap justify-between">
                                <h1>{project.title}</h1>
                                {/* <h1 className="font-thin">{project.time}</h1> */}
                            </div>
                            <p className="text-neutral-400 mb-2">{project.description}
                            </p>
                            <p className="flex flex-wrap  ">
                                {project.technologies.map((tech, index) => (
                                    <div key={index} className="bg-neutral-900 rounded-sm m-1 text-purple-900 p-1">
                                        {tech}
                                    </div>
                                ))}
                            </p>
                        </motion.div>

                    </div>
                ))}
            </div>
        </div>
    )

}