export const projects = [
  // PostSpot
  {
    id: 1,
    isMaintenance: true,
    title: "PostSpot",
    type: "Fullstack",
    ssr: true,
    url: "https://postspot.site",
    frontendCode: "https://github.com/SetraNugraha/PostSpot",
    backendCode: null,
    youtube_url: "https://www.youtube.com/embed/qbEcfXLnVts?si=f7vsZs58JGWneBo3",
    image: "assets/postspot.png",
    description:
      "PostSpot is a web application that allows users to post content, such as articles and photos, which can be viewed by other users. - Desktop Only",
    note: "Sorry, the project is under maintenance. You can run it locally by visiting the source code.",
    feature: ["Login", "Register", "Logout", "Update Profile User", "CRUD Post with Image", "Dashboard"],
    tech: ["Laravel.svg", "MySQL.svg", "Alpine-js.svg", "Tailwind-CSS.svg"],
    issue: null,
    demoAccount: [
      {
        email: "demoaccount@gmail.com",
        password: "demoaccount",
      },
    ],
  },

  // Facebook Clone
  {
    id: 2,
    isMaintenance: false,
    title: "Facebook Clone",
    type: "Fullstack",
    ssr: false,
    url: "https://client-fbclone.vercel.app/",
    frontendCode: "https://github.com/SetraNugraha/client-fbclone",
    backendCode: "https://github.com/SetraNugraha/server-fbclone",
    youtube_url: "https://www.youtube.com/embed/a0Zz0R11lSQ?si=yGTJvYZtM8j8OWa1",
    image: "assets/fbcln.png",
    description:
      "Simple Facebook Clone, features:  Register, Login, Logout, Post, Like, Comment & Profile Page - Desktop Only",
    note: "If you receive a warning on Google Chrome, it's because Google has a safe browsing feature and detects this clone project as being very similar to the original Facebook. Click on 'Details' and 'Visit unsafe site', or use Guest mode or another browser.",
    feature: ["Login", "Register", "Logout", "Update Profile User", "CRUD Post", "Like & Unlike", "Comment Post"],
    tech: ["React.svg", "Tailwind-CSS.svg", "nodejs.svg", "PostgreSQL.svg", "Prisma.svg"],
    issue: ["Upload Post with Image", "Update Profile Image", "Like & Unlike 9 Second"],
    demoAccount: [
      {
        email: "demoaccount@gmail.com",
        password: "demoaccount",
      },
    ],
  },

  // SetraMovie TMDB
  {
    id: 3,
    isMaintenance: false,
    title: "SetraMovie",
    type: "Frontend - Integration 3rd API",
    ssr: false,
    url: "https://setramovie.vercel.app/",
    frontendCode: "https://github.com/SetraNugraha/setramovie",
    backendCode: null,
    youtube_url: "https://www.youtube.com/embed/1W6Ufd7AlfI?si=Fj7otrn_eR2jpeFR",
    image: "assets/setramovie.png",
    description: "Implementation some API from TMDB.",
    note: null,
    feature: ["Login", "Login As Guest", "Logout", "Search Movie", "Add/Remove Favorite Movie"],
    tech: ["React.svg", "Tailwind-CSS.svg"],
    issue: null,
    demoAccount: null,
  },

  // Pharmakey
  {
    id: 4,
    isMaintenance: false,
    title: "Pharmakey",
    type: "Fullstack",
    ssr: false,
    url: "https://pharmakey.vercel.app/",
    frontendCode: "https://github.com/SetraNugraha/client-pharmakey",
    backendCode: "https://github.com/SetraNugraha/server-pharmakey",
    youtube_url: "https://www.youtube.com/embed/18EoSZ6pTNw?si=iZHeXCLn8ufL8Qm3",
    image: "assets/pharmakey.png",
    description:
      "This project is a course available on BuildWithAngga.com. However, the course originally develops the project using Laravel. To enhance my programming skills, I decided to recreate the project using Express and React JS. This web app is a simple e-commerce platform for selling pharmaceuticals on a small scale, designed to serve a specific local area.",
    note: "Already Finish the project (watch demo video), it just needs to be deployed. the visit website button is just frontend slicing",
    feature: [
      "Role Admin & Customer",
      "Login & Register",
      "Dashboard Admin",
      "CRUD Product, Category etc...",
      "Product Detail",
      "Add to cart",
      "Cart",
      "Upload Proof",
      "Approve/Cancel Transaction",
      "Profile",
    ],
    tech: ["React.svg", "Tailwind-CSS.svg", "Typescript.svg", "nodejs.svg", "PostgreSQL.svg", "Prisma.svg"],
    issue: null,
    demoAccount: null,
  },

  // X Clone
  {
    id: 5,
    isMaintenance: false,
    title: "X Clone",
    type: "Slicing Frontend",
    ssr: false,
    url: "https://client-xclone-setra.vercel.app/",
    frontendCode: "https://github.com/SetraNugraha/client-Xclone-setra",
    backendCode: null,
    youtube_url: "https://www.youtube.com/embed/789D7ew_wtg?si=hYJvod-4KJDTIcvR",
    image: "assets/xclone.png",
    description: "Simple slicing UI Social Media X to code using React JS & TailwindCSS. - Desktop Only",
    note: "Backend on progress",
    feature: null,
    tech: ["React.svg", "Tailwind-CSS.svg"],
    issue: null,
    demoAccount: null,
  },

  // NatureSpot
  {
    id: 6,
    isMaintenance: false,
    title: "NatureSpot",
    type: "Slicing - Landing Page",
    ssr: false,
    url: "https://nature-spot-id.vercel.app",
    frontendCode: "https://github.com/SetraNugraha/NatureSpot",
    backendCode: null,
    youtube_url: "https://www.youtube.com/embed/SQcbSVrx24U?si=Twyej16_lxB1yF-j",
    image: "assets/naturespot.png",
    description: "Slicing Figma design to code for e-commerce website that sell various plants - Desktop Only.",
    note: null,
    feature: null,
    tech: ["React.svg", "Tailwind-CSS.svg"],
    issue: null,
    demoAccount: null,
  },

  // Travel app Jadoo
  {
    id: 7,
    isMaintenance: false,
    title: "Travel App - Jadoo",
    type: "Slicing - Landing Page",
    ssr: false,
    url: "https://travel-app-jadoo.vercel.app/",
    frontendCode: "https://github.com/SetraNugraha/travel-app-jadoo",
    backendCode: null,
    youtube_url: "https://www.youtube.com/embed/8dc3dZqGMAo?si=6jZKWgVmmoGwnaQS",
    image: "assets/jadoo.png",
    description:
      "Slicing Figma design to code for Travel website that offers services for booking hotels, flights, and destinations - Desktop Only.",
    note: null,
    feature: null,
    tech: ["React.svg", "Tailwind-CSS.svg"],
    issue: null,
    demoAccount: null,
  },

  // Guess number
  {
    id: 8,
    isMaintenance: false,
    title: "Guess Number !",
    type: "Game",
    ssr: false,
    url: "https://guess-number-bysetra.vercel.app",
    frontendCode: "https://github.com/SetraNugraha/guess-number",
    backendCode: null,
    youtube_url: "https://www.youtube.com/embed/4-pdQEvTNqE?si=n_2u-eXzMAkK_NBj",
    image: "assets/guessnumber.png",
    description: "Simple game to predict the number based on difficulty",
    note: null,
    feature: ["Select Difficulty", "Input Number", "Submit Guess"],
    tech: ["React.svg", "Tailwind-CSS.svg"],
    issue: null,
    demoAccount: null,
  },

  // Shopping List
  {
    id: 9,
    isMaintenance: false,
    title: "Shopping list",
    type: "Web App",
    ssr: false,
    url: "https://shoplist-setra.vercel.app",
    frontendCode: "https://github.com/SetraNugraha/shopping-list",
    backendCode: null,
    youtube_url: "https://www.youtube.com/embed/SiOnL3bq2pI?si=QZV0wy88Zznfh2KH",
    image: "assets/shoplist.png",
    description: "A simple web app for managing and recording shopping expenses.",
    note: null,
    feature: ["CRUD List", "Finish Buying", "Estimated Total Price"],
    tech: ["React.svg", "Tailwind-CSS.svg"],
    issue: null,
    demoAccount: null,
  },
]

