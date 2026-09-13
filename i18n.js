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
      navAbout: "About",
      navContact: "Contact",
      langLabel: "Language",
      homeTitle: "Huzaifa Al-Mashhadani — Full-stack developer",
      homeDescription:
        "Huzaifa Al-Mashhadani is a full-stack developer in Babylon, Iraq. He builds transportation software, operations systems, and web products that companies actually run on.",
      homeOgTitle: "Huzaifa Al-Mashhadani — Full-stack developer",
      homeOgDescription:
        "I build software that companies in Iraq actually run on — transportation, commerce, and internal operations.",
      heroLocation: "Babylon, Iraq",
      heroRole: "Full-stack developer",
      heroLead:
        "I build software that companies in Iraq actually run on — transportation, commerce, and internal operations. Interfaces, APIs, databases, and the mobile apps that sit on top.",
      heroWork: "Selected work",
      heroContact: "Contact me",
      photoAlt: "Huzaifa Al-Mashhadani",
      workTitle: "Selected Projects",
      workLede: "A closer look at some of the things I've built.",
      aboutLabel: "About Me",
      aboutTitle: "I'm Huzaifa, a software developer who likes building things that people actually use.",
      aboutP1:
        "I build mobile and web applications with a focus on clean interfaces, practical architecture, and reliable software.",
      aboutP2:
        "I enjoy taking an idea from an early concept and turning it into a working product, from the user interface to the backend systems behind it.",
      aboutDoTitle: "What I do",
      aboutDoMobileTitle: "Mobile Development",
      aboutDoMobileBody: "Building cross-platform mobile applications with Flutter and React Native.",
      aboutDoBackendTitle: "Backend Development",
      aboutDoBackendBody: "Building APIs, services, authentication, databases, and application logic.",
      aboutDoProductTitle: "Product Development",
      aboutDoProductBody: "Working across the product to turn ideas into functional, usable software.",
      aboutDoUiTitle: "UI & UX",
      aboutDoUiBody: "Creating interfaces that are clean, practical, and easy to understand.",
      aboutToolsTitle: "Tools I work with",
      aboutBasedLabel: "Based in",
      aboutBasedValue: "Iraq",
      aboutFocusLabel: "Focus",
      aboutFocusValue: "Mobile & Full-Stack Development",
      aboutNowLabel: "Currently",
      aboutNowValue: "Building and improving real-world products",
      viewCv: "View CV",
      role: "Role",
      stack: "Stack",
      viewProject: "View Project",
      viewDetails: "View Details",
      liveProject: "Live Project",
      visitProject: "Visit Project",
      footerPlace: "Al-Iskandariyah, Babylon, Iraq",
      footerRole: "Software Developer",
      footerRights: "All rights reserved.",
      footerNav: "Footer",
      lightboxClose: "Close",
      lightboxPrev: "Previous image",
      lightboxNext: "Next image",
      contactTitle: "Let's work together.",
      contactLead: "Have a project, idea, or opportunity in mind? Send me a message.",
      contactCta: "Send a Message",
      contactAvailability: "Available for freelance work and interesting opportunities.",
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
        "A ride-hailing and delivery platform that connects customers with drivers through mobile applications and supporting backend services.",
      dizliBody:
        "I built the customer app, the driver app, and the Node.js API they share. The work covers requesting rides and deliveries, matching those jobs to drivers, maps, in-app chat, and a wallet.",
      dizliRole: "Full-stack development",
      dizliFeat1: "Customer app for rides, deliveries, and related local services",
      dizliFeat2: "Driver app for going online, accepting jobs, and maps",
      dizliFeat3: "In-app chat on an active order",
      dizliFeat4: "Wallet, fares, and order confirmation",
      dizliTitle: "Dizli — Huzaifa Al-Mashhadani",
      dizliDescription:
        "Dizli is a ride-hailing and delivery platform with customer and driver apps, built with Flutter, Node.js, TypeScript, PostgreSQL, and Prisma.",
      dizliStudyLede:
        "A ride-hailing and delivery platform connecting customers with drivers in Samawah, Iraq.",
      dizliHeroAlt: "Dizli customer app home: services, a ride request, and recent activity.",
      dizliOverview: "Overview",
      dizliOverview1:
        "Dizli is a local mobility and delivery product. Customers book a ride or send an errand through one app. Drivers pick up those jobs through another. A Node.js API and a PostgreSQL database sit in the middle.",
      dizliOverview2:
        "It is built for everyday use in Samawah — taxis, deliveries, and a few related services — not as a national marketplace. I work on the software: the two Flutter apps, the TypeScript API, and the data model.",
      dizliFeatures: "Features",
      dizliFeatTitle1: "Customer home.",
      dizliFeatBody1: "Services, wallet balance, search, and recent orders on one screen.",
      dizliFeatTitle2: "Rides and deliveries.",
      dizliFeatBody2:
        "Request a taxi, confirm pickup and drop-off, or send a shopping list to a nearby store.",
      dizliFeatTitle3: "Driver app.",
      dizliFeatBody3:
        "Go online, see nearby jobs, follow a map, and keep a daily summary of trips and deliveries.",
      dizliFeatTitle4: "Chat.",
      dizliFeatBody4: "Customer and driver can message on an active order.",
      dizliFeatTitle5: "Wallet.",
      dizliFeatBody5: "Balance, top-up, and a fare breakdown before the order is confirmed.",
      dizliFeatTitle6: "Driver profile.",
      dizliFeatBody6: "Ratings, trip counts, and vehicle details visible to the customer.",
      dizliScreens: "Screens",
      dizliScreensNote: "Click any image to open it full size.",
      dizliMyRole: "My role",
      dizliRole1:
        "I am the software developer on Dizli. I implement the customer app, the driver app, and the backend they talk to.",
      dizliRole2:
        "That includes screens and navigation in Flutter, REST endpoints in Node.js and TypeScript, and the PostgreSQL schema through Prisma — orders, users, drivers, wallet entries, and chat. I do not claim the marketing site copy or growth numbers as my work.",
      dizliTech: "Technologies",
      dizliDev: "Development",
      dizliDev1:
        "The hard part is keeping two clients on one order. A customer request has to show up for a driver, survive accept/cancel, and remain consistent in chat, fare, and wallet.",
      dizliDev2:
        "Maps and “going online” have to work on ordinary Android phones and uneven networks. Both apps are Arabic-first and RTL. I kept the API small and explicit — order state lives in Postgres, and the apps read from that — instead of duplicating business rules in each client.",
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
      navAbout: "نبذة",
      navContact: "تواصل",
      langLabel: "اللغة",
      homeTitle: "حذيفة المشهداني — مطوّر شامل",
      homeDescription:
        "حذيفة المشهداني مطوّر شامل في بابل، العراق. يبني برمجيات النقل وأنظمة التشغيل ومنتجات الويب التي تعتمد عليها الشركات فعليًا.",
      homeOgTitle: "حذيفة المشهداني — مطوّر شامل",
      homeOgDescription:
        "أبني برمجيات تعتمد عليها شركات في العراق فعليًا — في النقل، والتجارة، والعمليات الداخلية.",
      heroLocation: "بابل، العراق",
      heroRole: "مطوّر شامل",
      heroLead:
        "أبني برمجيات تعتمد عليها شركات في العراق فعليًا — في النقل، والتجارة، والعمليات الداخلية. الواجهات، وواجهات API، وقواعد البيانات، وتطبيقات الجوال التي تعمل فوقها.",
      heroWork: "أعمال مختارة",
      heroContact: "تواصل معي",
      photoAlt: "حذيفة المشهداني",
      workTitle: "مشاريع مختارة",
      workLede: "نظرة أقرب على بعض ما بنيته.",
      aboutLabel: "نبذة عني",
      aboutTitle: "أنا حذيفة، مطوّر برمجيات يحب بناء أشياء يستخدمها الناس فعلًا.",
      aboutP1:
        "أبني تطبيقات للجوال والويب، وأركّز على واجهات نظيفة، وهيكل عملي، وبرمجيات يمكن الاعتماد عليها.",
      aboutP2:
        "أستمتع بأخذ الفكرة من بدايتها وتحويلها إلى منتج يعمل: من واجهة المستخدم إلى الأنظمة التي تقف خلفها.",
      aboutDoTitle: "ما أعمل عليه",
      aboutDoMobileTitle: "تطوير الجوال",
      aboutDoMobileBody: "بناء تطبيقات جوال متعددة المنصات بـ Flutter وReact Native.",
      aboutDoBackendTitle: "تطوير الجهة الخلفية",
      aboutDoBackendBody: "بناء واجهات API والخدمات والمصادقة وقواعد البيانات ومنطق التطبيق.",
      aboutDoProductTitle: "تطوير المنتج",
      aboutDoProductBody: "العمل عبر المنتج لتحويل الأفكار إلى برمجيات تعمل ويسهل استخدامها.",
      aboutDoUiTitle: "الواجهة والتجربة",
      aboutDoUiBody: "تصميم واجهات نظيفة وعملية وسهلة الفهم.",
      aboutToolsTitle: "الأدوات التي أعمل بها",
      aboutBasedLabel: "أقيم في",
      aboutBasedValue: "العراق",
      aboutFocusLabel: "التركيز",
      aboutFocusValue: "الجوال والتطوير الشامل",
      aboutNowLabel: "حاليًا",
      aboutNowValue: "أبني منتجات حقيقية وأحسّنها",
      viewCv: "عرض السيرة",
      role: "الدور",
      stack: "التقنيات",
      viewProject: "عرض المشروع",
      viewDetails: "عرض التفاصيل",
      liveProject: "المشروع المباشر",
      visitProject: "زيارة المشروع",
      footerPlace: "الإسكندرية، بابل، العراق",
      footerRole: "مطوّر برمجيات",
      footerRights: "جميع الحقوق محفوظة.",
      footerNav: "تذييل الصفحة",
      lightboxClose: "إغلاق",
      lightboxPrev: "الصورة السابقة",
      lightboxNext: "الصورة التالية",
      contactTitle: "لنعمل معًا.",
      contactLead: "لديك مشروع أو فكرة أو فرصة في بالك؟ أرسل لي رسالة.",
      contactCta: "أرسل رسالة",
      contactAvailability: "متاح للعمل الحر والفرص الجديرة بالاهتمام.",
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
        "منصة لخدمات النقل وتوصيل الطلبات، تربط الزبائن بالسائقين عبر تطبيقات الجوال وخدمات خلفية داعمة.",
      dizliBody:
        "بنيت تطبيق الزبون، وتطبيق السائق، وواجهة Node.js التي يشتركان فيها. يشمل العمل طلب الرحلات والتوصيل، ومطابقة الطلبات مع السائقين، والخرائط، والدردشة داخل التطبيق، والمحفظة.",
      dizliRole: "تطوير شامل",
      dizliFeat1: "تطبيق للزبون يغطي الرحلات والتوصيل وخدمات محلية مرتبطة",
      dizliFeat2: "تطبيق للسائق لتسجيل الدخول للعمل وقبول الطلبات والخرائط",
      dizliFeat3: "دردشة داخل التطبيق على الطلب النشط",
      dizliFeat4: "محفظة وأجور وتأكيد الطلب",
      dizliTitle: "دزلي — حذيفة المشهداني",
      dizliDescription:
        "دزلي منصة للنقل وتوصيل الطلبات بتطبيقين للزبون والسائق، مبنية بـ Flutter وNode.js وTypeScript وPostgreSQL وPrisma.",
      dizliStudyLede: "منصة للنقل وتوصيل الطلبات تربط الزبائن بالسائقين في السماوة، العراق.",
      dizliHeroAlt: "الشاشة الرئيسية لتطبيق زبون دزلي: الخدمات وطلب رحلة والنشاط الأخير.",
      dizliOverview: "نظرة عامة",
      dizliOverview1:
        "دزلي منتج محلي للتنقل والتوصيل. يحجز الزبون رحلة أو يرسل مشوارًا من تطبيق، ويستلم السائق هذه الطلبات من تطبيق آخر. في الوسط واجهة Node.js وقاعدة PostgreSQL.",
      dizliOverview2:
        "بني للاستخدام اليومي في السماوة — سيارات أجرة، وتوصيل، وبعض الخدمات المرتبطة — لا كسوق وطني. أعمل على البرمجيات: تطبيقي Flutter، وواجهة TypeScript، ونموذج البيانات.",
      dizliFeatures: "المزايا",
      dizliFeatTitle1: "الشاشة الرئيسية للزبون.",
      dizliFeatBody1: "الخدمات ورصيد المحفظة والبحث والطلبات الأخيرة في شاشة واحدة.",
      dizliFeatTitle2: "الرحلات والتوصيل.",
      dizliFeatBody2: "طلب سيارة أجرة، وتأكيد نقطتي الانطلاق والوصول، أو إرسال قائمة مشتريات إلى متجر قريب.",
      dizliFeatTitle3: "تطبيق السائق.",
      dizliFeatBody3: "الدخول للعمل، ورؤية الطلبات القريبة، ومتابعة الخريطة، وملخص يومي للرحلات والتوصيل.",
      dizliFeatTitle4: "الدردشة.",
      dizliFeatBody4: "يتراسل الزبون والسائق على الطلب النشط.",
      dizliFeatTitle5: "المحفظة.",
      dizliFeatBody5: "الرصيد والتعبئة وتفصيل الأجرة قبل تأكيد الطلب.",
      dizliFeatTitle6: "ملف السائق.",
      dizliFeatBody6: "التقييمات وعدد الرحلات وتفاصيل المركبة ظاهرة للزبون.",
      dizliScreens: "الشاشات",
      dizliScreensNote: "اضغط على أي صورة لفتحها بالحجم الكامل.",
      dizliMyRole: "دوري",
      dizliRole1:
        "أنا المطوّر البرمجي في دزلي. أنفّذ تطبيق الزبون، وتطبيق السائق، والجهة الخلفية التي يتحدثان إليها.",
      dizliRole2:
        "يشمل ذلك الشاشات والتنقل في Flutter، ونقاط REST في Node.js وTypeScript، ومخطط PostgreSQL عبر Prisma — الطلبات والمستخدمون والسائقون وقيود المحفظة والدردشة. لا أنسب لي نصوص الموقع التسويقي أو أرقام النمو.",
      dizliTech: "التقنيات",
      dizliDev: "التطوير",
      dizliDev1:
        "الصعوبة في الإبقاء على عميلين على طلب واحد. طلب الزبون يجب أن يظهر للسائق، ويصمد أمام القبول والإلغاء، ويبقى متسقًا في الدردشة والأجرة والمحفظة.",
      dizliDev2:
        "الخرائط و«الدخول للعمل» يجب أن تعمل على هواتف أندرويد عادية وشبكات غير مستقرة. التطبيقان عربيان أولًا ويدعمان RTL. أبقيت واجهة API صغيرة وصريحة — حالة الطلب تعيش في Postgres والتطبيقان يقرآن منها — بدل تكرار قواعد العمل في كل عميل.",
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
      navAbout: "دەربارە",
      navContact: "پەیوەندی",
      langLabel: "زمان",
      homeTitle: "حوزەیفە المەشهەدانی — گەشەپێدەری تەواو",
      homeDescription:
        "حوزەیفە المەشهەدانی گەشەپێدەری تەواوە لە بابل، عێراق. نەرمەکاڵای گواستنەوە، سیستەمی کارگێڕی، و بەرهەمی وێب دروست دەکات کە کۆمپانیاکان بەڕاستی کاری پێ دەکەن.",
      homeOgTitle: "حوزەیفە المەشهەدانی — گەشەپێدەری تەواو",
      homeOgDescription:
        "نەرمەکاڵا دروست دەکەم کە کۆمپانیاکانی عێراق بەڕاستی کاری پێ دەکەن — گواستنەوە، بازرگانی، و کاروباری ناوخۆ.",
      heroLocation: "بابل، عێراق",
      heroRole: "گەشەپێدەری تەواو",
      heroLead:
        "نەرمەکاڵا دروست دەکەم کە کۆمپانیاکانی عێراق بەڕاستی کاری پێ دەکەن — گواستنەوە، بازرگانی، و کاروباری ناوخۆ. ڕووکارەکان، APIـەکان، بنکەدراوەکان، و ئەپە مۆبایلەکان کە لەسەریان دەوەستن.",
      heroWork: "کارە هەڵبژێردراوەکان",
      heroContact: "پەیوەندیم پێوە بکە",
      photoAlt: "حوزەیفە المەشهەدانی",
      workTitle: "پڕۆژە هەڵبژێردراوەکان",
      workLede: "تێڕوانینێکی نزیکتر لەو شتانەی دروستم کردوون.",
      aboutLabel: "دەربارەی من",
      aboutTitle: "من حوزەیفەم، گەشەپێدەری نەرمەکاڵام و حەزم لە دروستکردنی شتێکە کە خەڵک بەڕاستی بەکاری بهێنن.",
      aboutP1:
        "ئەپی مۆبایل و وێب دروست دەکەم، بە جەخت لەسەر ڕووکاری پاک، تەلارسازیی کرداری، و نەرمەکاڵایەکی متمانەپێکراو.",
      aboutP2:
        "حەزم لەوەیە بیرۆکەیەک لە سەرەتاوە بگۆڕم بۆ بەرهەمێکی کارا، لە ڕووکاری بەکارهێنەرەوە تا سیستەمەکانی پشتەوە.",
      aboutDoTitle: "ئەوەی دەیکەم",
      aboutDoMobileTitle: "گەشەپێدانی مۆبایل",
      aboutDoMobileBody: "دروستکردنی ئەپی مۆبایلی فرەسەکۆ بە Flutter و React Native.",
      aboutDoBackendTitle: "گەشەپێدانی پشتەوە",
      aboutDoBackendBody: "دروستکردنی API، خزمەتگوزاری، ڕێگەپێدان، بنکەدراوە، و لۆژیکی ئەپ.",
      aboutDoProductTitle: "گەشەپێدانی بەرهەم",
      aboutDoProductBody: "کارکردن لەسەر هەموو بەرهەمەکە بۆ گۆڕینی بیرۆکە بۆ نەرمەکاڵایەکی بەکارهێنراو.",
      aboutDoUiTitle: "ڕووکار و ئەزموون",
      aboutDoUiBody: "دروستکردنی ڕووکارێکی پاک، کرداری، و ئاسان بۆ تێگەیشتن.",
      aboutToolsTitle: "ئامرازەکانم",
      aboutBasedLabel: "نیشتەجێم لە",
      aboutBasedValue: "عێراق",
      aboutFocusLabel: "سەرنج",
      aboutFocusValue: "مۆبایل و گەشەپێدانی تەواو",
      aboutNowLabel: "ئێستا",
      aboutNowValue: "بەرهەمی ڕاستەقینە دروست دەکەم و باشتری دەکەم",
      viewCv: "سی ڤی ببینە",
      role: "ڕۆڵ",
      stack: "تەکنەلۆژیا",
      viewProject: "پڕۆژەکە ببینە",
      viewDetails: "وردەکارییەکان ببینە",
      liveProject: "پڕۆژەی زیندوو",
      visitProject: "سەردانی پڕۆژەکە بکە",
      footerPlace: "ئەسکەندەرییە، بابل، عێراق",
      footerRole: "گەشەپێدەری نەرمەکاڵا",
      footerRights: "هەموو مافەکان پارێزراون.",
      footerNav: "پێپەڕە",
      lightboxClose: "داخستن",
      lightboxPrev: "وێنەی پێشوو",
      lightboxNext: "وێنەی دواتر",
      contactTitle: "با پێکەوە کار بکەین.",
      contactLead: "پڕۆژە، بیرۆکە، یان دەرفەتێکت لەبەرچاوە؟ پەیامێکم بۆ بنێرە.",
      contactCta: "پەیام بنێرە",
      contactAvailability: "بەردەستم بۆ کاری سەربەخۆ و دەرفەتی گرنگ.",
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
        "پلاتفۆرمێک بۆ گواستنەوە و گەیاندن کە کڕیار و شۆفێر لە ڕێگەی ئەپی مۆبایل و خزمەتگوزارییەکانی پشتەوە پێکەوە دەبەستێتەوە.",
      dizliBody:
        "ئەپی کڕیار، ئەپی شۆفێر، و APIـی Node.jsـم دروست کرد کە پێکەوە بەکاری دەهێنن. کارەکە داواکردنی گەشت و گەیاندن، هاوتاکردنی کارەکان لەگەڵ شۆفێرەکان، نەخشە، گفتوگۆی ناو ئەپ، و جزدان دەگرێتەوە.",
      dizliRole: "گەشەپێدانی تەواو",
      dizliFeat1: "ئەپی کڕیار بۆ گەشت، گەیاندن، و خزمەتگوزارییە ناوخۆییە پەیوەندیدارەکان",
      dizliFeat2: "ئەپی شۆفێر بۆ سەرهێڵبوون، وەرگرتنی کار، و نەخشە",
      dizliFeat3: "گفتوگۆی ناو ئەپ لەسەر داواکارییەکی چالاک",
      dizliFeat4: "جزدان، کرێ، و پشتڕاستکردنەوەی داواکاری",
      dizliTitle: "دزلی — حوزەیفە المەشهەدانی",
      dizliDescription:
        "دزلی پلاتفۆرمێکی گواستنەوە و گەیاندنە بە ئەپی کڕیار و شۆفێر، بە Flutter و Node.js و TypeScript و PostgreSQL و Prisma دروستکراوە.",
      dizliStudyLede: "پلاتفۆرمێک بۆ گواستنەوە و گەیاندن کە کڕیار و شۆفێر لە سەماوە، عێراق پێکەوە دەبەستێتەوە.",
      dizliHeroAlt: "سەرەتای ئەپی کڕیاری دزلی: خزمەتگوزارییەکان، داواکردنی گەشت، و چالاکی دوایی.",
      dizliOverview: "گشتی",
      dizliOverview1:
        "دزلی بەرهەمێکی ناوخۆییە بۆ گواستنەوە و گەیاندن. کڕیار گەشتێک یان کارێک لە ئەپێکەوە داوا دەکات. شۆفێر ئەو کارانە لە ئەپێکی دیکەوە وەردەگرێت. لە نێوانیاندا APIـی Node.js و بنکەدراوەی PostgreSQL هەیە.",
      dizliOverview2:
        "بۆ بەکارهێنانی ڕۆژانە لە سەماوە دروستکراوە — تاکسی، گەیاندن، و چەند خزمەتگوزارییەکی پەیوەندیدار — نەک وەک بازاڕێکی نیشتمانی. من لەسەر نەرمەکاڵاکە کاردەکەم: دوو ئەپی Flutter، APIـی TypeScript، و مۆدێلی داتا.",
      dizliFeatures: "تایبەتمەندییەکان",
      dizliFeatTitle1: "سەرەتای کڕیار.",
      dizliFeatBody1: "خزمەتگوزارییەکان، باڵانسی جزدان، گەڕان، و داواکارییە دواییەکان لە یەک شاشەدا.",
      dizliFeatTitle2: "گەشت و گەیاندن.",
      dizliFeatBody2: "داواکردنی تاکسی، پشتڕاستکردنەوەی هەڵگرتن و دابەزین، یان ناردنی لیستی کڕین بۆ فرۆشگایەکی نزیک.",
      dizliFeatTitle3: "ئەپی شۆفێر.",
      dizliFeatBody3: "سەرهێڵبوون، بینینی کارە نزیکەکان، شوێنکەوتنی نەخشە، و پوختەیەکی ڕۆژانەی گەشت و گەیاندن.",
      dizliFeatTitle4: "گفتوگۆ.",
      dizliFeatBody4: "کڕیار و شۆفێر لەسەر داواکارییەکی چالاک پەیام دەنێرن.",
      dizliFeatTitle5: "جزدان.",
      dizliFeatBody5: "باڵانس، پڕکردنەوە، و وردەکاری کرێ پێش پشتڕاستکردنەوەی داواکاری.",
      dizliFeatTitle6: "پڕۆفایلی شۆفێر.",
      dizliFeatBody6: "هەڵسەنگاندن، ژمارەی گەشت، و وردەکاری ئۆتۆمبێل بۆ کڕیار دیارە.",
      dizliScreens: "شاشەکان",
      dizliScreensNote: "کلیک لە هەر وێنەیەک بکە بۆ بینینی بە قەبارەی تەواو.",
      dizliMyRole: "ڕۆڵی من",
      dizliRole1:
        "من گەشەپێدەری نەرمەکاڵام لە دزلی. ئەپی کڕیار، ئەپی شۆفێر، و ئەو پشتەوەی قسەیان لەگەڵ دەکات جێبەجێ دەکەم.",
      dizliRole2:
        "ئەوە شاشە و گەشتکردن لە Flutter، خاڵەکانی REST لە Node.js و TypeScript، و نەخشەی PostgreSQL لە ڕێگەی Prisma دەگرێتەوە — داواکاری، بەکارهێنەر، شۆفێر، تۆماری جزدان، و گفتوگۆ. دەقی ماڵپەڕی بازاڕکردن یان ژمارەکانی گەشە بە کاری خۆم نازانم.",
      dizliTech: "تەکنەلۆژیاکان",
      dizliDev: "گەشەپێدان",
      dizliDev1:
        "قورسییەکە لەسەر یەک داواکاری دوو کڵایەنت ڕاگریت. داواکاری کڕیار دەبێت بۆ شۆفێر دەربکەوێت، قبوڵکردن و هەڵوەشاندن تێپەڕێنێت، و لە گفتوگۆ و کرێ و جزداندا یەکگرتوو بمێنێتەوە.",
      dizliDev2:
        "نەخشە و «سەرهێڵبوون» دەبێت لەسەر مۆبایلی ئاسایی ئەندرۆید و تۆڕی ناسەقامگیر کار بکەن. هەردوو ئەپەکە عەرەبی-یەکەمن و RTLـن. APIـەکەم بچووک و ڕوون هێشتەوە — دۆخی داواکاری لە Postgres دەژی و ئەپەکان لێی دەخوێننەوە — لەبری دووبارەکردنەوەی یاساکانی کار لە هەر کڵایەنتێکدا.",
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
