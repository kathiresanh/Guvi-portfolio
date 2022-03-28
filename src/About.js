import React from "react";
import Introduction from "./Introduction";
import Skills from "./Skills";
import { Link } from "react-router-dom";

export default function About(){
    return(
  <div className="container pt-3">
            <div className="container">
            <div className="row">
                <div className="col-sm-12 text-black">
                <div className="d-flex justify-content-end p-1"><Link to="/"><button className="btn btn-danger p-0">Home page</button></Link></div>
                        <div className="col-sm-10">
                        <h2 className="d-flex justify-content-start">I design and build digital products and web applications.</h2>
                        </div>
                      <Introduction></Introduction>
                </div>
               
            </div>
         
         </div>
  </div>
    )
}