/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Header } from "../elements/Header"
import { BiLinkExternal } from "react-icons/bi"
import { AiOutlineCode } from "react-icons/ai"
import { IoMdArrowDropdown } from "react-icons/io"
import { useState } from "react"
import { FaReact } from "react-icons/fa"
import { useEffect } from "react"
import { LuArrowRightSquare, LuArrowLeftSquare } from "react-icons/lu"

import { Pagination, Autoplay, Grid, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/grid"
import { useRef } from "react"

export default function Portfolio({ projects }) {
  const [openModal, setOpenModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedType, setSelectedType] = useState("All")
  const swiperRef = useRef(null)

  const filteredProjects = selectedType === "All" ? projects : projects.filter((project) => project.type === selectedType)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop()
      swiperRef.current.swiper.autoplay.start()
    }
  }, [filteredProjects])

  // Disable Scroll if Modal Open
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [openModal])

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setOpenModal(true)
  }

  const RenderCardProject = ({ project }) => {
    return (
      <>
        <div className="flex flex-col justify-between mx-auto px-2 py-2 border border-slate-200 shadow-lg shadow-slate-300 rounded-lg">
          {/* Image & Description */}
          <div>
            {/* Image */}
            <img src={project.image} alt={project.title} className=" rounded-md  shadow-md max-h-[140px] mx-auto" />

            {/* Title & Link */}
            <div className="my-3 flex flex-col justify-between items-center">
              <h1 className="font-bold">{project.title}</h1>
              <h4 className="text-[#7e74f1] opacity-90 italic text-[14px] tracking-wider font-semibold">{`${project.type}`}</h4>
              <span className="h-[2px] w-full bg-slate-200 mt-2"></span>
              {/* Tech */}
              <div className="flex items-center justify-center gap-x-2 mt-2">
                {project.tech.map((item, index) => (
                  <img key={index} src={`assets/skills/${item}.svg`} alt={item} className="size-[22px]" />
                ))}
              </div>
            </div>
          </div>

          {/* Button Modal Detail */}
          <button
            onClick={() => handleOpenModal(project)}
            className="py-1 mb-3 mx-3 tracking-wider rounded-lg bg-[#7e74f1] text-white font-semibold duration-300 transform hover:scale-105 shadow-lg shadow-gray-300 hover:bg-white hover:outline-none hover:ring-2 hover:ring-[#7e74f1] hover:text-[#7e74f1]">
            View Detail Project
          </button>
        </div>
      </>
    )
  }

  const ModalDetailProject = ({ project }) => {
    return (
      <div key={project.id} className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 overflow-y-hidden">
        <div className="p-5 max-h-[700px] w-[95%] xl:w-[700px] bg-white rounded-xl">
          {/* Header */}
          <div className="relative flex items-start justify-between">
            <div>
              <h1 className="font-bold tracking-widest">{project.title}</h1>
              <h3 className="font-bold tracking-widest text-[#7e74f1] text-[14px] italic">{project.type}</h3>
            </div>
            <button
              onClick={() => setOpenModal(false)}
              className="font-bold bg-slate-300 px-2 rounded-lg shadow-xl hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out mb-3">
              X
            </button>
            <span className="absolute -bottom-2 h-[1px] bg-slate-400 w-full"></span>
          </div>

          {/* Demo Video */}
          <div className="flex items-center justify-center my-5 border-b-2 border-black">
            <iframe
              className="h-[150px] xl:h-[200px]"
              width="650"
              src={project.youtube_url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
          </div>

          {/* Detail Project */}
          <div className="flex flex-col gap-y-5 my-5 max-h-[250px] overflow-y-auto">
            {/* Note */}
            {project.note && (
              <div className="mx-2">
                <h1 className="font-bold tracking-wider text-red-500">Note :</h1>
                <p className="text-justify font-semibold text-red-400 text-sm">{project.note}</p>
              </div>
            )}

            {/* Description */}
            <div className="mx-2">
              <h1 className="font-semibold tracking-wider">Description :</h1>
              <p className="text-justify font-semibold text-slate-400 text-sm">{project.description}</p>
            </div>

            {/* Feature */}
            {project.feature && (
              <div className="mx-2">
                <h1 className="font-semibold tracking-wider">Feature : </h1>
                <div className="grid grid-cols-2 gap-x-3 text-slate-400 font-semibold text-sm">
                  {project.feature.map((item, index) => (
                    <ul key={index} className="list-disc ml-5">
                      <li className="">{item}</li>
                    </ul>
                  ))}
                </div>
              </div>
            )}

            {/* Issue */}
            {project.issue && (
              <div className="mx-2">
                <h1 className="font-semibold tracking-wider">Issue : </h1>
                <div className="text-slate-400 font-semibold text-sm">
                  {project.issue.map((item, index) => (
                    <ul key={index} className="list-disc ml-5">
                      <li className="">{item}</li>
                    </ul>
                  ))}
                </div>
              </div>
            )}

            {/* Demo Account */}
            {project.demoAccount && (
              <div className="mx-2">
                <h1 className="font-semibold tracking-wider">Tester account : </h1>
                <div className="text-slate-400 font-semibold text-sm">
                  {project.demoAccount.map((item, index) => (
                    <div key={index}>
                      <div className="grid grid-cols-[70px_10px_auto]">
                        <p>Email</p>
                        <p>:</p>
                        <p>{item.email}</p>
                      </div>

                      <div className="grid grid-cols-[70px_10px_auto]">
                        <p>Password</p>
                        <p>:</p>
                        <p>{item.password}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech */}
            <div className="flex flex-col gap-y-1 mx-2">
              <h1 className="font-semibold tracking-wider">Tech : </h1>
              <div className="flex items-center gap-x-2">
                {project.tech.map((item, index) => (
                  <img key={index} src={`/assets/skills/${item}.svg`} alt={item} className="size-[22px]" />
                ))}
              </div>
            </div>
          </div>

          {/* Link */}
          <div className="mt-5 flex flex-col gap-y-3 items-center">
            <div className="flex items-center gap-x-3 w-full">
              {/* Frontend */}
              <a
                href={project.frontendCode}
                target="_blank"
                className="py-2 w-1/2 flex items-center flex-grow  gap-x-2 justify-center text-center bg-gray-500 text-white text-sm xl:text-base rounded-lg font-semibold tracking-wider duration-300 hover:bg-white hover:text-gray-500 hover:outline-none hover:ring-2 hover:ring-gray-500">
                {project.ssr ? "Source Code" : "Frontend"}
                {project.ssr ? <AiOutlineCode className="size-4 xl:size-5" /> : <FaReact className="size-4 xl:size-5" />}
              </a>

              {/* Backend */}
              {project.backendCode && (
                <a
                  href={project.backendCode}
                  target="_blank"
                  className="py-2 w-1/2 flex items-center gap-x-2 justify-center text-center bg-gray-500 text-white text-sm xl:text-base rounded-lg font-semibold tracking-wider duration-300 hover:bg-white hover:text-gray-500 hover:outline-none hover:ring-2 hover:ring-gray-500">
                  Backend
                  <AiOutlineCode className="size-4 xl:size-5" />
                </a>
              )}
            </div>

            {/* Visit Website */}
            {!project.isMaintenance && project.url && (
              <a
                href={project.url}
                target="_blank"
                className="w-full py-2 flex items-center gap-x-2 justify-center text-center text-sm xl:text-base bg-blue-500 text-white rounded-lg font-semibold tracking-wider duration-300 hover:bg-white hover:text-blue-500 hover:outline-none hover:ring-2 hover:ring-blue-500">
                Visit Website
                <BiLinkExternal className="size-4 xl:size-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="px-5" id="portfolio">
      {/* Select Option Type */}
      <div className="flex flex-col gap-y-3 xl:flex-row xl:justify-between xl:items-end xl:w-[55%] xl:mx-auto">
        <Header title={"MY PROJECT"} subTitle={"Featured Portfolio"} position={"start"} />
        <div className="relative flex items-center gap-x-5">
          <h1 className="font-bold text-secondary tracking-wider">Type : </h1>
          <select
            name="selectType"
            className="font-semibold text-secondary text-sm italic ring-2 ring-[#b3aeec] pl-3 pr-10 xl:appearance-none py-0.5 xl:py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7e74f1]"
            onChange={(e) => setSelectedType(e.target.value)}>
            <option value="All" className="font-semibold">
              All
            </option>
            {/* to make type unique no duplicate */}
            {[...new Set(projects.map((project) => project.type))].map((type, index) => (
              <option key={index} value={type} className="font-semibold">
                {type}
              </option>
            ))}
          </select>
          <span className="hidden xl:block absolute right-1 top-1/2 -translate-y-1/2">
            <IoMdArrowDropdown size={28} color="#7e74f1" />
          </span>
        </div>
      </div>

      {/* Card Portofolio */}
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay, Grid, Navigation]}
        breakpoints={{
          340: {
            slidesPerView: 1,
            grid: { rows: 1, fill: "row" },
          },
          768: {
            slidesPerView: 2,
            grid: { rows: 1, fill: "row" },
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 2, fill: "row" },
          },
        }}
        autoplay={{ delay: 2500 }}
        spaceBetween={20}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          el: ".swipper-projects",
          type: "bullets",
          clickable: true,
        }}
        className="xl:w-[55%] xl:mx-auto mt-5">
        {filteredProjects.map((project, index) => (
          <SwiperSlide key={index}>
            <RenderCardProject project={project} />
          </SwiperSlide>
        ))}

        {/* Pagination */}
        <div className="relative xl:h-[70px] mt-10 w-[97%] mx-auto">
          <div className="swipper-projects flex gap-x-5 items-center justify-center xl:justify-end xl:mr-10"></div>
          {/* Navigation Swiper Projects */}
          <div className="hidden xl:absolute xl:flex xl:items-center xl:justify-center xl:text-slate-400 xl:tracking-widest xl:-top-3 xl:left-1/2 xl:-translate-x-1/2">
            <div className="xl:flex gap-x-5 items-center font-semibold">
              <button className="swiper-button-prev flex items-center justify-center bg-slate-400 text-white gap-x-2 py-2 px-3 rounded-lg hover:outline-none  hover:ring-2 hover:ring-slate-400 hover:bg-white hover:text-slate-400 duration-300 shadow-lg shadow-slate-300">
                Prev
                <LuArrowLeftSquare size={23} />
              </button>
              <button className="swiper-button-next flex items-center justify-center bg-slate-400 text-white gap-x-2 py-2 px-3 rounded-lg hover:outline-none  hover:ring-2 hover:ring-slate-400 hover:bg-white hover:text-slate-400 duration-300 shadow-lg shadow-slate-300">
                <LuArrowRightSquare size={23} />
                Next
              </button>
            </div>
          </div>
        </div>
      </Swiper>

      {openModal && <ModalDetailProject project={selectedProject} />}
    </section>
  )
}
