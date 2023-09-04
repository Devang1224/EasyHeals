import React from "react";
import hero from "../../assets/20230827090643__fpdl 1.png";
import plus3 from "../../assets/Plus_backgroundImg 3.png";
import plus1 from "../../assets/Plus_backgroundImg 1.png";
import plus2 from "../../assets/Plus_backgroundImg 2.png";
import SearchBar from "../Search/SearchBar";
import Facilities from "../Facilities/Facilities";

const Hero = () => {
  return (
    <div className="flex relative px-20 border border-solid">

      <div className="flex flex-3 flex-col justify-start items-start py-16 bg-heroGradient">
        <img
          src={plus2}
          className=" w-[120px] absolute top-0 left-0"
        />
        <div>
          <div className="text-[48px] font-railway font-bold">
            <p>Book Consultation & Lab</p>
            <span>Tests</span>
            <span className="text-[#4DAE45]"> anytime & anywhere</span>
          </div>

          <p className="text-[15px] text-[#353535] font-light w-[80%]">
            Taking care of your well-being has never been easier. Book lab tests
            with utmost convenience through easyheals.
          </p>
        </div>

        <SearchBar />
      </div>

      <div className="relative flex-1 items-end">
        <div className="bg-white flex px-5 py-4 absolute rounded-[25px] justify-center items-center w-44 top-[25%] left-[10%] shadow-custom z-10 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 29 29"
            fill="none"
          >
            <path
              d="M11.796 21.65C17.2061 21.65 21.5919 17.2642 21.5919 11.8541C21.5919 6.44391 17.2061 2.05811 11.796 2.05811C6.3858 2.05811 2 6.44391 2 11.8541C2 17.2642 6.3858 21.65 11.796 21.65Z"
              stroke="#4DAE45"
              stroke-width="3.47443"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M27.1896 27.2476L18.7931 18.8511"
              stroke="#4DAE45"
              stroke-width="3.47443"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[#404040] font-medium px-4 text-[12px]">
            Well Qualified doctors
          </p>
        </div>
        <div className="flex px-5 py-4 absolute rounded-[28.7px] justify-center items-center w-44 top-[45%] left-[-6%] shadow-custom bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="37"
            viewBox="0 0 30 37"
            fill="none"
          >
            <path
              d="M9.33578 6.05054H5.73726C4.78288 6.05054 3.86758 6.42967 3.19273 7.10452C2.51788 7.77937 2.13875 8.69467 2.13875 9.64905V31.2401C2.13875 32.1945 2.51788 33.1098 3.19273 33.7847C3.86758 34.4595 4.78288 34.8387 5.73726 34.8387H23.7298C24.6842 34.8387 25.5995 34.4595 26.2744 33.7847C26.9492 33.1098 27.3284 32.1945 27.3284 31.2401V9.64905C27.3284 8.69467 26.9492 7.77937 26.2744 7.10452C25.5995 6.42967 24.6842 6.05054 23.7298 6.05054H20.1313"
              stroke="#4DAE45"
              stroke-width="3.47443"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.533 2.45215H12.9344C10.947 2.45215 9.33592 4.06326 9.33592 6.05066C9.33592 8.03807 10.947 9.64918 12.9344 9.64918H16.533C18.5204 9.64918 20.1315 8.03807 20.1315 6.05066C20.1315 4.06326 18.5204 2.45215 16.533 2.45215Z"
              stroke="#4DAE45"
              stroke-width="3.47443"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.533 25.8425H20.1315M9.33592 18.6455H9.35392H9.33592ZM16.533 18.6455H20.1315H16.533ZM9.33592 25.8425H9.35392H9.33592Z"
              stroke="#4DAE45"
              stroke-width="3.47443"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="text-[#404040] font-medium px-4 text-[12px]">Book an appointment</p>
        </div>
        <img src={plus3} alt="searchicon" className="absolute w-36 left-[20%] top-[4%]" />
        <img src={hero} className=" min-w-[32vw]   object-contain"/>
        <img src={plus1} className="absolute top-[42%] right-[-10%] w-44 z-[-1]"/>
      </div>

      <Facilities />
    </div>
  );
};

export default Hero;
