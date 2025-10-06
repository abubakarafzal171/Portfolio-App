import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-full md:h-[100vh] flex flex-col md:flex-row justify-evenly items-center sm:gap-4 md:gap-20 lg:gap-4 px-6 mb-10 ">
      <div className="left flex flex-col justify-center items-start gap-4">
        <h1 className="font-bold text-5xl font-sans">Contact</h1>
        <p className="text-gray-700 text-base mb-8">
          Looking forward to hearing from you
        </p>
        <div className="flex flex-col justify-center items-start leading-tight mb-8">
          <p className="font-bold text-xl">Phone</p>
          <p className="text-gray-700 text-base">123-456-789</p>
        </div>
        <div>
          <p className="font-bold text-xl">Email</p>
          <p className="text-gray-700 text-base">info@mysite.com</p>
        </div>
      </div>
      <div className="right">
        <form className="flex flex-col justify-start items-start gap-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="fname" className="font-light text-lg ">
                First Name <sup>*</sup>
              </label>
              <input type="text" required  className="border px-4 py-1.5 outline-none"/>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lname" className="font-light text-lg ">
                Last Name <sup>*</sup>
              </label>
              <input type="text" required  className="border px-4 py-1.5 outline-none"/>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="Email" className="font-light text-lg ">
                Email <sup>*</sup>
              </label>
              <input type="email" required className="border px-4 py-1.5 outline-none" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="font-light text-lg ">
                Subject
              </label>
              <input type="text" className="border px-4 py-1.5 outline-none"/>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="message" className="font-light text-lg">
              Message
            </label>
            <input type="text" required className="border w-[100%] h-20 outline-none"/>
          </div>
          <button type="submit" onSubmit={(e) => e.preventDefault()} className="border rounded-full w-4/4 h-13 bg-[#EEA302] hover:bg-transparent font-bold text-xl cursor-pointer transition-all duration-500">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
