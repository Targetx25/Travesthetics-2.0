// src/components/HeroSection.js
import React from "react";
import { useNavigate } from "react-router";


const HeroSection = () => {
  
  
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/start");
  }

  return (
    <section
      className="relative h-screen font-livvic bg-cover bg-center flex flex-col items-center justify-center mt-2 mb-2"
      
    >
        <div className="text-center">
            <h2 className="text-black text-2xl font-semibold mb-2 md:text-4xl lg:text-5xl">
            Confused About Which Place to Visit?
            </h2>
            <h3 className="text-black text-lg mb-4">We got You!</h3>
        </div>
     <div className="h-[614px] w-[356px] md:h-[800px] md:w-[85%] bg-cover bg-center rounded-2xl" style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1606744666360-2f22c8b4a45b?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}>
     <div className="p-8 rounded-md flex flex-col justify-between h-full">
        
        <h1 className="text-white text-[40px] font-bold mb-6 mt-10 ">
          Let’s Setup Your Trip
        </h1>
        <div className="flex gap-4 justify-between">
          <button className="bg-white text-orange-500 font-semibold py-2 px-4 border border-orange-500 rounded hover:bg-orange-50">
            Why Us?
          </button>
          <button onClick={handleClick} className="bg-[#5E9100] text-white font-semibold py-2 px-4 rounded hover:bg-orange-600">
            Let’s Start
          </button>
        </div>
      </div>
     </div>
    </section>
  );
};

export default HeroSection;
