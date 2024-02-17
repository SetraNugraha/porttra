/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import { IoMenu } from 'react-icons/io5'
import { TbLetterX } from 'react-icons/tb'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const NavMenu = ({ title, url }) => {
  return (
    <>
      <li className="hover:bg-slate-200 hover:rounded-lg py-2">
        <a href={url} className="px-2 font-semibold text-slate-700">
          {title}
        </a>
      </li>
    </>
  )
}

const Header = ({ title, subTitle, position }) => {
  return (
    <div className={`flex flex-col items-${position} || xl:w-[55%] xl:mx-auto`}>
      <h3 className="text-[11px] text-secondary tracking-[7px] flex items-center before:w-[30px] before:h-[1px] before:bg-secondary before:mr-3 || xl:text-lg xl:font-semibold xl:before:h-[2px] ">{title}</h3>
      <h1 className="font-bold text-lg text-gray-600 || xl:text-3xl ">{subTitle}</h1>
    </div>
  )
}

const ServicesMenu = ({ title, icon, description }) => {
  return (
    <div className="bg-white my-5 h-1/1 py-10 px-5 rounded-lg flex flex-col items-center || xl:w-1/4">
      {/* Icon */}
      <div className="bg-slate-200 p-4 rounded-xl">
        <img src={icon} alt="" />
      </div>
      <h4 className="font-semibold py-5">{title}</h4>
      <p className="text-[12px] text-justify text-secondary leading-loose || xl:text-[14px]">{description}</p>
    </div>
  )
}

const Project = ({ title, url, description, tech1, tech2, tech3, tech4, tech5, tech6 }) => {
  // TECHSTACK
  const Techstack = ({ techName }) => {
    return (
      <div className="border border-slate-400 px-2">
        <p>{techName}</p>
      </div>
    )
  }

  return (
    <>
      {/* Portofolio */}
      <div className="h-1/1 my-5 border border-secondary rounded-xl || xl:w-[25%] xl:flex xl:flex-col xl:justify-between ">
        {/* Image */}
        <div>
          <img src="./src/assets/no-image.png" alt="portofolio" />
        </div>

        {/* Info */}
        <div className="flex justify-between px-5">
          <h4>{title}</h4>
          <a href={url} className="hover:blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current hover:text-blue-500" width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
            </svg>
          </a>
        </div>

        {/* Techstack */}
        <div className="relative flex flex-wrap gap-3 px-5 py-3">
          {tech1 ? <Techstack techName={tech1} /> : null}
          {tech2 ? <Techstack techName={tech2} /> : null}
          {tech3 ? <Techstack techName={tech3} /> : null}
          {tech4 ? <Techstack techName={tech4} /> : null}
          {tech5 ? <Techstack techName={tech5} /> : null}
          {tech6 ? <Techstack techName={tech6} /> : null}
        </div>
        <p className="text-xs text-secondary text-[12px] leading-loose px-5 py-2 ">{description}</p>
      </div>
    </>
  )
}

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
  const database = ['MySQL', 'PostgreSQL', 'SQL Server', 'Oracle']
  const code = ['HTML', 'CSS - TailwindCSS', 'PHP - Laravel', 'Javascript - React JS', 'Express JS']
  const msOffice = ['Ms. Word', 'Ms. Excel']

  return (
    <>
      <p className="text-slate-700 xl:text-[16px] xl:text-justify">
        Saya sangat antusias sekali dengan dunia <i>Information Technoology </i>(IT), selama perkuliahan saya banyak dibekali dengan pengetahuan seputar <i>Software Development</i>, seperti{' '}
        <i>Project Management, Web Development, Database</i> dan sebagainya. Saya selalu siap untuk belajar dan mengembangkan keterampilan saya di bidang IT ini. Saya percaya bahwa dengan dedikasi, kerja keras, konsistensi dan kreativitas,
        saya dapat memberikan kontribusi yang berarti untuk diri saya dan masyarakat banyak.
      </p>

      <div className="py-5 px-4 text-slate-700 flex justify-between items-start || xl:text-[16px] ">
        <ul className="list-disc">
          {database.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>

        <ul className="list-disc">
          {code.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>

        <ul className="list-disc">
          {msOffice.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    </>
  )
}

const FormContact = () => {
  const serviceID = import.meta.env.VITE_SERVICE_ID
  const templateID = import.meta.env.VITE_TEMPLATE_ID
  const publicKEY = import.meta.env.VITE_PUBLIC_KEY
  // Notif
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer
      toast.onmouseleave = Swal.resumeTimer
    },
  })

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKEY,
      })
      .then(
        () => {
          console.log('SUCCESS!')

          Toast.fire({
            icon: 'success',
            title: 'Message sent successfully',
          })
          form.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text)
          Toast.fire({
            icon: 'error',
            title: 'Error while sending message !',
          })
          form.current.reset()
        },
      )
  }

  const InputForm = ({ type, id, name, placeholder }) => {
    return (
      <input
        type={type}
        id={id}
        name={name}
        className="h-[35px] w-full border border-slate-500 rounded-md px-5 placeholder:font-semibold placeholder:text-[14px] focus:outline-none focus:border-[1px] focus:border-[#453ACE]"
        placeholder={placeholder}
        required
      />
    )
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="my-5 flex flex-col gap-5">
      {/* Name */}
      <InputForm type={'text'} id={'text'} name={'user_name'} placeholder={'Name'} />
      {/* Email */}
      <InputForm type={'email'} id={'email'} name={'user_email'} placeholder={'Email'} />
      {/* User Message */}
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        className="h-[120px] w-full border border-slate-500 rounded-md px-5 py-2 placeholder:font-semibold placeholder:text-[14px] focus:outline-none focus:border-[1px] focus:border-[#453ACE]"
        placeholder="Write a message"
        required
      />
      {/* Button */}
      <button type="submit" value="Send" className="text-white text-[14px] font-semibold h-[35px] w-full bg-[#7e74f1] rounded-lg hover:bg-[#453ACE]">
        Send Message
      </button>
    </form>
  )
}

