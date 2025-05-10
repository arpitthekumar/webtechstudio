// src/app/lib/hardware.ts

export interface HardwareProduct {
  id: string;
  name: string;
  price: string;
  description: string;
  details: string;
  image: string;
  gallery: string[];
  link: string;
  specs: { label: string; value: string }[];
  useCases: string[];
}

export const hardwareData: { products: HardwareProduct[] } = {
  products: [
    {
      id: "thermal-printer",
      name: "Thermal Printer",
      price: "₹3,999",
      description:
        "Fast and reliable 80mm thermal printer ideal for billing and receipts in gyms and retail counters.",
      details:
        "Our Thermal Printer offers high-speed printing with 203dpi resolution, auto-cutter support, and USB+LAN connectivity. It works seamlessly with most POS software and prints clean, professional receipts.",
      image:        "/hardware/printer/image1.jpg",

      gallery: [
        "/hardware/printer/image1.jpg",
        "/hardware/printer/image2.jpeg",
      ],
      link: "https://example.com/thermal-printer",
      specs: [
        { label: "Print Width", value: "80mm" },
        { label: "Resolution", value: "203dpi" },
        { label: "Speed", value: "Up to 200mm/sec" },
        { label: "Interfaces", value: "USB, LAN" },
        { label: "Cutter", value: "Auto-Cutter Supported" },
        { label: "OS Support", value: "Windows, Linux" },
      ],
      useCases: [
        "Billing Counters",
        "Receipt Generation",
        "POS Integration",
      ],
    },
    {
      id: "biometric-machine",
      name: "Biometric Attendance Machine",
      price: "₹4,999",
      description:
        "Fingerprint-based biometric machine for staff and member attendance tracking in gyms and offices.",
      details:
        "The Biometric Attendance Machine supports fingerprint, password, and RFID modes. It has a 2.4\" TFT screen, stores up to 1000 fingerprints, and syncs via USB and TCP/IP. Export attendance logs easily.",
      image:         "/hardware/scaner/image1.jpg",

      gallery: [
        "/hardware/scaner/image1.jpg",
        "/hardware/scaner/image2.jpeg",
      ],
      link: "https://example.com/biometric-machine",
      specs: [
        { label: "Verification Modes", value: "Fingerprint, RFID, Password" },
        { label: "Capacity", value: "1000 Fingerprints" },
        { label: "Display", value: "2.4” TFT Color Screen" },
        { label: "Connectivity", value: "USB, TCP/IP" },
        { label: "Power", value: "DC 5V 1A" },
        { label: "Log Capacity", value: "100,000 Records" },
      ],
      useCases: [
        "Gym Member Attendance",
        "Staff Punch In/Out",
        "Access Control",
      ],
    },
  ],
};
