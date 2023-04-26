import React from "react";
import ProjectsList from "./ProjectsList";

export default function Project(){
    return (
        <div  className="p-10 pt-7 m-10 bg-blue-900 rounded-xl shadow-lg shadow-slate-500 " >
            <h1 className=" text-5xl font-bold text-white">Projects</h1>
            <ProjectsList/>
        </div>
    )
}