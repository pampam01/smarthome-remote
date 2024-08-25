import React from "react";
const Checkbox = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <input
        type="checkbox"
        className="l relative inline-flex items-center w-[3em] h-[1.5em] appearance-none bg-[rgba(0,0,0,0.7)] m-auto p-[0.15em] rounded-[0.75em] 
             shadow-[0.125em_0.125em_0_0.125em_rgba(0,0,0,0.3)_inset] transition-[background-color,box-shadow] duration-300 ease-out
             checked:bg-[rgba(0,0,0,0.45)] checked:shadow-[0.125em_0.125em_0_0.125em_rgba(0,0,0,0.1)_inset]"
      />
      <span
        className="absolute left-0.5 top-0.5 w-[1.2em] h-[1.2em] bg-[#d7d7d7] rounded-full transform transition-[transform] duration-300 ease-out 
             checked:translate-x-[1.5em] checked:bg-current"
      ></span>
    </div>
  );
};

export default Checkbox;
