
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";

import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md"
export default function Navbar() {
    return (
        <div>
            <div className="text-white text-3xl flex justify-between">
                RB
                <div className="flex  justify-between gap-4  ">
                    <FaLinkedin className="cursor-pointer" />
                    <FaGithub className="cursor-pointer" />
                    <FaXTwitter className="cursor-pointer"/>
                    <MdOutlineMailOutline className="cursor-pointer" />
                    <MdOutlinePhoneEnabled className="cursor-pointer" />
                </div>


            </div>
        </div>
    )
}