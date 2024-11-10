import { PROJECTS } from "../content/Project";


export default function Projects() {
    return (
        <div className="border-b border-neutral-900 text-white">
            <h1 className="text-4xl font-thin text-center my-20">
                Projects
            </h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className="flex flex-wrap lg:justify-center pb-8">
                        <div className="w-full lg:w-1/4 items-center">
                            <img src={project.image} alt="img" width={150} height={150} className=" rounded-sm mb-6 items-center "></img>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4 ">
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
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )

}