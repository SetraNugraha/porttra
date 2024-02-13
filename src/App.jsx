import { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { TbLetterX } from 'react-icons/tb'

export default function App() {
  const [toggleNav, setToggleNav] = useState(false)

  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <>
      {/* START Navbar */}
      <nav className="fixed bg-white h-[50px] w-full flex justify-between items-center px-5 drop-shadow-lg z-10">
        {/* Title */}
        <div>
          <a href="#">
            <h1 className="text-lg font-semibold">Portofolio</h1>
          </a>
        </div>

        {/* Button Menu */}
        <div>
          <div>
            <button onClick={handleToggleNav}>{toggleNav ? <TbLetterX className="w-[30px] h-[30px]" /> : <IoMenu className="w-[30px] h-[30px]" />}</button>
          </div>
          {/* Child Menu Mobile */}
          {toggleNav ? (
            <div className="absolute bg-slate-100 h-[330px] w-[200px] left-[170px] border border-slate-400 rounded-lg shadow-lg">
              <ul className="flex flex-col gap-5 px-5 py-5">
                <li className="hover:bg-slate-200 hover:rounded-lg py-2">
                  <a href="#services" className="px-2 font-semibold text-slate-500">
                    Services
                  </a>
                </li>
                <li className="hover:bg-slate-200 hover:rounded-lg py-2">
                  <a href="#portofolio" className="px-2 font-semibold text-slate-500">
                    Portofolio
                  </a>
                </li>
                <li className="hover:bg-slate-200 hover:rounded-lg py-2">
                  <a href="#skills" className="px-2 font-semibold text-slate-500">
                    Education & Skills
                  </a>
                </li>
                <li className="hover:bg-slate-200 hover:rounded-lg py-2">
                  <a href="#contact" className="px-2 font-semibold text-slate-500">
                    Contact
                  </a>
                </li>
                <li className="bg-white hover:drop-shadow-lg rounded-lg py-2 border border-slate-400 text-center">
                  <a href="./src/resume.pdf" target="_blank" className="px-2 font-semibold tracking-widest">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>

      {/* END Navbar */}

      {/* START Hero */}
      <section className="px-5" id="hero">
        {/* Image */}
        <div className="pt-20 flex justify-center">
          <img src="./src/assets/hero.svg" alt="Person Standing" className="h-[250px] w-[250px]" />
        </div>

        {/* Text Perkenalan */}
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xs text-secondary tracking-[6px] flex items-center before:w-[30px] before:h-[1px] before:bg-secondary before:mr-3">MY NAME IS</h3>

          <h1 className="text-2xl font-bold">
            Setra Nugraha <span className="text-secondary">Putra Suma</span>
          </h1>
          <p className="text-justify text-[12px] text-secondary mt-2 leading-loose">
            Lulusan sarjana sistem informasi universitas Gunadarma, yang antusias berfokus pada pengembangan perangkat lunak, analisis data, dan manajemen proyek. Saya memiliki pemahaman mendalam tentang teknologi informasi dan berkomitmen
            untuk menghadirkan solusi teknologi yang inovatif dan efisien untuk mendukung tujuan bisnis. Dengan keterampilan analisis yang kuat dan keahlian dalam pemrograman, saya siap untuk berkontribusi dalam menghadapi tantangan
            teknologi yang ada di era digital.
          </p>
        </div>
      </section>
      {/* END Hero */}

      {/* START Services */}
      <section className="px-5 py-5 my-10 bg-slate-100" id="services">
        <div className="flex flex-col items-center">
          <h3 className="text-[11px] text-secondary tracking-[7px] flex items-center before:w-[30px] before:h-[1px] before:bg-secondary before:mr-3">SERVICES</h3>
          <h1 className="font-bold text-lg">Specialize In</h1>
        </div>

        {/* Card */}
        <div className="py-2">
          {/* Card Database */}
          <div className="bg-white my-5 h-1/1 py-10 px-5 rounded-lg flex flex-col items-center">
            {/* Icon */}
            <div className="bg-slate-200 p-4 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#7e74f1">
                <path d="M12.008 0c-4.225 0-10.008 1.001-10.008 4.361v15.277c0 3.362 6.209 4.362 10.008 4.362 3.783 0 9.992-1.001 9.992-4.361v-15.278c0-3.361-5.965-4.361-9.992-4.361zm0 2c3.638 0 7.992.909 7.992 2.361 0 1.581-5.104 2.361-7.992 2.361-3.412.001-8.008-.905-8.008-2.361 0-1.584 4.812-2.361 8.008-2.361zm7.992 17.386c0 1.751-5.104 2.614-7.992 2.614-3.412 0-8.008-1.002-8.008-2.614v-2.04c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.04zm0-4.873c0 1.75-5.104 2.614-7.992 2.614-3.412-.001-8.008-1.002-8.008-2.614v-2.364c2.116 1.341 5.17 1.78 8.008 1.78 2.839 0 5.881-.442 7.992-1.78v2.364zm-7.992-2.585c-3.426 0-8.008-1.006-8.008-2.614v-2.371c2.117 1.342 5.17 1.78 8.008 1.78 2.829 0 5.876-.438 7.992-1.78v2.372c0 1.753-5.131 2.613-7.992 2.613z" />
              </svg>
            </div>
            <h4 className="font-semibold py-5">Databases</h4>
            <p className="text-center text-[12px] text-secondary leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fuga nobis delectus nostrum ea deleniti, voluptatibus eos unde earum perferendis?</p>
          </div>

          {/* Card Backend Developer */}
          <div className="bg-white my-5 h-1/1 py-10 px-5 rounded-lg flex flex-col items-center">
            {/* Icon */}
            <div className="bg-slate-200 p-4 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#7e74f1">
                <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
              </svg>
            </div>
            <h4 className="font-semibold py-5">Backend Developer</h4>
            <p className="text-center text-[12px] text-secondary leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fuga nobis delectus nostrum ea deleniti, voluptatibus eos unde earum perferendis?</p>
          </div>

          {/* Card Frontend Developer */}
          <div className="bg-white my-5 h-1/1 py-10 px-5 rounded-lg flex flex-col items-center">
            {/* Icon */}
            <div className="bg-slate-200 p-4 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" width="24" height="24" fill="#7e74f1">
                <path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z" />
                <path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z" />
              </svg>
            </div>
            <h4 className="font-semibold py-5">Frontend Developer</h4>
            <p className="text-center text-[12px] text-secondary leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fuga nobis delectus nostrum ea deleniti, voluptatibus eos unde earum perferendis?</p>
          </div>
        </div>
      </section>
      {/* END Services */}

      {/* START Portofolio */}
      <section className="px-5" id="portofolio">
        <div className="flex flex-col items-center">
          <h3 className="text-[11px] text-secondary tracking-[7px] flex items-center before:w-[30px] before:h-[1px] before:bg-secondary before:mr-3">MY PROJECT</h3>
          <h1 className="font-bold text-lg">Featured Portofolio</h1>
        </div>

        {/* Card Portofolio */}
        <div>
          {/* Portofolio 1 */}
          <div className="h-1/1 my-5 border border-secondary rounded-xl">
            {/* Image */}
            <div>
              <img src="./src/assets/no-image.png" alt="portofolio1" />
            </div>

            {/* Info */}
            <div className="flex justify-between px-5">
              <h4>Project Will Be Added Soon ...</h4>
              <a href="#" className="hover:blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current hover:text-blue-500" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                </svg>
              </a>
            </div>

            {/* Techstack */}
            <div className="relative flex gap-3 px-5 py-3">
              <div className="border px-2">----</div>
              <div className="border px-2">----</div>
              <div className="border px-2">----</div>
            </div>
            <p className="text-xs text-secondary text-[12px] leading-loose px-5 py-2">No Description Added</p>
          </div>

          {/* Portofolio 2 */}
          <div className="h-1/1 my-5 border border-secondary rounded-xl">
            {/* Image */}
            <div>
              <img src="./src/assets/no-image.png" alt="portofolio1" />
            </div>

            {/* Info */}
            <div className="flex justify-between px-5">
              <h4>Project Will Be Added Soon ...</h4>
              <a href="#" className="hover:blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current hover:text-blue-500" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                </svg>
              </a>
            </div>

            {/* Techstack */}
            <div className="relative flex gap-3 px-5 py-3">
              <div className="border px-2">----</div>
              <div className="border px-2">----</div>
              <div className="border px-2">----</div>
            </div>
            <p className="text-xs text-secondary text-[12px] leading-loose px-5 py-2">No Description Added</p>
          </div>

          {/* Portofolio 3*/}
          <div className="h-1/1 my-5 border border-secondary rounded-xl">
            {/* Image */}
            <div>
              <img src="./src/assets/no-image.png" alt="portofolio1" />
            </div>

            {/* Info */}
            <div className="flex justify-between px-5">
              <h4>Project Will Be Added Soon ...</h4>
              <a href="#" className="hover:blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-current hover:text-blue-500" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
                </svg>
              </a>
            </div>

            {/* Techstack */}
            <div className="relative flex gap-3 px-5 py-3">
              <div className="border px-2">----</div>
              <div className="border px-2">----</div>
              <div className="border px-2">----</div>
            </div>
            <p className="text-xs text-secondary text-[12px] leading-loose px-5 py-2">No Description Added</p>
          </div>
        </div>
      </section>
      {/* END Portofolio */}

      {/* START Education & Skills */}
      <section className="px-5 py-5 my-10 bg-slate-100" id="skills">
        <div className="flex flex-col items-start">
          <h3 className="text-[11px] text-secondary tracking-[7px] flex items-center before:w-[30px] before:h-[1px] before:bg-secondary before:mr-3">LEARNING PATH</h3>
          <h1 className="font-bold text-lg">Education & Skills</h1>
        </div>

        <div className="py-10">
          {/* START Education */}
          <div className="flex flex-col">
            {/* Education 1 */}
            <div className="flex gap-5">
              {/* Line */}
              <div className="relative top-1 w-[2px] h-[130px] bg-slate-400 before:absolute before:left-[-6px] before:w-[15px] before:h-[15px] before:bg-slate-400 before:rounded-full"></div>
              {/* Info */}
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">Gunadarma University</h1>
                <p className="text-xs text-secondary">Bachelor&apos;s of Information System</p>
                <h4 className="font-semibold text-sm mt-3">2019 - 2023</h4>
              </div>
            </div>

            {/* Education 2 */}
            <div className="flex gap-5">
              {/* Line */}
              <div className="relative top-1 w-[2px] h-[130px] bg-slate-400 before:absolute before:left-[-6px] before:w-[15px] before:h-[15px] before:bg-slate-400 before:rounded-full"></div>
              {/* Info */}
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">SMA Plus PGRI Cibinong</h1>
                <p className="text-xs text-secondary">Social Studies</p>
                <h4 className="font-semibold text-sm mt-3">2017 - 2019</h4>
              </div>
            </div>
          </div>
          {/* END Education */}

          {/* START Skills */}
          <div className="py-5 text-secondary text-[12px] leading-loose ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis voluptates provident dolorem amet in similique, soluta eius minus perspiciatis consectetur adipisicing elit.</p>

            <div className="py-5 px-4 flex justify-between items-start">
              <ul className="list-disc">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>SQL Server</li>
                <li>Oracle</li>
              </ul>

              <ul className="list-disc">
                <li>HTML</li>
                <li>CSS - TailwindCSS</li>
                <li>PHP - Laravel</li>
                <li>Javascript - React JS</li>
                <li>Express JS</li>
              </ul>

              <ul className="list-disc">
                <li>Ms. Word</li>
                <li>Ms. Excel</li>
              </ul>
            </div>
          </div>
          {/* END Skills */}
        </div>
      </section>
      {/* END Education & Skills */}

      {/* START Contact & Address */}
      <section className="px-5" id="contact">
        <div className="flex flex-col items-start">
          <h3 className="text-[11px] text-secondary tracking-[7px] flex items-center before:w-[30px] before:h-[1px] before:bg-secondary before:mr-3">FIND ME</h3>
          <h1 className="font-bold text-lg">Contact & Address</h1>
        </div>

        <div>
          {/* Form  */}
          <div>
            <form action="" className="my-5 flex flex-col gap-5">
              {/* Name */}
              <input type="text" className="h-[35px] w-full border border-slate-500 rounded-md px-5 placeholder:font-semibold placeholder:text-[14px]" placeholder="Name" />
              {/* Email */}
              <input type="email" className="h-[35px] w-full border border-slate-500 rounded-md px-5 placeholder:font-semibold placeholder:text-[14px]" placeholder="Email" />
              {/* User Message */}
              <textarea name="message" id="" cols="30" rows="10" className="h-[120px] w-full border border-slate-500 rounded-md px-5 py-2 placeholder:font-semibold placeholder:text-[14px]" placeholder="Write a message"></textarea>
              {/* Button */}
              <button className="text-white text-[14px] font-semibold h-[35px] w-full bg-[#7e74f1] rounded-lg hover:bg-[#453ACE]">Send Message</button>
            </form>
          </div>

          {/* Address & Contact */}
          <div className="py-5 flex flex-col gap-10">
            {/* Info Phone */}
            <div className="flex gap-5">
              {/* Icon */}
              <div className="h-[55px] w-[55px] bg-slate-200 flex justify-center items-center rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#453ACE">
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                </svg>
              </div>

              {/* Info */}
              <div>
                <h4 className="font-bold">Phone</h4>
                <p className="text-[14px] text-secondary">+62 812-8321-4126</p>
              </div>
            </div>

            {/* Info Email */}
            <div className="flex gap-5">
              {/* Icon */}
              <div className="h-[55px] w-[55px] bg-slate-200 flex justify-center items-center rounded-lg">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" fill="#453ACE">
                  <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
                </svg>
              </div>

              {/* Info */}
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-[14px] text-secondary">setranugraha75@gmail.com</p>
              </div>
            </div>

            {/* Info Address */}
            <div className="flex gap-5">
              {/* Icon */}
              <div className="h-[55px] w-[55px] bg-slate-200 flex justify-center items-center rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#453ACE">
                  <path d="M12 3c2.131 0 4 1.73 4 3.702 0 2.05-1.714 4.941-4 8.561-2.286-3.62-4-6.511-4-8.561 0-1.972 1.869-3.702 4-3.702zm0-2c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z" />
                </svg>
              </div>

              {/* Info */}
              <div>
                <h4 className="font-bold">Address</h4>
                <p className="text-[14px] text-secondary">Cikaret, Puri Nirwana 2, Jl. Mangga 2, Blok AY29</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END Contact & Address */}

      {/* START Footer */}
      <footer className="px-5 mt-10 h-[150px] bg-slate-200 flex flex-col justify-center items-center gap-5">
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
