import React from "react";

export const usersData = [
    {
        id: 1,
        name: 'Ebrahim',
        job: 'Student',
        img: 'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=is&k=20&c=aJ_aDoCLFOZAIupaQS5wFtqNNUgWoiqbEap1op-Ez5g='
    },
    {
        id: 2,
        name: 'Sharjeel',
        job: 'Coder',
        img: 'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=is&k=20&c=aJ_aDoCLFOZAIupaQS5wFtqNNUgWoiqbEap1op-Ez5g='
    },
    {
        id: 3,
        name: 'Fariyal',
        job: 'Artist',
        img: 'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=is&k=20&c=aJ_aDoCLFOZAIupaQS5wFtqNNUgWoiqbEap1op-Ez5g='
    }
]

export default function Grid({ users }){
    return(
        <div className="flex flex-wrap justify-start items-center gap-2"> 
            {users.map((user) => (
                <div key={user.id} className="bg-stone-950 p-1  
                     w-96 h-48 border-2 rounded 
                    border-stone-950 flex items-center justify-between "
                >
                    <img className="w-48 h-36" src={user.img} alt="Profile Picture" />
                    <div key={user.id} className="text-center w-auto h-auto text-white font-semibold" >
                        <h2 className="text-xl m-5 " > Name: {user.name}</h2>
                        <p className="text-xl m-5" >Job: {user.job}</p>
                    </div>
                </div>
            ))}
        </div>
    )
   
}