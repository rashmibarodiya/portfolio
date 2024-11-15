
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md"



 const phone = import.meta.env.VITE_PHONE!
const email = import.meta.env.VITE_EMAIL!
const github = import.meta.env.VITE_GITHUB!
const x = import.meta.env.VITE_X!
const linkdin = import.meta.env.VITE_LINKEDIN!

export default function Navbar() {
    return (
        <div>
            <div className="text-white text-3xl flex justify-between pb-8">
                RB
                <div className="flex  justify-between gap-4  ">

                    <FaLinkedin className="cursor-pointer"
                        onClick={() => window.location.href = `${linkdin}`}
                    />
                    <FaGithub className="cursor-pointer"
                        onClick={() => window.location.href = `${github}`}
                    />
                    <FaXTwitter className="cursor-pointer"
                        onClick={() => window.location.href = `${x}`}
                    />
                    <MdOutlineMailOutline className="cursor-pointer"
                        onClick={() => 
                            window.location.href = `mailto:=${email}?subject=Hello%20Rashmi&body=
                            Hello%20there!%20I%20hope%20you're%20doing%20well.`
    }
                    />
                    <MdOutlinePhoneEnabled className="cursor-pointer" 
                    onClick={()=>
                        window.location.href=`tel:${phone}`
                    }
                    />
                </div>


            </div>
        </div>
    )
}