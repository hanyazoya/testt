const translations = {
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact", lang: "Language" },
    title: {
      index: "Welcome to My Portfolio",
      about: "About Me",
      projects: "My Projects",
      contact: "Contact Me"
    },
    subtitle: {
      index: "Ask me anything about my work and experience!",
      about: "This is the about page content.",
      projects: "Here are some of my projects.",
      contact: "Get in touch with me."
    },
    input: "Type your question...",
    send: "Send",
    timeline: [
      {
        year: "2017 – 2021",
        title: "B.Sc. in Data Science and Technology",
        institution: "The Hong Kong University of Science and Technology",
        location: "Hong Kong",
        period: "Sep 2017 – May 2021",
        short: "First batch of Data Science undergraduates to graduate in Hong Kong. Major in Data Science, minor in Actuarial Mathematics.",
        full: "Completed various projects on algorithms, web apps, and AI. Built a strong foundation for data analytics, machine learning, and software engineering skills."
      },
      {
        year: "2021 – 2022",
        title: "Junior Data Scientist",
        institution: "Company R.T.",
        location: "Hong Kong",
        period: "May 2021 – Aug 2022",
        short: "Handled multiple roles at a small tech consulting company, from data annotation to API development.",
        full: "Trained LLM models for image recognition, built web tools for annotation, developed APIs in C# (dotnet) and Python, worked on NLP tasks, Elasticsearch DB, and integrated sensors for 3D image/video detection. (NDA limits further details.)"
      },
      {
        year: "2023 – Present",
        title: "Full-Stack Software Engineer",
        institution: "Company T.S.",
        location: "Jakarta, Indonesia",
        period: "Oct 2023 – Present",
        short: "Developing enterprise web systems, APIs, and database solutions using a variety of technologies.",
        full: "Technologies used: PHP CodeIgniter, Laravel, C# dotnet, SQL Server, MySQL, Oracle, Python, Powershell, IBM TM1, DevExtreme, FTPS/SFTPS, and Git. Tasks include backend/frontend development, API creation, database design and maintenance, automation, web crawling, WhatsApp chatbots integration, and AI model enhancement with vendor APIs."
      },
    ],
    readMore: "Read more",
    showLess: "Show less",
    projects: [
      {
        id: 1,
        title: "Portfolio Website",
        date: "2025-07-10",
        image: "assets/img/projects/portfolio.png",
        description: "A multilingual personal portfolio with dynamic content, chatbot, and timeline.",
        tags: ["web", "frontend", "bootstrap", "jquery"],
        category: "Web Development"
      },
      {
        id: 2,
        title: "Sales Dashboard",
        date: "2024-12-01",
        image: "assets/img/projects/dashboard.jpg",
        description: "An enterprise dashboard with charts, filters, and drill-down analytics using DevExtreme.",
        tags: ["web", "backend", "c#", "api"],
        category: "Enterprise Systems"
      },
      {
        id: 3,
        title: "Image Recognition Model",
        date: "2023-05-15",
        image: "assets/img/projects/vision.jpg",
        description: "Trained a deep learning model to detect product defects in real-time video streams.",
        tags: ["ai", "python", "image-processing", "llm"],
        category: "AI / Machine Learning"
      },
      {
        id: 4,
        title: "Inventory Management System",
        date: "2024-03-21",
        image: "assets/img/projects/inventory.png",
        description: "A full-stack solution to track stock levels, manage suppliers, and automate alerts.",
        tags: ["php", "mysql", "laravel", "backend"],
        category: "Enterprise Systems"
      },
      {
        id: 5,
        title: "E-commerce Storefront",
        date: "2023-09-10",
        image: "assets/img/projects/ecommerce.png",
        description: "Online shop with product catalog, shopping cart, and payment integration.",
        tags: ["web", "frontend", "react", "api"],
        category: "Web Development"
      },
      {
        id: 6,
        title: "Chatbot for Customer Service",
        date: "2024-05-05",
        image: "assets/img/projects/chatbot.png",
        description: "A WhatsApp chatbot integrated with Google Sheets for order tracking.",
        tags: ["ai", "whatsapp", "nodejs", "automation"],
        category: "Automation"
      },
      {
        id: 7,
        title: "Employee Timesheet App",
        date: "2022-11-17",
        image: "assets/img/projects/timesheet.jpg",
        description: "Mobile-friendly app for employees to log hours and managers to approve work logs.",
        tags: ["mobile", "web", "api", "frontend"],
        category: "Enterprise Systems"
      },
      {
        id: 8,
        title: "Weather Forecast Web App",
        date: "2023-01-29",
        image: "assets/img/projects/weather.jpg",
        description: "Responsive web application showing real-time weather using OpenWeather API.",
        tags: ["javascript", "api", "frontend"],
        category: "Web Development"
      },
      {
        id: 9,
        title: "Financial Data ETL Pipeline",
        date: "2022-08-19",
        image: "assets/img/projects/etl.webp",
        description: "Automated extraction, transformation, and loading of financial market data.",
        tags: ["python", "sql", "data-pipeline"],
        category: "Data Engineering"
      },
      {
        id: 10,
        title: "IoT Device Monitor",
        date: "2023-04-14",
        image: "assets/img/projects/iot.png",
        description: "Dashboard to monitor IoT devices, visualize sensor data, and trigger alerts.",
        tags: ["iot", "dashboard", "c#", "signalr"],
        category: "Enterprise Systems"
      },
      {
        id: 11,
        title: "Blog CMS",
        date: "2022-05-09",
        image: "assets/img/projects/blog.png",
        description: "Custom content management system for managing blog posts and comments.",
        tags: ["php", "codeigniter", "mysql", "backend"],
        category: "Web Development"
      },
      {
        id: 12,
        title: "Data Visualization Tool",
        date: "2023-07-22",
        image: "assets/img/projects/dataviz.png",
        description: "Interactive charts and dashboards built with D3.js and Chart.js.",
        tags: ["javascript", "d3", "charts", "frontend"],
        category: "Data Engineering"
      },
      {
        id: 13,
        title: "Face Detection Security System",
        date: "2024-01-15",
        image: "assets/img/projects/facedetect.png",
        description: "Implemented real-time face detection for access control using OpenCV.",
        tags: ["python", "opencv", "ai", "security"],
        category: "AI / Machine Learning"
      },
      {
        id: 14,
        title: "Project Management Board",
        date: "2025-02-27",
        image: "assets/img/projects/kanban.png",
        description: "Kanban-style task management app with drag-and-drop interface.",
        tags: ["web", "frontend", "react", "backend"],
        category: "Web Development"
      },
      {
        id: 15,
        title: "Automated PDF Report Generator",
        date: "2022-10-03",
        image: "assets/img/projects/pdfreport.png",
        description: "Script that creates styled PDF reports from database data.",
        tags: ["python", "reporting", "automation"],
        category: "Automation"
      }
    ],
    searchPlaceholder: "Search projects...",
    newestFirst: "Newest first",
    oldestFirst: "Oldest first",
    all: "All",
  },
  id: {
    nav: { home: "Beranda", about: "Tentang", projects: "Proyek", contact: "Kontak", lang: "Bahasa" },
    title: {
      index: "Selamat Datang di Portofolio Saya",
      about: "Tentang Saya",
      projects: "Proyek Saya",
      contact: "Hubungi Saya"
    },
    subtitle: {
      index: "Tanyakan apa saja tentang pekerjaan dan pengalaman saya!",
      about: "Ini adalah konten halaman tentang.",
      projects: "Berikut beberapa proyek saya.",
      contact: "Hubungi saya di sini."
    },
    input: "Ketik pertanyaan Anda...",
    send: "Kirim",
    timeline: [
      {
        year: "2017 – 2021",
        title: "B.Sc. in Data Science and Technology",
        institution: "The Hong Kong University of Science and Technology",
        location: "Hong Kong",
        period: "Sep 2017 – Mei 2021",
        short: "Angkatan pertama mahasiswa Data Science yang lulus di Hong Kong. Jurusan di Data Science, dengan minor di Matematika Aktuaria.",
        full: "Menyelesaikan berbagai proyek terkait algoritma, web apps, dan AI. Membangun fondasi yang kuat untuk analisis data, machine learning, dan kemampuan rekayasa perangkat lunak."
      },
      {
        year: "2021 – 2022",
        title: "Junior Data Scientist",
        institution: "Company R.T.",
        location: "Hong Kong",
        period: "Mei 2021 – Ags 2022",
        short: "Menangani berbagai peran di perusahaan konsultan teknologi kecil, dari anotasi data hingga pengembangan API.",
        full: "Melatih model LLM untuk pengenalan gambar, membuat tools web untuk anotasi, mengembangkan API menggunakan C# (dotnet) dan Python, mengerjakan NLP, Elasticsearch DB, dan integrasi sensor untuk deteksi gambar/video 3D. (Rincian lebih lanjut dibatasi NDA.)"
      },
      {
        year: "2023 – Present",
        title: "Full-Stack Software Engineer",
        institution: "Company T.S.",
        location: "Jakarta, Indonesia",
        period: "Okt 2023 – Sekarang",
        short: "Mengembangkan sistem web perusahaan, API, dan solusi database dengan berbagai teknologi.",
        full: "Teknologi yang digunakan: PHP CodeIgniter, Laravel, C# dotnet, SQL Server, MySQL, Oracle, Python, Powershell, IBM TM1, DevExtreme, FTPS/SFTPS, Git. Tugas termasuk pengembangan backend/frontend, pembuatan API, desain & maintenance database, otomatisasi, web crawling, integrasi chatbot WhatsApp, dan peningkatan model AI dengan vendor APIs."
      }
    ],
    readMore: "Baca selengkapnya",
    showLess: "Tampilkan lebih sedikit",
    projects: [
      {
        id: 1,
        title: "Website Portofolio",
        date: "2025-07-10",
        image: "assets/img/projects/portfolio.png",
        description: "Portofolio pribadi multibahasa dengan konten dinamis, chatbot, dan timeline.",
        tags: ["web", "frontend", "bootstrap", "jquery"],
        category: "Pengembangan Web"
      },
      {
        id: 2,
        title: "Dasbor Penjualan",
        date: "2024-12-01",
        image: "assets/img/projects/dashboard.jpg",
        description: "Dasbor perusahaan dengan grafik, filter, dan analitik mendalam menggunakan DevExtreme.",
        tags: ["web", "backend", "c#", "api"],
        category: "Sistem Perusahaan"
      },
      {
        id: 3,
        title: "Model Pengenalan Gambar",
        date: "2023-05-15",
        image: "assets/img/projects/vision.jpg",
        description: "Melatih model deep learning untuk mendeteksi cacat produk pada video real-time.",
        tags: ["ai", "python", "image-processing", "llm"],
        category: "AI / Pembelajaran Mesin"
      },
      {
        id: 4,
        title: "Sistem Manajemen Inventori",
        date: "2024-03-21",
        image: "assets/img/projects/inventory.png",
        description: "Solusi full-stack untuk melacak stok, mengelola pemasok, dan otomatisasi peringatan.",
        tags: ["php", "mysql", "laravel", "backend"],
        category: "Sistem Perusahaan"
      },
      {
        id: 5,
        title: "Toko E-commerce",
        date: "2023-09-10",
        image: "assets/img/projects/ecommerce.png",
        description: "Toko online dengan katalog produk, keranjang belanja, dan integrasi pembayaran.",
        tags: ["web", "frontend", "react", "api"],
        category: "Pengembangan Web"
      },
      {
        id: 6,
        title: "Chatbot Layanan Pelanggan",
        date: "2024-05-05",
        image: "assets/img/projects/chatbot.png",
        description: "Chatbot WhatsApp terintegrasi dengan Google Sheets untuk pelacakan pesanan.",
        tags: ["ai", "whatsapp", "nodejs", "automation"],
        category: "Otomatisasi"
      },
      {
        id: 7,
        title: "Aplikasi Timesheet Karyawan",
        date: "2022-11-17",
        image: "assets/img/projects/timesheet.jpg",
        description: "Aplikasi ramah seluler untuk karyawan mencatat jam kerja dan manajer menyetujui catatan kerja.",
        tags: ["mobile", "web", "api", "frontend"],
        category: "Sistem Perusahaan"
      },
      {
        id: 8,
        title: "Aplikasi Web Prakiraan Cuaca",
        date: "2023-01-29",
        image: "assets/img/projects/weather.jpg",
        description: "Aplikasi web responsif yang menampilkan cuaca real-time menggunakan OpenWeather API.",
        tags: ["javascript", "api", "frontend"],
        category: "Pengembangan Web"
      },
      {
        id: 9,
        title: "Pipeline ETL Data Keuangan",
        date: "2022-08-19",
        image: "assets/img/projects/etl.webp",
        description: "Otomatisasi ekstraksi, transformasi, dan pemuatan data pasar keuangan.",
        tags: ["python", "sql", "data-pipeline"],
        category: "Rekayasa Data"
      },
      {
        id: 10,
        title: "Pemantau Perangkat IoT",
        date: "2023-04-14",
        image: "assets/img/projects/iot.png",
        description: "Dasbor untuk memantau perangkat IoT, memvisualisasi data sensor, dan memicu peringatan.",
        tags: ["iot", "dashboard", "c#", "signalr"],
        category: "Sistem Perusahaan"
      },
      {
        id: 11,
        title: "CMS Blog",
        date: "2022-05-09",
        image: "assets/img/projects/blog.png",
        description: "Sistem manajemen konten khusus untuk mengelola postingan dan komentar blog.",
        tags: ["php", "codeigniter", "mysql", "backend"],
        category: "Pengembangan Web"
      },
      {
        id: 12,
        title: "Alat Visualisasi Data",
        date: "2023-07-22",
        image: "assets/img/projects/dataviz.png",
        description: "Grafik dan dasbor interaktif yang dibuat dengan D3.js dan Chart.js.",
        tags: ["javascript", "d3", "charts", "frontend"],
        category: "Rekayasa Data"
      },
      {
        id: 13,
        title: "Sistem Keamanan Deteksi Wajah",
        date: "2024-01-15",
        image: "assets/img/projects/facedetect.png",
        description: "Menerapkan deteksi wajah real-time untuk kontrol akses menggunakan OpenCV.",
        tags: ["python", "opencv", "ai", "security"],
        category: "AI / Pembelajaran Mesin"
      },
      {
        id: 14,
        title: "Papan Manajemen Proyek",
        date: "2025-02-27",
        image: "assets/img/projects/kanban.png",
        description: "Aplikasi manajemen tugas gaya Kanban dengan antarmuka drag-and-drop.",
        tags: ["web", "frontend", "react", "backend"],
        category: "Pengembangan Web"
      },
      {
        id: 15,
        title: "Generator Laporan PDF Otomatis",
        date: "2022-10-03",
        image: "assets/img/projects/pdfreport.png",
        description: "Script untuk membuat laporan PDF dengan gaya dari data database.",
        tags: ["python", "reporting", "automation"],
        category: "Otomatisasi"
      }
    ],
    searchPlaceholder: "Cari proyek...",
    newestFirst: "Terbaru",
    oldestFirst: "Terlama",
    all: "Semua",
  },
  zh: {
    nav: { home: "主页", about: "关于", projects: "项目", contact: "联系", lang: "语言" },
    title: {
      index: "欢迎来到我的作品集",
      about: "关于我",
      projects: "我的项目",
      contact: "联系我"
    },
    subtitle: {
      index: "随时向我询问有关我的工作和经验！",
      about: "这是关于页面的内容。",
      projects: "这里是我的一些项目。",
      contact: "欢迎与我联系。"
    },
    input: "输入您的问题...",
    send: "发送",
    timeline: [
      {
        year: "2017 – 2021",
        title: "B.Sc. in Data Science and Technology",
        institution: "香港科技大学",
        location: "香港",
        period: "2017年9月 – 2021年5月",
        short: "香港首批数据科学本科毕业生。主修数据科学，辅修精算学。",
        full: "完成多种算法、网页应用和AI项目。为数据分析、机器学习及软件工程奠定坚实基础。"
      },
      {
        year: "2021 – 2022",
        title: "Junior Data Scientist",
        institution: "R 公司",
        location: "香港",
        period: "May 2021 – Aug 2022",
        short: "在一家小型科技咨询公司承担多种角色，从数据标注到API开发。",
        full: "训练用于图像识别的LLM模型，构建网页工具进行数据标注，使用C#（dotnet）和Python开发API，处理NLP任务，使用Elasticsearch数据库，并集成传感器进行3D图像/视频检测。（NDA限制详细信息。）"
      },
      {
        year: "2023 – Present",
        title: "Full-Stack Software Engineer",
        institution: "T 公司",
        location: "雅加达, 印度尼西亚",
        period: "2023年10月 – 至今",
        short: "使用多种技术开发企业级Web系统、API和数据库解决方案。",
        full: "使用技术：PHP CodeIgniter, Laravel, C# dotnet, SQL Server, MySQL, Oracle, Python, Powershell, IBM TM1, DevExtreme, FTPS/SFTPS, Git。工作内容包括后端/前端开发、API制作、数据库设计与维护、自动化、网页爬取、WhatsApp聊天机器人整合，以及利用供应商API提升AI模型。"
      }
    ],
    readMore: "阅读更多",
    showLess: "显示更少",
    projects: [
      {
        id: 1,
        title: "个人作品集网站",
        date: "2025-07-10",
        image: "assets/img/projects/portfolio.png",
        description: "一个多语言的个人作品集网站，具有动态内容、聊天机器人和时间轴功能。",
        tags: ["web", "frontend", "bootstrap", "jquery"],
        category: "网页开发"
      },
      {
        id: 2,
        title: "销售仪表盘",
        date: "2024-12-01",
        image: "assets/img/projects/dashboard.jpg",
        description: "企业级仪表盘，包含图表、筛选器和使用 DevExtreme 的钻取分析。",
        tags: ["web", "backend", "c#", "api"],
        category: "企业系统"
      },
      {
        id: 3,
        title: "图像识别模型",
        date: "2023-05-15",
        image: "assets/img/projects/vision.jpg",
        description: "训练深度学习模型以在实时视频流中检测产品缺陷。",
        tags: ["ai", "python", "image-processing", "llm"],
        category: "人工智能 / 机器学习"
      },
      {
        id: 4,
        title: "库存管理系统",
        date: "2024-03-21",
        image: "assets/img/projects/inventory.png",
        description: "全栈解决方案，用于跟踪库存水平、管理供应商并自动发送警报。",
        tags: ["php", "mysql", "laravel", "backend"],
        category: "企业系统"
      },
      {
        id: 5,
        title: "电子商务前端商店",
        date: "2023-09-10",
        image: "assets/img/projects/ecommerce.png",
        description: "带有产品目录、购物车和支付集成的在线商店。",
        tags: ["web", "frontend", "react", "api"],
        category: "网页开发"
      },
      {
        id: 6,
        title: "客户服务聊天机器人",
        date: "2024-05-05",
        image: "assets/img/projects/chatbot.png",
        description: "一个集成到 Google 表格用于订单跟踪的 WhatsApp 聊天机器人。",
        tags: ["ai", "whatsapp", "nodejs", "automation"],
        category: "自动化"
      },
      {
        id: 7,
        title: "员工工时记录应用",
        date: "2022-11-17",
        image: "assets/img/projects/timesheet.jpg",
        description: "适用于移动端的应用，员工可记录工时，经理可审批工作日志。",
        tags: ["mobile", "web", "api", "frontend"],
        category: "企业系统"
      },
      {
        id: 8,
        title: "天气预报网页应用",
        date: "2023-01-29",
        image: "assets/img/projects/weather.jpg",
        description: "响应式网页应用，使用 OpenWeather API 显示实时天气。",
        tags: ["javascript", "api", "frontend"],
        category: "网页开发"
      },
      {
        id: 9,
        title: "金融数据 ETL 管道",
        date: "2022-08-19",
        image: "assets/img/projects/etl.webp",
        description: "自动化提取、转换和加载金融市场数据。",
        tags: ["python", "sql", "data-pipeline"],
        category: "数据工程"
      },
      {
        id: 10,
        title: "物联网设备监控",
        date: "2023-04-14",
        image: "assets/img/projects/iot.png",
        description: "监控物联网设备的仪表盘，可视化传感器数据并触发警报。",
        tags: ["iot", "dashboard", "c#", "signalr"],
        category: "企业系统"
      },
      {
        id: 11,
        title: "博客内容管理系统",
        date: "2022-05-09",
        image: "assets/img/projects/blog.png",
        description: "自定义 CMS，用于管理博客文章和评论。",
        tags: ["php", "codeigniter", "mysql", "backend"],
        category: "网页开发"
      },
      {
        id: 12,
        title: "数据可视化工具",
        date: "2023-07-22",
        image: "assets/img/projects/dataviz.png",
        description: "使用 D3.js 和 Chart.js 构建的交互式图表和仪表盘。",
        tags: ["javascript", "d3", "charts", "frontend"],
        category: "数据工程"
      },
      {
        id: 13,
        title: "人脸检测安防系统",
        date: "2024-01-15",
        image: "assets/img/projects/facedetect.png",
        description: "使用 OpenCV 实现实时人脸检测以进行门禁控制。",
        tags: ["python", "opencv", "ai", "security"],
        category: "人工智能 / 机器学习"
      },
      {
        id: 14,
        title: "项目管理看板",
        date: "2025-02-27",
        image: "assets/img/projects/kanban.png",
        description: "具有拖放界面的看板式任务管理应用。",
        tags: ["web", "frontend", "react", "backend"],
        category: "网页开发"
      },
      {
        id: 15,
        title: "自动生成 PDF 报告",
        date: "2022-10-03",
        image: "assets/img/projects/pdfreport.png",
        description: "脚本从数据库数据生成带样式的 PDF 报告。",
        tags: ["python", "reporting", "automation"],
        category: "自动化"
      }
    ],
    searchPlaceholder: "搜索项目...",
    newestFirst: "最新",
    oldestFirst: "最旧",
    all: "全部",
  }
};
