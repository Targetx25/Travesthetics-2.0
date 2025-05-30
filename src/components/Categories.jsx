import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import Loader from "./Loader";
import { q } from "framer-motion/client";

const Categories = () => {
  
  const [loading , setLoading] = useState(false);
  const [error, setError] = useState(false);
  const passedCity = useLocation();
  const navigate = useNavigate();




  const handleSubmit = async (e) => {
    
    // console.log("category", e);
    // console.log("placeID", passedCity.state.placeId);
    try {
      setLoading(true);
      const response = await axios.post("https://travesthetics.onrender.com/api/getrec", {
        placeID : passedCity.state.placeId,
        category: e,
      });
      // console.log("Data received front", response.data);
      navigate("/results", {state : {result: response.data.result}})
    } catch (error) {
      console.error("Error submitting city:", error);
      setLoading(false);
      setError(true);
    }
  };

  if(error){
    return <Error/>
  }

  if(loading){
    return <Loader/>;
  }else{
    return (
      <section
        className="relative font-livvic h-screen bg-cover bg-center flex flex-col items-center justify-center mt-2"
        
      >
       <div className="h-[770px] w-[360px] bg-cover bg-center rounded-2xl md:h-[800px] md:w-[90%] " style={{
           backgroundImage: `url('https://images.unsplash.com/photo-1677177947814-03e7768d4e9d?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}>
            <div className="flex flex-col justify-center items-center h-full relative">
              <div className="absolute top-[50px]">
                  <h2 className=" text-black text-2xl font-semibold ml-2 text-center md:text-4xl lg:text-5xl">
                      Are You?
                  </h2>
                  <div className=" flex flex-col  font-semibold items-center md:text-2xl md:p-2 justify-center text-xl text-center mt-[30px] gap-2">
                      <div onClick={()=> handleSubmit("fam")}  className=" w-65 py-2 bg-gray-700 text-white cursor-pointer rounded-xl">
                          <h1>Going With Family</h1>
                      </div>
                      <div onClick={()=> handleSubmit("frnd")}className=" w-65 py-2 bg-gray-700 cursor-pointer text-white rounded-xl">
                          <h1>Going With Friends</h1>
                      </div>
                      <div onClick={()=> handleSubmit("alone")} className=" w-65 py-2 cursor-pointer bg-gray-700 text-white rounded-xl">
                          <h1>Going Alone</h1>
                      </div>
                      <div onClick={()=> handleSubmit("date")}className=" w-65 py-2 cursor-pointer bg-gray-700 text-white rounded-xl">
                          <h1>Going on a Date</h1>
                      </div>
                  </div>
              </div>
              <div className ="absolute text-white text-3xl md:text-[40px] md:bottom-40 font-bold bottom-50">
                  <h1 className="mb-2">975+ Total Trips Planned</h1>
                  <h1>76% Statisfaction Rate</h1>
              </div>
            <p className="text-white absolute top-[95%] left-[23%] mb-5 md:top-[92%] md:left-[41%] md:font-medium">Spreading Love and Smiles :) </p>
            </div>
       </div>
       
      </section>
    );
  }

  
};

export default Categories;
