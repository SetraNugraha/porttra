/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import EducationSkills from "./components/EducationSkills"
import ContactAddress from "./components/ContactAddress"
import Footer from "./components/Footer"

import { projects, services, contactInfo } from "./data"

export default function App() {
  return (
    <main>
      {/* START Navbar */}
      <Navbar />
      {/* END Navbar */}

      {/* START Hero */}
      <Hero />
      {/* END Hero */}

      {/* START Services */}
      <Services services={services} />
      {/* END Services */}

      {/* START Portfolio */}
      <Portfolio projects={projects} />
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
    </main>
  )
}
