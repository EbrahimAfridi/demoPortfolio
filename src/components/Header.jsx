import React from "react";
import ReorderIcon from '@mui/icons-material/Reorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return(
      <div className=" h-20 
        p-4 underline-offset-8 text-lg font-bold font-mono 
        bg-transparent 
        flex 
        justify-between 
        items-center
        hover:no-underline
        text-slate-200"
        >

          <ReorderIcon className="text-4xl text-slate-200 hover:cursor-pointer hover:text-black" /> 
          <div className="flex-row flex justify-between items-center gap-2">
              <h3 className="p-2 
                underline
                hover:bg-black
                hover:no-underline 
                hover:cursor-pointer 
              ">
                About me
              </h3>
              <h3 className="p-2 
                underline 
                hover:bg-black 
                hover:no-underline 
                hover:cursor-pointer"
              >
                Projects
              </h3>
              <h3 className="p-2 
              underline
              hover:bg-black 
              hover:no-underline 
              hover:cursor-pointer">
                Contact me
              </h3>
              <AccountCircleIcon className="text-4xl text-slate-200 ml-4 hover:cursor-pointer hover:text-black" />
          </div>
        
      </div>
  )
}

export default Header;