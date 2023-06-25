import React from "react";
import { logo } from "../assets"; 
import { navLinks }  from  "../constant";

const Navbar = () => {
    return(
        <headers className="flex justify-between px-12 py-4">
            <img src={logo} className="w-28 object-contain"/>
            <div className="hidden items-center lg:flex gap-x-6"> 
            {navLinks.map(({id , title}) => (
                <p key={id}
                className="cursor-pointer rounded-md py-[5px] px-2 font-medium hover: bg-gray-200">
                    </p>
            
            )
    )
}
    
</div>
<div className="flex gap-x-4">
    <p className="cursor-pointer rounded-md py-[6px] px-2 font-family hover:bg-gray-200">
        shop
        </p>
        <p className="cursor-pointer rounded-md py-[6px] px-2 font-family hover:bg-gray-200">
            Account
            </p>
            <p className="cursor-pointer rounded-md py-[6px] px-2 font-family hover:bg-gray-200">
            Menu
            </p>
            </div>
            </header>
    );
  export default Navbar;