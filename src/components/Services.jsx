/* eslint-disable react/prop-types */
import { Header } from "../elements/Header"

import { Pagination, Autoplay, Grid } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/grid"

export default function Services({ services }) {
  const RenderServices = ({ service }) => {
    return (
      <div className="bg-white my-5 h-full py-5 px-5 rounded-lg flex flex-col items-center border border-slate-100 shadow-xl shadow-slate-200 transform transition duration-300 hover:scale-[105%]">
        {/* Icon */}
        <div className="bg-slate-200 p-4 rounded-xl">
          <img src={`assets/${service.icon}`} alt={service.icon} />
        </div>
        <h4 className="font-semibold py-2">{service.title}</h4>

        <p className="text-[12px] text-justify text-slate-500 leading-loose || xl:text-[12px]">
          {service.description}
        </p>
      </div>
    )
  }

  return (
    <section className="py-10 my-10 px-5 bg-stone-100" id="services">
      <Header
        title={"SERVICES"}
        subTitle={"Specialize In"}
        position={"center"}
      />

      {/* Container RenderServices */}
      <Swiper
        modules={[Pagination, Autoplay, Grid]}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            grid: { rows: 1, fill: "row" },
          },
          768: {
            slidesPerView: 3,
            grid: { rows: 1, fill: "row" },
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 1, fill: "row" },
          },
        }}
        pagination={{
          clickable: true,
          el: ".swiper-services",
          type: "bullets",
        }}
        spaceBetween={20}
        className="xl:w-[55%] xl:mx-auto">
        {services.map((service, index) => (
          <SwiperSlide key={index} className="xl:px-3">
            <RenderServices service={service} />
          </SwiperSlide>
        ))}
        <div className="swiper-services flex justify-center items-center gap-x-5"></div>
      </Swiper>
    </section>
  )
}
