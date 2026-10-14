export const BUSINESS_INFO = {
  name: "BHUMI TECHNOCARE",
  legalName: "Bhumi Technocare",
  tagline: "Care With Carefully",
  contactPerson: "Bharat Chaudhary",
  designation: "Computer Engineer",
  shortDesc: "Sales, Service & Rent for Computers, CCTV, Printers, Networking, Office Automation and Security Systems in Kim, Ankleshwar, and Bharuch.",
  whatsappNumber: "919316440985",
  displayPhone: "+91 93164 40985",
  salesPhone: "93164 40985",
  servicePhone: "99788 17550",
  accountPhone: "99786 17550",
  additionalPhone: "99247 76616",
  email: "bhumi24care@gmail.com",
  address: "11, Zam Zam Complex, Kim Char Rasta, Kim-Surat - 394110, Gujarat, India.",
  landmark: "Near Kim Char Rasta, NH-8 Corridor",
  serviceAreas: ["Kim", "Ankleshwar", "Bharuch"],
  businessModel: "Sales, Service & Rent",
  workingHours: "Monday – Saturday: 9:30 AM – 8:30 PM",
  sundayHours: "Sunday: Emergency On-Call Support Available",
  mapsUrl: "https://maps.google.com/?q=11+Zam+Zam+Complex+Kim+Char+Rasta+Kim+Surat+394110",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=11+Zam+Zam+Complex+Kim+Char+Rasta+Kim+Surat+Gujarat+394110"
};

export const SERVICE_CATEGORIES = [
  "All",
  "Computers & Office Equipment",
  "Security & Communication",
  "Networking & IT Solutions"
];

