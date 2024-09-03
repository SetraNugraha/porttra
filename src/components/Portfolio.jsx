/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Header } from '../elements/Header'
import { CustomSwiper } from '../elements/CustomSwiper'
import { BiLinkExternal } from 'react-icons/bi'
import { AiOutlineCode } from 'react-icons/ai'
import { useState } from 'react'
import { RiVideoLine } from 'react-icons/ri'
import { useEffect } from 'react'

export default function Portfolio({ isMobile, projects }) {
  const [openModal, setOpenModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // Disable Scroll Y
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [openModal])

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setOpenModal(true)
  }

  const ModalVideo = ({ title, type, youtube_url }) => {
    return (
      <>
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 overflow-y-hidden">
          <div className="p-5 w-[95%] xl:w-[700px] bg-white rounded-xl">
            {/* Header */}
            <div className="relative flex items-center justify-between">
              <h1 className="font-bold tracking-widest">Porttra Project</h1>
              <button
                onClick={() => setOpenModal(false)}
                className="font-bold bg-slate-300 px-2 rounded-lg shadow-xl hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out mb-3"
              >
                X
              </button>
              <span className="absolute bottom-0 h-[1px] bg-slate-400 w-full"></span>
            </div>

            {/* Main Content */}
            <div className="flex items-center justify-center my-5">
              <iframe
                width="650"
                height="380"
                src={youtube_url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* description */}
            <div>
              <h1 className="text-black opacity-90 italic text-xl tracking-wider font-bold mx-2">
                {title}
              </h1>
              <p className="text-[#7e74f1] opacity-90 italic text-[14px] tracking-wider font-semibold mx-2">
                {type}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <section
      className="px-5"
      id="portfolio"
    >
      <Header
        title={'MY PROJECT'}
        subTitle={'Featured Portfolio'}
        position={'start'}
      />

      {/* Card Portofolio */}
      {/* Mobile */}
      {isMobile ? (
        <CustomSwiper
          data={projects}
          style={
            'w-[90%] flex flex-col justify-between mx-auto px-2 py-2 border-[0.5px] border-slate-200 shadow-lg rounded-lg xl:w-full'
          }
          dotFor={'project'}
          dotStyle={'flex gap-x-3 justify-center items-center'}
          renderSlide={(project) => (
            <>
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className=" rounded-md  shadow-md"
                />

                {/* Title & Link */}
                <h4 className="text-[#7e74f1] opacity-90 italic text-[14px] tracking-wider font-semibold mx-2 mt-2">{`${project.type}`}</h4>
                <div className="mx-2 mt-2 flex justify-between items-center">
                  <h1 className="font-bold">{project.title}</h1>
                  <div className="flex gap-x-1 items-center">
                    {/* Button Modal */}
                    <button onClick={() => handleOpenModal(project)}>
                      <RiVideoLine className="w-[24px] h-[24px] hover:text-blue-500" />
                    </button>

                    {/* Button source code */}
                    <a
                      href={project.source_code}
                      className="hover:blue-500"
                      target="_blank"
                    >
                      <AiOutlineCode className="w-[22px] h-[22px] hover:text-blue-500" />
                    </a>

                    {/* button project url */}
                    <a
                      href={project.url}
                      className="hover:blue-500"
                      target="_blank"
                    >
                      <BiLinkExternal className="w-[22px] h-[22px] hover:text-blue-500" />
                    </a>
                  </div>
                </div>
                {/* END Title & Link */}
                <p className="mx-2 mt-2 text-[14px] text-slate-500 text-justify">
                  {project.description}
                </p>
              </div>
              <ul className="flex flex-wrap mx-2 gap-2 mt-5 mb-2">
                {project.tech.map((tech, index) => (
                  <li key={index}>
                    <img
                      src={`assets/skills/${tech}`}
                      alt={tech}
                      className="w-[20px] h-[20px]"
                    />
                  </li>
                ))}
              </ul>
            </>
          )}
        />
      ) : (
        // Desktop
        <div className="mx-auto my-3 py-5 overflow-x-auto w-[55%]">
          <div className="grid grid-rows-2 auto-cols-[minmax(290px,_1fr)] grid-flow-col gap-5 px-3">
            {projects.map((project, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col justify-between mx-auto px-2 py-2 border border-slate-100 shadow-lg shadow-slate-300 rounded-lg"
                >
                  {/* Image & Description */}
                  <div>
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className=" rounded-md  shadow-md"
                    />
                    {/* Title & Link */}
                    <h4 className="text-[#7e74f1] opacity-90 italic text-[14px] tracking-wider font-semibold mx-2 mt-2">{`${project.type}`}</h4>
                    <div className="mx-2 my-1 flex justify-between items-center">
                      <h1 className="font-bold">{project.title}</h1>
                      <div className="flex gap-x-1 items-center">
                        {/* Button Modal */}
                        <button onClick={() => handleOpenModal(project)}>
                          <RiVideoLine className="w-[24px] h-[24px] hover:text-blue-500" />
                        </button>

                        {/* Button Source Code */}
                        <a
                          href={project.source_code}
                          className="hover:blue-500"
                          target="_blank"
                        >
                          <AiOutlineCode className="w-[22px] h-[22px] hover:text-blue-500" />
                        </a>

                        {/* Button Link to Project */}
                        <a
                          href={project.url}
                          className="hover:blue-500"
                          target="_blank"
                        >
                          <BiLinkExternal className="w-[22px] h-[22px] hover:text-blue-500" />
                        </a>
                      </div>
                    </div>
                    {/* Type */}
                    {/* Description */}
                    <p className="mx-2 mt-2 text-[14px] text-slate-500 text-justify ">
                      {project.description}
                    </p>
                  </div>
                  {/* Tech */}
                  <ul className="flex flex-wrap mx-2 gap-2 mt-5 mb-2">
                    {project.tech.map((tech, index) => (
                      <li key={index}>
                        <img
                          src={`assets/skills/${tech}`}
                          alt={tech}
                          className="w-[20px] h-[20px]"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {openModal && (
        <ModalVideo
          title={selectedProject.title}
          type={selectedProject.type}
          youtube_url={selectedProject.youtube_url}
        />
      )}
    </section>
  )
}
