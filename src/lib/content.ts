export type Lang = "vi" | "en";

export const PROFILE = {
  name: "Huỳnh Trần Nhật Nguyên",
  displayName: "Nhat Nguyen",
  email: "nhatnguyen27042005@gmail.com",
  phone: "+84 963944370",
  cv: "/Nhat-Nguyen-CV.pdf",
  github: "https://github.com/NguyenAlpha",
  linkedin:
    "https://www.linkedin.com/in/nguy%C3%AAn-hu%E1%BB%B3nh-tr%E1%BA%A7n-nh%E1%BA%ADt-7a8269401/",
  facebook: "https://www.facebook.com/nnguyen2005",
};

type Dict = {
  nav: { about: string; skills: string; projects: string; education: string; contact: string };
  hero: {
    greeting: string;
    role: string;
    tagline: string;
    availability: string;
    ctaContact: string;
    ctaCV: string;
    ctaProjects: string;
  };
  about: { title: string; body: string; location: string; locationValue: string };
  skills: { title: string; subtitle: string; groups: { label: string; items: string[] }[] };
  projects: {
    title: string;
    subtitle: string;
    demoLabel: string;
    loginLabel: string;
    prevImage: string;
    nextImage: string;
    viewImage: string;
    closeImage: string;
    items: {
      name: string;
      period: string;
      tagline: string;
      description: string;
      tech: string[];
      features: string[];
      status: string;
      images: { src: string; srcDark: string; alt: string }[];
      demo: { url: string; login: string };
      api: string;
      repos: { label: string; url: string }[];
    }[];
  };
  education: {
    title: string;
    school: string;
    major: string;
    majorValue: string;
    period: string;
    gpa: string;
    gpaValue: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    send: string;
    orReach: string;
  };
  footer: string;
  builtWith: string;
};

export const TECH_STACK = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Three.js",
  "Framer Motion",
];

