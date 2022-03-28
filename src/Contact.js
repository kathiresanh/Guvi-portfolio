import React from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


export default function Contact(){
    return(
        
            <div className="container-fluid" >
                {/* <div className="card shadow-lg bg-white" id="project-card"> */}
                    <div className="card-body card shadow-lg bg-white rounded">
                        <div className="d-flex justify-content-end p-1"><Link to="/"><button className="btn btn-danger p-0">Home page</button></Link></div>
                        <AnimateSharedLayout>
                            <motion.div layout initial={{ borderRadius: 25 }}>
                              <div className="card p-3">
                                  <h2>Let's make something great..</h2>
                              <div className="d-flex justify-content-start">
                                  <h2>Contact</h2>
                              </div>
                             <h4> Feel Free to contact me on below mentioned ways..</h4>

                        <h5> <a href="https://www.gmail.com" target="_blank">hkathiresan@gmail.com</a></h5>
                         <h5>8189970957</h5>

                              </div>
                            </motion.div>
                        </AnimateSharedLayout>
                    </div>
                </div>
            // </div>
        )
    }
 