import React from 'react'

interface SelectProps{
  data:any[]
}

export const Select = (
  {data}:SelectProps
  ) => {
  return (
   <select 
     
   className=' p-4 focus:outline-2 outline-cyan-300 font-semibold
    text-lg text-zinc-500 rounded-3xl focus:cursor-pointer '
   >
    {data?.map(county=>(
      <option key={county.code} value={county.name}>
           {county.name}
      </option>
    ))}
   </select>
  )
}
