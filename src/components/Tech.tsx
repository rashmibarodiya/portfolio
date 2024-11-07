import { FaReact,FaNodeJs,FaGithub,FaHtml5 , FaCss3Alt} from "react-icons/fa";
import { SiMongodb ,SiExpress,SiPostgresql,SiPostman} from "react-icons/si";
import { TbBrandNextjs ,TbBrandTypescript} from "react-icons/tb";
import { RiJavascriptLine,RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
export default function Tech(){
    return(
        <div className="border-b border-neutral-800 pb-20">
            <h1 className="text-4xl text-white font-thin py-10 text-center">
                Tech Stack

            </h1>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <FaReact className="text-7xl text-cyan-700"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <FaNodeJs className="text-7xl text-green-500"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <TbBrandTypescript className="text-7xl text-cyan-700"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <SiMongodb className="text-7xl text-green-500"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <TbBrandNextjs className="text-7xl text-white"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <SiExpress className="text-7xl text-white"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <SiPostgresql className="text-7xl text-sky-700"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <RiJavascriptLine className="text-7xl text-yellow-500"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <RiTailwindCssFill className="text-7xl text-cyan-700"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <FaGithub className="text-7xl text-white"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <FaHtml5 className="text-7xl text-orange-500"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <FaCss3Alt className="text-7xl text-cyan-700"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <SiPostman className="text-7xl text-orange-700"/>
                </div>
                <div className="border rounded-2xl p-4 border-neutral-800">
                    <VscVscode className="text-7xl text-cyan-700"/>
                </div>

            </div>

        </div>
    )
}