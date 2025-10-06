import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <div className="w-full h-[8vh] flex justify-start sm:justify-between px-7 items-center">
        <div className="left-part  flex justify-between gap-2 items-center">
          <Link to={'/'} className="logo cursor-pointer flex justify-between  gap-1 items-center">
            <div className="rounded-full bg-[#eea302] h-6 w-6"></div>
            <div className="font-bold text-2xl">Nicol</div>
            <div className="font-bold text-2xl">Rider</div>
          </Link>
          <div>Editor</div>
        </div>

        <div className="right-part hidden sm:flex justify-between gap-4 px-4 ">
          <Link to={'/resume'} className="hover:text-[#eea302] cursor-pointer transition-all">Resume</Link>
          <div className="h-6 w-[1px] bg-black"></div>
          <Link to={'/project'} className="hover:text-[#eea302] cursor-pointer transition-all">Projects</Link>
          <div className="h-6 w-[1px] bg-black"></div>
          <Link to={'/contact'} className="hover:text-[#eea302] cursor-pointer transition-all">Contacts</Link>
        </div>
      </div>

      <div
        onClick={() => setMobileMenu(true)}
        className="mobile sm:hidden flex flex-col gap-1 justify-center items-center absolute right-8 top-8 cursor-pointer"
      >
        <div className="w-5 h-[2px] bg-black"></div>
        <div className="w-5 h-[2px] bg-black"></div>
        <div className="w-5 h-[2px] bg-black"></div>
      </div>

      <div
        className={` fixed top-0 left-0   z-[999] w-[100%] h-[100%] flex flex-col bg-white gap-10 font-semibold text-3xl items-center  ${
          mobileMenu ? "block" : "hidden"
        }`}
      >
        <IoMdClose onClick={()=>setMobileMenu(false)} className="cursor-pointer text-5xl relative top-10 left-30" />
        <Link  onClick={()=>setMobileMenu(false)}  to={'/resume'} className="font-light hover:text-[#eea302] cursor-pointer transition-all duration-500">Resume</Link>
        <Link  onClick={()=>setMobileMenu(false)} to={'/project'} className="font-light hover:text-[#eea302] cursor-pointer transition-all duration-500">Projects</Link>
        <Link onClick={()=>setMobileMenu(false)}  to={'/contact'} className="font-light hover:text-[#eea302] cursor-pointer transition-all duration-500">Contacts</Link>
      </div>
    </>
  );
};

export default Navbar;
