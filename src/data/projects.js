const projects = [
  {
    slug: "sales-analytics",
    title: "Sales Analytics",
    subtitle: "Business intelligence platform",
    year: "2025",
    role: "Full-stack engineer",
    featured: true,
    shortDesc:
      "Import sales data and read revenue, product, and customer KPIs from one dashboard instead of a pile of spreadsheets.",
    problem:
      "Sales performance lived in spreadsheets. Revenue, product mix, and customer behavior were hard to compare, and there was no single place to watch KPIs after a data import.",
    users:
      "Operators and analysts who need to upload sales records and immediately see trends, not rebuild charts by hand.",
    decisions: [
      {
        title: "Analytics in Python, not only in the UI",
        body: "FastAPI and Pandas own the import and aggregation path so the React app consumes ready KPI payloads instead of crunching rows in the browser.",
      },
      {
        title: "PostgreSQL for sales facts",
        body: "A relational model keeps products, customers, and transactions joinable. That is the difference between a chart demo and a queryable BI store.",
      },
      {
        title: "JWT APIs in front of the dashboards",
        body: "Every dashboard call goes through authenticated REST endpoints. The UI is a client, not the source of truth.",
      },
    ],
    result:
      "A working import-to-dashboard loop: load sales data, then inspect revenue, products, customers, and operational KPIs in Recharts views backed by PostgreSQL.",
    longDesc:
      "Full-stack business intelligence platform using React, FastAPI, Python, and PostgreSQL. Users import sales data, then monitor KPIs, revenue trends, and product and customer performance through interactive dashboards.",
    highlights: [
      "Interactive dashboards for revenue, products, customers, and KPIs",
      "Python analytics path with FastAPI, Pandas, and PostgreSQL",
      "JWT-secured REST APIs and a Dockerized deploy workflow",
    ],
    mainImage: "/images/projects/foodhub/sales-analytics-1.PNG",
    gallery: [
      "/images/projects/foodhub/sales-analytics-1.PNG",
      "/images/projects/foodhub/sales-analytics-2.PNG",
      "/images/projects/foodhub/sales-analytics-3.PNG",
      "/images/projects/foodhub/sales-analytics-4.PNG",
    ],
    tech: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Pandas",
      "JWT",
      "Recharts",
      "Docker",
    ],
    liveLink: "https://sales-analytics-platform-pearl.vercel.app/",
    repoLink: "https://github.com/Kaweesi-Matia/sales-analytics-platform",
  },
  {
    slug: "inventory-flow",
    title: "Inventory Flow",
    subtitle: "Inventory & warehouse operations",
    year: "2026",
    role: "Full-stack engineer",
    featured: true,
    shortDesc:
      "Role-aware inventory system for products, stock, warehouse transfers, and day-to-day supply-chain work.",
    problem:
      "Inventory tools that give every user the same screen break down as soon as warehouse, procurement, and sales need different actions. Stock movements and transfers need a real data model, not a single products table.",
    users:
      "Admin, inventory, warehouse, procurement, and sales roles—each with a different daily workflow.",
    decisions: [
      {
        title: "RBAC first, not as a later patch",
        body: "Access is split across five roles so warehouse transfers and sales views are not the same permission set wearing a different label.",
      },
      {
        title: "Stock as movements, not a single number",
        body: "PostgreSQL and SQLAlchemy model products, warehouses, orders, and transfers so stock changes are recorded, not overwritten.",
      },
      {
        title: "FastAPI as the operations contract",
        body: "React talks to JWT-secured REST endpoints. The UI can change; the inventory rules stay on the server.",
      },
    ],
    result:
      "An operations app where role, warehouse, and transfer workflows stay consistent from API to dashboard—not a catalog with a stock field.",
    longDesc:
      "Full-stack inventory and supply-chain platform using React, FastAPI, and PostgreSQL. Covers catalogs, warehouse stock, purchase and customer orders, transfers, and role-aware dashboards.",
    highlights: [
      "Role-based access for admin, inventory, warehouse, procurement, and sales",
      "Warehouse transfers, stock movements, and operations dashboards",
      "JWT-secured FastAPI services on PostgreSQL and SQLAlchemy",
    ],
    mainImage: "/images/projects/inventory-flow/inventory-1.png",
    gallery: [
      "/images/projects/inventory-flow/inventory-1.png",
      "/images/projects/inventory-flow/inventory-2.png",
      "/images/projects/inventory-flow/inventory-3.png",
      "/images/projects/inventory-flow/inventory-4.png",
      "/images/projects/inventory-flow/inventory-5.png",
    ],
    tech: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Python",
      "JWT",
      "Recharts",
      "Tailwind CSS",
      "Docker",
    ],
    liveLink: "https://inventory-flow-one-phi.vercel.app/",
    repoLink: "https://github.com/Kaweesi-Matia/inventory-flow",
  },
  {
    slug: "jobconnect",
    title: "JobConnect",
    subtitle: "Job marketplace",
    year: "2024",
    role: "Full-stack engineer",
    featured: true,
    shortDesc:
      "Marketplace where candidates and employers manage profiles, listings, and applications behind JWT auth.",
    problem:
      "Hiring flows fall apart when profiles, listings, and applications are not the same product. Employers need protected posting; candidates need a path from discovery to apply.",
    users: "Job seekers and employers sharing one marketplace with different permissions.",
    decisions: [
      {
        title: "One API, two roles",
        body: "Express routes are protected with JWT so posting, applying, and profile edits are not public CRUD.",
      },
      {
        title: "MongoDB documents for listings and applications",
        body: "Jobs and applications change shape often; a document store kept the marketplace schema flexible while the React UI stayed simple.",
      },
    ],
    result:
      "A live MERN marketplace with authenticated listing, discovery, and application workflows.",
    longDesc:
      "Full-stack job platform on the MERN stack. Users create accounts, manage profiles, discover jobs, and apply through protected API routes and a responsive React interface.",
    highlights: [
      "JWT authentication with protected API routes",
      "Job posting, discovery, and profile management",
      "React UI on Node.js, Express, and MongoDB",
    ],
    mainImage: "/images/projects/foodhub/jobconnect-1.PNG",
    gallery: [
      "/images/projects/foodhub/jobconnect-1.PNG",
      "/images/projects/foodhub/jobconnect-2.PNG",
      "/images/projects/foodhub/jobconnect-3.PNG",
      "/images/projects/foodhub/jobconnect-4.PNG",
      "/images/projects/foodhub/jobconnect-5.PNG",
      "/images/projects/foodhub/jobconnect-6.PNG",
      "/images/projects/foodhub/jobconnect-7.PNG",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
    liveLink: "https://job-connect-a7js.vercel.app/",
    repoLink: "https://github.com/Kaweesi-Matia/jobConnect",
  },
  {
    slug: "propertyhub",
    title: "PropertyHub",
    subtitle: "Real estate platform",
    year: "2024",
    role: "Full-stack engineer",
    featured: false,
    shortDesc:
      "Property listings with search, filters, and map-based exploration.",
    problem:
      "Listing sites that are only a card grid hide location. Buyers need filters and a map, not a static catalog.",
    users: "People browsing and filtering properties by location and listing details.",
    decisions: [
      {
        title: "Map as a first-class view",
        body: "Leaflet sits next to search and filters so location is part of discovery, not a detail page afterthought.",
      },
      {
        title: "Cloudinary for listing media",
        body: "Property photos are stored and delivered outside the app server so the MERN API stays focused on listings and filters.",
      },
    ],
    result:
      "A MERN real-estate app with search, filters, listing detail, and map exploration.",
    longDesc:
      "Full-stack real estate platform on the MERN stack: listings, detail views, search and filtering, and interactive map-based exploration.",
    highlights: [
      "Search, filters, and detailed listing views",
      "Map-based exploration with Leaflet",
      "Cloudinary media handling on a MERN stack",
    ],
    mainImage: "/images/projects/foodhub/propertyhub-1.PNG",
    gallery: [
      "/images/projects/foodhub/propertyhub-1.PNG",
      "/images/projects/foodhub/propertyhub-2.PNG",
      "/images/projects/foodhub/propertyhub-3.PNG",
      "/images/projects/foodhub/propertyhub-4.PNG",
      "/images/projects/foodhub/propertyhub-5.PNG",
      "/images/projects/foodhub/propertyhub-6.PNG",
      "/images/projects/foodhub/propertyhub-7.PNG",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Leaflet",
      "Cloudinary",
    ],
    liveLink: "https://property-hub-sage.vercel.app/",
    repoLink: "https://github.com/Kaweesi-Matia/propertyHub",
  },
  {
    slug: "learnova",
    title: "Learnova",
    subtitle: "Learning management platform",
    year: "2024",
    role: "Full-stack engineer",
    featured: false,
    shortDesc:
      "Course discovery and authenticated learner workflows on a MERN stack.",
    problem:
      "Course catalogs without accounts are brochures. Learners need a signed-in path through content, not a public list.",
    users: "Learners discovering courses and moving through structured content.",
    decisions: [
      {
        title: "Auth before content",
        body: "JWT gates course workflows so progress and access are account-scoped.",
      },
      {
        title: "Structured learning paths in MongoDB",
        body: "Courses and content are modeled as related documents so the React UI can present a path, not a flat file dump.",
      },
    ],
    result:
      "A live learning platform with authentication, course discovery, and structured learner flows.",
    longDesc:
      "Full-stack learning platform on the MERN stack: authentication, course and content management, and a responsive learner interface.",
    highlights: [
      "Authenticated learner experience with course workflows",
      "Content management and structured learning paths",
      "Responsive React interface on MERN",
    ],
    mainImage: "/images/projects/foodhub/learnhub-7.PNG",
    gallery: [
      "/images/projects/foodhub/learnhub-7.PNG",
      "/images/projects/foodhub/learnhub-1.PNG",
      "/images/projects/foodhub/learnhub-2.PNG",
      "/images/projects/foodhub/learnhub-3.PNG",
      "/images/projects/foodhub/learnhub-4.PNG",
      "/images/projects/foodhub/learnhub-5.PNG",
      "/images/projects/foodhub/learnhub-6.PNG",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
    liveLink: "https://learnova-beta-one.vercel.app/",
    repoLink: "https://github.com/Kaweesi-Matia/Learnova",
  },
  {
    slug: "foodhub",
    title: "FoodHub",
    subtitle: "Food ordering platform",
    year: "2024",
    role: "Full-stack engineer",
    featured: false,
    shortDesc:
      "Ordering flow from menu to cart to checkout, plus an admin side for restaurants.",
    problem:
      "Food apps fail when browse, cart, and kitchen/admin are treated as one screen. Customers need a checkout path; restaurants need order control.",
    users: "Customers placing orders and admins managing restaurant and order state.",
    decisions: [
      {
        title: "Split customer and admin surfaces",
        body: "Ordering and restaurant management are separate interfaces on the same API so admin actions cannot hide inside the customer cart.",
      },
      {
        title: "Auth on the order path",
        body: "JWT and Express protect accounts and orders so checkout is not an anonymous write to MongoDB.",
      },
    ],
    result:
      "A live food-ordering app with discovery, cart, checkout, and an admin workflow.",
    longDesc:
      "Full-stack food ordering platform using React, Node.js, Express, and MongoDB. Customers discover restaurants and place orders; admins manage restaurant and order workflows.",
    highlights: [
      "Customer flow: browse, cart, and checkout",
      "Admin interface for restaurant and order management",
      "MERN stack with live Vercel and Render deploys",
    ],
    mainImage: "/images/projects/foodhub/foodHub-img.PNG",
    gallery: [
      "/images/projects/foodhub/foodHub-img.PNG",
      "/images/projects/foodhub/foodhub-login-img.PNG",
      "/images/projects/foodhub/foodhub-order-img.PNG",
      "/images/projects/foodhub/foodhub-cart.PNG",
      "/images/projects/foodhub/foodHub-admin-img.PNG",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
    liveLink: "https://food-hub-rust-kappa.vercel.app/",
    repoLink: "https://github.com/Kaweesi-Matia/FoodHub",
  },
];

export default projects;