export const ALL_SERVICES = [
  // COMPUTERS & OFFICE EQUIPMENT (8 Services)
  {
    id: "computer-laptop",
    title: "Computer & Laptop",
    category: "Computers & Office Equipment",
    icon: "Laptop",
    description: "Desktop computers and laptops sales, chip-level troubleshooting, OS restoration, display replacement, and speed upgrades.",
    image: "/assets/catalog/service-computer-laptop-repair.jpg"
  },
  {
    id: "laser-printer",
    title: "Laser Printer",
    category: "Computers & Office Equipment",
    icon: "Printer",
    description: "Servicing, pickup roller repair, logic board troubleshooting, and laser printer sales for high-volume office printing.",
    image: "/assets/enhanced/product-hp-laserjet-m126a.jpg"
  },
  {
    id: "label-printer",
    title: "Label Printer",
    category: "Computers & Office Equipment",
    icon: "Tag",
    description: "Installation, setup, and maintenance of thermal barcode and shipping label printers for retail and logistics.",
    image: "/assets/catalog/service-label-printer.jpg"
  },
  {
    id: "xerox-machine",
    title: "Xerox Machine",
    category: "Computers & Office Equipment",
    icon: "Copy",
    description: "Sales, rental, and servicing of multi-function heavy-duty photocopier machines for businesses and shops.",
    image: "/assets/catalog/service-xerox-photocopier.jpg"
  },
  {
    id: "xerox-paper",
    title: "Xerox Paper",
    category: "Computers & Office Equipment",
    icon: "FileText",
    description: "Supply of premium quality, jam-free 70/75/80 GSM photocopying paper reams for daily office documentation.",
    image: "/assets/catalog/service-xerox-paper-reams.jpg"
  },
  {
    id: "labels-ribbon",
    title: "Labels & Ribbon",
    category: "Computers & Office Equipment",
    icon: "Barcode",
    description: "Supply of direct thermal barcode labels, chrome labels, and wax/resin thermal transfer ribbons for all printer models.",
    image: "/assets/catalog/service-labels-and-ribbon.jpg"
  },
  {
    id: "computer-parts",
    title: "Computer Parts",
    category: "Computers & Office Equipment",
    icon: "Cpu",
    description: "Motherboards, processors, RAM modules, SSDs, power supplies (SMPS), cooling fans, and internal peripherals.",
    image: "/assets/catalog/service-computer-parts.jpg"
  },
  {
    id: "toner-cartridges",
    title: "Toner Cartridges",
    category: "Computers & Office Equipment",
    icon: "PackageCheck",
    description: "High-yield compatible and genuine toner cartridges, cartridge refilling, and OPC drum replacement services.",
    image: "/assets/catalog/service-toner-cartridges.jpg"
  },

  // SECURITY & COMMUNICATION (8 Services)
  {
    id: "cctv-camera",
    title: "CCTV Camera",
    category: "Security & Communication",
    icon: "Video",
    description: "High-definition analog and IP security camera installations, ColorVu night vision, DVR/NVR configuration, and mobile view.",
    image: "/assets/enhanced/service-cctv-dome-camera.jpg"
  },
  {
    id: "telephone-system",
    title: "Telephone System",
    category: "Security & Communication",
    icon: "PhoneCall",
    description: "Intercom setups, PBX / EPABX systems, and multi-extension office telephone wiring and maintenance.",
    image: "/assets/enhanced/icon-telephone-intercom.png"
  },
  {
    id: "sound-pa-system",
    title: "Sound & PA System",
    category: "Security & Communication",
    icon: "Volume2",
    description: "Public address (PA) systems, ceiling speakers, amplifiers, and announcement audio setups for offices and plants.",
    image: "/assets/catalog/service-sound-pa-system.jpg"
  },
  {
    id: "attendance-system",
    title: "Attendance System",
    category: "Security & Communication",
    icon: "Fingerprint",
    description: "Biometric fingerprint and RFID card attendance machines with software integration for payroll and shift tracking.",
    image: "/assets/enhanced/product-mantra-mfs110-biometric.jpg"
  },
  {
    id: "wifi-connectivity",
    title: "WiFi Connectivity",
    category: "Security & Communication",
    icon: "Wifi",
    description: "Enterprise wireless access points, dual-band Wi-Fi routers, and wide-area coverage for multi-floor premises.",
    image: "/assets/catalog/service-wifi-connectivity.jpg"
  },
  {
    id: "cable-racks",
    title: "Cable & Racks",
    category: "Security & Communication",
    icon: "Server",
    description: "Standard server racks, network cabinets, patch panels, cable trays, and structured wire management accessories.",
    image: "/assets/catalog/service-cable-and-racks.jpg"
  },
  {
    id: "fiber-cables",
    title: "Fiber Cables",
    category: "Security & Communication",
    icon: "Cable",
    description: "Optical fiber patch cords, singlemode/multimode cables, fiber splicing, and high-bandwidth interconnects.",
    image: "/assets/enhanced/product-fiber-cable-coil-sc.jpg"
  },
  {
    id: "door-lock",
    title: "Door Lock",
    category: "Security & Communication",
    icon: "Lock",
    description: "Electronic magnetic locks, biometric fingerprint access locks, and smart RFID security systems for glass and wooden doors.",
    image: "/assets/catalog/service-door-lock.jpg"
  },

  // NETWORKING & IT SOLUTIONS (8 Services)
  {
    id: "connectors",
    title: "Connectors",
    category: "Networking & IT Solutions",
    icon: "Plug",
    description: "Cat6 RJ45 connectors, fiber SC/LC connectors, BNC connectors for CCTV, HDMI couplers, and patch leads.",
    image: "/assets/enhanced/product-sc-fiber-connector-single.jpg"
  },
  {
    id: "networking",
    title: "Networking",
    category: "Networking & IT Solutions",
    icon: "Network",
    description: "Structured Cat6 LAN cabling, gigabit switches, router configuration, LAN testing, and factory connectivity.",
    image: "/assets/enhanced/product-cat6-ethernet-cables.jpg"
  },
  {
    id: "antivirus-firewall",
    title: "Antivirus & Firewall",
    category: "Networking & IT Solutions",
    icon: "ShieldCheck",
    description: "Genuine Quick Heal and enterprise antivirus licenses, firewall protection, malware removal, and cybersecurity setup.",
    image: "/assets/catalog/service-antivirus-firewall.jpg"
  },
  {
    id: "account-software",
    title: "Account Software",
    category: "Networking & IT Solutions",
    icon: "Calculator",
    description: "Accounting software support, database backup setup, multi-user LAN configuration, and system maintenance.",
    image: "/assets/catalog/service-account-software.jpg"
  },
  {
    id: "led-tv-monitors",
    title: "LED TV & Monitors",
    category: "Networking & IT Solutions",
    icon: "Monitor",
    description: "Commercial LED display monitors for office workstations, CCTV live monitoring walls, and conference screens.",
    image: "/assets/catalog/service-led-tv-monitors.jpg"
  },
  {
    id: "data-backup-devices",
    title: "Data Backup Devices",
    category: "Networking & IT Solutions",
    icon: "HardDrive",
    description: "External hard drives, portable SSDs, and Network Attached Storage (NAS) setups for automatic daily business data safety.",
    image: "/assets/catalog/service-data-backup-devices.jpg"
  },
  {
    id: "projector-display",
    title: "Projector & Display",
    category: "Networking & IT Solutions",
    icon: "Projector",
    description: "Conference room projectors, motorized projection screens, and video conferencing display integration.",
    image: "/assets/catalog/service-projector-display.jpg"
  },
  {
    id: "amc-consultancy",
    title: "AMC & Consultancy",
    category: "Networking & IT Solutions",
    icon: "Briefcase",
    description: "Annual Maintenance Contracts and expert IT consultancy for factories, offices, and commercial establishments.",
    image: "/assets/catalog/service-amc-consultancy.jpg"
  }
];

