/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Header } from "../elements/Header";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import { FaReact, FaStar } from "react-icons/fa";
import { LuSquareArrowRight, LuSquareArrowLeft } from "react-icons/lu";
import { Pagination, Autoplay, Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import { DemoAccount } from "./DemoAccount";

// ─── Card ────────────────────────────────────────────────────────────────────
const RenderCardProject = ({ project, onOpen }) => {
  return (
    <div className="group flex flex-col justify-between bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-[160px] overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          {project.featured && (
            <span className="flex items-center gap-1 text-[10px] font-bold tracking-wider px-2 py-1 rounded-full text-white" style={{ background: "#7e74f1" }}>
              <FaStar className="w-2.5 h-2.5" />
              FEATURED
            </span>
          )}
          {project.url && <span className="ml-auto text-[10px] font-semibold px-2 py-1 rounded-full bg-emerald-500 text-white tracking-wider">LIVE</span>}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-4 pt-4 pb-3">
        {/* Title & Type */}
        <h3 className="font-bold text-gray-900 text-sm tracking-wide leading-snug">{project.title}</h3>
        <p className="text-xs font-medium mt-0.5 mb-3" style={{ color: "#7e74f1" }}>
          {project.type}
        </p>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-3" />

        {/* Tech icons */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          {project.tech.map((item, index) => (
            <img key={index} src={`assets/skills/${item}.svg`} alt={item} className="w-5 h-5" />
          ))}
        </div>

        {/* CTA */}
        <button onClick={() => onOpen(project)} className="mt-auto w-full py-2 rounded-xl text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-80" style={{ background: "#7e74f1" }}>
          View Details
        </button>
      </div>
    </div>
  );
};

// ─── Modal ───────────────────────────────────────────────────────────────────
const ModalDetailProject = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm px-4 pb-4 sm:pb-0">
      <div className="bg-white w-full sm:w-[680px] max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-gray-100">
          <div>
            <h2 className="font-bold text-gray-900 text-lg leading-tight">{project.title}</h2>
            <p className="text-sm font-medium mt-0.5" style={{ color: "#7e74f1" }}>
              {project.type}
            </p>
          </div>
          <button onClick={onClose} className="ml-4 mt-0.5 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-500 text-gray-500 font-bold text-sm transition-colors duration-200 flex-shrink-0">
            ✕
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-6 py-5 flex flex-col gap-5">
          {/* Video */}
          {project.youtube_url && (
            <div className="rounded-xl overflow-hidden bg-gray-50 aspect-video">
              <iframe className="w-full h-full" src={project.youtube_url} title="Project demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          )}

          {/* Note */}
          {project.note && (
            <div className="bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Note</p>
              <p className="text-sm text-red-400">{project.note}</p>
            </div>
          )}

          {/* Description */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Description</p>
            <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
          </div>

          {/* Features */}
          {project.feature && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Features</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                {project.feature.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#7e74f1" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Issues */}
          {project.issue && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Known Issues</p>
              <ul className="flex flex-col gap-1.5">
                {project.issue.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Demo accounts */}
          {project.demoAccount && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Tester Accounts</p>
              <div className="flex flex-col gap-4">
                {project.demoAccount.map((item, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <DemoAccount account={item.admin} />
                    <DemoAccount account={item.customer} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Tech Stack</p>
            <div className="flex items-center gap-2 flex-wrap">
              {project.tech.map((item, index) => (
                <img key={index} src={`./assets/skills/${item}.svg`} alt={item} className="w-6 h-6" />
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-gray-100 flex flex-col gap-2">
          <div className="flex gap-2">
            <a href={project.frontendCode} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200">
              {project.ssr ? "Source Code" : "Frontend"}
              {project.ssr ? <AiOutlineCode className="w-4 h-4" /> : <FaReact className="w-4 h-4" />}
            </a>
            {project.backendCode && (
              <a href={project.backendCode} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200">
                Backend
                <AiOutlineCode className="w-4 h-4" />
              </a>
            )}
          </div>
          {!project.isMaintenance && project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white hover:opacity-80 transition-opacity duration-200" style={{ background: "#7e74f1" }}>
              Visit Website
              <BiLinkExternal className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── Main ────────────────────────────────────────────────────────────────────
export default function Portfolio({ projects }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedType, setSelectedType] = useState("All");

  const filteredProjects = selectedType === "All" ? projects : projects.filter((p) => p.type === selectedType);

  useEffect(() => {
    document.body.style.overflow = openModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const types = ["All", ...[...new Set(projects.map((p) => p.type))]];

  return (
    <section id="portfolio" className="bg-white py-10 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <Header title={"Portfolio"} subTitle={"My Projects"} position={"start"} />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button key={type} onClick={() => setSelectedType(type)} className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 ${selectedType === type ? "text-white border-transparent" : "text-gray-500 border-gray-200 hover:border-[#7e74f1] hover:text-[#7e74f1]"}`} style={selectedType === type ? { background: "#7e74f1" } : {}}>
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay, Grid, Navigation]}
          breakpoints={{
            340: { slidesPerView: 1, grid: { rows: 1, fill: "row" } },
            768: { slidesPerView: 2, grid: { rows: 1, fill: "row" } },
            1024: { slidesPerView: 3, grid: { rows: 2, fill: "row" } },
          }}
          spaceBetween={20}
          navigation={{ prevEl: ".swiper-btn-prev", nextEl: ".swiper-btn-next" }}
          pagination={{ el: ".swiper-dots", type: "bullets", clickable: true }}
          className="w-full pb-2"
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index}>
              <RenderCardProject project={project} onOpen={handleOpenModal} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination + Nav */}
        <div className="mt-8 flex items-center justify-between">
          <div className="swiper-dots flex gap-2" />
          <div className="hidden sm:flex items-center gap-2">
            <button className="swiper-btn-prev flex items-center gap-1.5 text-sm font-semibold text-gray-400 px-4 py-2 rounded-full border border-gray-200 hover:border-[#7e74f1] hover:text-[#7e74f1] transition-all duration-200">
              <LuSquareArrowLeft className="w-4 h-4" />
              Prev
            </button>
            <button className="swiper-btn-next flex items-center gap-1.5 text-sm font-semibold text-gray-400 px-4 py-2 rounded-full border border-gray-200 hover:border-[#7e74f1] hover:text-[#7e74f1] transition-all duration-200">
              Next
              <LuSquareArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModal && selectedProject && <ModalDetailProject project={selectedProject} onClose={() => setOpenModal(false)} />}
    </section>
  );
}
