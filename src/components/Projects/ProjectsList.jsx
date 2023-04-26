import React from "react";

export default function ProjectsList(){

    const listData = [
        {
            id: 1,
            name: "Project one",
            img: "https://allthings.how/content/images/wordpress/2022/03/allthings.how-how-to-rotate-screen-on-a-windows-11-pc-computer-screen.png"
        },
        {
            id: 2,
            name: "Project two",
            img: "https://allthings.how/content/images/wordpress/2022/03/allthings.how-how-to-rotate-screen-on-a-windows-11-pc-computer-screen.png"
        },
        {
            id: 3,
            name: "Project three",
            img: "https://allthings.how/content/images/wordpress/2022/03/allthings.how-how-to-rotate-screen-on-a-windows-11-pc-computer-screen.png"
        },
        {
            id: 4,
            name: "Project four",
            img: "https://allthings.how/content/images/wordpress/2022/03/allthings.how-how-to-rotate-screen-on-a-windows-11-pc-computer-screen.png"
        },
        {
            id: 5,
            name: "Project five",
            img: "https://allthings.how/content/images/wordpress/2022/03/allthings.how-how-to-rotate-screen-on-a-windows-11-pc-computer-screen.png"
        },
        {
            id: 6,
            name: "Project six",
            img: "https://allthings.how/content/images/wordpress/2022/03/allthings.how-how-to-rotate-screen-on-a-windows-11-pc-computer-screen.png"
        }
        
    ]

    return(
        <div className="mt-6">
            {/* <div className="flex flex-row flex-wrap justify-evenly"> */}
            <div className="grid grid-cols-3 gap-10 ">
                {listData.map( (list) => (
                    <div>
                        <img className="w-auto mb-0.5 rounded-sm" src={list.img} alt="Project Image" />
                        <p className="bg-white text-center font-bold font-mono text-md px-3 py-1 rounded-sm">{list.name}</p>
                    </div>
                ))} 
            </div>
        </div>
    )
}