/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Header } from "../elements/Header"
import { CustomSwiper } from "../elements/CustomSwiper"
import { BiLinkExternal } from "react-icons/bi"
import { AiOutlineCode } from "react-icons/ai"
import { useState } from "react"
import { FaReact } from "react-icons/fa"
import { useEffect } from "react"

export default function Portfolio({ isMobile, projects }) {
  const [openModal, setOpenModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // Disable Scroll Y
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

  const ModalDetailProject = ({ title, type, ssr, description, note, youtube_url, tech, frontendCode, backendCode, url, feature, issue, demoAccount }) => {
    return (
      <>
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/60 overflow-y-hidden">
          <div className="p-5 max-h-[850px] w-[95%] xl:w-[700px] bg-white rounded-xl">
            {/* Header */}
            <div className="relative flex items-start justify-between">
              <div>
                <h1 className="font-bold tracking-widest">{title}</h1>
                <h3 className="font-bold tracking-widest text-[#7e74f1] text-[14px] italic">{type}</h3>
              </div>
              <button onClick={() => setOpenModal(false)} className="font-bold bg-slate-300 px-2 rounded-lg shadow-xl hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out mb-3">
                X
              </button>
              <span className="absolute -bottom-2 h-[1px] bg-slate-400 w-full"></span>
            </div>

            {/* Demo Video */}
            <div className="flex items-center justify-center my-5 border-b-2 border-black">
              <iframe
                width="650"
                height="250"
                src={youtube_url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen></iframe>
            </div>

            {/* Detail Project */}
            <div className="flex flex-col gap-y-5 my-5 max-h-[250px] overflow-y-auto">
              {/* Note */}
              {note && (
                <div className="mx-2">
                  <h1 className="font-bold tracking-wider text-red-500">Note :</h1>
                  <p className="text-justify font-semibold text-red-400 text-sm">{note}</p>
                </div>
              )}

              {/* Description */}
              <div className="mx-2">
                <h1 className="font-semibold tracking-wider">Description :</h1>
                <p className="text-justify font-semibold text-slate-400 text-sm">{description}</p>
              </div>

              {/* Feature */}
              {feature && (
                <div className="mx-2">
                  <h1 className="font-semibold tracking-wider">Feature : </h1>
                  <div className="grid grid-cols-2 gap-x-3 text-slate-400 font-semibold text-sm">
                    {feature.map((item) => (
                      <>
                        <ul className="list-disc ml-5">
                          <li className="">{item}</li>
                        </ul>
                      </>
                    ))}
                  </div>
                </div>
              )}

              {/* Issue */}
              {issue && (
                <div className="mx-2">
                  <h1 className="font-semibold tracking-wider">Issue : </h1>
                  <div className="text-slate-400 font-semibold text-sm">
                    {issue.map((item) => (
                      <>
                        <ul className="list-disc ml-5">
                          <li className="">{item}</li>
                        </ul>
                      </>
                    ))}
                  </div>
                </div>
              )}

              {/* Demo Account */}
              {demoAccount && (
                <div className="mx-2">
                  <h1 className="font-semibold tracking-wider">Tester account : </h1>
                  <div className="text-slate-400 font-semibold text-sm">
                    {demoAccount.map((item) => (
                      <>
                        <div className="">
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
                      </>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech */}
              <div className="flex flex-col gap-y-1 mx-2">
                <h1 className="font-semibold tracking-wider">Tech : </h1>
                <div className="flex items-center gap-x-2">
                  {tech.map((item) => (
                    <>
                      <img src={`assets/skills/${item}`} alt={item} className="size-[22px]" />
                    </>
                  ))}
                </div>
              </div>
            </div>

            {/* Link */}
            <div className="mt-5 flex flex-col gap-y-3 items-center">
              <div className="flex items-center gap-x-3 w-full">
                {/* Frontend */}
                <a
                  href={frontendCode}
                  target="_blank"
                  className="py-2 px-3 w-1/2 flex items-center flex-grow  gap-x-2 justify-center text-center bg-gray-500 text-white rounded-lg font-semibold tracking-wider duration-300 hover:bg-white hover:text-gray-500 hover:outline-none hover:ring-2 hover:ring-gray-500">
                  {ssr ? "Source Code" : "Frontend"}
                  {ssr ? <AiOutlineCode size={22} /> : <FaReact size={22} />}
                </a>

                {/* Backend */}
                {backendCode && (
                  <a
                    href={backendCode}
                    target="_blank"
                    className="py-2 px-3 w-1/2 flex items-center gap-x-2 justify-center text-center bg-gray-500 text-white rounded-lg font-semibold tracking-wider duration-300 hover:bg-white hover:text-gray-500 hover:outline-none hover:ring-2 hover:ring-gray-500">
                    Backend
                    <AiOutlineCode size={23} />
                  </a>
                )}
              </div>
              <a
                href={url}
                target="_blank"
                className="w-full py-2 px-3 flex items-center gap-x-2 justify-center text-center bg-blue-500 text-white rounded-lg font-semibold tracking-wider duration-300 hover:bg-white hover:text-blue-500 hover:outline-none hover:ring-2 hover:ring-blue-500">
                Visit Website
                <BiLinkExternal size={23} />
              </a>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <section className="px-5" id="portfolio">
      <Header title={"MY PROJECT"} subTitle={"Featured Portfolio"} position={"start"} />

      {/* Card Portofolio */}
      {/* Mobile */}
      {isMobile ? (
        <CustomSwiper
          data={projects}
          style={"w-[90%] flex flex-col justify-between mx-auto px-2 py-4 border-[0.5px] border-slate-200 shadow-lg rounded-lg xl:w-full"}
          dotFor={"project"}
          dotStyle={"flex gap-x-3 justify-center items-center"}
          renderSlide={(project) => (
            <>
              <div>
                <img src={project.image} alt={project.title} className="rounded-md shadow-md" />

                {/* Container text */}
                <div className="mx-2 mt-3 flex flex-col gap-y-4">
                  {/* Title */}
                  <div className="flex flex-col items-center justify-between">
                    <h1 className="font-bold">{project.title}</h1>
                    <h4 className="text-[#7e74f1] opacity-90 italic text-[14px] tracking-wider font-semibold">{`${project.type}`}</h4>
                  </div>

                  {/* Button Modal Detail */}
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="py-2 mx-3 tracking-wider rounded-lg bg-[#7e74f1] text-white font-semibold duration-300 transform hover:scale-105 shadow-lg shadow-gray-300 hover:bg-white hover:outline-none hover:ring-2 hover:ring-[#7e74f1] hover:text-[#7e74f1]">
                    View Detail Project
                  </button>
                </div>
              </div>
            </>
          )}
        />
      ) : (
        // Desktop
        <div className="mx-auto my-3 py-5 overflow-x-auto w-[55%]">
          <div className="grid grid-rows-2 auto-cols-[minmax(290px,_1fr)] grid-flow-col gap-5 px-3">
            {projects.map((project, index) => {
              return (
                <div key={index} className="flex flex-col justify-between mx-auto px-2 py-2 border border-slate-100 shadow-lg shadow-slate-300 rounded-lg">
                  {/* Image & Description */}
                  <div>
                    {/* Image */}
                    <img src={project.image} alt={project.title} className=" rounded-md  shadow-md" />

                    {/* Title & Link */}
                    <div className="my-3 flex flex-col justify-between items-center">
                      <h1 className="font-bold">{project.title}</h1>
                      <h4 className="text-[#7e74f1] opacity-90 italic text-[14px] tracking-wider font-semibold">{`${project.type}`}</h4>
                    </div>
                  </div>

                  {/* Button Modal Detail */}
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="py-1 mb-3 mx-3 tracking-wider rounded-lg bg-[#7e74f1] text-white font-semibold duration-300 transform hover:scale-105 shadow-lg shadow-gray-300 hover:bg-white hover:outline-none hover:ring-2 hover:ring-[#7e74f1] hover:text-[#7e74f1]">
                    View Detail Project
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {openModal && (
        <ModalDetailProject
          title={selectedProject.title}
          type={selectedProject.type}
          ssr={selectedProject.ssr}
          description={selectedProject.description}
          note={selectedProject.note}
          frontendCode={selectedProject.frontendCode}
          backendCode={selectedProject.backendCode}
          url={selectedProject.url}
          tech={selectedProject.tech}
          youtube_url={selectedProject.youtube_url}
          feature={selectedProject.feature}
          issue={selectedProject.issue}
          demoAccount={selectedProject.demoAccount}
        />
      )}
    </section>
  )
}
