import { useEffect } from "react";
import Nav from "./nav";
import AOS from 'aos';
import 'aos/dist/aos.css';

function about(){

    useEffect(() =>{
        AOS.init({duration:1200})
    })

    return(
        <div>
            <Nav/>
         
            <div id="about" className="bg-gradient-to-b from-fuchsia-900 to-gray-900 pb-[100px]">
                <h1 className="text-center font-bold text-4xl text-white">About Me</h1>
                <div className="flex justify-center"><div className="inline-flex mt-8"  data-aos="flip-up">
                    <p className="text-white bg-slate-900 h-[225px] p-8 rounded-md mt-[100px]">Merupakan mahasiswa Teknik Informatika semester 7 di Universitas Islam Nusantara<br/>
                        Memiliki ketertarikan pada bidang web development terutama Front-End Development.<br/>
                        Saya sudah mengerjakan project-project menggunakan React.js dan Tailwind CSS<br/>
                        pada mata kuliah mata kuliah terkait. Selain itu, saya juga memiliki ketertarikan pada<br/>
                        bidang desain yang dibuktikan dengan desain yang digunakan pada kegiatan<br/> Kampus Mengajar 7
                        SMP BPI Rancaekek. Memiliki antusiasme untuk belajar hal baru.
                    </p>
                    <div className=""  data-aos="flip-up">
                        <img src="./src/assets/about.png" className="w-[450px] rounded-xl"/>
                    </div>
                </div></div>
            </div>
        </div>
    )
}

export default about;