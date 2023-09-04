import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex px-6 py-3 shadow-3xl w-[94%] mt-10 rounded-[10px] border-[0.5px] border-solid border-[rgba(117, 117, 117, 0.50)]">
          <div className="flex relative flex-col flex-1 after:absolute after:right-4 after:top-3 after:w-[1px] after:h-12 after:bg-[#7575759d]">
            <label for="location" className=" text-[#4DAE45] text-[14px] pb-3">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="Delhi"
              className="outline-none text-[18px] w-11 placeholder:text-black "
            />
          </div>

          <div className="flex flex-col flex-[4]">
            <label for="search" className=" text-[#4DAE45] text-[14px] pb-3">
              Doctor/Speciality
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search by Doctors, Hospitals, Diseases etc"
              className="outline-none text-[18px] placeholder:text-black"
            />
          </div>
          <button className=" px-10 font-[600] rounded-xl bg-[#EA5F24] text-white text-[18px] bg-searchBtn">
            Search
          </button>
    </div>
  )
}

export default SearchBar