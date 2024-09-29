import { PiCertificateFill } from "react-icons/pi"
import { TbFileTypePdf } from "react-icons/tb";


export default function Hero() {
  return (
    <section className="px-5 || xl:pt-[100px] xl:w-[60%] xl:mx-auto xl:flex xl:gap-2" id="hero">
      {/* Image */}
      <div className="pt-20 flex justify-center || xl:w-1/2 xl:order-last xl:ml-[100px]">
        <img src="assets/hero.svg" alt="Person Standing" className="h-[250px] w-[250px] || xl:h-[500px] xl:w-[500px]" />
      </div>

      <div className="flex flex-col justify-center items-center mt-5 || xl:w-1/2 xl:items-start">
        {/* Greeting */}
        <div className="flex flex-col">
          <h3 className="text-xs text-secondary tracking-[6px] flex items-center before:w-[30px] before:h-[1px] before:bg-secondary before:mr-3 || xl:text-lg xl:font-semibold">HELLO, IT&apos;S ME</h3>
          {/* Name */}
          <h1 className="text-2xl font-bold text-[#455a64] || xl:text-3xl">
            Setra Nugraha <span className="text-stone-500">Putra Suma</span>
          </h1>
          <div className="flex gap-x-3 mt-3 self-start xl:mt-5">
            <a
              href="resume-setra.pdf"
              target="_blank"
              className="text-[14px] font-semibold text-white bg-stone-500 py-1 px-3 rounded-lg flex gap-x-2 items-center hover:bg-white hover:outline-none hover:ring-2 hover:ring-stone-500 hover:text-stone-500 duration-300 shadow-lg shadow-gray-300 || xl:text-lg">
              <TbFileTypePdf size={22} />
              <span className="tracking-wider">Resume</span>
            </a>
            <a
              href="sertifikasi-setra.pdf"
              target="_blank"
              className="text-[14px] font-semibold text-white bg-[#455a64] py-1 px-3 rounded-lg flex gap-x-2 items-center hover:bg-white hover:outline-none hover:ring-2 hover:ring-[#455a64] hover:text-[#455a64] duration-300 shadow-lg shadow-gray-300 || xl:text-lg">
              <PiCertificateFill size={22} />
              <span className="tracking-wider">Certification</span>
            </a>
           
          </div>
        </div>

        {/* desc */}
        <div className="mt-2 w-full flex flex-col items-start px-11 gap-y-3 py-1 xl:items-start xl:mx-0 xl:px-0">
          <div className="flex flex-col gap-y-5 items-start xl:items-start">
            <div className="flex items-center gap-x-3"></div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
