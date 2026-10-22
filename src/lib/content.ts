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

export type Diagram = { src: string; srcDark: string; alt: string; width: number; height: number };

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
    detailLabel: string;
    backLabel: string;
    architectureTitle: string;
    componentsTitle: string;
    zoomHint: string;
    zoomIn: string;
    zoomOut: string;
    resetZoom: string;
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
      detail?: {
        slug: string;
        architecture: {
          intro: string;
          diagram: Diagram;
          points: { title: string; body: string }[];
        };
        components: {
          intro: string;
          diagram: Diagram;
          points: { title: string; body: string }[];
        };
      };
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

export type Project = Dict["projects"]["items"][number];

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
      detailLabel: "Xem chi tiết",
      backLabel: "Tất cả dự án",
      architectureTitle: "Kiến trúc hệ thống",
      componentsTitle: "Bên trong API",
      zoomHint: "Bấm để phóng to",
      zoomIn: "Phóng to",
      zoomOut: "Thu nhỏ",
      resetZoom: "Về kích thước ban đầu",
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
        {
          name: "HRM System",
          period: "09/2026 – nay",
          tagline: "Hệ thống quản trị nhân sự: chấm công, nghỉ phép, tính lương",
          description:
            "REST API Spring Boot quản trị nhân sự cho doanh nghiệp nhiều phòng ban và chi nhánh: hồ sơ nhân viên, cơ cấu tổ chức, chấm công, nghỉ phép, tính lương kèm bảo hiểm và thuế TNCN. Phân quyền RBAC theo phạm vi dữ liệu, kỳ lương chạy theo state machine, ràng buộc toàn vẹn ở tầng PostgreSQL. Frontend Next.js tự làm thêm để demo trọn luồng.",
          tech: ["Java 25", "Spring Boot 4.0", "Spring Security + OAuth2 JWT", "Spring Data JPA", "PostgreSQL 16", "Flyway", "GitHub Actions", "Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Docker", "Azure", "Vercel"],
          features: [
            "JWT access token 15 phút, refresh token xoay vòng lưu dạng SHA-256 hash, thu hồi mọi phiên khi phát hiện token bị dùng lại",
            "RBAC theo phạm vi SELF / ORG_UNIT / LOCATION / COMPANY có thời hạn, override GRANT / REVOKE, lọc dữ liệu bằng JPA Specification",
            "Kỳ lương DRAFT → CALCULATED → APPROVED → PAID → LOCKED; thay đổi hồi tố tự đưa kỳ đã tính về DRAFT hoặc bị từ chối nếu kỳ đã khóa",
            "Tính BHXH / BHYT / BHTN và thuế TNCN lũy tiến theo bảng bậc lưu trong DB, xuất phiếu lương ra Excel",
            "Khóa PESSIMISTIC_WRITE cho các thao tác ghi dễ tranh chấp: kỳ lương, chấm công, đơn nghỉ, gán quyền",
            "11 ràng buộc EXCLUDE USING GIST chống chồng lấn khoảng hiệu lực ngay trong PostgreSQL",
            "Schema 33 bảng, Flyway migration theo domain, scheduler chuẩn bị chấm công và xử lý đơn nghỉ việc đến hạn",
            "CI GitHub Actions test backend với PostgreSQL; frontend sinh TypeScript type từ OpenAPI và báo lỗi khi lệch spec",
          ],
          status: "Đang phát triển · Đang chạy demo",
          images: [],
          demo: { url: "https://hrm.nhatnguyenhuynh.com", login: "owner · hr · employee / password" },
          api: "https://hrm-api-94ee02.azurewebsites.net/swagger-ui/index.html",
          repos: [{ label: "GitHub", url: "https://github.com/NguyenAlpha/HRM-system" }],
          detail: {
            slug: "hrm",
            architecture: {
              intro:
                "Ba tầng tách biệt: trình duyệt chỉ nói chuyện với Next.js trên Vercel, Next.js gọi REST API Spring Boot trên Azure, và API là nơi duy nhất truy cập PostgreSQL.",
              diagram: {
                src: "/projects/hrm/architecture.svg",
                srcDark: "/projects/hrm/architecture-dark.svg",
                alt: "Sơ đồ kiến trúc HRM System",
                width: 800,
                height: 965,
              },
              points: [
                {
                  title: "Next.js làm BFF, trình duyệt không giữ token",
                  body: "Route Handlers của Next.js đứng giữa trình duyệt và API. JWT nằm trong cookie HttpOnly phía server, nên JavaScript trên trình duyệt không đọc được token.",
                },
                {
                  title: "REST API qua HTTPS với Bearer JWT",
                  body: "Next.js gửi request REST / JSON kèm access token tới Spring Boot 4 chạy Java 25 trên Azure App Service.",
                },
                {
                  title: "Spring Security làm OAuth2 Resource Server",
                  body: "Xác thực JWT HS256 cho mọi request; refresh token được xoay vòng và thu hồi mọi phiên khi phát hiện token bị dùng lại.",
                },
                {
                  title: "Controller, service và scheduler",
                  body: "Controller kiểm tra quyền bằng @PreAuthorize và được mô tả bằng Swagger. Service chứa RBAC theo phạm vi, tính lương, chấm công, nghỉ phép. Job @Scheduled chuẩn bị bảng chấm công và xử lý đơn nghỉ việc đến hạn.",
                },
                {
                  title: "JPA / Hibernate với khóa bi quan",
                  body: "Các thao tác ghi dễ tranh chấp như kỳ lương, chấm công, đơn nghỉ dùng PESSIMISTIC_WRITE (SELECT … FOR UPDATE).",
                },
                {
                  title: "PostgreSQL 16 giữ toàn vẹn dữ liệu",
                  body: "Azure Database for PostgreSQL Flexible Server, 33 bảng, ràng buộc EXCLUDE USING GIST chống chồng lấn khoảng hiệu lực. Flyway chạy migration và seeder dữ liệu demo khi ứng dụng khởi động.",
                },
              ],
            },
            components: {
              intro:
                "Sơ đồ thành phần của ứng dụng Spring Boot: mỗi request đi qua lớp bảo mật, vào module nghiệp vụ, được giới hạn theo phạm vi dữ liệu rồi mới chạm tới database.",
              diagram: {
                src: "/projects/hrm/component.svg",
                srcDark: "/projects/hrm/component-dark.svg",
                alt: "Sơ đồ thành phần bên trong API của HRM System",
                width: 2227,
                height: 1058,
              },
              points: [
                {
                  title: "Security Filter Chain",
                  body: "Xác thực JWT HS256 và chuyển role, permission thành authority trước khi request vào controller.",
                },
                {
                  title: "Module nghiệp vụ",
                  body: "Mỗi domain là một cặp REST controller + service: Auth, RBAC, Tổ chức & nhân viên, Nghỉ phép, Chấm công, Tính lương, Báo cáo. Payroll lấy ngày công từ Attendance, Leave cập nhật bảng chấm công.",
                },
                {
                  title: "Access Control",
                  body: "Tính quyền hiệu lực và phạm vi dữ liệu của người dùng, chuyển thành JPA Specification để lọc ngay trong câu truy vấn.",
                },
                {
                  title: "Repositories & khởi động",
                  body: "Spring Data JPA / Hibernate truy cập PostgreSQL, dùng khóa PESSIMISTIC_WRITE cho thao tác ghi dễ tranh chấp. Flyway và seeder chạy khi ứng dụng khởi động; job @Scheduled chạy theo giờ Việt Nam.",
                },
              ],
            },
          },
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
      detailLabel: "View details",
      backLabel: "All projects",
      architectureTitle: "System architecture",
      componentsTitle: "Inside the API",
      zoomHint: "Click to zoom",
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      resetZoom: "Reset zoom",
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
        {
          name: "HRM System",
          period: "Sep 2026 – Present",
          tagline: "Human resource management: attendance, leave and payroll",
          description:
            "A Spring Boot REST API for HR management in companies with many departments and branches: employee records, org structure, attendance, leave, and payroll with social insurance and personal income tax. Scope-based RBAC, a state-machine payroll cycle and integrity constraints enforced in PostgreSQL. Also built a Next.js frontend to demo the full flow.",
          tech: ["Java 25", "Spring Boot 4.0", "Spring Security + OAuth2 JWT", "Spring Data JPA", "PostgreSQL 16", "Flyway", "GitHub Actions", "Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Docker", "Azure", "Vercel"],
          features: [
            "15-minute JWT access tokens, rotating refresh tokens stored as SHA-256 hashes, all sessions revoked on token reuse",
            "Time-bound RBAC scoped to SELF / ORG_UNIT / LOCATION / COMPANY, GRANT / REVOKE overrides, data filtering via JPA Specifications",
            "Payroll cycle DRAFT → CALCULATED → APPROVED → PAID → LOCKED; retroactive changes reset calculated periods or are rejected once locked",
            "Social insurance and progressive income tax from DB-stored brackets, payslip export to Excel",
            "PESSIMISTIC_WRITE locks on contended writes: payroll, attendance, leave requests, role assignments",
            "11 EXCLUDE USING GIST constraints preventing overlapping validity ranges directly in PostgreSQL",
            "33-table schema with domain-based Flyway migrations, schedulers for monthly attendance and due resignations",
            "GitHub Actions CI testing the backend against PostgreSQL; frontend types generated from OpenAPI, failing on spec drift",
          ],
          status: "In progress · Live demo",
          images: [],
          demo: { url: "https://hrm.nhatnguyenhuynh.com", login: "owner · hr · employee / password" },
          api: "https://hrm-api-94ee02.azurewebsites.net/swagger-ui/index.html",
          repos: [{ label: "GitHub", url: "https://github.com/NguyenAlpha/HRM-system" }],
          detail: {
            slug: "hrm",
            architecture: {
              intro:
                "Three separate tiers: the browser only talks to Next.js on Vercel, Next.js calls the Spring Boot REST API on Azure, and the API is the only thing that touches PostgreSQL.",
              diagram: {
                src: "/projects/hrm/architecture.svg",
                srcDark: "/projects/hrm/architecture-dark.svg",
                alt: "HRM System architecture diagram",
                width: 800,
                height: 965,
              },
              points: [
                {
                  title: "Next.js as a BFF, no tokens in the browser",
                  body: "Next.js Route Handlers sit between the browser and the API. JWTs live in server-side HttpOnly cookies, so browser JavaScript can never read them.",
                },
                {
                  title: "REST over HTTPS with Bearer JWT",
                  body: "Next.js sends REST / JSON requests with the access token to Spring Boot 4 on Java 25, hosted on Azure App Service.",
                },
                {
                  title: "Spring Security as an OAuth2 Resource Server",
                  body: "Every request is authenticated with HS256 JWTs; refresh tokens rotate, and all sessions are revoked when token reuse is detected.",
                },
                {
                  title: "Controllers, services and schedulers",
                  body: "Controllers enforce permissions with @PreAuthorize and are documented with Swagger. Services hold scoped RBAC, payroll, attendance and leave logic. @Scheduled jobs prepare monthly attendance and process due resignations.",
                },
                {
                  title: "JPA / Hibernate with pessimistic locking",
                  body: "Contended writes such as payroll periods, attendance and leave requests use PESSIMISTIC_WRITE (SELECT … FOR UPDATE).",
                },
                {
                  title: "PostgreSQL 16 enforces integrity",
                  body: "Azure Database for PostgreSQL Flexible Server with 33 tables and EXCLUDE USING GIST constraints preventing overlapping validity ranges. Flyway runs migrations and demo data seeders on startup.",
                },
              ],
            },
            components: {
              intro:
                "Component view of the Spring Boot application: every request passes the security layer, reaches a domain module and is narrowed to the caller's data scope before it touches the database.",
              diagram: {
                src: "/projects/hrm/component.svg",
                srcDark: "/projects/hrm/component-dark.svg",
                alt: "HRM System API component diagram",
                width: 2227,
                height: 1058,
              },
              points: [
                {
                  title: "Security Filter Chain",
                  body: "Verifies HS256 JWTs and maps roles and permissions to authorities before a request reaches a controller.",
                },
                {
                  title: "Domain modules",
                  body: "Each domain is a REST controller + service pair: Auth, RBAC, Organization & employees, Leave, Attendance, Payroll, Reports. Payroll reads workdays from Attendance; Leave updates timesheets.",
                },
                {
                  title: "Access Control",
                  body: "Resolves the caller's effective permissions and data scope into a JPA Specification, filtering inside the query itself.",
                },
                {
                  title: "Repositories & startup",
                  body: "Spring Data JPA / Hibernate over PostgreSQL, with PESSIMISTIC_WRITE locks on contended writes. Flyway and seeders run on startup; @Scheduled jobs run on Vietnam time.",
                },
              ],
            },
          },
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
