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
      <nav className="fixed h-[50px] w-full flex justify-between items-center px-5 shadow-lg">
        {/* Title */}
        <div>
          <h1 className="text-lg font-semibold">Portofolio</h1>
        </div>

        {/* Button Menu */}
        <div>
          <div>
            <button onClick={handleToggleNav}>{toggleNav ? <TbLetterX className="w-[30px] h-[30px]" /> : <IoMenu className="w-[30px] h-[30px]" />}</button>
          </div>
          {/* Child Menu Mobile */}
          {toggleNav ? (
            <div className="absolute bg-slate-100 h-[320px] w-[200px] left-[170px] rounded-lg shadow-lg">
              <ul className="flex flex-col gap-5 px-5 py-5">
                <li className="hover:bg-slate-200 hover:rounded-lg py-2">
                  <a href="#" className="px-2 font-semibold text-slate-500">
                    Services
                  </a>
                </li>
                <li className="hover:bg-slate-200 hover:rounded-lg py-2">
                  <a href="#" className="px-2 font-semibold text-slate-500">
                    Portofolio
                  </a>
                </li>
                <li className="hover:bg-slate-200 hover:rounded-lg py-2">
                  <a href="#" className="px-2 font-semibold text-slate-500">
                    Education & Skills
                  </a>
                </li>
                <li className="hover:bg-slate-200 hover:rounded-lg py-2">
                  <a href="#" className="px-2 font-semibold text-slate-500">
                    Contact
                  </a>
                </li>
                <li className="hover:bg-slate-200 hover:rounded-lg py-2">
                  <a href="#" className="px-2 font-semibold text-slate-500">
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
                <h1 className="font-bold">Gunadarma University</h1>
                <p className="text-xs text-secondary">Bachelor&apos;s of Information System</p>
                <h4 className="font-semibold text-sm mt-3">2019 - 2023</h4>
              </div>
            </div>
          </div>
          {/* END Education */}

          {/* START Skills */}
          <div className="py-5 text-secondary text-[12px] leading-loose ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quis voluptates provident dolorem amet in similique, soluta eius minus perspiciatis consectetur adipisicing elit.</p>

            <div className="py-5 px-4 flex justify-between items-start">
              <ul className='list-disc'>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>SQL Server</li>
                <li>Oracle</li>
              </ul>

              <ul className='list-disc'>
                <li>HTML</li>
                <li>CSS - TailwindCSS</li>
                <li>PHP - Laravel</li>
                <li>Javascript - React JS</li>
                <li>Express JS</li>
              </ul>

              <ul className='list-disc'>
                <li>Ms. Word</li>
                <li>Ms. Excel</li>
              </ul>
            </div>
          </div>
          {/* END Skills */}
        </div>
      </section>
      {/* END Education & Skills */}
    </>
  )
}
