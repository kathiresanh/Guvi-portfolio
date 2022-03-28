
import React from "react";
import { motion } from "framer-motion";



export default function Skills() {

    var skills = [{
        name:"React-Js",
        img:"1.png"
    },{
        name:"Node-Js",
        img:"2.png"
    },{
        name:"HTML",
        img:"3.png"
    },{
        name:"CSS",
        img:"4.png"
    },{
        name:"JavaScript",
        img:"5.png"
    },{
        name:"Mongo-DB",
        img:"6.png"
    },{
        name:"SQL",
        img:"7.png"
    }]
    return (
        <div className="container-fluid">
            <div className="row">
                <div class="d-flex justify-content-start mt-3">
                    <h2 style={{ color: "red" }}>Skills</h2><br></br>
                </div>
                <div className="col-sm-12 d-flex" id="skill-board">

                    {
                        skills.map((obj,index) => {
                            return <motion.div   whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.3 },
                              }}>
                                <div className="card pt-3 p-3" id="skill-card">

                              
<div> <img src={`./images/${obj.img}`} height="250px" width="210px"></img></div>
<div class="d-flex justify-content-center text-danger p-2" >
  <h4> {obj.name}</h4>
</div>

</div>
                            </motion.div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}