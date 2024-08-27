import Nav from "./nav";

function portofolio(){
    return(
        <div>
        <Nav/>
            <div id="skill" className="bg-gradient-to-b from-fuchsia-900 to-gray-800">
               <h1 className="text-white text-center font-bold text-4xl pt-10">Project</h1>
               <div className="flex justify-center"><div className="inline-flex mt-[150px] space-x-10 pb-[200px]">
                    <a href="https://smpbpirancaekek.sch.id"><div className="bg-gray-800 h-[200px] rounded-md hover:scale-110 transition-transform duration-300">
                        <img src="./src/assets/smp.png" className="w-[300px] pt-4"/>
                        <h1 className="text-white text-center font-bold">Website Profile SMP BPI Rancaekek</h1>
                    </div></a>
                    <a href="https://github.com/salwaar23/tugas-web-akhir"><div className="bg-gray-800 h-[200px] rounded-md hover:scale-110 transition-transform duration-300">
                        <img src="./src/assets/statistik.png" className="w-[300px] pt-4"/>
                        <h1 className="text-white text-center font-bold">Website Sisfor RT</h1>
                    </div></a>
                    <a href="https://github.com/salwaar23/QC"><div className="bg-gray-800 h-[200px] rounded-md hover:scale-110 transition-transform duration-300">
                        <img src="./src/assets/login.png" className="w-[300px] pt-6"/>
                        <h1 className="text-white text-center font-bold">Website Sisfor QC</h1>
                    </div></a>
               </div></div>
            </div>

        </div>
    )
}

export default portofolio;