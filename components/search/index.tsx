"use client";

import React, { useEffect, useState } from "react";

import { FaSearch } from "react-icons/fa";
import { data } from "@/lib/data";

export const Search = () => {
  const [subCounties, setSubCounties] = useState<string[]|undefined>([]);
  const [sub, setSub] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");

  useEffect(() => {
    if (data) {
       const county = data.find((county)=>county.name===selectedCounty)
       
       setSubCounties(county?.sub_counties)
    }


  }, [setSubCounties,selectedCounty]);
  return (
    <div className=" w-full h-full flex flex-col justify-center gap-y-6 ">
      <div className=" w-full grid md:grid-cols-4 grid-cols-2 gap-5 px-4 ">
         <select
          className=" w-full p-5 focus:outline-1 outline-lime-100 
          font-semibold font-serif text-neutral-400 rounded-md"
          value={selectedCounty}
          onChange={(e)=>setSelectedCounty(e.target.value)}
         >
           {data?.map(county=>(
            <option value={county.name} key={county.code}>
                {county.name}
            </option>
           ))}
         </select>
          
         <select
          className=" w-full p-5 focus:outline-1 outline-lime-100 
          font-semibold font-serif text-neutral-400 rounded-md"
          value={sub}
          onChange={(e)=>setSub(e.target.value)}
         >
          {subCounties?.map(sub=>(
            <option value={sub} key={sub}>
              {sub}
            </option>
          ))}
         </select>

         <select
          className=" w-full p-4 focus:outline-1 outline-lime-100 
          font-semibold font-serif text-neutral-400 rounded-md"
         >
           {data?.map(county=>(
            <option value={county.name} key={county.code}>
                {county.name}
            </option>
           ))}
         </select>

         <input
         type="number"
          className=" w-full p-4 focus:outline-1 outline-lime-100 
          font-semibold font-serif text-neutral-400 rounded-md"
          placeholder="estimated budget..."
         />
         
      </div>
      <div className=" w-full px-32 flex justify-center items-center">
        <button
          className=" py-2 px-1 hover:opacity-90 hover:cursor-pointer 
       bg-transparent  hover:bg-emerald-200
       rounded-3xl w-2/5 flex justify-center text-xl font-serif font-semibold items-center "
        >
          <FaSearch className=" w-12 h-12 mr-4" />
          GO
        </button>
      </div>
    </div>
  );
};