export const services = [
  {
    title: "Databases",
    icon: "database.svg",
    description:
      "Merancang struktur basis data yang optimal, melakukan optimasi database untuk meningkatkan kinerja dan efisiensi penyimpanan dan akses data, serta normalisasi tabel untuk mengurangi redudansi data dan meningkatkan integritas data",
  },

  {
    title: "Backend Developer",
    icon: "backend.svg",
    description:
      "Membangun logika bisnis yang kuat untuk memproses data dan menjalankan operasi sebuah aplikasi, mengintegrasikan backend dengan database untuk menyimpan dan mengambil informasi secara efisien, serta mengimplementasikan API untuk berkomunikasi antara backend dan frontend",
  },

  {
    title: "Frontend Developer",
    icon: "frontend.svg",
    description:
      "Slicing antarmuka yang interaktif dan menarik menggunakan HTML, CSS, Javascript dan framework React JS dari design yang ada, mengoptimalkan kinerja frontend untuk memastikan kecepatan dan keterjangkauan aplikasi web",
  },
]

export const contactInfo = [
  {
    title: "Phone",
    description: "+62 812-8321-4126",
    icon: "phone.svg",
  },
  {
    title: "Email",
    description: "setranugraha75@gmail.com",
    icon: "email.svg",
  },
  {
    title: "Address",
    description: "Cibinong, Kab. Bogor, Jawa Barat",
    icon: "address.svg",
  },
]
