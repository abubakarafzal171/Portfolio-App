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
    <div className="w-full h-screen flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20 px-8">
      <div className="left_part">
        <img
          src={profile_img}
          alt="profile image"
          className="rounded-full toUp"
        />
      </div>
      <div className="right_part flex flex-col  justify-center items-start gap-4">
        <h1 className="font-bold text-8xl toUp">Hello</h1>
        <h3 className="text-xl font-bold toUp">A Bit About Me</h3>
        <p className="text-gray-700 font-serif leading-normal w-[350px] text-justify toUp">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>

        <div className="flex gap-3 justify-center items-center " ref={btnsRef}>
          <Link to={"/resume"}>
            {" "}
            <button className=" rounded-full h-35 w-35 border border-black font-semibold text-xl bg-[#EEA302] text-black cursor-pointer hover:bg-transparent hover:text-black transition-all duration-500">
              Resume
            </button>
          </Link>
          <Link to={"/project"}>
            <button className="rounded-full h-35 w-35 border border-black font-semibold text-xl bg-[#FF3B25] text-black cursor-pointer hover:bg-transparent hover:text-black transition-all duration-500">
              Projects
            </button>
          </Link>
          <Link to={"/contact"}>
            {" "}
            <button className="rounded-full h-35 w-35 border border-black font-semibold text-xl bg-[#80D8DA] text-black cursor-pointer hover:bg-transparent hover:text-black transition-all duration-500">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
