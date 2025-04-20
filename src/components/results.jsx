// src/components/Results.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import Error from './Error';

function Results() {
  const { state } = useLocation();
  const [places, setPlaces] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(true);

  // 1) Load places once
  useEffect(() => {
    if (state?.result) {
      setPlaces(state.result);
    }
    setLoading(false);
  }, [state]);

  // 2) Handlers
  const handleNext = () => {
    if (currentIndex < places.length - 1) {
      setDirection(1);
      setCurrentIndex(i => i + 1);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(i => i - 1);
    }
  };

  // 3) Animation variants
  const cardVariants = {
    enter: dir => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center:     { x: 0, opacity: 1 },
    exit:  dir => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
  };


 

  if (loading) {
    return <div className=" font-livvic text-xl text-center mt-10">Loading results...</div>;
  }
  if (!places.length) {
    return <Error msg="Sorry! We don't have any Recommendations for this City" />;
  }

  const currentPlace = places[currentIndex];

  const full = currentPlace.properties.formatted || '';
  const [name, rest] = full.split(',', 2);

  return (
    <div className="font-livvic flex flex-col items-center justify-center min-h-screen p-2 bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">
        Result {currentIndex + 1} of {places.length}
      </h1>

      <section className="relative h-[750px] w-[356px] md:h-[800px] md:w-[95%] bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521683786601-e1ad300e5490?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}
      >
        <div className="absolute inset-0">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="p-7 rounded-md flex flex-col justify-between  h-full bg-opacity-40"
            >
              <h1 className="text-white md:text-center text-2xl md:text-4xl font-semibold mt-10 mb-6">
                Well, You can Visit...
              </h1>

              <div className="relative  text-white font-semibold flex flex-col">
                <h1 className="absolute  md:text-center text-[30px] md:text-4xl p-0 top-0 left-0">
                  {name}
                </h1>
                <h2 className="absolute text-md mt-3  md:text-2xl top-[70px]">
                  {rest}
                </h2>
              </div>

              <div className="relative text-center text-white font-semibold text-2xl">
                <h2>Look Images On Google</h2>
                <button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(full)}`,
                      '_blank'
                    )
                  }
                  className="bg-orange-400 px-2 mt-2 py-1 cursor-pointer md:text-[20px] rounded-xl"
                >
                  Click Here
                </button>
              </div>

              <div className="flex gap-4 justify-between md:gap-5   md:justify-center">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className={`text-2xl cursor-pointer font-semibold py-2 px-5 rounded-xl border mb-10 ${
                    currentIndex === 0
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed border-gray-300'
                      : 'bg-white text-orange-500 border-orange-500 hover:bg-orange-50'
                  }`}
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === places.length - 1}
                  className={`cursor-pointer text-2xl font-semibold py-2 px-5 rounded-xl mb-10 ${
                    currentIndex === places.length - 1
                      ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                      : 'bg-[#5E9100] text-white hover:bg-orange-600'
                  }`}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export default Results;