export const PRODUCT_CATEGORIES = [
  {
    id: "prod-computers-laptops",
    title: "Computers & Laptops",
    tagline: "Commercial Desktops & Business Laptops",
    description: "Custom-configured desktop PCs and business notebooks for office operations, billing, and technical work.",
    image: "/assets/catalog/product-desktop-laptop-computers.jpg",
    clientImage: null,
    availability: "Available for Sales & Rent (Subject to business confirmation)"
  },
  {
    id: "prod-laser-printers",
    title: "Laser Printers",
    tagline: "High-Volume Monochrome & Color Printing",
    description: "Multi-function laser printers from top brands suitable for invoices, documentation, and office paperwork.",
    image: "/assets/enhanced/product-hp-laserjet-m126a.jpg",
    clientImage: "/assets/enhanced/product-hp-laserjet-m126a.jpg",
    availability: "Available for Sales & Service"
  },
  {
    id: "prod-label-printers",
    title: "Label Printers",
    tagline: "Barcode & Dispatch Label Printers",
    description: "Specialized thermal printers designed for shipping labels, packaging barcodes, and inventory tags.",
    image: "/assets/catalog/product-label-printers.jpg",
    clientImage: null,
    availability: "Available on Enquiry"
  },
  {
    id: "prod-xerox-machines",
    title: "Xerox Machines",
    tagline: "Office Photocopiers & Heavy Multi-Functionals",
    description: "Commercial-grade digital copier machines available for office procurement and rental requirements.",
    image: "/assets/catalog/product-xerox-machines.jpg",
    clientImage: null,
    availability: "Available for Sales, Service & Rent"
  },
  {
    id: "prod-cctv-cameras",
    title: "CCTV Cameras",
    tagline: "Indoor Domes, Outdoor Bullets & IP Cameras",
    description: "Surveillance camera hardware, high-definition night vision optics, and recording accessories.",
    image: "/assets/enhanced/service-cctv-dome-camera.jpg",
    clientImage: "/assets/enhanced/service-cctv-dome-camera.jpg",
    availability: "Available for Installation & Maintenance"
  },
  {
    id: "prod-telephone-systems",
    title: "Telephone Systems",
    tagline: "Intercom Handsets & PBX Hardware",
    description: "Desk phones, multi-line intercoms, and telephone connectivity terminals for commercial buildings.",
    image: "/assets/enhanced/icon-telephone-intercom.png",
    clientImage: "/assets/enhanced/icon-telephone-intercom.png",
    availability: "Available for Setup & Configuration"
  },
  {
    id: "prod-sound-pa-systems",
    title: "Sound & PA Systems",
    tagline: "Commercial Audio & Announcements",
    description: "Microphones, amplifiers, horn speakers, and factory PA systems for clear site-wide audio announcements.",
    image: "/assets/catalog/product-sound-pa-systems.jpg",
    clientImage: null,
    availability: "Available on Enquiry"
  },
  {
    id: "prod-attendance-systems",
    title: "Attendance Systems",
    tagline: "Biometric Fingerprint & Card Scanners",
    description: "Aadhaar-enabled and commercial biometric sensors for employee time tracking and access permission.",
    image: "/assets/enhanced/product-mantra-mfs110-biometric.jpg",
    clientImage: "/assets/enhanced/product-mantra-mfs110-biometric.jpg",
    availability: "Available for Sales & Setup"
  },
  {
    id: "prod-networking-equipment",
    title: "Networking Equipment",
    tagline: "Gigabit Switches, Routers & Modems",
    description: "Managed and unmanaged network switches, wireless routers, and high-bandwidth networking gear.",
    image: "/assets/enhanced/product-cat6-ethernet-cables.jpg",
    clientImage: "/assets/enhanced/product-cat6-ethernet-cables.jpg",
    availability: "Available for Sales & Installation"
  },
  {
    id: "prod-connectors-fiber-cables",
    title: "Connectors & Fiber Cables",
    tagline: "Singlemode Fiber Cords & Connectors",
    description: "SC, LC optical fiber patch cords, RJ45 crimp heads, BNC connectors, and optical adapters.",
    image: "/assets/enhanced/product-fiber-patch-cords-sc.jpg",
    clientImage: "/assets/enhanced/product-fiber-patch-cords-sc.jpg",
    availability: "Available in Stock (Confirm with business)"
  },
  {
    id: "prod-computer-parts",
    title: "Computer Parts",
    tagline: "RAM, Storage, Motherboards & PSUs",
    description: "Quality hardware replacement components and spares for PCs, workstations, and laptops.",
    image: "/assets/catalog/product-computer-parts.jpg",
    clientImage: null,
    availability: "Available for Sales & Upgrades"
  },
  {
    id: "prod-toner-cartridges",
    title: "Toner Cartridges",
    tagline: "Laser Toner Supplies & Cartridge Refills",
    description: "Compatible and OEM toner cartridges for HP, Canon, Brother, and Epson printers.",
    image: "/assets/catalog/product-toner-cartridges.jpg",
    clientImage: null,
    availability: "Available for Sales & Refill"
  },
  {
    id: "prod-labels-ribbons",
    title: "Labels & Ribbons",
    tagline: "Thermal Transfer Rolls & Ribbons",
    description: "Self-adhesive barcode label rolls, sticker paper, and high-density carbon ribbons.",
    image: "/assets/catalog/product-labels-ribbons.jpg",
    clientImage: null,
    availability: "Available on Order"
  },
  {
    id: "prod-led-tv-monitors",
    title: "LED TVs & Monitors",
    tagline: "Display Monitors & Monitoring Panels",
    description: "FHD and 4K LED display screens for office computing and multi-channel CCTV viewing stations.",
    image: "/assets/catalog/product-led-tv-monitors.jpg",
    clientImage: null,
    availability: "Available for Sales & Rent"
  },
  {
    id: "prod-projectors-displays",
    title: "Projectors & Displays",
    tagline: "Meeting Room Projectors & Screens",
    description: "High-lumen presentation projectors and screens for corporate presentations, training, and events.",
    image: "/assets/catalog/product-projectors-displays.jpg",
    clientImage: null,
    availability: "Available for Sales & Rental"
  },
  {
    id: "prod-data-backup-devices",
    title: "Data Backup Devices",
    tagline: "External Hard Drives & Network Storage",
    description: "Rugged external hard drives, portable SSDs, and storage drives for secure routine data safeguarding.",
    image: "/assets/catalog/product-data-backup-devices.jpg",
    clientImage: null,
    availability: "Available on Enquiry"
  },
  {
    id: "prod-door-locks",
    title: "Door Locks",
    tagline: "Electronic Access Control Locks",
    description: "Electromagnetic and biometric door locks for commercial office entrances, server rooms, and restricted areas.",
    image: "/assets/catalog/product-door-locks.jpg",
    clientImage: null,
    availability: "Available with Installation"
  },
  {
    id: "prod-networking-security",
    title: "Networking Security Products",
    tagline: "Antivirus Suites & Hardware Firewalls",
    description: "Licensed antivirus software (Quick Heal, etc.) and hardware security devices to protect against malware.",
    image: "/assets/catalog/product-networking-security.jpg",
    clientImage: null,
    availability: "Available for Licensing & Setup"
  }
];

