import { HERO_CONTENT } from "../content/Intro";
import Billa from "../../public/BillaImage.jpeg"

export default function Intro() {
    return (

        <div className="border-b border-neutral-900 py-4 lg:mb-35">
            <div className="flex flex-wrap text-white">
                <div className="w-full lg:w-1/2 ">
                    <div className="flex flex-col items-center lg:items-start ">
                        <h1 className=" text-5xl pb-16 font-thin tracking-tight lg:mt-16  lg:text-7xl  ">
                            Rashmi Barodiya
                        </h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text
            tracking-tight text-transparent text-4xl ">
                            Full Stack Developer
                        </span>
                        <p className=" my-2 py-6 font-light max-w-xl tracking-tight">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 lg:p-8 lg:mt-16">
                    <img src={Billa} alt="billa" className="w-80 h-80" />
                </div>

            </div>
        </div>
    )
}