const ContactInfo = ({ title, icon, description }) => {
  return (
    <div className="flex gap-5">
      {/* Icon */}
      <div className="h-[55px] w-[55px] bg-slate-200 flex justify-center items-center rounded-lg">
        <img src={icon} />
      </div>

      {/* Info */}
      <div>
        <h4 className="font-bold text-stone-700">{title}</h4>
        <p className="text-[14px] text-secondary">{description}</p>
      </div>
    </div>
  )
}

export default function App() {
  const [toggleNav, setToggleNav] = useState(false)

  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <>
      {/* START Navbar */}
      <nav className="fixed bg-white h-[50px] w-full flex justify-between items-center px-5 drop-shadow-xl z-10 || xl:h-[60px]">
        <div className=" ||  xl:w-[60%] xl:mx-auto xl:justify-between xl:items-center xl:flex ">
          {/* Title */}
          <div className="">
            <a href="#">
              <h1 className="text-lg font-semibold || xl:text-2xl xl:font-bold">Setra Page</h1>
            </a>
          </div>

          {/* START Button Menu Mobile */}
          <div className="absolute right-5 top-3 flex">
            <button className="xl:hidden" onClick={handleToggleNav}>
              {toggleNav ? <TbLetterX className="w-[30px] h-[30px] " /> : <IoMenu className="w-[30px] h-[30px]" />}
            </button>
            {/* Child Menu Mobile */}
            {toggleNav ? (
              <div className="absolute bg-slate-100 h-[330px] w-[200px] right-[5px] top-9 border border-slate-400 rounded-lg shadow-lg">
                <ul className="flex flex-col gap-5 px-5 py-5">
                  <NavMenu title={'Services'} url={'#services'} />
                  <NavMenu title={'Portofolio'} url={'#portofolio'} />
                  <NavMenu title={'Education & Skills'} url={'#skills'} />
                  <NavMenu title={'Contact'} url={'#contact'} />
                  <li className="bg-white hover:drop-shadow-lg rounded-lg py-2 border border-slate-400 text-center">
                    <a href="./src/resume.pdf" target="_blank" className="px-2 font-semibold tracking-widest">
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          {/* END Button Menu Mobile */}

          {/* START NAV Menu Desktop View */}
          <div className="hidden || xl:block">
            <ul className="flex gap-5 px-5 py-5">
              <NavMenu title={'Services'} url={'#services'} />
              <NavMenu title={'Portofolio'} url={'#portofolio'} />
              <NavMenu title={'Education & Skills'} url={'#skills'} />
              <NavMenu title={'Contact'} url={'#contact'} />
              <li className="bg-white hover:drop-shadow-lg rounded-lg py-2 border border-slate-400 text-center">
                <a href="./src/resume.pdf" target="_blank" className="px-2 font-semibold tracking-widest">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* END NAV Menu Desktop View */}
      </nav>

      {/* END Navbar */}

      {/* START Hero */}
      <section className="px-5 || xl:pt-[100px] xl:w-[60%] xl:mx-auto xl:flex xl:gap-2" id="hero">
        {/* Image */}
        <div className="pt-20 flex justify-center || xl:w-1/2 xl:order-last xl:ml-[100px]">
          <img src="./src/assets/hero.svg" alt="Person Standing" className="h-[250px] w-[250px] || xl:h-[500px] xl:w-[500px]" />
        </div>

        {/* Text Perkenalan */}
        <div className="flex flex-col justify-center items-center || xl:w-1/2 xl:items-start">
          <h3 className="text-xs text-secondary tracking-[6px] flex items-center before:w-[30px] before:h-[1px] before:bg-secondary before:mr-3 || xl:text-lg xl:font-semibold">HELLO, IT&apos;S ME</h3>

          <h1 className="text-2xl font-bold || xl:text-4xl">
            Setra Nugraha <span className="text-stone-400">Putra Suma</span>
          </h1>
          <p className="text-justify text-[12px] text-stone-800 mt-2 leading-loose || xl:text-lg">
            Lulusan sarjana sistem informasi universitas Gunadarma, yang antusias berfokus pada pengembangan perangkat lunak, analisis data, dan manajemen proyek. Saya memiliki pemahaman mendalam tentang teknologi informasi dan berkomitmen
            untuk menghadirkan solusi teknologi yang inovatif dan efisien untuk mendukung tujuan bisnis. Dengan keterampilan analisis yang kuat dan keahlian dalam pemrograman, saya siap untuk berkontribusi dalam menghadapi tantangan
            teknologi yang ada di era digital.
          </p>
        </div>
      </section>
      {/* END Hero */}

      {/* START Services */}
      <section className="px-5 py-5 my-10 bg-stone-200" id="services">
        <Header title={'SERVICES'} subTitle={'Specialize In'} position={'center'} />

        {/* Card */}
        <div className="py-2 || xl:py-10 xl:w-[80%] xl:mx-auto xl:flex xl:flex-wrap xl:gap-10 xl:justify-center xl:items-center">
          {/* Card Database */}
          <ServicesMenu
            title={'Databases'}
            icon={'/src/assets/database.svg'}
            description={
              'Merancang struktur basis data yang optimal, melakukan optimasi database untuk meningkatkan kinerja dan efisiensi penyimpanan dan akses data, serta normalisasi tabel untuk mengurangi redudansi data dan meningkatkan integritas data'
            }
          />

          {/* Card Bakcend */}
          <ServicesMenu
            title={'Backend Developer'}
            icon={'./src/assets/backend.svg'}
            description={
              'Membangun logika bisnis yang kuat untuk memproses data dan menjalankan operasi sebuah aplikasi, mengintegrasikan backend dengan database untuk menyimpan dan mengambil informasi secara efisien, serta mengimplementasikan API untuk berkomunikasi antara backend dan frontend'
            }
          />

          {/* Card Frontend */}
          <ServicesMenu
            title={'Frontend Developer'}
            icon={'./src/assets/frontend.svg'}
            description={
              'Slicing antarmuka yang interaktif dan menarik menggunakan HTML, CSS, Javascript dan framework React JS dari design yang ada, mengoptimalkan kinerja frontend untuk memastikan kecepatan dan keterjangkauan aplikasi web'
            }
          />
        </div>
      </section>
      {/* END Services */}

      {/* START Portofolio */}
      <section className="px-5" id="portofolio">
        <Header title={'MY PROJECT'} subTitle={'Featured Portofolio'} position={'start'} />

        {/* Card Portofolio */}
        <div className="xl:mt-10 xl:w-[75%] xl:mx-auto xl:flex xl:flex-wrap xl:gap-5 xl:justify-center">
          <Project title={'Project Will Be Added Soon ...'} url={'#portofolio'} description={'No Description Added'} tech1={'React'} tech2={'Express JS'} tech3={'PostgreSQL'} tech4={'Prisma'} />
          <Project title={'Project Will Be Added Soon ...'} url={'#portofolio'} description={'No Description Added'} tech1={'HTML'} tech2={'CSS'} tech3={'Javascript'} />
          <Project title={'Project Will Be Added Soon ...'} url={'#portofolio'} description={'No Description Added'} tech1={'Laravel'} tech2={'Vue'} tech3={'MySQL'} />
        </div>
      </section>
      {/* END Portofolio */}

      {/* START Education & Skills */}
      <section className="px-5 py-5 my-10 bg-stone-200" id="skills">
        <Header title={'LEARNING PATH'} subTitle={'Education & Skills'} position={'start'} />

        <div className="py-10 || xl:w-[55%] xl:mx-auto xl:flex xl:items-start xl:mt-5">
          {/* START Education */}
          <div className="flex flex-col || xl:w-1/2">
            {/* Education 1 */}
            <Education place={'Universitas Gunadarma'} major={"Bachelor's of Information System"} year={'2019 - 2023'} />
            {/* Education 2 */}
            <Education place={'SMA Plus PGRI Cibinong'} major={'Social Studies'} year={'2017 - 2019'} />
          </div>
          {/* END Education */}

          {/* START Skills */}
          <div className="py-5 text-secondary text-[13px] leading-loose || xl:w-1/2 xl:py-0 ">
            <Skills />
          </div>
          {/* END Skills */}
        </div>
      </section>
      {/* END Education & Skills */}

      {/* START Contact & Address */}
      <section className="px-5" id="contact">
        <Header title={'FIND ME'} subTitle={'Contact & Address'} position={'center'} />

        <div className="xl:w-[55%] xl:mx-auto xl:flex xl:justify-center xl:gap-10 xl:items-start xl:mt-10">
          {/* Form  */}
          <div className="xl:w-[45%]">
            <FormContact />
          </div>

          {/* Address & Contact */}
          <div className="py-5 flex flex-col gap-10 || xl: ">
            <ContactInfo title={'Phone'} icon={'./src/assets/phone.svg'} description={'+62 812-8321-4126'} />
            <ContactInfo title={'Email'} icon={'./src/assets/email.svg'} description={'setranugraha75@gmail.com'} />
            <ContactInfo title={'Address'} icon={'./src/assets/address.svg'} description={'Cikaret, Puri Nirwana 2, Jl. Mangga 2, Blok AY29'} />
          </div>
        </div>
      </section>
      {/* END Contact & Address */}

      {/* START Footer */}
      <footer className="px-5 mt-10 h-[150px] bg-stone-200 flex flex-col justify-center items-center gap-5">
        <div className="flex gap-5 justify-center items-center">
          {/* Instagram */}
          <a href="https://instagram.com/setranugrahaa" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-pink-700">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* Linkedin */}
          <a href="https://www.linkedin.com/in/setranugraha" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-blue-700">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Github */}
          <a href="https://www.github.com/setranugraha" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-slate-700">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <p className="text-secondary text-[14px] font-semibold">&copy; 2024 - Made By Setra</p>
      </footer>
      {/* END Footer */}
    </>
  )
}
