"use client";

import React, { useEffect, useState } from "react";
import { Input } from "./input";
import { Select } from "./select-input";
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
        <Input placeholder="Location..." />

        <select
          className=" p-4 focus:outline-2 outline-cyan-300 font-semibold
    text-lg text-zinc-500 rounded-3xl focus:cursor-pointer"
          value={selectedCounty}
          onChange={(e) => setSelectedCounty(e.target.value)}
        >
          {data?.map(county=>(
            <option value={county.name} key={county.code}>
              {county.name}
            </option>
          )
          )}
        </select>

        <Input placeholder="Category...." />

        <select
          className=" p-4 focus:outline-2 outline-cyan-300 font-semibold
    text-lg text-zinc-500 rounded-3xl focus:cursor-pointer"
          value={sub}
          onChange={(e) => setSub(e.target.value)}
        >
          {subCounties?.map((subCounty) => (
            <option key={subCounty} value={subCounty}>
              {subCounty}
            </option>
          ))}
        </select>
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
