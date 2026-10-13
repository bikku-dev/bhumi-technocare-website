export const BUSINESS_INFO = {
  name: "BHUMI TECHNOCARE",
  legalName: "Bhumi Technocare (Formerly Sumit Computer)",
  tagline: "Total IT, CCTV Surveillance & Computer Care Solutions",
  shortDesc: "South Gujarat's trusted destination for laptop & desktop chip-level repairs, high-definition CCTV security installations, printer maintenance, and enterprise IT AMCs.",
  whatsappNumber: "919316440985",
  displayPhone: "+91 93164 40985",
  secondaryPhone: "+91 99788 17550",
  email: "info@bhumitechnocare.com",
  address: "GF-11, Zam Zam Residency, NH-8, Kim Char Rasta, Kim, Surat, Gujarat - 394110",
  landmark: "Opposite NH-8 Highway Bridge, Near Kim Char Rasta",
  workingHours: "Monday – Saturday: 9:30 AM – 8:30 PM",
  sundayHours: "Sunday: Emergency On-Call Support Available",
  mapsUrl: "https://maps.google.com/?q=GF-11+Zam+Zam+Residency+NH-8+Kim+Char+Rasta+Kim+Surat+Gujarat+394110",
  experienceYears: "12+",
  devicesRepaired: "15,000+",
  satisfiedClients: "4,800+",
  cctvInstalled: "2,500+",
  warrantyDays: "90 Days Warranty on repairs"
};

