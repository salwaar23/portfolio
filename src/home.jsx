import React, {useRef} from "react";
import Nav from "./nav";
import { TypeAnimation } from 'react-type-animation';

function home(){

    return(
        <div>
            <Nav/> 
            <div className="bg-gradient-to-t from-fuchsia-900 via-gray-800 to-slate-900 pb-[100px]">
            <div className="mt-[150px] inline-flex space-x-[200px] width-screen">
                <div className="ml-[80px] mt-[120px]">
                    <h1 className="text-4xl font-bold text-white">Hello!</h1>
                    <h1 className="text-4xl text-white">My name is <span className="font-bold">Salwaa Roudlootul Jannah R</span></h1>
                    <div className="inline-flex">
                        <div className="text-[32px] pr-2 text-white">I'm a</div>
                        <div><TypeAnimation
                        sequence={[
                        'Web Developer', 
                        2000, 
                        'Writer', 
                        2000, 
                        'Graphic Designer', 
                        2000,
                        () => {
                            console.log('Sequence completed');
                        },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '2em', display: 'inline-block', fontWeight: 'bold', backgroundColor:'yellow'}}
                        /></div>
                    </div>
                </div>
                <div className="">
                    <img src="./src/assets/image1.jpg" className="w-[300px] rounded-xl"/>
                </div>
            </div>   
            </div>
        </div>
    )
}

export default home;