"use client"

import React from "react";

export const SearchInput = () => {
  return (
    <div className=" w-full grid md:grid-cols-4 grid-cols-2 gap-5 px-4">
      <input
        placeholder="Location..."
        type=""
        className=" col-span-1 font-sans font-semibold text-black p-5 rounded-md"
      />
   <select name="" id="" className=" font-sans font-bold text-lg text-black rounded-md">
     <option value="">
        val 1
     </option>
     <option value="">
        val 1
     </option>
     <option value="">
        val 1
     </option>
   </select>
      <input
        placeholder="budget"
        type="number"
        className=" col-span-1 font-sans font-semibold text-black p-5 rounded-md"
      />
      <select name="" id="" className=" font-sans font-bold text-lg text-black rounded-md">
     <option value="">
        val 1
     </option>
     <option value="">
        val 1
     </option>
     <option value="">
        val 1
     </option>
   </select>
    </div>
  );
};
