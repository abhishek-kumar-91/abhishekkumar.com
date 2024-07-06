import React from "react";
import { FaLinkedinIn,  FaRegFilePdf, FaGithub, FaTwitter } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-poppins">
      <div className="absolute top-0 left-0 w-[200%] h-full flex animate-scroll ">
        <div
          className="w-1/2 h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('./bg.jpg')" }}
        ></div>
        <div
          className="w-1/2 h-full bg-cover bg-no-repeat bg-center rotate-180"
          style={{ backgroundImage: "url('./bg.jpg')" }}
        ></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-cover animate-slide-in-right bg-no-repeat bg-center "
        style={{ backgroundImage: "url('./overlay.svg')" }}>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center">
        <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
          <div className="flex flex-col items-center">
          <h1 className="md:text-7xl text-4xl font-bold text-white">I'm</h1>
          <h1 className="md:text-7xl text-4xl font-bold text-white ">Abhishek Kumar</h1>
          <h2 className="bg-white/80 mt-4 px-4 py-1 rounded-full md:text-xl text-xl text-black">Full Stack Developer</h2>
          </div>

        <div className="flex justify-center flex-wrap gap-6">
        <a href="https://www.linkedin.com/in/abhishekkumardev91/" target="_blank" >
        <div className="w-16 animate-fade-in-left rounded-full text-white hover:bg-white transition hover:text-blue-600  duration-300 transform hover:scale-110 cursor-pointer flex justify-center items-center h-16 border-4 border-white">
            <a className=" text-2xl "><FaLinkedinIn /> </a>
          </div></a>

          <a href="https://drive.google.com/file/d/1ZpH8ERXrOYjJ8rkmoZikwEkdSV3sBg64/view" target="_blank">
          <div className="w-16 animate-fade-in-left rounded-full text-white hover:bg-white transition hover:text-red-600 cursor-pointer  duration-300 transform hover:scale-110  flex justify-center items-center h-16 border-4 border-white">
            <a className=" text-2xl "><FaRegFilePdf /> </a>
          </div></a>

          <a href="https://github.com/abhishek-kumar-91"target="_blank">
          <div className="w-16 animate-fade-in-left rounded-full text-white hover:bg-white transition hover:text-black  duration-300 transform hover:scale-110 cursor-pointer flex justify-center items-center h-16 border-4 border-white">
            <a className="text-2xl "><FaGithub /></a>
          </div></a>

          <a href="mailto:abhishekkumar958830@gmail.com">
          <div className="w-16 animate-fade-in-left rounded-full flex text-white hover:bg-white transition hover:text-yellow-500  duration-300 transform hover:scale-110 cursor-pointer  justify-center items-center h-16 border-4 border-white">
            <a className="text-2xl "><HiMail /></a>
          </div></a>

          <a href="https://twitter.com/Manojk2Abhishek" target="_blank">
          <div className="w-16 animate-fade-in-left rounded-full text-white hover:bg-white transition hover:text-sky-500  duration-300 transform hover:scale-110 cursor-pointer  flex justify-center items-center h-16 border-4 border-white">
            <a className="text-2xl "><FaTwitter /> </a>
          </div></a>
        </div>
          
        </div>
      
      </div>
    </div>
  );
}


export default App;
