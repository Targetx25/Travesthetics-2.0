// src/components/Section2.js
import React from "react";

const Section2 = (props) => {
  return (
    <section id={props.id} style={{ backgroundColor: props.clr }} className=" font-livvic relative h-screen bg-cover bg-center flex flex-col items-center justify-center">
      <div className="h-[700px] w-[356px] bg-cover bg-center rounded-2xl" style={{backgroundImage : `url(${props.url})`,}}>
        <div className=" flex flex-col justify-between h-full relative">
          <div></div>
        <div className="absolute bottom-15">
        <h1 className="text-white text-[35px] font-bold pl-2 mt-10 ">
          {props.text1}
        </h1>
        <h2 className="text-white text-[28px] font-bold mb-6 pl-5 ">{props.text2}</h2>
        </div>
          </div>
      </div>
    </section>
    
  );
};

export default Section2;
