import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";
import { Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#91d4f1] to-[#cbeaff]">
      <div className="w-[85%] mx-auto">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="flex">
                <div className="flex flex-col justify-center">
                <h2 className="font-bold text-5xl">Homework Help Hub</h2>
                <h2 className="font-bold text-2xl py-2">Study Success Zone</h2>
                <p className="md:w-[80%] text-sm py-3">
                 It's a dedicated platform designed to assist students in tackling their daily homework challenges. Whether it's solving complex math problems, writing essays, or understanding scientific concepts.
                </p>
                </div>
                <div className="w-full">
                  <img
                    className="w-full"
                    src="https://pixcap.com/cdn/library/template/1723654624011/thumbnail/Two_Employees_Are_Working_Together_In_Front_Of_The_Desk_3D_Illustration_transparent_800_emp.webp"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex">
                <div className="flex flex-col justify-center">
                <h2 className="font-bold text-5xl">Knowledge Boost Hub</h2>
                <h2 className="font-bold text-2xl py-2">Study Success Zone</h2>
                <p className="md:w-[80%] text-sm py-3">
                 It's a dedicated platform designed to assist students in tackling their daily homework challenges. Whether it's solving complex math problems, writing essays, or understanding scientific concepts.
                </p>
                </div>
                <div className="w-full">
                  <img
                    className="w-full"
                    src="https://pixcap.com/cdn/library/template/1723654624011/thumbnail/Two_Employees_Are_Working_Together_In_Front_Of_The_Desk_3D_Illustration_transparent_800_emp.webp"
                    alt=""
                  />
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="flex">
              <div className="flex flex-col justify-center">
                <h2>Hello world</h2>
                <p className="w-[60%]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam harum vitae modi cum quaerat? Quam unde beatae
                  dolores officiis, eveniet molestias ipsa minus labore quasi
                  culpa, iusto architecto quo repellendus?
                </p>
              </div>
              <div className="w-full">
                <img
                  className="w-full"
                  src="https://pixcap.com/cdn/library/template/1725038908154/thumbnail/Your_Insights_Are_Being_Calculated_3D_Illustration_transparent_400_emp.webp"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
