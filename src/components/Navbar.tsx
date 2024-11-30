
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md"
import resume from "../assets/resume2.svg"


const phone = import.meta.env.VITE_PHONE!
const email = import.meta.env.VITE_EMAIL!
const github = import.meta.env.VITE_GITHUB!
const x = import.meta.env.VITE_X!
const linkdin = import.meta.env.VITE_LINKEDIN!
const res = import.meta.env.VITE_RESUME
export default function Navbar() {
    return (
        <div>
            <div className="text-white text-3xl flex justify-between pb-8">
                RB
                <div className="flex  justify-between gap-4  ">


                    <div className="relative group">
                        <FaLinkedin
                            className="cursor-pointer transition-all duration-300 text-3xl"
                            onClick={() => window.location.href = `${linkdin}`}
                        />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
    opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded px-2 py-1
     transition-opacity duration-300">
                            LinkedIn
                        </span>
                    </div>
                    <div className="relative group">
                    <FaGithub className="cursor-pointer"
                        onClick={() => window.location.href = `${github}`}
                    />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
    opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded px-2 py-1
     transition-opacity duration-300">
                            Github
                        </span>
                    </div>


                    <div className="relative group">
                    <img src={resume} width={32} height={30} className="cursor-pointer rounded-sm "
                        onClick={() => window.location.href = `${res}`}
                    />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
    opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded px-2 py-1
     transition-opacity duration-300">
                            Resume
                        </span>
                    </div>


                    <div className="relative group">
                    <FaXTwitter className="cursor-pointer"
                        onClick={() => window.location.href = `${x}`}
                    />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
    opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded px-2 py-1
     transition-opacity duration-300">
                            X
                        </span>
                    </div>


                    

                    <div className="relative group">
                    <MdOutlineMailOutline className="cursor-pointer"
                        onClick={() =>
                            window.location.href = `mailto:=${email}?subject=Hello%20Rashmi&body=
                            Hello%20there!%20I%20hope%20you're%20doing%20well.`
                        }
                    />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
    opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded px-2 py-1
     transition-opacity duration-300">
                            Email
                        </span>
                    </div>

                    
                    
                    <div className="relative group">
                    <MdOutlinePhoneEnabled className="cursor-pointer"
                        onClick={() =>
                            window.location.href = `tel:${phone}`
                        }
                    />
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
    opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded px-2 py-1
     transition-opacity duration-300">
                            Phone
                        </span>
                    </div>
                    
                    

                </div>


            </div>
        </div>
    )
}