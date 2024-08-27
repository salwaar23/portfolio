import { useEffect } from "react";
import Nav from "./nav";
import { FaFigma, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiCanva } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

function skill(){

    useEffect(() =>{
        AOS.init({duration:1200})
    })

    return(
        <div>
            <Nav/>
         
            <div id="skill" className="bg-gradient-to-b from-gray-900 to-fuchsia-900">
               <h1 className="text-white text-center font-bold text-4xl pt-10">Skills & Tools</h1>
               <div className="flex justify-center" data-aos="zoom-out"><div className="inline-flex mt-[150px] space-x-10 pb-[200px]">
                    <div><FaReact className="w-20 h-20 text-blue-500" /></div>
                    <div><RiTailwindCssFill className="w-20 h-20 text-blue-500"/></div>
                    <div><FaPython className="w-20 h-20"/></div>
                    <div><FaHtml5 className="w-20 h-20 text-orange-600"/></div>
                    <div><RiJavascriptFill className="w-20 h-20 text-yellow-300"/></div>
                    <div><FaFigma className="w-20 h-20"/></div>
                    <div><VscVscode className="w-20 h-20 text-blue-800"/></div>
                    <div><SiCanva className="w-20 h-20"/></div>
               </div></div>
            </div>
        </div>
    )
}

export default skill;