export const BRANDS = [
  { name: "Quick Heal", logo: "/assets/enhanced/brand-quickheal.png", desc: "Antivirus & Cybersecurity" },
  { name: "Dell", logo: "/assets/enhanced/brand-dell.png", desc: "Laptops, Desktops & Servers" },
  { name: "HP", logo: "/assets/enhanced/brand-hp.png", desc: "Printers, Laptops & Supplies" },
  { name: "Acer", logo: "/assets/enhanced/brand-acer.png", desc: "Computers & Monitors" },
  { name: "Intel", logo: "/assets/enhanced/brand-intel.png", desc: "Processors & Architecture" },
  { name: "Logitech", logo: "/assets/enhanced/brand-logitech.png", desc: "Peripherals & Webcams" },
  { name: "Dahua", logo: "/assets/enhanced/brand-dahua.png", desc: "CCTV & Security Systems" },
  { name: "Matrix", logo: "/assets/enhanced/brand-matrix.png", desc: "Telecom & Security" },
  { name: "BenQ", logo: "/assets/enhanced/brand-benq.png", desc: "Displays & Projectors" },
  { name: "TP-Link", logo: "/assets/enhanced/brand-tplink.png", desc: "Networking & Wi-Fi Routers" }
];

export const BUSINESS_MODEL_PILLARS = [
  {
    id: "sales",
    title: "Sales",
    badge: "Equipment & Hardware Procurement",
    description: "Procure brand-tested computers, laptops, CCTV security equipment, laser printers, consumables, optical fiber cables, and networking peripherals for your office, shop, or industrial plant.",
    points: [
      "New and certified office computers & business laptops",
      "CCTV surveillance cameras, DVR/NVRs & storage",
      "Laser & label printers, toner cartridges & paper",
      "Genuine networking hardware, connectors & fiber cables"
    ],
    ctaText: "Ask About Product Availability",
    intent: "Product Sales & Availability Enquiry"
  },
  {
    id: "service",
    title: "Service",
    badge: "Expert Repairs & Maintenance",
    description: "Prompt on-site and in-lab diagnostics for desktop PCs, laptops, printers, CCTV systems, and local area networks. Experienced troubleshooting led by computer engineer Bharat Chaudhary.",
    points: [
      "Chip-level motherboard repair & component diagnostics",
      "Laser printer servicing, roller replacement & head overhaul",
      "CCTV camera troubleshooting & mobile viewing reconnection",
      "Prompt on-site technician visits in Kim, Ankleshwar & Bharuch"
    ],
    ctaText: "Request a Service Visit",
    intent: "Service Visit & Repair Request"
  },
  {
    id: "rent",
    title: "Rent",
    badge: "Flexible Rental Solutions",
    description: "Short-term and long-term rental options for computer systems, laptops, printers, photocopiers, and display equipment to support temporary offices, projects, and events without high capital expenditure.",
    points: [
      "Office computers & laptops on flexible monthly rental",
      "Xerox & multi-function printer rental for project sites",
      "Presentation display screens & projectors for events",
      "Rental availability to be confirmed directly with business"
    ],
    ctaText: "Ask About Rental Availability",
    intent: "Hardware Rental Availability Enquiry"
  }
];

