/* eslint-disable react/prop-types */
import { Header } from '../elements/Header'
import { CustomSwiper } from '../elements/CustomSwiper'

export default function Services({ isMobile, services }) {
  return (
    <section
      className="relative px-5 py-10 my-10 bg-stone-100"
      id="services"
    >
      <Header
        title={'SERVICES'}
        subTitle={'Specialize In'}
        position={'center'}
      />

      {/* Card */}
      {isMobile ? (
        <CustomSwiper
          data={services}
          style={'bg-white my-1 px-5 pb-5 rounded-lg flex flex-col items-center border border-slate-100 shadow-md'}
          dotFor={'services'}
          dotStyle={'z-0 flex gap-x-3 items-center justify-center'}
          renderSlide={(service) => (
            <>
              <div className="bg-slate-200 p-4 rounded-xl mt-5">
                <img
                  src={`assets/${service.icon}`}
                  alt="services"
                />
              </div>
              <h4 className="font-semibold py-2">{service.title}</h4>
              <p className="text-[12px] text-justify text-slate-500 leading-loose || xl:text-[12px]">{service.description}</p>
            </>
          )}
        />
      ) : (
        <div className="py-2 w-[90%] mx-auto || xl:py-10 xl:w-[55%] xl:mx-auto xl:grid xl:grid-cols-3 xl:gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white my-5 h-1/1 py-10 px-5 rounded-lg flex flex-col items-center shadow-lg transform transition duration-300 hover:scale-[105%]"
            >
              {/* Icon */}
              <div className="bg-slate-200 p-4 rounded-xl">
                <img
                  src={`assets/${service.icon}`}
                  alt=""
                />
              </div>
              <h4 className="font-semibold py-2">{service.title}</h4>
              <p className="text-[12px] text-justify text-slate-500 leading-loose || xl:text-[12px]">{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
