/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import EducationSkills from './components/EducationSkills'
import ContactAddress from './components/ContactAddress'
import Footer from './components/Footer'

import { projects, services, contactInfo } from './data'
import { useEffect } from 'react'

export default function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleIsMobile = () => {
      setIsMobile(window.innerWidth < 1280)
    }

    handleIsMobile()
    window.addEventListener('resize', handleIsMobile)

    return () => window.removeEventListener('resize', handleIsMobile)
  }, [])

  return (
    <>
      {/* START Navbar */}
      <Navbar />
      {/* END Navbar */}

      {/* START Hero */}
      <Hero />
      {/* END Hero */}

      {/* START Services */}
      <Services
        isMobile={isMobile}
        services={services}
      />
      {/* END Services */}

      {/* START Portfolio */}
      <Portfolio
        isMobile={isMobile}
        projects={projects}
      />
      {/* END Portofolio */}

      {/* START Education & Skills */}
      <EducationSkills />
      {/* END Education & Skills */}

      {/* START Contact & Address */}
      <ContactAddress contactInfo={contactInfo} />
      {/* END Contact & Address */}

      {/* START Footer */}
      <Footer />
      {/* END Footer */}
    </>
  )
}