export const SERVICES = [
  {
    id: "laptop-desktop-repair",
    title: "Laptop & Desktop Chip-Level Repair",
    category: "Hardware Service",
    badge: "Most Popular",
    icon: "Laptop",
    shortDesc: "Complete chip-level motherboard diagnostics, screen replacement, hinge rebuilding, water-damage repair, and SSD performance boosters.",
    features: [
      "Motherboard chip-level BGA repairing",
      "Broken display / LED panel replacement (HD/FHD/4K)",
      "Loose or broken laptop hinge rebuild & fabrication",
      "Instant 10x speed boost with NVMe SSD & RAM upgrade",
      "Liquid spill cleanup & short-circuit repair",
      "Genuine battery, charger & keyboard replacements"
    ],
    turnaround: "Same-Day / 24-48 Hours",
    priceRange: "Starting from ₹350 (Diagnosis Free with Repair)",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    popularIssues: ["Laptop won't power on", "Blue Screen (BSOD)", "Overheating & noisy fan", "Cracked screen", "Extremely slow boot"]
  },
  {
    id: "cctv-surveillance",
    title: "CCTV & Electronic Security Solutions",
    category: "Security Systems",
    badge: "Commercial & Home",
    icon: "ShieldAlert",
    shortDesc: "End-to-end CCTV camera installation, smart IP ColorVu night vision, PTZ 360° coverage, DVR/NVR setup, and remote phone monitoring.",
    features: [
      "High Definition (2MP, 4MP, 5MP, 4K) IP & HD Analog Cameras",
      "Full Color Night Vision (ColorVu / Starlight sensors)",
      "Live remote view on Android & iPhone with no monthly fee",
      "Industrial & textile warehouse wide-area coverage",
      "Biometric attendance machines & access control systems",
      "Existing camera wiring repair & channel expansion"
    ],
    turnaround: "Site Survey within 4 Hours",
    priceRange: "Packages starting from ₹6,999 (Complete 4-Camera Setup)",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    popularIssues: ["Offline camera feeds", "Night vision not working", "Storage full / hard disk beep", "Mobile app disconnected"]
  },
  {
    id: "printer-copier-service",
    title: "Printer Repair & Toner Refilling",
    category: "Office Automation",
    badge: "Fast Turnaround",
    icon: "Printer",
    shortDesc: "Professional repairs for HP, Canon, Epson, and Brother printers. Laser cartridge refilling, head cleaning, paper pickup rollers & logic boards.",
    features: [
      "Laser & InkTank multi-function printer overhaul",
      "Logic board & power supply board repairing",
      "Paper jam troubleshooting & roller replacement",
      "Printhead unclogging & crystal-clear print calibration",
      "Eco-friendly black & color toner refilling",
      "Supply of genuine OEM toner cartridges & ribbon refills"
    ],
    turnaround: "Refills in 20 Mins | Repairs in 24 Hrs",
    priceRange: "Refilling from ₹250 | General Service from ₹399",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80",
    popularIssues: ["Paper jamming continuously", "Faded or streak prints", "Cartridge unrecognized", "Strange grinding noise"]
  },
  {
    id: "corporate-amc",
    title: "Annual Maintenance Contracts (AMC)",
    category: "Enterprise IT Support",
    badge: "Businesses & Factories",
    icon: "Briefcase",
    shortDesc: "Proactive IT maintenance for textile mills, chemical plants, corporate offices, and educational institutions across Kim, Surat & Bharuch.",
    features: [
      "Comprehensive (with parts) & Non-Comprehensive plans",
      "Scheduled monthly preventive maintenance visits",
      "Guaranteed priority emergency on-site engineer dispatch (2-4 hrs)",
      "Full network, server, firewall & CCTV infrastructure coverage",
      "Regular data backups & anti-virus signature updates",
      "Dedicated account manager & transparent service logs"
    ],
    turnaround: "Dedicated SLA Guarantee",
    priceRange: "Customized corporate quotations based on node count",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    popularIssues: ["Unexpected network downtimes", "Slow office workstations", "Unmonitored virus attacks", "Lack of internal IT team"]
  },
  {
    id: "network-wifi-solutions",
    title: "Networking, Routers & Server Setup",
    category: "Infrastructure",
    badge: "Reliable Speeds",
    icon: "Network",
    shortDesc: "Structured Cat6/Fiber cabling, rack server installation, enterprise managed switches, firewall protection, and seamless mesh Wi-Fi.",
    features: [
      "Structured LAN cabling with patch panel terminations",
      "Gigabit switches, routers & Wi-Fi access points setup",
      "Factory & multi-floor office high-speed Wi-Fi roaming",
      "Firewall configuration & unauthorized traffic filtering",
      "NAS (Network Attached Storage) central file sharing",
      "Inter-branch VPN & secure remote work access"
    ],
    turnaround: "Flexible schedule (minimal work disruption)",
    priceRange: "Consultation & site audit available",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    popularIssues: ["Wi-Fi dead spots", "Frequent disconnections", "Unorganized messy server racks", "Slow local file transfer"]
  },
  {
    id: "data-recovery-security",
    title: "Data Recovery & Cyber Antivirus",
    category: "Security & Recovery",
    badge: "High Confidentiality",
    icon: "Database",
    shortDesc: "Safe recovery from accidental deletion, crashed Windows, damaged hard drives & pen drives, along with genuine licensed antivirus suites.",
    features: [
      "Hard disk (HDD), SSD, and Pen Drive data retrieval",
      "Formatted partition & RAW drive recovery",
      "Emergency recovery from blue-screen / unbootable systems",
      "Licensed Quick Heal, Kaspersky, and Net Protector antivirus",
      "Ransomware protection & malware deep cleansing",
      "Strict data privacy & customer confidentiality guarantee"
    ],
    turnaround: "Assessment within 12 Hours",
    priceRange: "Starts from ₹800 based on drive condition",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    popularIssues: ["Accidentally deleted important files", "External hard drive clicking", "Virus locking files", "Corrupted USB thumb drive"]
  }
];

