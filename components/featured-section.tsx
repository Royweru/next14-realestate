"use client"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  const router = useRouter()
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Welcome to Apartamenti
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Live in a dream house that you desire
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95" onClick={()=>router.push('/listing')}>
          find a home
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array:any) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1684791393296-cf1e552c25aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1682204803376-1c7dae90db28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1662781815461-efdf0b1a639c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1650254229024-6348b88038de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1670130669290-0f01f01e6f53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1654444793762-aa5187b0ab58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwYXBhcnRtZW50c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudCUyMGludGVyaW9yfGVufDB8fDB8fHww",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1594904578869-c011783103c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1670130668098-f239351b3f2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1660463613240-833141188b47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1646838928512-ebd6a92c88bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1663062121841-90a43cb98d3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1645687241916-7375cf6e8e03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1521543944615-2e0d4f5b0498?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1655122899565-18f1322f1d78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1646838569224-9a9646edc4f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJlYXV0aWZ1bCUyMGFwYXJ0bWVudHN8ZW58MHx8MHx8fDA%3D",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq:any) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef:any = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
    //@ts-ignore
  });

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq:any) => sq)}
    </div>
  );
};

export default ShuffleHero;