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
      id: "barcode-scanner",
      name: "Wireless Barcode Scanner",
      price: "₹1,799",
      description: "Reliable 2D wireless barcode scanner for seamless gym and retail POS integration.",
      details:
        "Our Wireless Barcode Scanner offers ultra-fast 1D/2D scanning, wireless range up to 100 meters, plug-and-play USB receiver, and 2200mAh long battery life. Built for performance in gyms, retail, and warehouses.",
      image: "/hardware/barcode-scanner.webp",
      gallery: [
        "/hardware/barcode-scanner.webp",
        "/hardware/barcode-scanner-2.webp",
      ],
      link: "https://example.com/wireless-scanner",
      specs: [
        { label: "Scan Capability", value: "1D & 2D Barcodes" },
        { label: "Wireless Range", value: "Up to 100 meters" },
        { label: "Battery", value: "2200mAh Rechargeable" },
        { label: "Interface", value: "USB 2.0 Receiver" },
        { label: "Compatibility", value: "Windows, macOS, POS Systems" },
        { label: "Weight", value: "220g" },
      ],
      useCases: [
        "Gym Check-ins & Member Tracking",
        "Retail POS Billing",
        "Inventory Management",
      ],
    },
    {
      id: "complete-kit",
      name: "Complete POS Kit",
      price: "₹28,999",
      description:
        "All-in-one point of sale kit with scanner, printer, touchscreen monitor, and POS software.",
      details:
        "The Complete POS Kit includes everything your business needs: 15.6\" capacitive touch monitor, high-speed thermal printer, 2D barcode scanner, preloaded POS software with cloud backup. Ideal for gyms, restaurants, and retail stores.",
      image: "/hardware/complete-kit.webp",
      gallery: [
        "/hardware/complete-kit.webp",
        "/hardware/complete-kit-2.webp",
      ],
      link: "https://example.com/complete-kit",
      specs: [
        { label: "Monitor", value: "15.6” Full HD Touchscreen" },
        { label: "Printer", value: "80mm Thermal Printer" },
        { label: "Scanner", value: "2D Barcode Laser Scanner" },
        { label: "OS", value: "Windows 10 with POS Software" },
        { label: "Connectivity", value: "WiFi, USB, HDMI" },
        { label: "Warranty", value: "1 Year Onsite" },
      ],
      useCases: [
        "Reception Desk Management",
        "Retail Point of Sale",
        "Customer Check-In Systems",
      ],
    },
  ],
};
