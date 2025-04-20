import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import SlickButton from "./SlickButton";
import Loader from "./Loader";
import Error from "./Error";
import { useCity } from "./CityContext";

const CityInput = () => {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {setCitx} = useCity();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setCitx(city);

      const response = await axios.post("http://localhost:5000/api/findCity", {
        city : city,
      });
      // console.log("Data received front", response.data);
      const cityNames = response.data.cityNames;


   
        if(cityNames.length == 0){
          setError(true)
        }else{
          navigate("/citylist", { state: { list : cityNames} });
        }
    } catch (error) {
      setLoading(false);
      setError(true);
      console.error("Error submitting city:", error);
      
    }finally{
      setLoading(false)
    }
  };


  if(error){
    return <Error msg="Sorry! We Couldn't Find Your City"/>
  }


  if(loading){
    return <Loader/>
  }else{
    return <section
    className="relative font-livvic h-screen bg-cover bg-center flex flex-col items-center justify-center mt-2"
    
  >
   <div className="h-[750px] w-[356px] md:h-[800px] md:w-[95%]  bg-cover bg-center rounded-2xl " style={{
       backgroundImage: `url('https://images.unsplash.com/photo-1529516222410-a269d812f320?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}>
        <div className="flex flex-col md:justify-between md:items-center h-full relative">
          <div className="absolute top-12 md:relative md:mt-5">
              <h2 className=" text-white text-3xl md:text-4xl lg:text-5xl font-bold ml-2 pl-2">
              Which City Are You Planning to Go?
              </h2>
              <div className=" text-center mt-[30px]">
                  <form
                  className=""
                  >
                  <input
                  required
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city name"
                  className="w-75% md:w-[46%] p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 bg-white"
                  />
                  </form>
                  <SlickButton
                  onClick={handleSubmit}
                  gradient="bg-gradient-to-r from-red-500 to-orange-500"
                  >
                    Submit
                  </SlickButton>
              </div>
          </div>
          <div className ="absolute text-white text-3xl md:text-[40px]  font-bold bottom-50">
              <h1 className="mb-2">975+ Total Trips Planned</h1>
              <h1>76% Statisfaction Rate</h1>
          </div>
          <p className="text-white absolute top-[95%] left-[23%] md:top-[92%] md:left-[41%] md:font-medium mb-5">Spreading Love and Smiles :) </p>
        </div>
   </div>
  </section>
  }

  
};

export default CityInput;




