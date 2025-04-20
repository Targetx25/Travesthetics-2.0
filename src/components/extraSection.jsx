// src/components/Section2.js
import React from "react";

const Section2 = (props) => {
  return (
    <section id={props.id}   className=" bg-gradient-to-r from-amber-500 to-pink-500 font-livvic relative h-screen bg-cover bg-center flex flex-col items-center justify-center">
      <div className="h-[700px] w-[356px] md:h-[800px] md:w-[90%] bg-cover bg-center rounded-2xl md:flex md:justify-center md:items-center " style={{backgroundImage : `url(${props.url})`,}}>
        <div className=" flex flex-col md:flex-row md:flex md:justify-center md:items-center justify-between md:w-full h-full relative">
          <div className="md:hidden"></div>
        <div className="absolute bottom-15 md:relative">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-pink-500 text-[35px] md:text-[70px] font-bold pl-2 mt-10 ">
          {props.text1}
        </h1>
        <h2 className="text-white text-[28px]  md:text-[55px]  font-bold mb-6 pl-5 ">{props.text2}</h2>
        </div>
          </div>
      </div>
    </section>
    
  );
};

export default Section2;
