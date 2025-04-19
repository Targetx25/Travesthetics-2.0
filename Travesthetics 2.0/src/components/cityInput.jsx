import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const CityInput = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(city)
      const response = await axios.post("http://localhost:5000/api/findCity", {
        city : city,
      });


      console.log("Data received front", response.data);
      const cityNames = response.data.cityNames;
      console.log(response.data.cityNames)
      navigate("/citylist", { state: { list : cityNames} });
    setCity("");
    } catch (error) {
      console.error("Error submitting city:", error);
    }
  };

  return (
    <section
      className="relative font-livvic h-screen bg-cover bg-center flex flex-col items-center justify-center mt-2"
      
    >
     <div className="h-[750px] w-[356px] bg-cover bg-center rounded-2xl " style={{
         backgroundImage: `url('https://images.unsplash.com/photo-1529516222410-a269d812f320?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}>
          <div className="flex flex-col  h-full relative">
            <div className="absolute top-12">
                <h2 className=" text-white text-3xl font-bold ml-2 pl-2">
                Which City Are You Planning to Go?
                </h2>
                <div className=" text-center mt-[30px]">
                    <form
                    className=""
                    >
                    <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="w-75% p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 bg-white"
                    />
                    </form>
                    <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-25% bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md"
                    >
                    Submit
                    </button>
                </div>
            </div>
            <div className ="absolute text-white text-3xl font-bold bottom-50">
                <h1 className="mb-2">975+ Total Trips Planned</h1>
                <h1>76% Statisfaction Rate</h1>
            </div>
            <p className="text-white absolute top-[95%] left-[23%] mb-5">Spreading Love and Smiles :) </p>
          </div>
     </div>
    </section>
  );
};

export default CityInput;




