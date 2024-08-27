import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Portofolio from "./portfolio";
import Landing from "./landing";
import Skill from "./skill";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/nav" element={<Nav/>}/>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portofolio/>}/>
        <Route path="/skill" element={<Skill/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;