import React, { useState } from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import Skillset from "./Skillset";
import Projects from "./Project";
import Contact from "./Contact";
import Common from "./Common";


export default function Home() {


    let callabout = () => {
        setabout(true)
        setuser("About")
        setcontact(false)
        setproject(false)
    }
    let closeabout = () => {
      
        setuser('Hello.')
    }

    
    let callproject = () => {
        setproject(true)
        setuser1("Projects")
        setabout(false)
        setcontact(false)
    }
    let closeproject = () => {
       
        setuser1('I am')
    }

    let callcontact = () => {
        setcontact(true)
        setuser2("Contacts")
        setabout(false)
        setproject(false)
    }
    let closecontact = () => {
        
        setuser2("Kathiresan")
    }
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    const [contact,setcontact] = useState(false)
    const [project, setproject] = useState(false)
    const [about, setabout] = useState(true)
    const [user, setuser] = useState("Hello.")
    const [user1, setuser1] = useState("I am")
    const [user2, setuser2] = useState("Kathiresan")
    return (
        <div className="container-fluid ">

            <div className="row">
                <div className="col-sm-5  p-4">

                    <motion.div animate={{ x: [500, 0] }}>
                        <Link to="/about" style={{ textDecoration: 'none', color: "white" }}>
                            <motion.div>
                                <div class="d-flex justify-content-start fw-bold" style={{ color: "black" }}><motion.h1 
                                 variants={item} whileHover={{ x: 80 }} onHoverStart={() => { callabout() }} onHoverEnd={() => { closeabout() }}>{user}</motion.h1></div>
                            </motion.div>
                        </Link>
                        <Link to="/project" style={{ textDecoration: 'none', color: "white" }}>
                        <motion.div >
                            <div class="d-flex justify-content-start fw-bold" style={{ color: "red" }} ><motion.h1 
                             whileHover={{ x: 80 }} onHoverStart={() => { callproject() }} onHoverEnd={() => { closeproject() }}>{user1}</motion.h1></div>
                        </motion.div>
                        </Link>
                        <Link to="/contact" style={{ textDecoration: 'none', color: "white" }}>
                        <motion.div>
                            <div class="d-flex justify-content-start fw-bold" style={{ color: "red" }}><motion.h1 
                           whileHover={{ x: 80 }} onHoverStart={() => { callcontact() }} onHoverEnd={() => { closecontact() }} >{user2}</motion.h1></div>
                        </motion.div>
                        </Link>
                    </motion.div>
                    <motion.div animate={{ x: [-500, 0] }} class="d-flex justify-content-center">
                        <motion.div initial="hidden"
                            animate="visible"
                            variants={variants} transition={{ duration: 3 }}>
                            <img src="./images/kathir1.jpg" height="300px" width="300px" id="photo"></img>
                        </motion.div>
                    </motion.div>

                </div>
                <div className="col-sm-7" id="intro" >
                    {
                        about ? <Skillset></Skillset> : null
                    }
                    {
                        project ? <Projects></Projects> :null
                    }
                    {
                        contact ? <Contact></Contact> : null
                    }
                </div>


            </div>

        </div>
    )
}