export const AMC_CONSULTANCY_INFO = {
  title: "AMC & Consultancy Services",
  tagline: "Total IT care, preventive maintenance & technology guidance for Kim, Ankleshwar, and Bharuch.",
  overview: "BHUMI TECHNOCARE provides dependable Annual Maintenance Contracts (AMC) and practical IT consultancy for commercial offices, textile manufacturing units, factories, and small businesses. We help ensure your computer systems, CCTV network, printers, and internet connectivity operate smoothly with minimal disruption.",
  servicesIncluded: [
    "Preventive computer and laptop maintenance checkups",
    "CCTV surveillance system and recording verification",
    "Printer connectivity, driver updates, and hardware checks",
    "Office local area network (LAN) and Wi-Fi stability checks",
    "Accounting data backup verification and security checkups",
    "Technical guidance for new hardware procurement and upgrades"
  ],
  serviceAreasCovered: "Active on-site coverage across Kim, Ankleshwar, and Bharuch commercial corridors.",
  disclaimer: "AMC contract scope, terms, and consultancy arrangements are tailored to each facility's infrastructure node count and requirements upon direct discussion."
};

export const ABOUT_US_CONTENT = {
  title: "About BHUMI TECHNOCARE",
  subtitle: "Care With Carefully — Sales, Service & Rent in South Gujarat",
  leadProfile: "Led by Computer Engineer Bharat Chaudhary, BHUMI TECHNOCARE is a comprehensive technology provider located at 11, Zam Zam Complex, Kim Char Rasta, Kim, Surat. We specialize in the sales, servicing, and rental of computers, CCTV surveillance, printers, office automation, and structured networking.",
  commitmentText: "Operating with the ethos 'Care With Carefully', we prioritize transparent fault inspection, authentic spares, and practical advice so our customers receive dependable solutions without unnecessary expenditure.",
  serviceTerritory: "We actively serve commercial clients, textile mills, plants, and residences across Kim, Ankleshwar, and Bharuch."
};

