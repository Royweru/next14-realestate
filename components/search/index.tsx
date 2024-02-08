"use client";

import React from "react";
import { Input } from "./input";
import { Select } from "./select-input";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
  return (
    <div className=" w-full h-full flex flex-col justify-center gap-y-6 ">
      <div className=" w-full grid md:grid-cols-4 grid-cols-2 gap-5 px-4 ">
        <Input placeholder="Location..." />
        <Select />
        <Input />
        <Select />
      </div>
      <div className=" w-full px-32 flex justify-center items-center">
       <button className=" py-2 px-1 hover:opacity-90 hover:cursor-pointer 
       bg-transparent  hover:bg-emerald-200
       rounded-3xl w-2/5 flex justify-center text-xl font-serif font-semibold items-center ">
         <FaSearch className=" w-12 h-12 mr-4" />
         GO
      </button>
      </div>
    
    </div>
  );
};
