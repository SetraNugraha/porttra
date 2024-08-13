/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const CustomSwiper = ({ data, renderSlide, dotFor, dotStyle, style }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 2500 }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, el: `.${dotFor}-swiper` }}
        className="mx-auto my-3 py-5 grid"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className={style}
          >
            {renderSlide(item)}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${dotFor}-swiper ${dotStyle}`}></div>
    </div>
  )
}
