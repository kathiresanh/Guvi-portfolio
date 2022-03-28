import React from "react";
import Projects from "./Project";
import Skills from "./Skills";

export default function Common(){
    return(
        <div className="container-fluid">
            <Skills></Skills>
            <Projects></Projects>
        </div>
    )
}