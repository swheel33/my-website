import { Box } from "@chakra-ui/react";
import { useState } from "react";
import AboutMe from "./AboutMe";
import Home from './Home';
import Navbar from "./Navbar";
import Projects from "./Projects";


export default function App() {
    const [isHome, setIsHome] = useState(true);
    const [isAboutMe, setIsAboutMe] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    
    return (
        <Box h='100vh' w='100vw'>
            <Navbar setIsHome={setIsHome} setIsAboutMe={setIsAboutMe} setIsProjects={setIsProjects}/>
            {isHome && <Home />}
            {isAboutMe && <AboutMe />}
            {isProjects && <Projects />}
        </Box>
    )
}