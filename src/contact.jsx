import { RiMailFill } from "react-icons/ri";
import Nav from "./nav";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

function contact(){
    return(
        <div>
        <Nav/>
        <div id="skill" className="bg-gradient-to-b from-gray-800 to-fuchsia-900 pb-[100px]">
            <h1 className="text-white text-center font-bold text-4xl pt-10">Contact Me</h1>
            <div className="flex justify-center"><div className="inline-flex space-x-5 mt-[80px]">
                <a href ="mailto:salwaaroudlootul@gmail.com"><div><RiMailFill className="text-white w-[50px] h-[50px]"/></div></a>
                <a href ="https://www.linkedin.com/in/salwaaroudlootuljannahr"><div><FaLinkedinIn className="text-white w-[50px] h-[50px]"/></div></a>
                <a href="https://www.instagram.com/salwaar2323/"><div><FaInstagram className="text-white w-[50px] h-[50px]"/></div></a>
            </div></div>
        </div>
        </div>
    )
}

export default contact;