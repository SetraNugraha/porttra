/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const NavMenu = ({ title, path, onClick }) => {
  return (
    <li>
      <Link to={path} spy={true} smooth={true} offset={-80} duration={1200} onClick={onClick} className="relative text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer transition-colors duration-200 group block py-1">
        {title}
        <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 rounded-full" style={{ background: "#7e74f1" }} />
      </Link>
    </li>
  );
};

export default function Navbar() {
  const menuNav = [
    { title: "Experience", path: "experience" },
    { title: "Portfolio", path: "portfolio" },
    { title: "Education & Skills", path: "skills" },
    { title: "Contact", path: "contact" },
  ];

  const [toggleNav, setToggleNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = toggleNav ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggleNav]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"}`}>
        <div className="max-w-5xl mx-auto px-5 lg:px-0 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={1000} className="flex items-center gap-2 cursor-pointer">
            <img src="./gray-powl.png" alt="logo" className="w-8 h-8" />
            <span className="text-base font-bold tracking-tight text-gray-900">Porttra</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-8">
            {menuNav.map((item, index) => (
              <NavMenu title={item.title} path={item.path} key={index} />
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={1200} className="text-sm font-semibold px-4 py-2 rounded-full text-white cursor-pointer transition-opacity duration-200 hover:opacity-80" style={{ background: "#7e74f1" }}>
              Hire Me
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button className="xl:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] cursor-pointer" onClick={() => setToggleNav(!toggleNav)} aria-label="Toggle menu">
            <span className={`block h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${toggleNav ? "w-5 rotate-45 translate-y-[7px]" : "w-5"}`} />
            <span className={`block h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${toggleNav ? "opacity-0 w-0" : "w-4"}`} />
            <span className={`block h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${toggleNav ? "w-5 -rotate-45 -translate-y-[7px]" : "w-5"}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 xl:hidden transition-all duration-300 ${toggleNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setToggleNav(false)} />

        {/* Drawer */}
        <div className={`absolute top-16 left-0 right-0 bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ${toggleNav ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}>
          <ul className="flex flex-col px-6 py-6 gap-1">
            {menuNav.map((item, index) => (
              <li key={index}>
                <Link to={item.path} spy={true} smooth={true} offset={-80} duration={1200} onClick={() => setToggleNav(false)} className="flex items-center gap-3 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 border-b border-gray-50 cursor-pointer transition-colors duration-150 last:border-0">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#7e74f1" }} />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="px-6 pb-6">
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={1200} onClick={() => setToggleNav(false)} className="block text-center text-sm font-semibold px-4 py-3 rounded-full text-white cursor-pointer" style={{ background: "#7e74f1" }}>
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