export const PRODUCTS = [
  {
    id: "prod-laptop-dell",
    name: "Dell Latitude Corporate Edition Laptop",
    category: "Laptops & Desktops",
    price: "₹24,999",
    originalPrice: "₹45,000",
    tag: "Certified Refurbished",
    specs: "Intel Core i5 (8th/10th Gen) | 16GB RAM | 512GB NVMe SSD | 14\" FHD Anti-Glare | Windows 11 Pro",
    warranty: "1 Year Bhumi Technocare Warranty",
    badgeColor: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-laptop-hp",
    name: "HP EliteBook Ultra-Slim Business Notebook",
    category: "Laptops & Desktops",
    price: "₹28,500",
    originalPrice: "₹52,000",
    tag: "Premium Grade A",
    specs: "Intel Core i5 (11th Gen) | 16GB DDR4 | 512GB SSD | Backlit Keyboard | Fingerprint Sensor | Metal Body",
    warranty: "1 Year Warranty + Free Bag & Mouse",
    badgeColor: "bg-sky-500",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-desktop-custom",
    name: "Custom Office & Accounting Desktop PC",
    category: "Laptops & Desktops",
    price: "₹18,999",
    originalPrice: "₹24,000",
    tag: "Best for Tally / GST",
    specs: "Intel Core i5 / AMD Ryzen 5 | 16GB RAM | 256GB SSD + 500GB HDD | 19.5\" LED Monitor | Keyboard & Mouse",
    warranty: "3 Years Hardware Manufacturer Warranty",
    badgeColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-cctv-4ch-kit",
    name: "CP Plus / Hikvision 4-Camera 1080p Smart Kit",
    category: "CCTV & Security",
    price: "₹8,499",
    originalPrice: "₹12,500",
    tag: "Complete Package",
    specs: "4x 2.4MP HD Dome/Bullet Cameras | 4-CH DVR | 1TB Surveillance HDD | 4CH Power Supply | BNC Connectors",
    warranty: "2 Years Brand Warranty + Free Installation Support",
    badgeColor: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-cctv-colorvu",
    name: "Hikvision 5MP ColorVu 24/7 Full Color IP Camera",
    category: "CCTV & Security",
    price: "₹3,450",
    originalPrice: "₹4,800",
    tag: "Night Vision Star",
    specs: "5MP Ultra HD | 24/7 Full Color Vivid Imaging | Built-in Mic | IP67 Water Resistant | Smart Human Detection",
    warranty: "2 Years Replacement Warranty",
    badgeColor: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1549109926-58f039549485?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-printer-laserjet",
    name: "HP LaserJet Pro Multi-Function Monochrome Printer",
    category: "Printers & Supplies",
    price: "₹16,499",
    originalPrice: "₹19,900",
    tag: "High Duty Cycle",
    specs: "Print, Scan, Copy | Up to 22 ppm speed | Compact Footprint | Low per-page printing cost | USB Connectivity",
    warranty: "1 Year Official HP On-Site Warranty",
    badgeColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-printer-ecotank",
    name: "Epson EcoTank Color All-in-One InkTank Printer",
    category: "Printers & Supplies",
    price: "₹13,999",
    originalPrice: "₹16,500",
    tag: "Ultra Low Cost",
    specs: "Spill-free Refill bottles | 4500 Black / 7500 Color Page Yield | Wi-Fi Direct Mobile Printing | Borderless printing",
    warranty: "1 Year or 30,000 Pages Warranty",
    badgeColor: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-ssd-upgrade",
    name: "Crucial / Kingston 512GB NVMe M.2 High-Speed SSD",
    category: "Accessories & Peripherals",
    price: "₹2,899",
    originalPrice: "₹4,500",
    tag: "Free OS Migration",
    specs: "Up to 3500 MB/s Read Speed | 3D NAND Flash | Includes installation & Windows transfer service",
    warranty: "5 Years Manufacturer Warranty",
    badgeColor: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-antivirus-qh",
    name: "Quick Heal Total Security 1-Year / 3-Year Suite",
    category: "Accessories & Peripherals",
    price: "₹899",
    originalPrice: "₹1,499",
    tag: "Genuine License",
    specs: "Real-time Anti-Ransomware | Safe Banking | Web Security | USB Drive Protection | Automated Updates",
    warranty: "100% Genuine Digital & Box License",
    badgeColor: "bg-red-500",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-router-tplink",
    name: "TP-Link Archer Gigabit Dual-Band Wi-Fi 6 Router",
    category: "Networking & UPS",
    price: "₹3,499",
    originalPrice: "₹5,200",
    tag: "Next-Gen Speed",
    specs: "1.5 Gbps Wi-Fi 6 Speeds | 4 High-Gain Antennas | Beamforming Technology | Gigabit WAN & 4 Gigabit LAN ports",
    warranty: "3 Years Brand Warranty",
    badgeColor: "bg-cyan-500",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-ups-apc",
    name: "APC / Microtek 650VA Line Interactive Desktop UPS",
    category: "Networking & UPS",
    price: "₹2,750",
    originalPrice: "₹3,600",
    tag: "Surge Protection",
    specs: "Auto Voltage Regulation (AVR) | 15-20 Mins Backup for PC & Monitor | Cold Start Capable | Battery Saver",
    warranty: "2 Years Complete Warranty including Battery",
    badgeColor: "bg-teal-500",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "prod-toner-12a",
    name: "Premium HP 12A / 88A High-Yield Laser Toner Cartridge",
    category: "Printers & Supplies",
    price: "₹650",
    originalPrice: "₹1,200",
    tag: "Tested & Ready",
    specs: "Up to 2,000 Crisp Dark Pages | Compatible with HP 1020 Plus, 1005 MFD, Canon 2900B | Smudge-Free Print",
    warranty: "100% Replacement Warranty on defect",
    badgeColor: "bg-gray-500",
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=600&q=80"
  }
];

