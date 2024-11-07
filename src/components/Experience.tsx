import { EXP } from "../content/Exp";


export default function Exp(){
    return(
        <div className="border-b border-neutral-800">
            <h1 className="text-white font-thin text-center p-8 text-5xl">Open Source Experience</h1>
            <div className="flex flex-wrap justify-center text-white">
                <div className="w-full text-sm text-center text-neutral-400 lg:w-1/4">
                <p>{EXP.year}</p>

                </div>
                <div className="w-full lg:w-3/4">
                <p className="font-semibold mb-4">{EXP.company}</p>
                <p className="font-thin mb-4">{EXP.description}</p>
<div className="my-4">
{EXP.technologies.map((tech,index)=>{
                   return <span key={index} className="mr-2  rounded-sm p-1 text-purple-800 bg-neutral-800 gap-4">{tech}</span>
                })}
</div>
               
                </div>

            </div>
        </div>
    )
}