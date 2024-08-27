import { Link } from "react-router-dom";

function Nav(){
    return(
       <div className="pt-4 pb-4 inline-flex fixed top-0 bg-slate-900 min-w-full shadow-xl">
            <h1 className="text-3xl font-bold ml-6 text-white">Portfolio</h1>
            <div className="inline-flex fixed right-10 space-x-10 mt-2">
                <Link to='/'><h1 className="text-white">Home</h1></Link>
                <h1 className="text-white">About Me</h1>
                <h1 className="text-white">Portfolio</h1>
                <h1 className="text-white">Contact</h1>
            </div>
       </div> 
    )
}

export default Nav;