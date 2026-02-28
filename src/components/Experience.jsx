import { useEffect, useRef, useState } from "react";
import { Header } from "../elements/Header";

const experiences = [
  {
    company: "PT Mitra Langkah Buana",
    role: "Junior Fullstack Engineer",
    period: "Oktober 2025 — Present",
    highlights: ["Mengembangkan & memelihara Landing Page menggunakan Next.js & TypeScript", "Mengimplementasikan sistem booking dan transaksi online dengan integrasi payment gateway Xendit", "Membangun sistem autentikasi & otorisasi berbasis JWT untuk keamanan akses pengguna", "Mengembangkan CMS internal menggunakan React.js & TypeScript untuk kebutuhan operasional tim", "Mengembangkan RESTful API menggunakan Express.js dan database PostgreSQL", "Berkolaborasi dengan tim untuk menerjemahkan kebutuhan bisnis menjadi solusi teknis"],
    stack: ["Next.js", "React.js", "TypeScript", "Express.js", "PostgreSQL", "JWT", "Xendit"],
  },
];

function useInView(ref, options = {}) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return inView;
}

export default function Experience() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="experience" ref={sectionRef} className="bg-stone-100 py-10 mb-5 px-6 md:px-16 lg:px-32">
      <div className="max-w-5xl mx-auto space-y-7">
        <Header title={"Experience"} subTitle={"Professional Journey"} position={"center"} />

        {/* Experience item */}
        {experiences.map((exp, i) => (
          <div
            key={i}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `all 0.6s ease ${0.15 + i * 0.1}s`,
            }}
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
              <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
              <span className="text-sm font-medium text-gray-400">{exp.period}</span>
            </div>

            {/* Company + badge */}
            <div className="flex items-center gap-2 ">
              <span className="text-sm font-medium" style={{ color: "#7e74f1" }}>
                {exp.company}
              </span>
            </div>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.stack.map((tech, k) => (
                <span
                  key={k}
                  className="text-xs font-medium px-3 py-1 rounded-full border text-gray-500 border-gray-300 hover:border-[#7e74f1] hover:text-[#7e74f1] transition-all duration-200 cursor-default"
                  style={{
                    opacity: inView ? 1 : 0,
                    transition: `opacity 0.4s ease ${0.7 + k * 0.05}s`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-100 mb-6" />

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {exp.highlights.map((h, j) => (
                <li
                  key={j}
                  className="flex items-start md:items-center gap-3 text-sm text-gray-500 leading-relaxed"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-8px)",
                    transition: `all 0.4s ease ${0.35 + j * 0.06}s`,
                  }}
                >
                  <span className="mt-2 md:mt-0 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#7e74f1" }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