export const AMC_PLANS = [
  {
    id: "amc-starter",
    title: "Starter Office AMC",
    recommendedFor: "Small Offices & Retail Shops (Up to 5 Systems)",
    priceText: "Affordable Custom Quote",
    popular: false,
    features: [
      "Quarterly preventive hardware cleaning",
      "Antivirus & OS security patching",
      "On-call engineer support (Response within 6 hrs)",
      "Printer connectivity & driver support",
      "Discounted rates on hardware parts replacement",
      "Quarterly performance audit"
    ]
  },
  {
    id: "amc-business",
    title: "Business Pro AMC",
    recommendedFor: "Growing Firms, Textile Units & Showrooms (6 to 20 Systems)",
    priceText: "Most Preferred Plan",
    popular: true,
    features: [
      "Monthly scheduled preventive visits",
      "Priority same-day engineer dispatch (2-4 hrs SLA)",
      "Full CCTV camera & DVR/NVR checkup",
      "LAN networking, Wi-Fi router & printer coverage",
      "Automated cloud/local data backup setup",
      "Free standby loaner equipment during major repairs",
      "Dedicated senior technician assigned"
    ]
  },
  {
    id: "amc-industrial",
    title: "Industrial & Enterprise AMC",
    recommendedFor: "Manufacturing Plants, Mills & Large Facilities (20+ Systems)",
    priceText: "Comprehensive SLA Contract",
    popular: false,
    features: [
      "Bi-weekly on-site inspections & health reports",
      "Guaranteed 2-hour emergency response SLA",
      "Server rack, managed firewall & multi-switch maintenance",
      "Complete 16-64 camera industrial CCTV monitoring care",
      "Comprehensive parts replacement warranty options",
      "24/7 WhatsApp emergency escalation channel",
      "Annual IT budget planning & asset lifecycle guidance"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "Cpu",
    title: "Precision Chip-Level Lab",
    description: "Equipped with advanced SMD rework stations, microscopic diagnostic tools, and DC power monitors for exact component-level motherboard recovery."
  },
  {
    icon: "ShieldCheck",
    title: "100% Genuine OEM Spares",
    description: "We use only authentic, high-grade replacement screens, batteries, keyboards, and CCTV components backed with clear manufacturer warranties."
  },
  {
    icon: "Clock",
    title: "Rapid Turnaround Time",
    description: "Most common laptop upgrades, OS setups, and toner refills are executed same-day within 20 to 90 minutes so your routine never halts."
  },
  {
    icon: "Truck",
    title: "Doorstep Pickup & On-Site Visits",
    description: "Fast field engineer visits across Kim Char Rasta, Surat, Kosamba, Ankleshwar, and Bharuch for corporate and home clients."
  },
  {
    icon: "BadgeDollarSign",
    title: "Honest & Transparent Pricing",
    description: "No hidden charges. We diagnose the issue first, provide an itemized quote for your approval, and proceed only upon your consent."
  },
  {
    icon: "Headphones",
    title: "Dedicated WhatsApp & Call Support",
    description: "Direct access to our senior hardware engineers via WhatsApp (+91 9316440985) for instant troubleshooting guidance and status updates."
  }
];

export const SERVICE_AREAS = [
  { name: "Kim Char Rasta & Kim Town", highlight: "Primary Hub (Immediate Response)" },
  { name: "Surat City & Outskirts", highlight: "Same-Day Technician Visit" },
  { name: "Ankleshwar GIDC & Industrial Belt", highlight: "Factory AMC & CCTV Specialists" },
  { name: "Bharuch Commercial Hubs", highlight: "Regular Service Route" },
  { name: "Kosamba & Pipodara Industrial Zone", highlight: "Corporate Support" },
  { name: "Panoli GIDC & NH-8 Corridor", highlight: "Fast Highway Dispatch" }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajeshbhai Patel",
    role: "Owner, Patel Textiles & Fabrics",
    location: "Kim, Surat",
    rating: 5,
    text: "Bhumi Technocare has been managing our entire office network and 16 CCTV cameras for over 4 years. Their response time during any breakdown is fantastic. Very honest and reliable team!",
    date: "1 month ago"
  },
  {
    id: 2,
    name: "Mahesh Sharma",
    role: "Plant Operations Lead",
    location: "Ankleshwar GIDC",
    rating: 5,
    text: "Our industrial PC and accounting server crashed right before GST filing. The team diagnosed a damaged capacitor on the motherboard, repaired the chip in just 6 hours, and saved all our data without data loss. Superb skill!",
    date: "2 weeks ago"
  },
  {
    id: 3,
    name: "Pooja Varma",
    role: "Freelance Architect",
    location: "Surat",
    rating: 5,
    text: "My Dell laptop screen was shattered and heating up terribly. Bhumi Technocare replaced the display with an original panel and installed a 512GB NVMe SSD. It now boots in 5 seconds! Outstanding service and fair prices.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Irfan Mansuri",
    role: "Director, Al-Noor Logistics",
    location: "Kosamba / NH-8",
    rating: 5,
    text: "Installed 8 Hikvision ColorVu night vision cameras at our warehouse near NH-8. Crystal clear night footage on my mobile phone from anywhere. Booking via WhatsApp was effortless.",
    date: "A month ago"
  }
];

