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
    items: {
      name: string;
      period: string;
      tagline: string;
      description: string;
      tech: string[];
      features: string[];
      status: string;
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
      items: [
        {
          name: "QuikTech — POS & Inventory",
          period: "12/2025 – 04/2026",
          tagline: "Hệ thống quản lý bán hàng & kho vận Multi-tenant B2B SaaS",
          description:
            "Backend cho hệ thống POS & quản lý kho hỗ trợ vận hành ở cấp doanh nghiệp và cửa hàng, với hơn 16 module: bán hàng, nhập hàng, tồn kho, công nợ, subscription billing và dashboard analytics.",
          tech: ["Java 21", "Spring Boot 3.5", "PostgreSQL", "Redis", "JWT", "Next.js", "TypeScript"],
          features: [
            "Kiến trúc multi-tenant, phân quyền OWNER / MANAGER / STAFF theo từng cửa hàng",
            "Xác thực JWT kết hợp RBAC lưu trên Redis, giảm tối đa truy vấn DB khi phân quyền",
            "Thiết kế schema quan hệ 20+ bảng: đơn hàng, tồn kho, thanh toán, audit log",
            "Tối ưu hiệu năng bằng Redis cache, indexing và full-text search (PostgreSQL GIN)",
            "Subscription billing FREE/BASIC/PRO, invoice lifecycle, scheduler tự hết hạn",
            "Dashboard real-time với materialized view, refresh mỗi 15 phút",
          ],
          status: "Phase 1 hoàn thiện",
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
      items: [
        {
          name: "QuikTech — POS & Inventory",
          period: "Dec 2025 – Apr 2026",
          tagline: "Multi-tenant B2B SaaS for point-of-sale & inventory management",
          description:
            "A POS & inventory backend supporting business and store-level operations, with 16+ modules: sales, purchasing, inventory, debt, subscription billing, and dashboard analytics.",
          tech: ["Java 21", "Spring Boot 3.5", "PostgreSQL", "Redis", "JWT", "Next.js", "TypeScript"],
          features: [
            "Multi-tenant architecture with OWNER / MANAGER / STAFF roles per store",
            "JWT authentication with Redis-backed RBAC, minimizing DB calls during authorization",
            "Relational schema of 20+ tables: orders, inventory, payments, audit logs",
            "Performance tuned with Redis caching, indexing and full-text search (PostgreSQL GIN)",
            "Subscription billing FREE/BASIC/PRO, invoice lifecycle, auto-expire scheduler",
            "Real-time dashboard powered by materialized views, refreshed every 15 minutes",
          ],
          status: "Phase 1 completed",
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
