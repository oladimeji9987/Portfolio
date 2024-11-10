import About from "../About"
import Capability from "../Capability";
import Project from "../Project";
import Contact from "../Contact";


const Home = ()=>{
    return (
        <div>
            <marquee behavior="" direction="right">
                <h1>HELLO 😎, WELCOME TO MY PORTFOLIO!</h1>
            </marquee>
            <About/>
            <Capability/>
            <Project/>
            <Contact/>
        </div>
        
    )
}

export default Home;