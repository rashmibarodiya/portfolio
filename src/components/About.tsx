
import avt from "../../public/avt3.svg"
import { ABOUT } from "../content/Intro"
export default function About() {
    return (
        <div className="border-b border-neutral-900 ">
            <h1 className="text-white text-center font-thin my-20  text-4xl ">
                About
                <span className="text-neutral-500 ml-2">
                    Me
                </span>
            </h1>


            <div className=" flex flex-wrap  items-center lg:items-start">

                <div className="w-full lg:w-1/2">
                <div className="flex justify-center">
                <img src={avt} alt="avt" className=" w-64 h-64" />
                </div>
                    
                </div>
                <div className=" w-full lg:w-1/2 ">
                    <div className="text-neutral-200 lg:mt-8 justify-center lg:justify-left">
                        {ABOUT}
                    </div>

                </div>
            </div>
            this is about
        </div>
    )
}