/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-scroll"
import { TbLetterX } from "react-icons/tb"
import { useState } from "react"
import { IoMenu } from "react-icons/io5"

const NavMenu = ({ title, path }) => {
  return (
    <>
      <li className="hover:bg-slate-200 hover:rounded-lg cursor-pointer py-2 ">
        <Link to={path} spy={true} smooth={true} offset={-80} duration={1200} className="px-2 font-semibold text-slate-700 cursor-pointer block">
          {title}
        </Link>
      </li>
    </>
  )
}

export default function Navbar() {
  const menuNav = [
    {
      title: "Services",
      path: "services",
    },
    {
      title: "Portfolio",
      path: "portfolio",
    },
    {
      title: "Education & Skills",
      path: "skills",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ]

  const [toggleNav, setToggleNav] = useState(false)

  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <nav className="fixed bg-white h-[50px] w-full flex justify-between items-center px-5 drop-shadow-xl z-10 || xl:h-[60px] xl:px-0">
      <div className="xl:justify-between xl:items-center xl:flex xl:w-[60%] xl:mx-auto">
        {/* Title */}
        <div>
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={1000} className={"flex items-center gap-x-2 cursor-pointer"}>
            <img src="/gray-powl.png" alt="logo" className="size-12" />
            <h1 className="text-lg font-semibold || xl:text-2xl xl:font-bold xl:-ml-2">Porttra</h1>
          </Link>
        </div>

        {/* START Button Menu Mobile */}
        <div className="absolute z-50 right-10 top-3 flex">
          <button className="xl:hidden transition-all duration-300 relative" onClick={handleToggleNav}>
            {/* Humberger*/}
            <span className={`absolute transition-transform duration-300 ${toggleNav ? "rotate-180 opacity-0" : "opacity-100"}`}>
              <IoMenu className="w-[30px] h-[30px]" />
            </span>
            {/* X icon */}
            <span className={`absolute transition-transform duration-300 ${toggleNav ? "opacity-100 rotate-0" : "rotate-[180deg] opacity-0"}`}>
              <TbLetterX className="w-[30px] h-[30px]" />
            </span>
          </button>
          {/* Child Menu Mobile */}
          {toggleNav ? (
            <div className="absolute bg-slate-100 w-[200px] -right-5 top-9 border border-slate-400 rounded-lg shadow-lg ">
              <ul className="flex flex-col gap-5 px-5 py-5 ">
                {menuNav.map((item, index) => (
                  <NavMenu title={item.title} path={item.path} key={index} />
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        {/* END Button Menu Mobile */}

        {/* START NAV Menu Desktop View */}
        <div className="hidden || xl:block">
          <ul className="flex gap-5 px- py-5">
            {menuNav.map((item, index) => (
              <NavMenu title={item.title} path={item.path} key={index} />
            ))}
          </ul>
        </div>
      </div>
      {/* END NAV Menu Desktop View */}
    </nav>
  )
}