// Exactly 6 Featured Services for compact Homepage display (prioritizing services with verified client-provided images)
export const FEATURED_SERVICES = [
  ALL_SERVICES.find(s => s.id === "cctv-camera"),
  ALL_SERVICES.find(s => s.id === "laser-printer"),
  ALL_SERVICES.find(s => s.id === "networking"),
  ALL_SERVICES.find(s => s.id === "fiber-cables"),
  ALL_SERVICES.find(s => s.id === "attendance-system"),
  ALL_SERVICES.find(s => s.id === "telephone-system")
].filter(Boolean);

// Exactly 6 Featured Products for compact Homepage display (prioritizing categories with verified client-provided images)
export const FEATURED_PRODUCTS = [
  PRODUCT_CATEGORIES.find(p => p.id === "prod-cctv-cameras"),
  PRODUCT_CATEGORIES.find(p => p.id === "prod-laser-printers"),
  PRODUCT_CATEGORIES.find(p => p.id === "prod-networking-equipment"),
  PRODUCT_CATEGORIES.find(p => p.id === "prod-connectors-fiber-cables"),
  PRODUCT_CATEGORIES.find(p => p.id === "prod-attendance-systems"),
  PRODUCT_CATEGORIES.find(p => p.id === "prod-telephone-systems")
].filter(Boolean);
