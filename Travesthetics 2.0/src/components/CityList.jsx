import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

const CityList = () => {
  // State to hold the city name

  const passedCity = useLocation();
  const [list, setList] = useState([]);
  const navigate = useNavigate();


  useEffect(()=>{
    if(passedCity.state){
      setList(passedCity.state.list);
      console.log(passedCity.state.list);
    }
  }, [passedCity.state.list])

  const handleSubmit = async (placeId) => {
    navigate("/categories", {state : {placeId : placeId}});
  };

  return (
    <section
      className="font-livvic relative h-screen bg-cover bg-center flex flex-col items-center justify-center mt-2"
      
    >
     <div className="h-[750px] w-[356px] bg-cover bg-center rounded-2xl " style={{
         backgroundImage: `url('https://images.unsplash.com/photo-1529516222410-a269d812f320?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}>
          <div className="flex flex-col  h-full relative">
            <div className="absolute top-[50px]">
                <h2 className=" text-white text-2xl font-semibold ml-2 ">
                    Select Your Correct City With Correct Country 
                </h2>
                <div className=" flex flex-col items-center justify-center text-xl text-center mt-[30px] gap-2">
                    {list.map((item)=>(
                      <div key={item.properties.place_id} onClick={()=> handleSubmit(item.properties.place_id)} className=" w-65 py-2 bg-white text-black rounded-xl">
                      <p className="text-sm truncate mx-2">{item.properties.city+ ", " + item.properties.state_code  + ", " + item.properties.country}</p>
                  </div>
                    ))}
                </div>
            </div>
            <div className ="absolute text-white text-3xl font-semibold bottom-50">
                <h1>975+ Total Trips Planned</h1>
                <h1>76% Statisfaction Rate</h1>
            </div>
          <p className="text-white absolute top-[95%] left-[23%] mb-5">Spreading Love and Smiles :) </p>
          </div>
     </div>
     
    </section>
  );
};

export default CityList;