export const CONTENT: Record<Lang, Dict> = {
  vi: {
    nav: {
      about: "Giới thiệu",
      skills: "Kỹ năng",
      projects: "Dự án",
      education: "Học vấn",
      contact: "Liên hệ",
    },
    hero: {
      greeting: "Xin chào, tôi là",
      role: "Backend Developer",
      tagline:
        "Xây dựng các hệ thống backend hiệu năng cao, mở rộng tốt với Java & Spring Boot.",
      availability: "Sẵn sàng cho Intern / Fresher / Full-time",
      ctaContact: "Liên hệ tôi",
      ctaCV: "Tải CV",
      ctaProjects: "Xem dự án",
    },
    about: {
      title: "Giới thiệu",
      body: "Backend Developer đầy nhiệt huyết, chuyên sâu về Java Spring Boot, tập trung xây dựng RESTful API mở rộng tốt và hệ thống hiệu năng cao. Quan tâm mạnh đến thiết kế hệ thống, caching và xử lý thời gian thực. Hiện là sinh viên năm cuối ngành CNTT, đang tìm cơ hội để đóng góp vào các dự án thực tế và phát triển thành một kỹ sư backend chuyên nghiệp.",
      location: "Địa điểm",
      locationValue: "TP. Hồ Chí Minh",
    },
    skills: {
      title: "Kỹ năng",
      subtitle: "Công nghệ và công cụ tôi làm việc hằng ngày",
      groups: [
        { label: "Ngôn ngữ", items: ["Java"] },
        {
          label: "Backend",
          items: ["Spring Boot", "Spring Data JPA", "Spring Security", "REST API", "JWT"],
        },
        { label: "Cơ sở dữ liệu", items: ["PostgreSQL", "SQL Server", "Redis"] },
        { label: "Công cụ & DevOps", items: ["Git", "Docker", "Postman", "Maven"] },
        {
          label: "Khái niệm",
          items: ["OOP", "RESTful Design", "MVC", "Clean Architecture"],
        },
      ],
    },
    projects: {
      title: "Dự án nổi bật",
      subtitle: "Những sản phẩm tôi đã xây dựng",
      demoLabel: "Xem demo",
      loginLabel: "Tài khoản thử",
      prevImage: "Ảnh trước",
      nextImage: "Ảnh tiếp theo",
      viewImage: "Xem ảnh",
      closeImage: "Đóng",
      items: [
        {
          name: "QuikTech POS",
          period: "12/2025 – 04/2026",
          tagline: "Phần mềm bán hàng, quản lý kho & công nợ — Multi-tenant B2B SaaS",
          description:
            "Phần mềm bán hàng, quản lý kho và công nợ cho doanh nghiệp nhỏ: một doanh nghiệp có nhiều cửa hàng, dữ liệu tách biệt theo cửa hàng, phân quyền theo vai trò. Tự làm cả backend (Spring Boot) lẫn frontend (Next.js), deploy trên Azure và Vercel.",
          tech: ["Java 25", "Spring Boot 4.1", "Spring Security + JWT", "PostgreSQL 16", "Flyway", "Redis 7", "Bucket4j", "Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Docker", "Azure", "Vercel"],
          features: [
            "Multi-tenant, phân quyền theo phạm vi: OWNER / BUSINESS_MANAGER toàn doanh nghiệp, MANAGER / STAFF theo cửa hàng, SUPER_ADMIN / SUPPORT quản trị hệ thống",
            "Bán hàng, trả hàng, nhập hàng, nhiều kho, chuyển kho, điều chỉnh tồn; công nợ khách hàng & nhà cung cấp",
            "Subscription FREE / BASIC / PRO, nâng cấp bằng chuyển khoản QR, invoice lifecycle, scheduler tự hết hạn gói",
            "Rate limiting nhiều tầng (IP, user, login sai) bằng Bucket4j + Redis; idempotency cho request ghi",
            "Redis cache phân quyền cửa hàng (TTL 5 phút), vẫn chạy được khi tắt Redis",
            "Dashboard với materialized view refresh mỗi 15 phút; full-text search bằng PostgreSQL GIN index",
            "Schema ~36 bảng quản lý bằng Flyway; audit log snapshot trước/sau, thống kê traffic API",
            "Quét mã vạch bằng camera, import CSV, xuất Excel; web song ngữ VI / EN, sáng / tối",
          ],
          status: "Hoàn thành · Đang chạy demo",
          images: [
            {
              src: "/projects/quiktech/app-dashboard.png",
              srcDark: "/projects/quiktech/app-dashboard-dark.png",
              alt: "Dashboard",
            },
            {
              src: "/projects/quiktech/app-orders.png",
              srcDark: "/projects/quiktech/app-orders-dark.png",
              alt: "Đơn bán hàng",
            },
            {
              src: "/projects/quiktech/app-products.png",
              srcDark: "/projects/quiktech/app-products-dark.png",
              alt: "Sản phẩm",
            },
            {
              src: "/projects/quiktech/app-purchase-orders.png",
              srcDark: "/projects/quiktech/app-purchase-orders-dark.png",
              alt: "Đơn nhập hàng",
            },
            {
              src: "/projects/quiktech/app-payments.png",
              srcDark: "/projects/quiktech/app-payments-dark.png",
              alt: "Thanh toán & công nợ",
            },
            {
              src: "/projects/quiktech/app-subscription.png",
              srcDark: "/projects/quiktech/app-subscription-dark.png",
              alt: "Gói dịch vụ",
            },
            {
              src: "/projects/quiktech/app-notifications.png",
              srcDark: "/projects/quiktech/app-notifications-dark.png",
              alt: "Thông báo",
            },
          ],
          demo: { url: "https://pos.nhatnguyenhuynh.com", login: "user1 / password" },
          api: "https://quiktech-pos-api-8217b2.azurewebsites.net/swagger-ui/index.html",
          repos: [
            { label: "Backend", url: "https://github.com/NguyenAlpha/quiktech-pos-backend" },
            { label: "Frontend", url: "https://github.com/NguyenAlpha/quiktech-pos-frontend" },
          ],
        },
      ],
    },
    education: {
      title: "Học vấn",
      school: "Đại học Sài Gòn",
      major: "Chuyên ngành",
      majorValue: "Công nghệ Thông tin",
      period: "2023 – Hiện tại",
      gpa: "GPA",
      gpaValue: "3.0",
    },
    contact: {
      title: "Liên hệ",
      subtitle: "Có cơ hội phù hợp? Hãy nhắn cho tôi một lời.",
      nameLabel: "Tên của bạn",
      emailLabel: "Email của bạn",
      messageLabel: "Nội dung",
      send: "Gửi tin nhắn",
      orReach: "Hoặc kết nối qua",
    },
    footer: "Thiết kế & phát triển bởi",
    builtWith: "Xây dựng bằng",
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Backend Developer",
      tagline:
        "Building scalable, high-performance backend systems with Java & Spring Boot.",
      availability: "Open to Intern / Fresher / Full-time",
      ctaContact: "Get in touch",
      ctaCV: "Download CV",
      ctaProjects: "View projects",
    },
    about: {
      title: "About Me",
      body: "Motivated Backend Developer specializing in Java Spring Boot, focused on building scalable RESTful APIs and high-performance systems. Strong interest in system design, caching, and real-time processing. Currently a final-year IT student seeking opportunities to contribute to real-world projects and grow into a professional backend engineer.",
      location: "Location",
      locationValue: "Ho Chi Minh City",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I work with every day",
      groups: [
        { label: "Languages", items: ["Java"] },
        {
          label: "Backend",
          items: ["Spring Boot", "Spring Data JPA", "Spring Security", "REST API", "JWT"],
        },
        { label: "Database", items: ["PostgreSQL", "SQL Server", "Redis"] },
        { label: "Tools & DevOps", items: ["Git", "Docker", "Postman", "Maven"] },
        {
          label: "Concepts",
          items: ["OOP", "RESTful Design", "MVC", "Clean Architecture"],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Products I have built",
      demoLabel: "Live demo",
      loginLabel: "Demo login",
      prevImage: "Previous image",
      nextImage: "Next image",
      viewImage: "View image",
      closeImage: "Close",
      items: [
        {
          name: "QuikTech POS",
          period: "Dec 2025 – Apr 2026",
          tagline: "Sales, inventory & debt management — Multi-tenant B2B SaaS",
          description:
            "Point-of-sale, inventory and debt management for small businesses: one business runs many stores, with data isolated per store and role-based access. Built both the backend (Spring Boot) and frontend (Next.js), deployed on Azure and Vercel.",
          tech: ["Java 25", "Spring Boot 4.1", "Spring Security + JWT", "PostgreSQL 16", "Flyway", "Redis 7", "Bucket4j", "Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Docker", "Azure", "Vercel"],
          features: [
            "Multi-tenant, scope-based roles: OWNER / BUSINESS_MANAGER across the business, MANAGER / STAFF per store, SUPER_ADMIN / SUPPORT for system admin",
            "Sales, returns, purchasing, multiple warehouses, stock transfers and adjustments; customer & supplier debt",
            "Subscription FREE / BASIC / PRO, QR bank-transfer upgrades, invoice lifecycle, auto-expire scheduler",
            "Multi-layer rate limiting (IP, user, failed logins) with Bucket4j + Redis; idempotent write requests",
            "Redis-cached store permissions (5-minute TTL), still runs with Redis disabled",
            "Dashboard on materialized views refreshed every 15 minutes; full-text search with PostgreSQL GIN indexes",
            "~36-table schema managed by Flyway; before/after audit log snapshots, API traffic stats",
            "Camera barcode scanning, CSV import, Excel export; bilingual VI / EN UI with light / dark themes",
          ],
          status: "Completed · Live demo",
          images: [
            {
              src: "/projects/quiktech/app-dashboard.png",
              srcDark: "/projects/quiktech/app-dashboard-dark.png",
              alt: "Dashboard",
            },
            {
              src: "/projects/quiktech/app-orders.png",
              srcDark: "/projects/quiktech/app-orders-dark.png",
              alt: "Sales orders",
            },
            {
              src: "/projects/quiktech/app-products.png",
              srcDark: "/projects/quiktech/app-products-dark.png",
              alt: "Products",
            },
            {
              src: "/projects/quiktech/app-purchase-orders.png",
              srcDark: "/projects/quiktech/app-purchase-orders-dark.png",
              alt: "Purchase orders",
            },
            {
              src: "/projects/quiktech/app-payments.png",
              srcDark: "/projects/quiktech/app-payments-dark.png",
              alt: "Payments & debt",
            },
            {
              src: "/projects/quiktech/app-subscription.png",
              srcDark: "/projects/quiktech/app-subscription-dark.png",
              alt: "Subscription plans",
            },
            {
              src: "/projects/quiktech/app-notifications.png",
              srcDark: "/projects/quiktech/app-notifications-dark.png",
              alt: "Notifications",
            },
          ],
          demo: { url: "https://pos.nhatnguyenhuynh.com", login: "user1 / password" },
          api: "https://quiktech-pos-api-8217b2.azurewebsites.net/swagger-ui/index.html",
          repos: [
            { label: "Backend", url: "https://github.com/NguyenAlpha/quiktech-pos-backend" },
            { label: "Frontend", url: "https://github.com/NguyenAlpha/quiktech-pos-frontend" },
          ],
        },
      ],
    },
    education: {
      title: "Education",
      school: "Sai Gon University",
      major: "Major",
      majorValue: "Information Technology",
      period: "2023 – Present",
      gpa: "GPA",
      gpaValue: "3.0",
    },
    contact: {
      title: "Contact",
      subtitle: "Got an opportunity that fits? Drop me a message.",
      nameLabel: "Your name",
      emailLabel: "Your email",
      messageLabel: "Message",
      send: "Send message",
      orReach: "Or reach me on",
    },
    footer: "Designed & built by",
    builtWith: "Built with",
  },
};
