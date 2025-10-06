import React, { useRef } from "react";
import profile_img from "../assets/profile_img.avif";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
const Main = () => {
  const btnsRef = useRef(null);
  useGSAP(() => {
    gsap.from(".toUp", {
      y: 150,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    });
    gsap.from(btnsRef.current, {
      y: 150,
      opacity: 0,
      duration: 1.5,
      ease: "power1.out",
      stagger: {
        each: 0.2,
        from: "start",
        amount: 1,
      },
    });
  });
  return (
    <div className=" overflow-x-hidden w-[100%] h-full md:h-[100vh] flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20 px-8 py-8 md:py-2">
      <div className="left_part">
        <img
          src={profile_img}
          alt="profile image"
          className="rounded-full w-[400px] h-[400px] md:h-[500px] md:w-[500px] toUp"
        />
      </div>
      <div className="right_part flex flex-col  justify-center items-start gap-4">
        <h1 className="font-bold text-8xl ml-7 md:ml-2 toUp">Hello</h1>
        <h3 className="text-xl font-bold toUp  ml-7 md:ml-2">I am, <span className=" text-amber-600">Your Name</span></h3>
        <p className="text-gray-700 font-serif leading-normal w-[310px] md:w-[350px] text-justify toUp ml-7 md:ml-2">
          A passionate Front-End Developer who loves creating clean, responsive, and user-friendly websites. With strong skills in HTML, CSS, JavaScript, and modern frameworks, I enjoy bringing designs to life and ensuring smooth user experiences.
        </p>

        <div className="flex gap-2 justify-center items-center ml-4 md:ml-0" ref={btnsRef}>
          <Link to={"/resume"}>
            {" "}
            <button className=" rounded-full h-27 w-27 md:h-35 md:w-35 border border-black font-semibold text-xl bg-[#EEA302] text-black cursor-pointer hover:bg-transparent hover:text-black transition-all duration-500">
              Resume
            </button>
          </Link>
          <Link to={"/project"}>
            <button className="rounded-full h-27 w-27 md:h-35 md:w-35  border border-black font-semibold text-xl bg-[#FF3B25] text-black cursor-pointer hover:bg-transparent hover:text-black transition-all duration-500">
              Projects
            </button>
          </Link>
          <Link to={"/contact"}>
            {" "}
            <button className="rounded-full h-27 w-27 md:h-35 md:w-35 border border-black font-semibold text-xl bg-[#80D8DA] text-black cursor-pointer hover:bg-transparent hover:text-black transition-all duration-500">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
