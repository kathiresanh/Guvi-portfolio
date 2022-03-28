
import React from "react";
import { motion } from "framer-motion";



export default function Skillset() {


    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.3
          }
        }
      }


      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

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
            <div class="d-flex justify-content-start mt-2">
            <div>
            <p class="h4"> Hi , I'm</p>
            <motion.div animate={{ x:[400,0] }}    transition={{ duration: 0.3}}><h3 style={{color:"orange",fontSize:"50px"}}>Kathiresan,</h3></motion.div> 
           <p class="h4"> I am <span style={{color:"red"}}>MERN STACK</span> web developer i design & build digital products with best user experience.</p>
          
            </div>
            </div>
                <div class="d-flex justify-content-start mt-1">
                    <h2 style={{ color: "red" }}>Skills</h2><br></br>
                </div>
                <motion.div animate="show" variants={container}
    initial="hidden"
   className="col-sm-12 d-flex" id="skillset-board">

                    {
                        skills.map((obj,index) => {
                            return <motion.div variants={item}  whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                              }}>
                                <div className="card pt-3 p-3" id="skillset-cards">

                              
<div> <img src={`./images/${obj.img}`} height="100px" width="150px"></img></div>
<div class="d-flex justify-content-center text-danger p-2" >
  <h4> {obj.name}</h4>
</div>

</div>
                            </motion.div>
                        })
                    }
                </motion.div>
            </div>
        </div>
    )
}