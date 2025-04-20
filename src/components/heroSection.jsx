// src/components/HeroSection.js
import React, { useState } from "react";
import { useNavigate } from "react-router";
import SlickButton from "./SlickButton";
import Loader from "./Loader";




const HeroSection = () => {
  
  const [loading , setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = ()=>{
    setLoading(true);
    setTimeout(() => {
      navigate("/start");
    }, 4000);
  }

  if(loading){
    return <Loader/>
  }else{
    return <section
    className=" relative h-screen font-livvic bg-cover bg-center flex flex-col items-center justify-center mt-2 mb-2"
    
  >
      <div className="text-center">
          <h2 className="text-black text-2xl font-semibold mb-2 md:text-4xl lg:text-5xl ">
          Confused About Which Place to Visit?
          </h2>
          <h3 className="text-black text-lg mb-4">We got You!</h3>
      </div>
   <div className="h-[614px] w-[356px] md:h-[800px] md:w-[90%] bg-cover bg-center rounded-2xl md:flex md:justify-center md:items-center" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1606744666360-2f22c8b4a45b?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    }}>
   <div className="p-8 rounded-md flex flex-col justify-between md:justify-center h-full">
      
      <h1 className="text-[40px] md:text-[70px] font-bold mb-6 mt-10 text-white">
        Let’s Setup Your Trip
      </h1>
      <div className="flex gap-4 justify-between md:justify-center mt-10">
      <SlickButton 
      onClick={()=> navigate("/about")}
      gradient="bg-gradient-to-r from-amber-500 to-pink-500"
      >
        Why Us?
        </SlickButton>
        <SlickButton onClick={handleClick}>
        Let’s Start
        </SlickButton>
      </div>
    </div>
   </div>
  </section>
  }
};

export default HeroSection;
