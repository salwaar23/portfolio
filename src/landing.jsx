import Nav from "./nav";
import Home from "./home";
import About from "./about";
import Skill from "./skill";
import Portofolio from "./portfolio";
import Contact from "./contact";

function landing(){
    return(
        <div>
            <Nav/>
            <Home/>
            <About/>
            <Skill/>
            <Portofolio/>
            <Contact/>
        </div>
    )
}

export default landing;