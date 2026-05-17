import { Project, Experience, Skill, Certificate } from "./types.ts";

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Web Developer",
    company: "Petsgolden Alam Sutera",
    period: "2025 - Present",
    description:
      "Mengembangkan dan memelihara sistem ERP perusahaan untuk mendukung proses bisnis internal.",
    tech: ["CodeIgniter", "MySQL", "jQuery", "Bootstrap", "PHP"],
    type: "Full Time",
  },
  {
    id: "2",
    role: "Web Developer",
    company: "PT. Fedora Cakra Informatika",
    period: "2023 - 2024",
    description:
      "Mengembangkan Sistem Informasi Manajemen Rumah Sakit (SIMRS) yang mencakup pengelolaan data pasien.",
    tech: ["CodeIgniter", "MySQL", "jQuery", "Bootstrap", "PHP"],
    type: "Project Based",
  },
  {
    id: "3",
    role: "Web Developer",
    company: "Pemerintahan Desa Belawa",
    period: "2022",
    description:
      "Membangun Sistem Informasi Desa untuk mendukung publikasi informasi.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "NodeJs"],
    type: "Internship",
  },
];

export const SKILLS: Skill[] = [
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "jQuery",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  },
  {
    name: "ReactJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "CodeIgniter",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "C#",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: "ASP.NET",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Marketplace dan Baca Komik",
    description:
      "Platform marketplace untuk membaca dan mempublikasikan komik, serta mempermudah proses transaksi dan akses pembaca.",
    role: "Fullstack",
    tools: [
      "JavaScript",
      "MongoDB",
      "ExpressJs",
      "React",
      "NodeJs",
      "NextJs",
      "Bootstrap",
    ],
    image: "portfolio/Semina-Landing-Page2.png",
    category: "ReactJs",
    status: "completed",
    liveUrl:
      "https://chambray-stoat-c50.notion.site/Marketplace-Komik-16795e8104938087b651e011db87e74a",
    githubUrl: "https://github.com/MuhamadIksan123/server-komiksun",
  },
  {
    id: "p1",
    title: "Website Portal Job",
    description:
      "Portal lowongan pekerjaan untuk membantu pengguna menemukan pekerjaan sesuai minat dan keahlian.",
    role: "Fullstack",
    tools: ["PHP", "ASP.NET", "Jquery", "MySQL", "Bootstrap"],
    image: "portfolio/job_portal.png",
    category: "ASP.NET",
    status: "completed",
    liveUrl:
      "https://chambray-stoat-c50.notion.site/Wesite-Portal-Job-C-Asp-Net-36295e810493808e837cdf0face01a47",
    githubUrl: "https://github.com/MuhamadIksan123/job-portal-mvc-asp",
  },
  {
    id: "p1",
    title: "Website Kasir - ASP.NET",
    description:
      "Aplikasi kasir untuk membantu pencatatan transaksi dan pengelolaan data penjualan secara lebih efisien.",
    role: "Fullstack",
    tools: ["C#", "ASP.NET", "SQL Server", "Bootstrap"],
    image: "portfolio/web-kasir.png",
    category: "ASP.NET",
    status: "completed",
    liveUrl:
      "https://chambray-stoat-c50.notion.site/Website-Kasir-17d95e8104938034a924eb3d6a0ab424?pvs=74",
    githubUrl: "https://github.com/MuhamadIksan123/casier-app-aspnet",
  },
  {
    id: "p1",
    title: "Website Informasi Desa",
    description:
      "Portal informasi dan berita Desa Belawa untuk mempermudah akses informasi bagi masyarakat.",
    role: "Frontend",
    tools: ["JavaScript", "ReactJs", "Tailwind CSS"],
    image: "portfolio/belawa.jpg",
    category: "ReactJs",
    status: "completed",
    liveUrl: "https://berita-desa-belawa.vercel.app",
    githubUrl: "https://github.com/MuhamadIksan123/next-berita-desa-belawa",
  },
  {
    id: "p1",
    title: "Web Profil UMKM Mangga",
    description:
      "Website profil UMKM Mangga Belawa untuk promosi produk dan mempermudah transaksi.",
    role: "Frontend",
    tools: ["HTML", "CSS"],
    image: "portfolio/mangga.png",
    category: "HTML / CSS",
    status: "completed",
    liveUrl: "https://melcika-belawa.netlify.app/",
    githubUrl: "",
  },
  {
    id: "p1",
    title: "Website Pesantren Al-Hijrah",
    description:
      "Website informasi kegiatan pesantren untuk mempermudah penyebaran informasi kepada santri dan wali.",
    role: "Fullstack",
    tools: ["PHP", "Laravel", "MySQL", "Bootstrap"],
    image: "portfolio/website-pesantren.png",
    category: "Laravel",
    status: "completed",
    liveUrl:
      "https://chambray-stoat-c50.notion.site/Website-Pesantren-Al-Hijrah-16795e81049380a4a824e2b503689fb1?pvs=74",
    githubUrl: "",
  },
  {
    id: "p1",
    title: "Website Company Profile",
    description:
      "Website company profile untuk memperkenalkan perusahaan, layanan, serta visi dan misi.",
    role: "Fullstack",
    tools: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    image: "portfolio/company-profile.png",
    category: "Laravel",
    status: "completed",
    liveUrl:
      "https://chambray-stoat-c50.notion.site/Website-Company-Profile-17e95e810493808e8e7bdb5baa766b94",
    githubUrl: "https://github.com/MuhamadIksan123/laravel-website-pesantren",
  },
  {
    id: "p1",
    title: "Website Portal Job",
    description:
      "Portal lowongan pekerjaan untuk membantu pengguna menemukan pekerjaan sesuai minat dan keahlian.",
    role: "Fullstack",
    tools: ["PHP", "Laravel", "MySQL", "Tailwind CSS"],
    image: "portfolio/job_portal.png",
    category: "Laravel",
    status: "completed",
    liveUrl:
      "https://chambray-stoat-c50.notion.site/Wesite-Portal-Job-16795e81049380e991b8efb9ccf5cebf",
    githubUrl: "https://github.com/MuhamadIksan123/laravel_job_portal",
  },
  {
    id: "p1",
    title: "Website Presensi",
    description:
      "Sistem presensi untuk mempermudah pencatatan kehadiran dan pengelolaan data karyawan.",
    role: "Fullstack",
    tools: ["PHP", "CodeIgniter", "MySQL", "Bootstrap"],
    image: "portfolio/presensi.png",
    category: "CodeIgniter",
    status: "completed",
    liveUrl:
      "https://chambray-stoat-c50.notion.site/Web-App-Presensi-17295e81049380ada43ceed6788d5ab2",
    githubUrl: "https://github.com/MuhamadIksan123/website-presensi",
  },
  {
    id: "p1",
    title: "Website Order Katering",
    description:
      "Sistem pemesanan katering online untuk mempermudah pelanggan dan pengelolaan pesanan.",
    role: "Fullstack",
    tools: ["PHP", "Laravel", "MySQL", "Bootstrap", "Tailwind CSS"],
    image: "portfolio/katering.png",
    category: "Laravel",
    status: "completed",
    liveUrl:
      "https://chambray-stoat-c50.notion.site/Web-Order-Kathering-17d95e810493808c843de121157a72e9",
    githubUrl: "https://github.com/MuhamadIksan123/web-katering",
  },
  {
    id: "p1",
    title: "Website Anime List",
    description:
      "Website untuk menampilkan daftar anime terbaru lengkap dengan informasi dan video singkat.",
    role: "Frontend",
    tools: ["JavaScript", "ReactJs", "Tailwind CSS", "Prisma"],
    image: "portfolio/sananimelist.png",
    category: "ReactJs",
    status: "completed",
    liveUrl: "https://san-animelist.vercel.app/",
    githubUrl: "https://github.com/MuhamadIksan123/san-animelist",
  },
  {
    id: "p1",
    title: "Web API Sewa Kantor",
    description:
      "API untuk sistem penyewaan kantor yang dapat diintegrasikan dengan frontend aplikasi.",
    role: "Fullstack",
    tools: ["PHP", "Laravel", "MySQL", "JavaScript", "React", "Tailwind CSS"],
    image: "portfolio/sewa-kantor.png",
    category: "Laravel",
    status: "completed",
    liveUrl:
      "https://chambray-stoat-c50.notion.site/Website-API-Sewa-Kantor-18c95e81049380449595eda53f369d91?pvs=73",
    githubUrl: "https://github.com/MuhamadIksan123/be-api-sewa-kantor",
  },
  {
    id: "p1",
    title: "Website Kasir",
    description:
      "Aplikasi kasir untuk membantu pencatatan transaksi dan pengelolaan data penjualan secara lebih efisien.",
    role: "Fullstack",
    tools: ["PHP", "Jquery", "CodeIgniter", "MySQL", "Bootstrap"],
    image: "portfolio/kasir.png",
    category: "CodeIgniter",
    status: "completed",
    liveUrl:
      "https://chambray-stoat-c50.notion.site/Website-Kasir-17d95e8104938034a924eb3d6a0ab424?pvs=74",
    githubUrl: "https://github.com/MuhamadIksan123/website-kasir",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "c1",
    name: "Belajar Laravel: Pemula Sampai Mahir",
    platform: "Programmer Zaman Now",
    year: "2023",
    image: "certificates/belajar-laravel.jpg",
    url: "https://udemy-certificate.s3.amazonaws.com/image/UC-547f2290-3068-487d-a66f-0e474e422d0d.jpg",
  },
  {
    id: "c2",
    name: ".NET Core MVC - Guide 2025 (E-Commerce)",
    platform: "Bhrugen Patel",
    year: "2023",
    image: "certificates/sertif-asp-eccomerse.jpg",
    url: "https://www.udemy.com/certificate/UC-30d56b9c-214c-4a59-a414-578cbbc58dfc",
  },
  {
    id: "c3",
    name: "Studi Independent Front-End Back-End",
    platform: "Dicoding",
    year: "2023",
    image: "certificates/SI FEBE.jpg",
    url: "https://drive.google.com/file/d/1VJRUS92_6t8lGLM5V4LNExRTMCwEOPmM/view",
  },
  {
    id: "c4",
    name: "Menjadi Front-End Web Developer Expert",
    platform: "Dicoding",
    year: "2023",
    image: "certificates/Menjadi Front-End Web Developer Expert.jpg",
    url: "https://www.dicoding.com/certificates/53XE0O6E0XRN",
  },
  {
    id: "c5",
    name: "Bootcamp Full-Stack JavaScript Developer (MERN)",
    platform: "BuildWith Angga",
    year: "2023",
    image: "certificates/Bootcamp Full-Stack Javascript Developer MERN.jpg",
    url: "https://class.buildwithangga.com/talent/muhamadiksan351/bootcamp-full-stack-javascript-developer-mern-website-event",
  },
  {
    id: "c6",
    name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    platform: "Dicoding",
    year: "2023",
    image: "certificates/Belajar Membuat Aplikasi Back-End untuk Pemula.jpg",
    url: "https://www.dicoding.com/certificates/L4PQ4QJ4VXO1",
  },
  {
    id: "c7",
    name: "Meniti Karier sebagai Software Developer",
    platform: "Dicoding",
    year: "2023",
    image: "certificates/Meniti Karier sebagai Software Developer.jpg",
    url: "https://www.dicoding.com/certificates/2VX31OEYJZYQ",
  },
  {
    id: "c8",
    name: "Belajar Dasar AWS Cloud",
    platform: "Dicoding",
    year: "2023",
    image: "certificates/Belajar Dasar AWS Cloud.jpg",
    url: "https://www.dicoding.com/certificates/6RPNDVJ85Z2M",
  },
  {
    id: "c9",
    name: "Belajar Fundamental Front-End Web Development",
    platform: "Dicoding",
    year: "2023",
    image: "certificates/Belajar Fundamental Front-End Web Development.jpg",
    url: "https://www.dicoding.com/certificates/JLX1G2E3GZ72",
  },
  {
    id: "c10",
    name: "Belajar Dasar Git dengan GitHub",
    platform: "Dicoding",
    year: "2023",
    image: "certificates/Belajar Dasar Git dengan GitHub.jpg",
    url: "https://www.dicoding.com/certificates/0LZ03L74QZ65",
  },
  {
    id: "c11",
    name: "Memulai Dasar Pemrograman untuk Pengembang Software",
    platform: "Dicoding",
    year: "2023",
    image:
      "certificates/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.jpg",
    url: "https://www.dicoding.com/certificates/4EXG5K8M9XRL",
  },
  {
    id: "c12",
    name: "Pengenalan Logika Pemrograman",
    platform: "Dicoding",
    year: "2023",
    image: "certificates/Pengenalan Logika Pemrograman.jpg",
    url: "https://www.dicoding.com/certificates/KEXL3647YPG2",
  },
  {
    id: "c13",
    name: "Belajar Dasar Pemrograman Web",
    platform: "Dicoding",
    year: "2023",
    image: "certificates/Belajar Dasar Pemrograman Web.jpg",
    url: "https://www.dicoding.com/certificates/4EXG5K8M9XRL",
  },
  {
    id: "c14",
    name: "Belajar Dasar JavaScript",
    platform: "Dicoding",
    year: "2023",
    image: "certificates/Belajar Dasar Pemrograman JavaScript.jpg",
    url: "https://www.dicoding.com/certificates/1RXYM1JYKXVM",
  },
];

export const PROFILE = {
  name: "MUHAMAD IKSAN",
  role: "Web Developer",
  bio: "Developer with experience building modern, responsive, and scalable web applications using front-end and back-end technologies.",
  email: "mailto:muhamadiksan351@gmail.com",
  gmail: "muhamadiksan351@gmail.com",
  github: "https://github.com/MuhamadIksan123",
  linkedin: "https://www.linkedin.com/in/muhamadiksan351",
  photo: "photo-profile.png",
  cv: "Muhamad_Iksan_CV.pdf",
  instagram: "https://www.instagram.com/muhamadiksan_818",
  whatsapp: "https://wa.me/6281573092250",
};
