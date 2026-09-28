(function () {
  const STORAGE_KEY = "portfolio-lang";
  const LANGS = ["en", "ar", "ckb"];
  const RTL = { ar: true, ckb: true };

  const I18N = {
    en: {
      skip: "Skip to content",
      name: "Huzaifa Al-Mashhadani",
      navLabel: "Primary",
      navHome: "Home",
      navWork: "Work",
      navProjects: "Projects",
      navExperience: "Experience",
      navAbout: "About",
      navContact: "Contact",
      langLabel: "Language",
      homeTitle: "Huzaifa Al-Mashhadani — Full-Stack & Mobile Developer",
      homeDescription:
        "Huzaifa Al-Mashhadani is a full-stack and mobile developer in Babylon, Iraq. He builds production web and mobile apps, REST APIs, real-time systems, and admin dashboards — including the Dizli transportation platform.",
      homeOgTitle: "Huzaifa Al-Mashhadani — Full-Stack & Mobile Developer",
      homeOgDescription:
        "Full-stack and mobile developer building production apps, APIs, real-time systems, and dashboards for companies in Iraq — and open to remote work.",
      heroLocation: "Babylon, Iraq",
      heroRole: "Full-Stack & Mobile Developer",
      heroLead:
        "Results-driven full-stack and mobile developer building production web and mobile apps — REST APIs, real-time systems, admin dashboards, and location-based services — from architecture through deployment and production support.",
      heroWork: "Selected work",
      heroContact: "Contact me",
      photoAlt: "Huzaifa Al-Mashhadani",
      workTitle: "Selected Projects",
      workLede: "A closer look at some of the things I've built.",
      galleryHint: "Click any screen to enlarge",
      expTitle: "Experience",
      expLede: "Hands-on work across the full lifecycle — apps, APIs, databases, and production.",
      expDizliRole: "Full-Stack & Mobile Developer",
      expDizliOrg: "Dizli · Iraq",
      expDizliDates: "Jun 2026 – Present",
      expDizli1:
        "Flutter customer and driver apps with auth, orders, rides, wallets, ratings, push notifications, and location services.",
      expDizli2:
        "Node.js / Express APIs on PostgreSQL, Prisma, Redis, and PostGIS for tracking, dispatch, and spatial features.",
      expDizli3:
        "Next.js admin dashboards; Firebase Cloud Messaging; third-party APIs; Linux VPS with PM2, Cloudflare, and SSL.",
      expDizli4:
        "End-to-end iOS and Android builds, code signing, store releases, and production troubleshooting.",
      expSsRole: "Full-Stack Developer",
      expSsOrg: "Software Solutions · Iraq",
      expSsDates: "Nov 2023 – Mar 2025",
      expSs1:
        "Delivered production web apps with React.js, Laravel, PHP, and MySQL alongside a cross-functional team.",
      expSs2:
        "Built Al Rayyan (Next.js e-commerce) and Miswak (enterprise mall shopping) with catalog, inventory, and checkout flows.",
      expSs3:
        "Shipped Hala Chat — a real-time messaging web app with Node.js, WebSockets, webhooks, and event-driven architecture.",
      expSs4:
        "Designed and maintained PostgreSQL schemas, advanced queries, migrations, and backend integrations.",
      expFadshiRole: "Flutter Front-End Developer",
      expFadshiOrg: "Fadshi",
      expFadshiDates: "Apr 2022 – Jul 2023",
      expFadshi1:
        "Translated Figma designs into production Flutter screens for a marketplace covering new, used, and bale goods.",
      expFadshi2:
        "Built product discovery, order tracking, digital wallets, withdrawals, and chart-based sales analytics.",
      expFadshi3:
        "Collaborated on real-time buyer–support chat with WebSockets / Socket.IO and REST-backed state management.",
      expFadshi4:
        "Integrated maps and geolocation for courier tracking, improving accuracy with GPS filtering.",
      aboutLabel: "About Me",
      aboutTitle: "I'm Huzaifa — a full-stack and mobile developer who ships software people depend on.",
      aboutP1:
        "Results-driven full-stack and mobile developer with hands-on experience shipping production web and mobile apps — REST APIs, real-time systems, admin dashboards, and location-based services — from architecture and databases through Linux server ops and production troubleshooting.",
      aboutP2:
        "I've built marketplace Flutter apps, Next.js and Laravel e-commerce for Iraqi brands, real-time chat products, and — currently — Dizli, where reliability on ordinary phones and uneven networks matters as much as clean code.",
      aboutDoTitle: "What I do",
      aboutDoMobileTitle: "Mobile Development",
      aboutDoMobileBody:
        "Cross-platform Flutter and React Native apps with BLoC/Riverpod, maps, push notifications, and App Store / Play releases.",
      aboutDoBackendTitle: "Backend & APIs",
      aboutDoBackendBody:
        "Node.js, Express, Laravel, PostgreSQL, Prisma, PostGIS, Redis, and real-time location systems.",
      aboutDoWebTitle: "Web & Dashboards",
      aboutDoWebBody:
        "Admin and operations UIs with Next.js, TypeScript, and Tailwind — plus WordPress, Shopify, and BigCommerce when needed.",
      aboutDoOpsTitle: "Deployment & Ops",
      aboutDoOpsBody:
        "Linux VPS, PM2, Docker, Cloudflare, SSL, migrations, and diagnosing production issues from logs.",
      aboutToolsTitle: "Tools I work with",
      aboutBasedLabel: "Based in",
      aboutBasedValue: "Al-Iskandariyah, Babylon, Iraq",
      aboutFocusLabel: "Focus",
      aboutFocusValue: "Full-Stack & Mobile",
      aboutNowLabel: "Currently",
      aboutNowValue: "Building Dizli",
      aboutLangLabel: "Languages",
      aboutLangValue: "English (fluent), Arabic (native)",
      viewCv: "View CV",
      role: "Role",
      stack: "Stack",
      viewProject: "View Project",
      viewDetails: "View Details",
      liveProject: "Live Project",
      visitProject: "Visit Project",
      footerPlace: "Al-Iskandariyah, Babylon, Iraq",
      footerRole: "Full-Stack & Mobile Developer",
      footerRights: "All rights reserved.",
      footerNav: "Footer",
      lightboxClose: "Close",
      lightboxPrev: "Previous image",
      lightboxNext: "Next image",
      contactTitle: "Let's work together.",
      contactLead: "Have a project, idea, or opportunity in mind? Send me a message.",
      contactCta: "Send a Message",
      contactAvailability:
        "Available for remote and international opportunities, freelance work, and interesting projects.",
      socialEmail: "Email",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Message",
      formSending: "Sending\u2026",
      formSuccess: "Message sent successfully. I'll get back to you soon.",
      formError: "Something went wrong. Please try again or email me directly.",
      formNameError: "Please enter your name.",
      formEmailError: "Please enter a valid email.",
      formMessageError: "Please enter a message.",
      backToTop: "Back to Top",
      studyBack: "Back to portfolio",
      prevProject: "Previous Project",
      nextProject: "Next Project",
      studyPager: "Project navigation",
      dizliIndex: "Project 01",
      dizliName: "Dizli",
      dizliLede:
        "A multi-service platform for the Iraqi market — taxi, delivery, courier, VIP transport, and shopping — in one customer and driver ecosystem.",
      dizliBody:
        "I build the Flutter apps, the Node.js API, and the Next.js admin dashboard. That includes dispatch, real-time location, PostGIS zones, wallets, payments, push notifications, and shipping to the App Store and Google Play.",
      dizliRole: "Full-Stack & Mobile Developer",
      dizliFeat1: "Customer and driver apps for taxi, delivery, courier, VIP, and shopping",
      dizliFeat2: "Real-time tracking, dispatch, and trip lifecycle on Postgres + PostGIS",
      dizliFeat3: "Wallets, commissions, ratings, and payment API integrations",
      dizliFeat4: "Admin dashboard, VPS ops, and iOS / Android releases",
      dizliTitle: "Dizli — Huzaifa Al-Mashhadani",
      dizliDescription:
        "Dizli is a multi-service transportation and delivery platform with Flutter apps, a Node.js API, PostGIS, Firebase, and a Next.js admin dashboard.",
      dizliStudyLede:
        "A multi-service super app for the Iraqi market — taxi, delivery, courier, VIP, and shopping — connecting customers with drivers.",
      dizliHeroAlt: "Dizli customer app home: services, a ride request, and recent activity.",
      dizliOverview: "Overview",
      dizliOverview1:
        "Dizli is a multi-service platform for the Iraqi market. Customers book taxi, delivery, courier, VIP, or shopping through one app. Drivers take those jobs through another. A Node.js API, PostgreSQL with PostGIS, and a Next.js admin dashboard sit in the middle.",
      dizliOverview2:
        "I work on the full stack: Flutter customer and driver apps, TypeScript REST APIs, real-time location and dispatch, wallets and payments, push notifications, production VPS ops, and App Store / Play releases.",
      dizliFeatures: "Features",
      dizliFeatTitle1: "Customer home.",
      dizliFeatBody1: "Services, wallet balance, search, and recent orders on one screen.",
      dizliFeatTitle2: "Rides and deliveries.",
      dizliFeatBody2:
        "Request a taxi, confirm pickup and drop-off, or send a shopping list to a nearby store.",
      dizliFeatTitle3: "Driver app.",
      dizliFeatBody3:
        "Go online, see nearby jobs, follow a map, and keep a daily summary of trips and deliveries.",
      dizliFeatTitle4: "Real-time & zones.",
      dizliFeatBody4: "Live driver location, trip status, distance-based pricing, and PostGIS service zones.",
      dizliFeatTitle5: "Wallet & payments.",
      dizliFeatBody5: "Driver commission wallets, fare breakdowns, and external payment integrations.",
      dizliFeatTitle6: "Admin & releases.",
      dizliFeatBody6: "Next.js operations dashboard, FCM push, and shipping to iOS and Android stores.",
      dizliScreens: "Screens",
      dizliScreensNote: "Click any image to open it full size.",
      dizliMyRole: "My role",
      dizliRole1:
        "I am the full-stack and mobile developer on Dizli. I implement the customer app, the driver app, the backend APIs, and the admin dashboard.",
      dizliRole2:
        "That includes Flutter screens, REST endpoints in Node.js and TypeScript, PostgreSQL/PostGIS via Prisma, Firebase messaging, payment hooks, Linux VPS with PM2, and store releases. I do not claim marketing copy or growth numbers as my work.",
      dizliTech: "Technologies",
      dizliDev: "Development",
      dizliDev1:
        "The hard part is keeping two clients on one order. A customer request has to show up for a driver, survive accept/cancel, and remain consistent in chat, fare, wallet, and notifications.",
      dizliDev2:
        "Maps and “going online” have to work on ordinary Android phones and uneven networks. Both apps are Arabic-first and RTL. Order state lives in Postgres with PostGIS for zones; the apps read from that instead of duplicating business rules in each client.",
      dizliCta: "Interested in the project?",
      dizliAltCustomerHome: "Dizli customer home: services, wallet, and recent orders.",
      dizliAltDriverHome: "Dizli driver home: daily summary and incoming jobs.",
      dizliAltChat: "Dizli in-app chat between a customer and a driver.",
      dizliAltDriverMap: "Dizli driver map with online status.",
      dizliAltDriverWallet: "Dizli driver wallet and top-up options.",
      dizliAltWeb: "Dizli public website with the customer app on a phone.",
      dizliAltRideRequest: "Dizli customer app: ride request and service categories.",
      dizliAltConfirm: "Dizli order confirmation with delivery location and fare.",
      dizliAltErrand: "Dizli errand order: store selection and shopping list.",
      dizliAltDriverProfile: "Dizli driver profile with ratings and trip history.",
      dizliAltDriverAccount: "Dizli driver account and vehicle photos.",
      dizliAltSignup: "Dizli driver identity photo capture during signup.",
      dizliAltCustomerHomeShort: "Dizli customer home with services and recent orders.",
      dizliAltDriverHomeShort: "Dizli driver home with daily summary.",
      dizliAltChatShort: "Dizli in-app chat on an active order.",
      dizliAltDriverMapShort: "Dizli driver map and online toggle.",
      dizliAltConfirmShort: "Dizli order confirmation and fare.",
      dizliAltDriverWalletShort: "Dizli driver wallet.",
      dizliAltWebShort: "Dizli public website.",
      dizliAltErrandShort: "Dizli shopping list for an errand.",
      dizliAltDriverProfileShort: "Dizli driver profile and ratings.",
      dizliAltDriverAccountShort: "Dizli driver account and vehicle.",
      dizliAltRideShort: "Dizli customer ride request screen.",
      monaIndex: "Project 02",
      monaName: "Monasabate",
      monaLede:
        "A React Native mobile application that helps users discover, compare, and book wedding halls and event venues.",
      monaBody:
        "The platform focuses on making venue discovery easier through search, filtering, detailed venue information, photos, ratings, and booking. I wrote the React Native application.",
      monaRole: "React Native development",
      monaFeat1: "Search and filters for halls and event venues",
      monaFeat2: "Venue pages with photos, location, and capacity",
      monaFeat3: "Ratings on venue listings",
      monaFeat4: "Booking requests from the venue screen",
      monaTitle: "Monasabate — Huzaifa Al-Mashhadani",
      monaDescription:
        "Monasabate is a React Native app for discovering and booking wedding halls and event venues in Iraq.",
      monaStudyLede:
        "A React Native app for discovering and booking wedding halls and event venues in Iraq.",
      monaHeroAlt: "Monasabate home screen with search and featured halls.",
      monaOverview: "Overview",
      monaOverview1:
        "Families in Iraq often find wedding halls through word of mouth. Monasabate puts that search on a phone: browse halls, filter by place, open a venue page, and send a booking request.",
      monaOverview2:
        "It is a venue discovery and booking app, not a full event-planning suite. I built the React Native application — the screens people use to search, compare, and book.",
      monaFeatures: "Features",
      monaFeatTitle1: "Home.",
      monaFeatBody1: "Search, governorate filter, and a short list of featured halls.",
      monaFeatTitle2: "Search and filters.",
      monaFeatBody2: "Browse available venues with price, location, and capacity on the listing card.",
      monaFeatTitle3: "Venue details.",
      monaFeatBody3: "Photos, description, ratings, and a booking action on one screen.",
      monaFeatTitle4: "Booking.",
      monaFeatBody4: "Send a request from the venue page instead of leaving the app to call.",
      monaScreens: "Screens",
      monaScreensNote: "Click any image to open it full size.",
      monaMyRole: "My role",
      monaRole1:
        "I developed the React Native app. The screens in this case study — home, search, and venue details — are the product surface I worked on.",
      monaTech: "Technologies",
      monaDev: "Development",
      monaDev1:
        "The app is Arabic-first and RTL, with dense venue cards that still have to read clearly on a small phone: photo, name, place, price, capacity.",
      monaDev2:
        "Search and filters need to stay light. Venue pages need photos without stalling the list. The booking action sits on the same screen as the details so someone does not have to hunt for it.",
      monaCta: "Interested in the project?",
      monaAltHome: "Monasabate home: search, governorate filter, and featured halls.",
      monaAltSearch: "Monasabate venue list with search, filters, price, and capacity.",
      monaAltVenue: "Monasabate venue details with photos and a booking action.",
      monaAltHero: "Event hall interior used on the Monasabate website.",
      monaAltHomeShort: "Monasabate home screen.",
      monaAltSearchShort: "Monasabate search and venue list.",
      monaAltVenueShort: "Monasabate venue details and booking.",
      monaAltHeroShort: "Event hall photography from the Monasabate website.",
    },

    ar: {
      skip: "تخطٍ إلى المحتوى",
      name: "حذيفة المشهداني",
      navLabel: "التنقل الرئيسي",
      navHome: "الرئيسية",
      navWork: "الأعمال",
      navProjects: "المشاريع",
      navExperience: "الخبرة",
      navAbout: "نبذة",
      navContact: "تواصل",
      langLabel: "اللغة",
      homeTitle: "حذيفة المشهداني — مطوّر شامل وجوال",
      homeDescription:
        "حذيفة المشهداني مطوّر شامل وجوال في بابل، العراق. يبني تطبيقات ويب وجوال للإنتاج، وواجهات REST، وأنظمة فورية، ولوحات إدارة — بما فيها منصة دزلي للنقل.",
      homeOgTitle: "حذيفة المشهداني — مطوّر شامل وجوال",
      homeOgDescription:
        "مطوّر شامل وجوال يبني تطبيقات إنتاجية وواجهات API وأنظمة فورية ولوحات إدارة للشركات في العراق — ومتاح للعمل عن بُعد.",
      heroLocation: "بابل، العراق",
      heroRole: "مطوّر شامل وجوال",
      heroLead:
        "مطوّر شامل وجوال ذو نتائج ملموسة يبني تطبيقات ويب وجوال للإنتاج — واجهات REST، وأنظمة فورية، ولوحات إدارة، وخدمات مرتبطة بالموقع — من الهندسة حتى النشر ودعم الإنتاج.",
      heroWork: "أعمال مختارة",
      heroContact: "تواصل معي",
      photoAlt: "حذيفة المشهداني",
      workTitle: "مشاريع مختارة",
      workLede: "نظرة أقرب على بعض ما بنيته.",
      galleryHint: "اضغط على أي شاشة لتكبيرها",
      expTitle: "الخبرة",
      expLede: "عمل عملي عبر دورة الحياة كاملة — التطبيقات وواجهات API وقواعد البيانات والإنتاج.",
      expDizliRole: "مطوّر شامل وجوال",
      expDizliOrg: "دزلي · العراق",
      expDizliDates: "حزيران 2026 – الآن",
      expDizli1:
        "تطبيقا Flutter للزبون والسائق مع المصادقة والطلبات والرحلات والمحافظ والتقييمات والإشعارات وخدمات الموقع.",
      expDizli2:
        "واجهات Node.js / Express على PostgreSQL وPrisma وRedis وPostGIS للتتبع والتوزيع والميزات المكانية.",
      expDizli3:
        "لوحات إدارة Next.js؛ وإشعارات Firebase؛ وواجهات خارجية؛ وخوادم Linux مع PM2 وCloudflare وSSL.",
      expDizli4:
        "بناء iOS وAndroid من البداية للنهاية، والتوقيع، وإصدارات المتاجر، وتشخيص الإنتاج.",
      expSsRole: "مطوّر شامل",
      expSsOrg: "Software Solutions · العراق",
      expSsDates: "تشرين الثاني 2023 – آذار 2025",
      expSs1:
        "تسليم تطبيقات ويب إنتاجية بـ React.js وLaravel وPHP وMySQL مع فريق متعدد التخصصات.",
      expSs2:
        "بناء الريان (تجارة إلكترونية بـ Next.js) ومسواك (تسوّق لمول عراقي) مع الكتالوج والمخزون وعمليات الشراء.",
      expSs3:
        "إطلاق Hala Chat — تطبيق مراسلة فوري بـ Node.js وWebSockets وwebhooks وهندسة قائمة على الأحداث.",
      expSs4:
        "تصميم وصيانة مخططات PostgreSQL والاستعلامات المتقدمة والترحيلات وتكاملات الواجهة الخلفية.",
      expFadshiRole: "مطوّر واجهات Flutter",
      expFadshiOrg: "فضشي",
      expFadshiDates: "نيسان 2022 – تموز 2023",
      expFadshi1:
        "تحويل تصاميم Figma إلى شاشات Flutter إنتاجية لسوق يغطي البضائع الجديدة والمستعملة والبالة.",
      expFadshi2:
        "بناء اكتشاف المنتجات وتتبع الطلبات والمحافظ الرقمية والسحوبات ولوحات تحليلات المبيعات بالرسوم.",
      expFadshi3:
        "المساهمة في دردشة فورية بين المشتري والدعم عبر WebSockets / Socket.IO وإدارة حالة مربوطة بـ REST.",
      expFadshi4:
        "دمج الخرائط والموقع لتتبع المندوبين وتحسين الدقة عبر تصفية GPS.",
      aboutLabel: "نبذة عني",
      aboutTitle: "أنا حذيفة — مطوّر شامل وجوال يسلّم برمجيات يعتمد عليها الناس.",
      aboutP1:
        "مطوّر شامل وجوال ذو خبرة عملية في تسليم تطبيقات ويب وجوال للإنتاج — واجهات REST وأنظمة فورية ولوحات إدارة وخدمات مرتبطة بالموقع — من الهندسة وقواعد البيانات حتى تشغيل خوادم Linux وتشخيص الإنتاج.",
      aboutP2:
        "بنيت تطبيقات سوق بـ Flutter، وتجارة إلكترونية بـ Next.js وLaravel لعلامات عراقية، ومنتجات دردشة فورية، وحاليًا دزلي — حيث الاعتمادية على هواتف عادية وشبكات غير مستقرة أهمّ بقدر نظافة الكود.",
      aboutDoTitle: "ما أعمل عليه",
      aboutDoMobileTitle: "تطوير الجوال",
      aboutDoMobileBody:
        "تطبيقات Flutter وReact Native متعددة المنصات مع BLoC/Riverpod والخرائط والإشعارات وإصدارات App Store وPlay.",
      aboutDoBackendTitle: "الجهة الخلفية وواجهات API",
      aboutDoBackendBody:
        "Node.js وExpress وLaravel وPostgreSQL وPrisma وPostGIS وRedis وأنظمة الموقع الفورية.",
      aboutDoWebTitle: "الويب ولوحات الإدارة",
      aboutDoWebBody:
        "واجهات تشغيل بـ Next.js وTypeScript وTailwind — إضافة إلى WordPress وShopify وBigCommerce عند الحاجة.",
      aboutDoOpsTitle: "النشر والتشغيل",
      aboutDoOpsBody:
        "خوادم Linux وVPS وPM2 وDocker وCloudflare وSSL والترحيلات وتشخيص مشاكل الإنتاج من السجلات.",
      aboutToolsTitle: "الأدوات التي أعمل بها",
      aboutBasedLabel: "أقيم في",
      aboutBasedValue: "الإسكندرية، بابل، العراق",
      aboutFocusLabel: "التركيز",
      aboutFocusValue: "التطوير الشامل والجوال",
      aboutNowLabel: "حاليًا",
      aboutNowValue: "أبني دزلي",
      aboutLangLabel: "اللغات",
      aboutLangValue: "الإنجليزية (طلاقة)، العربية (أمّ)",
      viewCv: "عرض السيرة",
      role: "الدور",
      stack: "التقنيات",
      viewProject: "عرض المشروع",
      viewDetails: "عرض التفاصيل",
      liveProject: "المشروع المباشر",
      visitProject: "زيارة المشروع",
      footerPlace: "الإسكندرية، بابل، العراق",
      footerRole: "مطوّر شامل وجوال",
      footerRights: "جميع الحقوق محفوظة.",
      footerNav: "تذييل الصفحة",
      lightboxClose: "إغلاق",
      lightboxPrev: "الصورة السابقة",
      lightboxNext: "الصورة التالية",
      contactTitle: "لنعمل معًا.",
      contactLead: "لديك مشروع أو فكرة أو فرصة في بالك؟ أرسل لي رسالة.",
      contactCta: "أرسل رسالة",
      contactAvailability: "متاح للفرص عن بُعد والدولية، والعمل الحر، والمشاريع الجديرة بالاهتمام.",
      socialEmail: "البريد",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formMessage: "الرسالة",
      formSubmit: "إرسال الرسالة",
      formSending: "جارٍ الإرسال\u2026",
      formSuccess: "تم إرسال الرسالة بنجاح. سأرد عليك قريبًا.",
      formError: "تعذّر إرسال الرسالة. حاول مرة أخرى أو راسلني مباشرة.",
      formNameError: "يرجى إدخال اسمك.",
      formEmailError: "يرجى إدخال بريد إلكتروني صالح.",
      formMessageError: "يرجى إدخال رسالة.",
      backToTop: "العودة للأعلى",
      studyBack: "العودة إلى المعرض",
      prevProject: "المشروع السابق",
      nextProject: "المشروع التالي",
      studyPager: "التنقل بين المشاريع",
      dizliIndex: "المشروع 01",
      dizliName: "دزلي",
      dizliLede:
        "منصة متعددة الخدمات للسوق العراقي — تاكسي وتوصيل وطرود ونقل VIP وتسوّق — في منظومة واحدة للزبون والسائق.",
      dizliBody:
        "أبني تطبيقي Flutter، وواجهة Node.js، ولوحة إدارة Next.js. يشمل ذلك التوزيع، والموقع الفوري، ومناطق PostGIS، والمحافظ، والمدفوعات، والإشعارات، والنشر على App Store وGoogle Play.",
      dizliRole: "مطوّر شامل وجوال",
      dizliFeat1: "تطبيقا الزبون والسائق للتاكسي والتوصيل والطرود وVIP والتسوّق",
      dizliFeat2: "تتبع فوري وتوزيع ودورة حياة الرحلة على Postgres وPostGIS",
      dizliFeat3: "محافظ وعمولات وتقييمات وتكاملات دفع",
      dizliFeat4: "لوحة إدارة وتشغيل VPS وإصدارات iOS وAndroid",
      dizliTitle: "دزلي — حذيفة المشهداني",
      dizliDescription:
        "دزلي منصة متعددة الخدمات للنقل والتوصيل بتطبيقات Flutter وواجهة Node.js وPostGIS وFirebase ولوحة إدارة Next.js.",
      dizliStudyLede:
        "تطبيق متعدد الخدمات للسوق العراقي — تاكسي وتوصيل وطرود وVIP وتسوّق — يربط الزبائن بالسائقين.",
      dizliHeroAlt: "الشاشة الرئيسية لتطبيق زبون دزلي: الخدمات وطلب رحلة والنشاط الأخير.",
      dizliOverview: "نظرة عامة",
      dizliOverview1:
        "دزلي منصة متعددة الخدمات للسوق العراقي. يحجز الزبون تاكسي أو توصيلًا أو طرودًا أو VIP أو تسوّقًا من تطبيق، ويستلم السائق هذه الطلبات من تطبيق آخر. في الوسط واجهة Node.js وPostgreSQL مع PostGIS ولوحة إدارة Next.js.",
      dizliOverview2:
        "أعمل على المكدس كاملًا: تطبيقا Flutter، وواجهات REST بـ TypeScript، والموقع والتوزيع الفوري، والمحافظ والمدفوعات، والإشعارات، وتشغيل VPS، وإصدارات المتاجر.",
      dizliFeatures: "المزايا",
      dizliFeatTitle1: "الشاشة الرئيسية للزبون.",
      dizliFeatBody1: "الخدمات ورصيد المحفظة والبحث والطلبات الأخيرة في شاشة واحدة.",
      dizliFeatTitle2: "الرحلات والتوصيل.",
      dizliFeatBody2: "طلب سيارة أجرة، وتأكيد نقطتي الانطلاق والوصول، أو إرسال قائمة مشتريات إلى متجر قريب.",
      dizliFeatTitle3: "تطبيق السائق.",
      dizliFeatBody3: "الدخول للعمل، ورؤية الطلبات القريبة، ومتابعة الخريطة، وملخص يومي للرحلات والتوصيل.",
      dizliFeatTitle4: "الوقت الفعلي والمناطق.",
      dizliFeatBody4: "موقع السائق الحي، وحالة الرحلة، والتسعير حسب المسافة، ومناطق الخدمة عبر PostGIS.",
      dizliFeatTitle5: "المحفظة والمدفوعات.",
      dizliFeatBody5: "محافظ عمولة السائق، وتفصيل الأجرة، وتكاملات دفع خارجية.",
      dizliFeatTitle6: "الإدارة والإصدارات.",
      dizliFeatBody6: "لوحة تشغيل Next.js، وإشعارات FCM، والنشر على متاجر iOS وAndroid.",
      dizliScreens: "الشاشات",
      dizliScreensNote: "اضغط على أي صورة لفتحها بالحجم الكامل.",
      dizliMyRole: "دوري",
      dizliRole1:
        "أنا المطوّر الشامل والجوال في دزلي. أنفّذ تطبيق الزبون، وتطبيق السائق، وواجهات API الخلفية، ولوحة الإدارة.",
      dizliRole2:
        "يشمل ذلك شاشات Flutter، ونقاط REST في Node.js وTypeScript، وPostgreSQL/PostGIS عبر Prisma، ورسائل Firebase، وربط المدفوعات، وخوادم Linux مع PM2، وإصدارات المتاجر. لا أنسب لي نصوص التسويق أو أرقام النمو.",
      dizliTech: "التقنيات",
      dizliDev: "التطوير",
      dizliDev1:
        "الصعوبة في الإبقاء على عميلين على طلب واحد. طلب الزبون يجب أن يظهر للسائق، ويصمد أمام القبول والإلغاء، ويبقى متسقًا في الدردشة والأجرة والمحفظة والإشعارات.",
      dizliDev2:
        "الخرائط و«الدخول للعمل» يجب أن تعمل على هواتف أندرويد عادية وشبكات غير مستقرة. التطبيقان عربيان أولًا ويدعمان RTL. حالة الطلب تعيش في Postgres مع PostGIS للمناطق؛ التطبيقان يقرآن منها بدل تكرار قواعد العمل في كل عميل.",
      dizliCta: "مهتم بالمشروع؟",
      dizliAltCustomerHome: "الشاشة الرئيسية لزبون دزلي: الخدمات والمحفظة والطلبات الأخيرة.",
      dizliAltDriverHome: "الشاشة الرئيسية لسائق دزلي: الملخص اليومي والطلبات الواردة.",
      dizliAltChat: "دردشة داخل تطبيق دزلي بين زبون وسائق.",
      dizliAltDriverMap: "خريطة سائق دزلي مع حالة الاتصال.",
      dizliAltDriverWallet: "محفظة سائق دزلي وخيارات التعبئة.",
      dizliAltWeb: "الموقع العام لدزلي مع تطبيق الزبون على هاتف.",
      dizliAltRideRequest: "تطبيق زبون دزلي: طلب رحلة وفئات الخدمات.",
      dizliAltConfirm: "تأكيد طلب دزلي مع موقع التوصيل والأجرة.",
      dizliAltErrand: "طلب مشوار في دزلي: اختيار المتجر وقائمة المشتريات.",
      dizliAltDriverProfile: "ملف سائق دزلي مع التقييمات وسجل الرحلات.",
      dizliAltDriverAccount: "حساب سائق دزلي وصور المركبة.",
      dizliAltSignup: "التقاط صورة الهوية أثناء تسجيل سائق دزلي.",
      dizliAltCustomerHomeShort: "الشاشة الرئيسية لزبون دزلي مع الخدمات والطلبات الأخيرة.",
      dizliAltDriverHomeShort: "الشاشة الرئيسية لسائق دزلي مع الملخص اليومي.",
      dizliAltChatShort: "دردشة داخل تطبيق دزلي على طلب نشط.",
      dizliAltDriverMapShort: "خريطة سائق دزلي ومفتاح الاتصال.",
      dizliAltConfirmShort: "تأكيد طلب دزلي والأجرة.",
      dizliAltDriverWalletShort: "محفظة سائق دزلي.",
      dizliAltWebShort: "الموقع العام لدزلي.",
      dizliAltErrandShort: "قائمة مشتريات لمشوار في دزلي.",
      dizliAltDriverProfileShort: "ملف سائق دزلي والتقييمات.",
      dizliAltDriverAccountShort: "حساب سائق دزلي والمركبة.",
      dizliAltRideShort: "شاشة طلب الرحلة لزبون دزلي.",
      monaIndex: "المشروع 02",
      monaName: "مناسباتي",
      monaLede:
        "تطبيق React Native يساعد المستخدمين على اكتشاف قاعات الأفراح وأماكن المناسبات ومقارنتها وحجزها.",
      monaBody:
        "يركّز المنتج على تسهيل اكتشاف القاعات عبر البحث والتصفية وتفاصيل المكان والصور والتقييمات والحجز. كتبت تطبيق React Native.",
      monaRole: "تطوير React Native",
      monaFeat1: "بحث وتصفية للقاعات وأماكن المناسبات",
      monaFeat2: "صفحات للأماكن بالصور والموقع والسعة",
      monaFeat3: "تقييمات على بطاقات القاعات",
      monaFeat4: "طلبات حجز من شاشة المكان",
      monaTitle: "مناسباتي — حذيفة المشهداني",
      monaDescription:
        "مناسباتي تطبيق React Native لاكتشاف قاعات الأفراح وأماكن المناسبات في العراق وحجزها.",
      monaStudyLede: "تطبيق React Native لاكتشاف قاعات الأفراح وأماكن المناسبات في العراق وحجزها.",
      monaHeroAlt: "الشاشة الرئيسية لمناسباتي مع البحث والقاعات المميزة.",
      monaOverview: "نظرة عامة",
      monaOverview1:
        "كثير من العائلات في العراق تجد قاعات الأفراح بالمعرفة الشخصية. مناسباتي ينقل هذا البحث إلى الهاتف: تصفّح القاعات، والتصفية حسب المكان، وفتح صفحة القاعة، وإرسال طلب حجز.",
      monaOverview2:
        "هو تطبيق لاكتشاف الأماكن والحجز، لا حزمة كاملة لتنظيم المناسبات. بنيت تطبيق React Native — الشاشات التي يستخدمها الناس للبحث والمقارنة والحجز.",
      monaFeatures: "المزايا",
      monaFeatTitle1: "الرئيسية.",
      monaFeatBody1: "بحث، وتصفية حسب المحافظة، وقائمة قصيرة من القاعات المميزة.",
      monaFeatTitle2: "البحث والتصفية.",
      monaFeatBody2: "تصفّح الأماكن المتاحة مع السعر والموقع والسعة على بطاقة القائمة.",
      monaFeatTitle3: "تفاصيل المكان.",
      monaFeatBody3: "صور ووصف وتقييمات وإجراء حجز في شاشة واحدة.",
      monaFeatTitle4: "الحجز.",
      monaFeatBody4: "إرسال طلب من صفحة المكان بدل مغادرة التطبيق للاتصال.",
      monaScreens: "الشاشات",
      monaScreensNote: "اضغط على أي صورة لفتحها بالحجم الكامل.",
      monaMyRole: "دوري",
      monaRole1:
        "طوّرت تطبيق React Native. الشاشات في دراسة الحالة هذه — الرئيسية والبحث وتفاصيل المكان — هي الواجهة التي عملت عليها.",
      monaTech: "التقنيات",
      monaDev: "التطوير",
      monaDev1:
        "التطبيق عربي أولًا ويدعم RTL، مع بطاقات كثيفة للمكان يجب أن تبقى مقروءة على هاتف صغير: صورة، واسم، ومكان، وسعر، وسعة.",
      monaDev2:
        "البحث والتصفية يجب أن يبقيا خفيفين. صفحات الأماكن تحتاج صورًا دون إبطاء القائمة. إجراء الحجز يقع في الشاشة نفسها حتى لا يبحث عنه أحد.",
      monaCta: "مهتم بالمشروع؟",
      monaAltHome: "رئيسية مناسباتي: البحث وتصفية المحافظة والقاعات المميزة.",
      monaAltSearch: "قائمة أماكن مناسباتي مع البحث والتصفية والسعر والسعة.",
      monaAltVenue: "تفاصيل مكان في مناسباتي مع الصور وإجراء الحجز.",
      monaAltHero: "داخل قاعة مناسبات من موقع مناسباتي.",
      monaAltHomeShort: "الشاشة الرئيسية لمناسباتي.",
      monaAltSearchShort: "البحث وقائمة الأماكن في مناسباتي.",
      monaAltVenueShort: "تفاصيل المكان والحجز في مناسباتي.",
      monaAltHeroShort: "تصوير قاعة مناسبات من موقع مناسباتي.",
    },

    ckb: {
      skip: "بڕۆ بۆ ناوەڕۆک",
      name: "حوزەیفە المەشهەدانی",
      navLabel: "گەشتە سەرەکییەکان",
      navHome: "سەرەتا",
      navWork: "کارەکان",
      navProjects: "پڕۆژەکان",
      navExperience: "ئەزموون",
      navAbout: "دەربارە",
      navContact: "پەیوەندی",
      langLabel: "زمان",
      homeTitle: "حوزەیفە المەشهەدانی — گەشەپێدەری تەواو و مۆبایل",
      homeDescription:
        "حوزەیفە المەشهەدانی گەشەپێدەری تەواو و مۆبایلە لە بابل، عێراق. ئەپی وێب و مۆبایلی بەرهەمهێنان، REST API، سیستەمی کاتی ڕاستەقینە، و داشبۆردی بەڕێوەبردن دروست دەکات — لەوانە پلاتفۆرمی دزلی.",
      homeOgTitle: "حوزەیفە المەشهەدانی — گەشەپێدەری تەواو و مۆبایل",
      homeOgDescription:
        "گەشەپێدەری تەواو و مۆبایل کە ئەپی بەرهەمهێنان، API، سیستەمی کاتی ڕاستەقینە، و داشبۆرد بۆ کۆمپانیاکانی عێراق دروست دەکات — و ئامادەیە بۆ کاری دوور.",
      heroLocation: "بابل، عێراق",
      heroRole: "گەشەپێدەری تەواو و مۆبایل",
      heroLead:
        "گەشەپێدەری تەواو و مۆبایلی ئەنجامدار کە ئەپی وێب و مۆبایلی بەرهەمهێنان دروست دەکات — REST API، سیستەمی کاتی ڕاستەقینە، داشبۆردی بەڕێوەبردن، و خزمەتگوزاریی شوێن — لە تەلارسازییەوە تا بڵاوکردنەوە و پشتگیری بەرهەمهێنان.",
      heroWork: "کارە هەڵبژێردراوەکان",
      heroContact: "پەیوەندیم پێوە بکە",
      photoAlt: "حوزەیفە المەشهەدانی",
      workTitle: "پڕۆژە هەڵبژێردراوەکان",
      workLede: "تێڕوانینێکی نزیکتر لەو شتانەی دروستم کردوون.",
      galleryHint: "کلیک لە هەر شاشەیەک بکە بۆ گەورەکردن",
      expTitle: "ئەزموون",
      expLede: "کاری کرداری لەسەر هەموو خولەکە — ئەپ، API، بنکەدراوە، و بەرهەمهێنان.",
      expDizliRole: "گەشەپێدەری تەواو و مۆبایل",
      expDizliOrg: "دزلی · عێراق",
      expDizliDates: "حوزەیرانی 2026 – ئێستا",
      expDizli1:
        "ئەپی Flutter بۆ کڕیار و شۆفێر لەگەڵ ڕێگەپێدان، داواکاری، گەشت، جزدان، هەڵسەنگاندن، ئاگادارکردنەوە، و خزمەتگوزاری شوێن.",
      expDizli2:
        "APIـی Node.js / Express لەسەر PostgreSQL و Prisma و Redis و PostGIS بۆ شوێنپێهەڵگرتن، دابەشکردن، و تایبەتمەندی شوێنی.",
      expDizli3:
        "داشبۆردی Next.js؛ ئاگادارکردنەوەی Firebase؛ APIـی دەرەکی؛ Linux VPS لەگەڵ PM2 و Cloudflare و SSL.",
      expDizli4:
        "دروستکردنی iOS و Android لە سەرەتا تا کۆتایی، واژۆکردن، بڵاوکردنەوەی فرۆشگا، و چارەسەرکردنی بەرهەمهێنان.",
      expSsRole: "گەشەپێدەری تەواو",
      expSsOrg: "Software Solutions · عێراق",
      expSsDates: "تشرینی دووەمی 2023 – ئازاری 2025",
      expSs1:
        "گەیاندنی ئەپی وێبی بەرهەمهێنان بە React.js و Laravel و PHP و MySQL لەگەڵ تیمێکی فرەتایبەتمەندی.",
      expSs2:
        "دروستکردنی الریان (بازرگانی ئەلیکترۆنی Next.js) و مسواک (بازاڕی مۆڵ) لەگەڵ کاتالۆگ، کۆگا، و ڕێڕەوی کڕین.",
      expSs3:
        "بڵاوکردنەوەی Hala Chat — ئەپی نامەناردنی کاتی ڕاستەقینە بە Node.js و WebSockets و webhooks و تەلارسازی ڕووداومحور.",
      expSs4:
        "دیزاین و چاودێریکردنی schemaـی PostgreSQL، پرسیاری پێشکەوتوو، کۆچکردن، و یەکخستنی پشتەوە.",
      expFadshiRole: "گەشەپێدەری ڕووکاری Flutter",
      expFadshiOrg: "فەدشی",
      expFadshiDates: "نیسانی 2022 – تەممووزی 2023",
      expFadshi1:
        "گۆڕینی دیزاینی Figma بۆ شاشەی Flutterـی بەرهەمهێنان بۆ بازاڕێک کە کاڵای نوێ و بەکارهاتوو و بالە دەگرێتەوە.",
      expFadshi2:
        "دروستکردنی دۆزینەوەی بەرهەم، شوێنپێهەڵگرتنی داواکاری، جزدان، کشانەوە، و شیکاری فرۆشتن بە هێڵکاری.",
      expFadshi3:
        "هاوکاری لەسەر چاتی کاتی ڕاستەقینەی کڕیار–پشتگیری بە WebSockets / Socket.IO و بەڕێوەبردنی دۆخی پەیوەست بە REST.",
      expFadshi4:
        "یەکخستنی نەخشە و شوێن بۆ شوێنپێهەڵگرتنی کۆریەر و باشترکردنی وردی بە فلتەری GPS.",
      aboutLabel: "دەربارەی من",
      aboutTitle: "من حوزەیفەم — گەشەپێدەری تەواو و مۆبایل کە نەرمەکاڵا دەنێرم کە خەڵک پشتی پێ دەبەستن.",
      aboutP1:
        "گەشەپێدەری تەواو و مۆبایل بە ئەزموونی کرداری لە گەیاندنی ئەپی وێب و مۆبایلی بەرهەمهێنان — REST API، سیستەمی کاتی ڕاستەقینە، داشبۆردی بەڕێوەبردن، و خزمەتگوزاری شوێن — لە تەلارسازی و بنکەدراوەوە تا کارگێڕی سێرڤەری Linux و چارەسەرکردنی بەرهەمهێنان.",
      aboutP2:
        "ئەپی بازاڕی Flutter، بازرگانی ئەلیکترۆنی Next.js و Laravel بۆ براندە عێراقییەکان، بەرهەمی چاتی کاتی ڕاستەقینە، و ئێستا دزلی دروست کردووم — کە متمانەپێکراوی لەسەر مۆبایلی ئاسایی و تۆڕی ناسەقامگیر گرنگە وەک کۆدی پاک.",
      aboutDoTitle: "ئەوەی دەیکەم",
      aboutDoMobileTitle: "گەشەپێدانی مۆبایل",
      aboutDoMobileBody:
        "ئەپی Flutter و React Nativeـی فرەسەکۆ لەگەڵ BLoC/Riverpod، نەخشە، ئاگادارکردنەوە، و بڵاوکردنەوەی App Store / Play.",
      aboutDoBackendTitle: "پشتەوە و API",
      aboutDoBackendBody:
        "Node.js، Express، Laravel، PostgreSQL، Prisma، PostGIS، Redis، و سیستەمی شوێنی کاتی ڕاستەقینە.",
      aboutDoWebTitle: "وێب و داشبۆرد",
      aboutDoWebBody:
        "ڕووکاری کارگێڕی بە Next.js و TypeScript و Tailwind — لەگەڵ WordPress و Shopify و BigCommerce کاتێک پێویست بێت.",
      aboutDoOpsTitle: "بڵاوکردنەوە و کارگێڕی",
      aboutDoOpsBody:
        "Linux VPS، PM2، Docker، Cloudflare، SSL، کۆچکردن، و دۆزینەوەی کێشەی بەرهەمهێنان لە لۆگەکان.",
      aboutToolsTitle: "ئامرازەکانم",
      aboutBasedLabel: "نیشتەجێم لە",
      aboutBasedValue: "ئەسکەندەرییە، بابل، عێراق",
      aboutFocusLabel: "سەرنج",
      aboutFocusValue: "تەواو و مۆبایل",
      aboutNowLabel: "ئێستا",
      aboutNowValue: "دزلی دروست دەکەم",
      aboutLangLabel: "زمانەکان",
      aboutLangValue: "ئینگلیزی (ڕەوان)، عەرەبی (زمانی دایک)",
      viewCv: "سی ڤی ببینە",
      role: "ڕۆڵ",
      stack: "تەکنەلۆژیا",
      viewProject: "پڕۆژەکە ببینە",
      viewDetails: "وردەکارییەکان ببینە",
      liveProject: "پڕۆژەی زیندوو",
      visitProject: "سەردانی پڕۆژەکە بکە",
      footerPlace: "ئەسکەندەرییە، بابل، عێراق",
      footerRole: "گەشەپێدەری تەواو و مۆبایل",
      footerRights: "هەموو مافەکان پارێزراون.",
      footerNav: "پێپەڕە",
      lightboxClose: "داخستن",
      lightboxPrev: "وێنەی پێشوو",
      lightboxNext: "وێنەی دواتر",
      contactTitle: "با پێکەوە کار بکەین.",
      contactLead: "پڕۆژە، بیرۆکە، یان دەرفەتێکت لەبەرچاوە؟ پەیامێکم بۆ بنێرە.",
      contactCta: "پەیام بنێرە",
      contactAvailability: "بەردەستم بۆ دەرفەتی دوور و نێودەوڵەتی، کاری سەربەخۆ، و پڕۆژەی گرنگ.",
      socialEmail: "ئیمەیڵ",
      formName: "ناو",
      formEmail: "ئیمەیڵ",
      formMessage: "پەیام",
      formSubmit: "پەیام بنێرە",
      formSending: "ناردن\u2026",
      formSuccess: "پەیامەکە بە سەرکەوتوویی نێردرا. بەم زووانە وەڵامت دەدەمەوە.",
      formError: "ناردنی پەیامەکە سەرکەوتوو نەبوو. دووبارە هەوڵ بدە یان ڕاستەوخۆ ئیمەیڵم بۆ بنێرە.",
      formNameError: "تکایە ناوەکەت بنووسە.",
      formEmailError: "تکایە ئیمەیڵێکی دروست بنووسە.",
      formMessageError: "تکایە پەیامێک بنووسە.",
      backToTop: "بگەڕێوە سەرەوە",
      studyBack: "گەڕانەوە بۆ پۆرتفۆلیۆ",
      prevProject: "پڕۆژەی پێشوو",
      nextProject: "پڕۆژەی دواتر",
      studyPager: "گەشتکردن لە نێوان پڕۆژەکان",
      dizliIndex: "پڕۆژەی 01",
      dizliName: "دزلی",
      dizliLede:
        "پلاتفۆرمێکی فرەخزمەتگوزاری بۆ بازاڕی عێراق — تاکسی، گەیاندن، پۆستە، گواستنەوەی VIP، و کڕین — لە یەک ژینگەی کڕیار و شۆفێر.",
      dizliBody:
        "ئەپەکانی Flutter، APIـی Node.js، و داشبۆردی Next.js دروست دەکەم. ئەوە دابەشکردن، شوێنی کاتی ڕاستەقینە، ناوچەی PostGIS، جزدان، پارەدان، ئاگادارکردنەوە، و بڵاوکردنەوە بۆ App Store و Google Play دەگرێتەوە.",
      dizliRole: "گەشەپێدەری تەواو و مۆبایل",
      dizliFeat1: "ئەپی کڕیار و شۆفێر بۆ تاکسی، گەیاندن، پۆستە، VIP، و کڕین",
      dizliFeat2: "شوێنکەوتنی کاتی ڕاستەقینە، دابەشکردن، و خولی گەشت لەسەر Postgres + PostGIS",
      dizliFeat3: "جزدان، کۆمیسیۆن، هەڵسەنگاندن، و یەکخستنی پارەدان",
      dizliFeat4: "داشبۆردی بەڕێوەبردن، کارگێڕی VPS، و بڵاوکردنەوەی iOS / Android",
      dizliTitle: "دزلی — حوزەیفە المەشهەدانی",
      dizliDescription:
        "دزلی پلاتفۆرمێکی فرەخزمەتگوزاری گواستنەوە و گەیاندنە بە ئەپی Flutter، APIـی Node.js، PostGIS، Firebase، و داشبۆردی Next.js.",
      dizliStudyLede:
        "سوپەر ئەپێکی فرەخزمەتگوزاری بۆ بازاڕی عێراق — تاکسی، گەیاندن، پۆستە، VIP، و کڕین — کە کڕیار و شۆفێر پێکەوە دەبەستێتەوە.",
      dizliHeroAlt: "سەرەتای ئەپی کڕیاری دزلی: خزمەتگوزارییەکان، داواکردنی گەشت، و چالاکی دوایی.",
      dizliOverview: "گشتی",
      dizliOverview1:
        "دزلی پلاتفۆرمێکی فرەخزمەتگوزارییە بۆ بازاڕی عێراق. کڕیار تاکسی، گەیاندن، پۆستە، VIP، یان کڕین لە ئەپێکەوە داوا دەکات. شۆفێر ئەو کارانە لە ئەپێکی دیکەوە وەردەگرێت. لە نێوانیاندا APIـی Node.js، PostgreSQL لەگەڵ PostGIS، و داشبۆردی Next.js هەیە.",
      dizliOverview2:
        "لەسەر هەموو ستاکەکە کاردەکەم: ئەپی Flutter، REST APIـی TypeScript، شوێن و دابەشکردنی کاتی ڕاستەقینە، جزدان و پارەدان، ئاگادارکردنەوە، کارگێڕی VPS، و بڵاوکردنەوەی فرۆشگا.",
      dizliFeatures: "تایبەتمەندییەکان",
      dizliFeatTitle1: "سەرەتای کڕیار.",
      dizliFeatBody1: "خزمەتگوزارییەکان، باڵانسی جزدان، گەڕان، و داواکارییە دواییەکان لە یەک شاشەدا.",
      dizliFeatTitle2: "گەشت و گەیاندن.",
      dizliFeatBody2: "داواکردنی تاکسی، پشتڕاستکردنەوەی هەڵگرتن و دابەزین، یان ناردنی لیستی کڕین بۆ فرۆشگایەکی نزیک.",
      dizliFeatTitle3: "ئەپی شۆفێر.",
      dizliFeatBody3: "سەرهێڵبوون، بینینی کارە نزیکەکان، شوێنکەوتنی نەخشە، و پوختەیەکی ڕۆژانەی گەشت و گەیاندن.",
      dizliFeatTitle4: "کاتی ڕاستەقینە و ناوچە.",
      dizliFeatBody4: "شوێنی زیندووی شۆفێر، دۆخی گەشت، نرخ بەپێی مەودا، و ناوچەی خزمەتگوزاری PostGIS.",
      dizliFeatTitle5: "جزدان و پارەدان.",
      dizliFeatBody5: "جزدانی کۆمیسیۆنی شۆفێر، وردەکاری کرێ، و یەکخستنی پارەدانی دەرەکی.",
      dizliFeatTitle6: "بەڕێوەبردن و بڵاوکردنەوە.",
      dizliFeatBody6: "داشبۆردی کارگێڕی Next.js، ئاگادارکردنەوەی FCM، و ناردن بۆ فرۆشگاکانی iOS و Android.",
      dizliScreens: "شاشەکان",
      dizliScreensNote: "کلیک لە هەر وێنەیەک بکە بۆ بینینی بە قەبارەی تەواو.",
      dizliMyRole: "ڕۆڵی من",
      dizliRole1:
        "من گەشەپێدەری تەواو و مۆبایلم لە دزلی. ئەپی کڕیار، ئەپی شۆفێر، APIـی پشتەوە، و داشبۆردی بەڕێوەبردن جێبەجێ دەکەم.",
      dizliRole2:
        "ئەوە شاشەی Flutter، خاڵەکانی REST لە Node.js و TypeScript، PostgreSQL/PostGIS لە ڕێگەی Prisma، پەیامی Firebase، گرێدانی پارەدان، Linux VPS لەگەڵ PM2، و بڵاوکردنەوەی فرۆشگا دەگرێتەوە. دەقی بازاڕکردن یان ژمارەکانی گەشە بە کاری خۆم نازانم.",
      dizliTech: "تەکنەلۆژیاکان",
      dizliDev: "گەشەپێدان",
      dizliDev1:
        "قورسییەکە لەسەر یەک داواکاری دوو کڵایەنت ڕاگریت. داواکاری کڕیار دەبێت بۆ شۆفێر دەربکەوێت، قبوڵکردن و هەڵوەشاندن تێپەڕێنێت، و لە گفتوگۆ و کرێ و جزدان و ئاگادارکردنەوەدا یەکگرتوو بمێنێتەوە.",
      dizliDev2:
        "نەخشە و «سەرهێڵبوون» دەبێت لەسەر مۆبایلی ئاسایی ئەندرۆید و تۆڕی ناسەقامگیر کار بکەن. هەردوو ئەپەکە عەرەبی-یەکەمن و RTLـن. دۆخی داواکاری لە Postgres لەگەڵ PostGIS بۆ ناوچەکان دەژی؛ ئەپەکان لێی دەخوێننەوە لەبری دووبارەکردنەوەی یاساکانی کار.",
      dizliCta: "حەزت لە پڕۆژەکە هەیە؟",
      dizliAltCustomerHome: "سەرەتای کڕیاری دزلی: خزمەتگوزارییەکان، جزدان، و داواکارییە دواییەکان.",
      dizliAltDriverHome: "سەرەتای شۆفێری دزلی: پوختەی ڕۆژانە و کارە هاتووەکان.",
      dizliAltChat: "گفتوگۆی ناو ئەپی دزلی لە نێوان کڕیار و شۆفێر.",
      dizliAltDriverMap: "نەخشەی شۆفێری دزلی لەگەڵ دۆخی سەرهێڵ.",
      dizliAltDriverWallet: "جزدانی شۆفێری دزلی و هەڵبژاردەکانی پڕکردنەوە.",
      dizliAltWeb: "ماڵپەڕی گشتیی دزلی لەگەڵ ئەپی کڕیار لەسەر مۆبایل.",
      dizliAltRideRequest: "ئەپی کڕیاری دزلی: داواکردنی گەشت و پۆلەکانی خزمەتگوزاری.",
      dizliAltConfirm: "پشتڕاستکردنەوەی داواکاری دزلی لەگەڵ شوێنی گەیاندن و کرێ.",
      dizliAltErrand: "داواکاری کڕین لە دزلی: هەڵبژاردنی فرۆشگا و لیستی کڕین.",
      dizliAltDriverProfile: "پڕۆفایلی شۆفێری دزلی لەگەڵ هەڵسەنگاندن و مێژووی گەشت.",
      dizliAltDriverAccount: "هەژماری شۆفێری دزلی و وێنەی ئۆتۆمبێل.",
      dizliAltSignup: "گرتنی وێنەی ناسنامە لە کاتی تۆمارکردنی شۆفێری دزلی.",
      dizliAltCustomerHomeShort: "سەرەتای کڕیاری دزلی لەگەڵ خزمەتگوزاری و داواکارییە دواییەکان.",
      dizliAltDriverHomeShort: "سەرەتای شۆفێری دزلی لەگەڵ پوختەی ڕۆژانە.",
      dizliAltChatShort: "گفتوگۆی ناو ئەپی دزلی لەسەر داواکارییەکی چالاک.",
      dizliAltDriverMapShort: "نەخشەی شۆفێری دزلی و دوگمەی سەرهێڵ.",
      dizliAltConfirmShort: "پشتڕاستکردنەوەی داواکاری دزلی و کرێ.",
      dizliAltDriverWalletShort: "جزدانی شۆفێری دزلی.",
      dizliAltWebShort: "ماڵپەڕی گشتیی دزلی.",
      dizliAltErrandShort: "لیستی کڕین بۆ کارێک لە دزلی.",
      dizliAltDriverProfileShort: "پڕۆفایلی شۆفێری دزلی و هەڵسەنگاندن.",
      dizliAltDriverAccountShort: "هەژماری شۆفێری دزلی و ئۆتۆمبێل.",
      dizliAltRideShort: "شاشەی داواکردنی گەشتی کڕیاری دزلی.",
      monaIndex: "پڕۆژەی 02",
      monaName: "مۆناسەباتی",
      monaLede:
        "ئەپێکی React Native کە یارمەتی بەکارهێنەران دەدات هۆڵی هاوسەرگیری و شوێنی بۆنەکان بدۆزنەوە، بەراوردی بکەن، و حجز بکەن.",
      monaBody:
        "پلاتفۆرمەکە لەسەر ئاسانکردنی دۆزینەوەی شوێن جەخت دەکاتەوە لە ڕێگەی گەڕان، فلتەر، وردەکاری شوێن، وێنە، هەڵسەنگاندن، و حجز. من ئەپی React Nativeـم نووسی.",
      monaRole: "گەشەپێدانی React Native",
      monaFeat1: "گەڕان و فلتەر بۆ هۆڵ و شوێنی بۆنەکان",
      monaFeat2: "پەڕەی شوێن لەگەڵ وێنە، شوێن، و گنجایش",
      monaFeat3: "هەڵسەنگاندن لەسەر لیستی هۆڵەکان",
      monaFeat4: "داواکاری حجز لە شاشەی شوێنەکە",
      monaTitle: "مۆناسەباتی — حوزەیفە المەشهەدانی",
      monaDescription:
        "مۆناسەباتی ئەپێکی React Nativeـە بۆ دۆزینەوە و حجزی هۆڵی هاوسەرگیری و شوێنی بۆنەکان لە عێراق.",
      monaStudyLede: "ئەپێکی React Native بۆ دۆزینەوە و حجزی هۆڵی هاوسەرگیری و شوێنی بۆنەکان لە عێراق.",
      monaHeroAlt: "شاشەی سەرەتای مۆناسەباتی لەگەڵ گەڕان و هۆڵە دیارەکان.",
      monaOverview: "گشتی",
      monaOverview1:
        "خێزانەکانی عێراق زۆرجار هۆڵی هاوسەرگیری بە قسەی خەڵک دەدۆزنەوە. مۆناسەباتی ئەو گەڕانە دەخاتە سەر مۆبایل: هۆڵەکان بگەڕێ، بەپێی شوێن فلتەر بکە، پەڕەی شوێنەکە بکەرەوە، و داواکاری حجز بنێرە.",
      monaOverview2:
        "ئەپێکە بۆ دۆزینەوەی شوێن و حجز، نەک کۆمەڵەیەکی تەواوی پلاندانانی بۆنە. من ئەپی React Nativeـم دروست کرد — ئەو شاشانەی خەڵک بۆ گەڕان، بەراورد، و حجز بەکاری دەهێنن.",
      monaFeatures: "تایبەتمەندییەکان",
      monaFeatTitle1: "سەرەتا.",
      monaFeatBody1: "گەڕان، فلتەری پارێزگا، و لیستێکی کورت لە هۆڵە دیارەکان.",
      monaFeatTitle2: "گەڕان و فلتەر.",
      monaFeatBody2: "گەڕان بە شوێنە بەردەستەکان لەگەڵ نرخ، شوێن، و گنجایش لەسەر کارتی لیست.",
      monaFeatTitle3: "وردەکاری شوێن.",
      monaFeatBody3: "وێنە، وەسف، هەڵسەنگاندن، و کرداری حجز لە یەک شاشەدا.",
      monaFeatTitle4: "حجز.",
      monaFeatBody4: "داواکاری لە پەڕەی شوێنەکەوە بنێرە لەبری دەرچوون لە ئەپ بۆ پەیوەندیکردن.",
      monaScreens: "شاشەکان",
      monaScreensNote: "کلیک لە هەر وێنەیەک بکە بۆ بینینی بە قەبارەی تەواو.",
      monaMyRole: "ڕۆڵی من",
      monaRole1:
        "ئەپی React Nativeـم گەشە پێدا. شاشەکانی ئەم لێکۆڵینەوەیە — سەرەتا، گەڕان، و وردەکاری شوێن — ئەو ڕووکارەن کە کاریان لەسەر کردووە.",
      monaTech: "تەکنەلۆژیاکان",
      monaDev: "گەشەپێدان",
      monaDev1:
        "ئەپەکە عەرەبی-یەکەم و RTLـە، لەگەڵ کارتێکی چڕی شوێن کە هێشتا دەبێت لەسەر مۆبایلێکی بچووک بەڕوونی بخوێنرێتەوە: وێنە، ناو، شوێن، نرخ، گنجایش.",
      monaDev2:
        "گەڕان و فلتەر دەبێت سووک بن. پەڕەی شوێنەکان پێویستیان بە وێنەیە بەبێ وەستاندنی لیست. کرداری حجز لە هەمان شاشەی وردەکارییەکانە تا کەسێک نەگەڕێت بە دوایدا.",
      monaCta: "حەزت لە پڕۆژەکە هەیە؟",
      monaAltHome: "سەرەتای مۆناسەباتی: گەڕان، فلتەری پارێزگا، و هۆڵە دیارەکان.",
      monaAltSearch: "لیستی شوێنەکانی مۆناسەباتی لەگەڵ گەڕان، فلتەر، نرخ، و گنجایش.",
      monaAltVenue: "وردەکاری شوێنی مۆناسەباتی لەگەڵ وێنە و کرداری حجز.",
      monaAltHero: "ناوەوەی هۆڵێکی بۆنە لە ماڵپەڕی مۆناسەباتی.",
      monaAltHomeShort: "شاشەی سەرەتای مۆناسەباتی.",
      monaAltSearchShort: "گەڕان و لیستی شوێنەکانی مۆناسەباتی.",
      monaAltVenueShort: "وردەکاری شوێن و حجزی مۆناسەباتی.",
      monaAltHeroShort: "وێنەی هۆڵی بۆنە لە ماڵپەڕی مۆناسەباتی.",
    },
  };

  const META = {
    home: ["homeTitle", "homeDescription", "homeOgTitle", "homeOgDescription"],
    dizli: ["dizliTitle", "dizliDescription"],
    monasabate: ["monaTitle", "monaDescription"],
  };

  function normalize(lang) {
    return LANGS.includes(lang) ? lang : "en";
  }

  function readStored() {
    try {
      return normalize(localStorage.getItem(STORAGE_KEY));
    } catch (err) {
      return "en";
    }
  }

  function store(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* ignore quota / private mode */
    }
  }

  function t(lang, key) {
    const table = I18N[lang] || I18N.en;
    return table[key] != null ? table[key] : I18N.en[key] || "";
  }

  function setDocumentLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = RTL[lang] ? "rtl" : "ltr";
    html.classList.toggle("is-rtl", Boolean(RTL[lang]));
  }

  function applyMeta(lang) {
    const page = document.documentElement.dataset.page || "home";
    const keys = META[page] || META.home;
    const titleKey = keys[0];
    const descKey = keys[1];
    const ogTitleKey = keys[2] || titleKey;
    const ogDescKey = keys[3] || descKey;

    document.title = t(lang, titleKey);

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t(lang, descKey));

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t(lang, ogTitleKey));

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t(lang, ogDescKey));
  }

  function applyJsonLd(lang) {
    const node = document.querySelector('script[type="application/ld+json"]');
    if (!node) return;
    try {
      const data = JSON.parse(node.textContent);
      data.name = t(lang, "name");
      data.jobTitle = t(lang, "heroRole");
      node.textContent = JSON.stringify(data);
    } catch (err) {
      /* leave original JSON-LD */
    }
  }

  function applyText(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(lang, key);
      if (value) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      const value = t(lang, key);
      if (value) el.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      const value = t(lang, key);
      if (value) el.setAttribute("aria-label", value);
    });
  }

  function syncSwitcher(lang) {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      if (active) btn.setAttribute("aria-current", "true");
      else btn.removeAttribute("aria-current");
    });
  }

  function apply(lang) {
    const next = normalize(lang);
    setDocumentLanguage(next);
    applyText(next);
    applyMeta(next);
    applyJsonLd(next);
    syncSwitcher(next);
    document.documentElement.classList.remove("i18n-pending");
    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: next } }));
  }

  function setLang(lang) {
    const next = normalize(lang);
    store(next);
    apply(next);
  }

  function bindSwitcher() {
    document.querySelectorAll("[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  const current = readStored();
  setDocumentLanguage(current);

  const start = () => {
    apply(current);
    bindSwitcher();
  };

  if (document.body) {
    start();
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  window.PortfolioI18n = { setLang, getLang: readStored, t };
})();