export const FAQS = [
  {
    question: "How do I book a service or enquire via WhatsApp?",
    answer: "You can click any 'Enquire on WhatsApp' button or fill out our interactive WhatsApp Enquiry form on this website. It takes just 15 seconds to enter your name, area, and device issue. It then instantly formats a structured message and opens WhatsApp with our business line (+91 9316440985) ready to send!"
  },
  {
    question: "Do you provide on-site service at our office or home?",
    answer: "Yes! We provide on-site technician visits for CCTV installations, network troubleshooting, printer setups, and corporate desktop maintenance across Kim, Surat, Ankleshwar, Bharuch, and surrounding areas. For complex chip-level motherboard work, we safely pickup the device for our electrostatic lab."
  },
  {
    question: "What is your warranty policy on laptop & desktop repairs?",
    answer: "We provide an assured 90-day service warranty on chip-level repair jobs. New hardware components (such as SSDs, RAM, Screens, Power Supplies) carry their full official manufacturer warranty ranging from 1 to 5 years."
  },
  {
    question: "How long does a typical laptop repair or SSD upgrade take?",
    answer: "SSD upgrades, RAM expansions, software installations, and toner refills are completed within 30 to 60 minutes. Chip-level motherboard repairs or liquid-damaged laptops typically require 24 to 48 hours for rigorous testing and burn-in verification."
  },
  {
    question: "Can we get a customized CCTV quote for our factory or residential society?",
    answer: "Absolutely. We conduct free preliminary site audits to understand your camera angles, lighting conditions, and recording retention requirements (15 to 90 days), after which we provide a transparent quote with no hidden extras."
  },
  {
    question: "Where is your physical service center located?",
    answer: "Our physical center is located at GF-11, Zam Zam Residency, NH-8, Kim Char Rasta, Kim, Surat, Gujarat - 394110. We are right next to the NH-8 highway, easily accessible with ample customer parking."
  }
];
