/* eslint-disable react/prop-types */
import { Header } from '../elements/Header'
import { CustomSwiper } from '../elements/CustomSwiper'

export default function Portfolio({ isMobile, projects }) {
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
      {isMobile ? (
        <CustomSwiper
          data={projects}
          style={'w-[90%] flex flex-col justify-between mx-auto px-2 py-2 border-[0.5px] border-slate-200 shadow-lg rounded-lg xl:w-full'}
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
                <div className="mx-2 mt-4 flex justify-between items-center">
                  <h1 className="font-bold">{project.title}</h1>
                  <a
                    href={project.url}
                    className="hover:blue-500"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current hover:text-blue-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                  </a>
                </div>
                {/* END Title & Link */}
                <h4 className="text-slate-500 tracking-wide font-semibold mx-2 my-2">{`[ ${project.type} ]`}</h4>
                <p className="mx-2 mt-2 text-[14px] text-slate-500 text-justify">{project.description}</p>
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
        <div className=" mx-auto my-3 py-5 grid grid-cols-3 gap-7 w-[55%]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[90%] flex flex-col justify-between mx-auto px-2 py-2 border border-slate-100 shadow-xl shadow-slate-300 rounded-lg xl:w-full"
            >
              {/* Image & Description */}
              <div>
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className=" rounded-md  shadow-md "
                />
                {/* Title & Link */}
                <div className="mx-2 mt-4 flex justify-between items-center">
                  <h1 className="font-bold">{project.title}</h1>
                  <a
                    href={project.url}
                    className="hover:blue-500"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current hover:text-blue-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                    </svg>
                  </a>
                </div>
                {/* Type */}
                <h4 className="text-slate-500 tracking-wide font-semibold mx-2 my-2">{`[ ${project.type} ]`}</h4>
                {/* Description */}
                <p className="mx-2 text-[14px] text-slate-500 text-justify">{project.description}</p>
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
          ))}
        </div>
      )}
    </section>
  )
}
