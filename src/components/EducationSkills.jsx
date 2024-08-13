/* eslint-disable react/prop-types */
import { Header } from '../elements/Header'

const Education = ({ place, major, year }) => {
  return (
    <>
      <div className="flex gap-5 || xl:gap-10 ">
        {/* Line */}
        <div className="relative top-1 w-[2px] h-[130px] bg-slate-400 before:absolute before:left-[-6px] before:w-[15px] before:h-[15px] before:bg-slate-400 before:rounded-full ||  "></div>
        {/* Info */}
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-stone-700 || xl:text-xl ">{place}</h1>
          <p className="text-xs text-slate-700 || xl:text-[16px] ">{major}</p>
          <h4 className="font-semibold text-stone-700 text-sm mt-3 || xl:text-lg ">{year}</h4>
        </div>
      </div>
    </>
  )
}

const Skills = () => {
  const database = ['MySQL.svg', 'PostgresSQL.svg']
  const code = ['HTML5.svg', 'CSS3.svg', 'Tailwind-CSS.svg', 'PHP.svg', 'JavaScript.svg', 'React.svg', 'Laravel.svg']

  return (
    <>
      <p className="text-slate-700 text-[14px] xl:text-[16px] text-justify">
        Saya mempunyai antusias yang tinggi dengan dunia <i>Information Technoology </i>(IT), selama perkuliahan saya banyak dibekali dengan pengetahuan seputar <i>Software Development</i>, seperti{' '}
        <i>Project Management, Web Development, Database</i> dan sebagainya. Saya selalu siap untuk belajar dan mengembangkan keterampilan saya di bidang IT ini. Saya percaya bahwa dengan dedikasi, kerja keras, konsistensi dan kreativitas,
        saya dapat memberikan kontribusi yang berarti untuk diri saya dan masyarakat banyak.
      </p>

      <div className="py-5 text-slate-700 || xl:text-[16px] ">
        <h3 className="font-bold">My Tech Proficiency - Junior Level, Commited to Evolve</h3>

        <div className="flex justify-between items-start my-3">
          {/* DATABASE */}
          <div className="w-1/2 flex flex-col justify-center items-center">
            <h6 className="font-semibold text-[14px] text-secondary py-1 || xl:text-[16px]">Database : </h6>
            <ul className="grid grid-cols-2 justify-center gap-3 py-4 px-4 || xl:justify-start">
              {database.map((item, index) => {
                return (
                  <li key={index}>
                    <img
                      src={`assets/skills/${item}`}
                      alt="logo database"
                      className="w-[40px] h-[40px]"
                    />
                  </li>
                )
              })}
            </ul>
          </div>

          {/* CODE */}
          <div className="w-1/2 flex flex-col justify-center items-center">
            <h6 className="font-semibold text-[14px] text-secondary py-1 xl:text-[16px]">Code : </h6>
            <ul className="grid grid-cols-3 gap-3 py-4 px-4 || xl:justify-start">
              {code.map((item, index) => {
                return (
                  <li key={index}>
                    <img
                      src={`assets/skills/${item}`}
                      alt="logo code"
                      className="w-[40px] h-[40px]"
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default function EducationSkills() {
  return (
    <section
      className="px-5 py-5 my-10 bg-stone-100"
      id="skills"
    >
      <Header
        title={'LEARNING PATH'}
        subTitle={'Education & Skills'}
        position={'start'}
      />

      <div className="py-10 || xl:w-[55%] xl:mx-auto xl:flex xl:items-start xl:mt-5">
        {/* START Education */}
        <div className="flex flex-col || xl:w-1/2">
          {/* Education 1 */}
          <Education
            place={'Universitas Gunadarma'}
            major={"Bachelor's of Information System"}
            year={'2019 - 2023'}
          />
          {/* Education 2 */}
          <Education
            place={'SMA Plus PGRI Cibinong'}
            major={'Social Studies'}
            year={'2017 - 2019'}
          />
        </div>
        {/* END Education */}

        {/* START Skills */}
        <div className="py-5 text-secondary text-[13px] leading-loose || xl:w-1/2 xl:py-0 ">
          <Skills />
        </div>
        {/* END Skills */}
      </div>
    </section>
  )
}