export const projects = [
  // PostSpot
  {
    title: "PostSpot",
    type: "Fullstack",
    ssr: true,
    url: "https://postspot.site",
    frontendCode: "https://github.com/SetraNugraha/PostSpot",
    youtube_url: "https://www.youtube.com/embed/qbEcfXLnVts?si=f7vsZs58JGWneBo3",
    image: "assets/postspot.png",
    description: "PostSpot is a web application that allows users to post content, such as articles and photos, which can be viewed by other users. - Desktop Only",
    feature: ["Login", "Register", "Logout", "Update Profile User", "CRUD Post with Image", "Dashboard"],
    tech: ["Laravel.svg", "MySQL.svg", "Alpine-js.svg", "Tailwind-CSS.svg"],
    demoAccount: [
      {
        email: "demoaccount@gmail.com",
        password: "demoaccount",
      },
    ],
  },

  // Facebook Clone
  {
    title: "Facebook Clone",
    type: "Fullstack",
    url: "https://client-fbclone.vercel.app/",
    frontendCode: "https://github.com/SetraNugraha/client-fbclone",
    backendCode: "https://github.com/SetraNugraha/server-fbclone",
    youtube_url: "https://www.youtube.com/embed/a0Zz0R11lSQ?si=yGTJvYZtM8j8OWa1",
    image: "assets/fbcln.png",
    description: "Simple Facebook Clone, features:  Register, Login, Logout, Post, Like, Comment & Profile Page - Desktop Only",
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
    title: "SetraMovie",
    type: "Frontend - Integration TMdb API",
    url: "https://setramovie.vercel.app/",
    frontendCode: "https://github.com/SetraNugraha/setramovie",
    youtube_url: "https://www.youtube.com/embed/1W6Ufd7AlfI?si=Fj7otrn_eR2jpeFR",
    image: "assets/setramovie.png",
    description: "Implementation some API from TMDB.",
    feature: ["Login", "Login As Guest", "Logout", "Search Movie", "Add/Remove Favorite Movie"],
    tech: ["React.svg", "Tailwind-CSS.svg"],
  },

  // Pharmakey
  {
    title: "Pharmakey",
    type: "Slicing Frontend",
    url: "https://pharmakey.vercel.app/",
    frontendCode: "https://github.com/SetraNugraha/pharmakey",
    backendCode: "https://github.com/SetraNugraha/backend-pharmakey",
    youtube_url: "https://www.youtube.com/embed/Gp0VjN1yDrU?si=LHyVKFNz6rky9uN2",
    image: "assets/pharmakey.png",
    description: "Slicing a Figma design to code using React JS, from the Pharma, BuildWithAngga.com course. - Mobile Only",
    note: "Backend on progress",
    tech: ["React.svg", "Tailwind-CSS.svg"],
  },

  // NatureSpot
  {
    title: "NatureSpot",
    type: "Slicing - Landing Page",
    url: "https://nature-spot-id.vercel.app",
    frontendCode: "https://github.com/SetraNugraha/NatureSpot",
    youtube_url: "https://www.youtube.com/embed/SQcbSVrx24U?si=Twyej16_lxB1yF-j",
    image: "assets/naturespot.png",
    description: "Slicing Figma design to code for e-commerce website that sell various plants - Desktop Only.",
    tech: ["React.svg", "Tailwind-CSS.svg"],
  },

  // Travel app Jadoo
  {
    title: "Travel App - Jadoo",
    type: "Slicing - Landing Page",
    url: "https://travel-app-jadoo.vercel.app/",
    frontendCode: "https://github.com/SetraNugraha/travel-app-jadoo",
    youtube_url: "https://www.youtube.com/embed/8dc3dZqGMAo?si=6jZKWgVmmoGwnaQS",
    image: "assets/jadoo.png",
    description: "Slicing Figma design to code for Travel website that offers services for booking hotels, flights, and destinations - Desktop Only.",
    tech: ["React.svg", "Tailwind-CSS.svg"],
  },

  // Guess number
  {
    title: "Guess Number !",
    type: "Game",
    url: "https://guess-number-bysetra.vercel.app",
    frontendCode: "https://github.com/SetraNugraha/guess-number",
    youtube_url: "https://www.youtube.com/embed/4-pdQEvTNqE?si=n_2u-eXzMAkK_NBj",
    image: "assets/guessnumber.png",
    description: "Simple game to predict the number based on difficulty",
    feature: ["Select Difficulty", "Input Number", "Submit Guess"],
    tech: ["React.svg", "Tailwind-CSS.svg"],
  },

  // Shopping List
  {
    title: "Shopping list",
    type: "Web App",
    url: "https://shoplist-setra.vercel.app",
    frontendCode: "https://github.com/SetraNugraha/shopping-list",
    youtube_url: "https://www.youtube.com/embed/SiOnL3bq2pI?si=QZV0wy88Zznfh2KH",
    image: "assets/shoplist.png",
    description: "A simple web app for managing and recording shopping expenses.",
    feature: ["CRUD List", "Finish Buying", "Estimated Total Price"],
    tech: ["React.svg", "Tailwind-CSS.svg"],
  },
]

export const services = [
  {
    title: "Databases",
    icon: "database.svg",
    description: "Merancang struktur basis data yang optimal, melakukan optimasi database untuk meningkatkan kinerja dan efisiensi penyimpanan dan akses data, serta normalisasi tabel untuk mengurangi redudansi data dan meningkatkan integritas data",
  },

  {
    title: "Backend Developer",
    icon: "backend.svg",
    description: "Membangun logika bisnis yang kuat untuk memproses data dan menjalankan operasi sebuah aplikasi, mengintegrasikan backend dengan database untuk menyimpan dan mengambil informasi secara efisien, serta mengimplementasikan API untuk berkomunikasi antara backend dan frontend",
  },

  {
    title: "Frontend Developer",
    icon: "frontend.svg",
    description: "Slicing antarmuka yang interaktif dan menarik menggunakan HTML, CSS, Javascript dan framework React JS dari design yang ada, mengoptimalkan kinerja frontend untuk memastikan kecepatan dan keterjangkauan aplikasi web",
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
