import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Count = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex py-8 gap-3 justify-center items-center">
        <div className="bg-[#8e67f1] w-10 md:w-20 h-1"></div>
        <h3 className="text-center font-bold text-2xl md:text-3xl">Learning Journey Highlights</h3>
        <div className="bg-[#8e67f1] w-10 md:w-20 h-1"></div>
      </div>
      <div className="lg:flex gap-8">
        <div className="w-[50%]">
          <img
            src="https://media.istockphoto.com/id/1482901847/vector/adobe-illustrator-artwork.jpg?s=612x612&w=0&k=20&c=Z-ovrzaxDTqvAtRQ7T56NCmF9-o6wWkTVVDktH9cd-A="
            alt=""
          />
        </div>
        <div className="">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="grid md:grid-cols-2 py-20 gap-8 justify-between">
              {/* Counter 1 */}
              <div className="text-center shadow-2xl border rounded-xl p-3 text-[#5e3598]">
                <div className=" text-6xl font-bold w-full">
                  {counterOn && <CountUp end={58.6} />}K
                </div>
                <h2 className="text-center py-3 font-bold text-xl ">
                  Student enrolled
                </h2>
                <p className="text-center">
                  Successfully registered and ready to access learning
                  materials.
                </p>
              </div>
              {/* Counter 2 */}
              <div className="text-center shadow-2xl border p-3 rounded-xl  text-[#5e3598]">
                <div className=" text-6xl font-bold">
                  {counterOn && <CountUp end={38.6} />}K
                </div>
                <h2 className="text-center  py-3 font-bold text-xl ">
                  Class completed
                </h2>
                <p className="text-center ">
                  Completed the session with new skills gained.
                </p>
              </div>
              {/* Counter 3 */}
              <div className="text-center shadow-2xl border rounded-xl p-3 text-[#5e3598]">
                <div className=" text-6xl font-bold">
                  {counterOn && <CountUp end={98.9} />}%
                </div>
                <h2 className="text-center py-3 font-bold text-xl ">
                  Satisfaction rate
                </h2>
                <p className="text-center ">
                  Reflects student happiness and service quality.
                </p>
              </div>
              {/* Counter 4 */}
              <div className="text-center border shadow-2xl rounded-xl p-3 text-[#5e3598]">
                <div className=" text-6xl font-bold">
                  {counterOn && <CountUp end={236} />}K
                </div>
                <h2 className="text-center py-3 font-bold text-xl ">
                  Top instructors
                </h2>
                <p className="text-center ">
                  Highly rated experts with proven excellence.
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default Count;
