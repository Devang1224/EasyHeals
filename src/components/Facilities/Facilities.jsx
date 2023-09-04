import React from 'react'
import doctorSvg from "../../assets/doctor (2).png";
import bloodSampleSvg from "../../assets/blood-sample.png";
import hospitalSvg from "../../assets/hospital (1) 1.png";
import surgerySvg from "../../assets/surgery-room 1.png";
import feverSvg from "../../assets/fever 1.png";
import orthopedicSvg from "../../assets/Orthopaedics.png";
import lungSvg from "../../assets/lung-cancer 1.png";
import rupeeSvg from "../../assets/rupee 1.png";
import SearchBar from "../Search/SearchBar";

const Facilities = () => {
  return (
    <div className=" flex justify-around absolute bottom-[-10%] py-7 shadow-3xl w-[86%] bg-white rounded-[10px]">

    <div className=" flex flex-col items-center w-[100px] ">
      <img src={doctorSvg} alt="doctor" className=" w-12" />
      <p className="text-center text-[15px]">Top Rated Doctors</p>
    </div>

    <div className=" flex flex-col items-center w-[100px] ">
      <img src={hospitalSvg} alt="hospital" className=" w-12" />
      <p className="text-center">Find Best Hospitals</p>
    </div>

    <div className=" flex flex-col items-center w-[100px] ">
      <img src={bloodSampleSvg} alt="bloodsample" className=" w-12" />
      <p className="text-center">Book Lab Tests</p>
    </div>

    <div className=" flex flex-col items-center w-[150px] ">
      <img src={surgerySvg} alt="surgery" className=" w-12" />
      <p className="text-center ">Compare & Book Surgeries</p>
    </div>

    <div className=" flex flex-col items-center w-[100px] ">
      <img src={feverSvg} alt="fever" className=" w-12" />
      <p className="text-center">Treatment by Symptoms</p>
    </div>

    <div className=" flex flex-col items-center w-[100px] ">
      <img src={orthopedicSvg} alt="orthopedic" className=" w-12" />
      <p className="text-center">Search by Specialities</p>
    </div>

    <div className=" flex flex-col items-center w-[100px] ">
      <img src={lungSvg} alt="lung cancer" className=" w-12" />
      <p className="text-center">Treatment by Diseases</p>
    </div>

    <div className=" flex flex-col items-center w-[100px] ">
      <img src={rupeeSvg} alt="rupee" className=" w-12" />
      <p className="text-center text-[14px]">Compare price & services</p>
    </div>
  </div>
  )
}

export default Facilities