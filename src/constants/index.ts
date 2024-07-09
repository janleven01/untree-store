import {
  Clock9,
  Mail,
  MapPin,
  Phone,
  Repeat,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const navLinks = [
  { href: "/", name: "Home" },
  { href: "/shop", name: "Shop" },
  { href: "/page", name: "Pages" },
  { href: "/men", name: "Men" },
  { href: "/women", name: "Women" },
];

export const shopLinks = [
  { href: "/shop", name: "Top" },
  { href: "/shop", name: "Bottom" },
  { href: "/shop", name: "Footwear" },
  { href: "/shop", name: "Accessories" },
  { href: "/shop", name: "Outerwear" },
];

export const pageLinks = [
  { href: "/page", name: "About" },
  { href: "/contact", name: "Contact" },
  { href: "/cart", name: "Cart" },
  { href: "/checkout", name: "Checkout" },
];

export const imageSlider = [
  { src: "/hero-slider-1.jpg", alt: "hero slider 1" },
  { src: "/hero-slider-2.jpg", alt: "hero slider 2" },
];

export const services = [
  {
    label: "Worldwide Delivery",
    description:
      "From doorstep to globe-trotting destinations, enjoy seamless delivery wherever you are.",
    icon: Truck,
  },
  {
    label: "Secure Payments",
    description:
      "Shop worry-free with our ironclad security, ensuring your transactions are always protected.",
    icon: ShieldCheck,
  },
  {
    label: "Simple Returns",
    description:
      "No headaches, no hassles. Returns made simple because your satisfaction is our priority.",
    icon: Repeat,
  },
];

export const footerLinks = [
  {
    label: "Help",
    links: [
      {
        link: "Contact us",
      },
      {
        link: "Account",
      },
      {
        link: "Shipping",
      },
      {
        link: "Returns",
      },
      {
        link: "FAQ",
      },
    ],
  },
  {
    label: "About",
    links: [
      {
        link: "About us",
      },
      {
        link: "Press",
      },
      {
        link: "Careers",
      },
      {
        link: "Team",
      },
      {
        link: "FAQ",
      },
    ],
  },
  {
    label: "Shop",
    links: [
      {
        link: "Store us",
      },
      {
        link: "Gift Cards",
      },
      {
        link: "Student Discount",
      },
    ],
  },
];

export const socialMediaLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    src: "/icons/facebook.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    src: "/icons/instagram.svg",
  },
  {
    name: "Linked In",
    href: "https://www.linkedin.com/feed/",
    src: "/icons/linkedin.svg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/home",
    src: "/icons/twitter.svg",
  },
];

export const whyChooseUs = [
  { label: "Exceptional Quality" },
  { label: "Unique Designs" },
  { label: "Sustainable Fashion" },
];

export const ourTeam = [
  {
    name: "Ethan Dawson",
    title: "CEO",
    desciption:
      "Ethan leads with a vision for innovation and excellence, steering Untree towards new heights in fashion and curated collections.",
    imgURL: "/person_1.jpg",
  },
  {
    name: "Anderson Matthew",
    title: "Designer",
    desciption:
      "Anderson channels creativity into every detail, crafting designs that resonate with cultural relevance and artistic expression.",
    imgURL: "/person_2.jpg",
  },
  {
    name: "Lucas Bennett",
    title: "Developer",
    desciption:
      "Lucas's technical prowess ensures online experience is seamless and intuitive, blending technology with aesthetic perfection.",
    imgURL: "/person_3.jpg",
  },
];

export const dataCount = [
  { number: "50k+", label: "Customers" },
  { number: "10", label: "Staffs" },
  { number: "5", label: "Awards" },
];

export const contacts = [
  {
    icon: MapPin,
    label: "Location:",
    information: "43 Raymouth Rd. Baltemoer, London 3910",
  },
  {
    icon: Clock9,
    label: "Open Hours:",
    information: "Sunday-Friday: 11:00 AM - 2300 PM",
  },
  {
    icon: Mail,
    label: "Email:",
    information: "info@untree.co",
  },
  {
    icon: Phone,
    label: "Call:",
    information: "+1 1234 55488 55",
  },
];

export const mostSearched = [
  {
    src: "/products/sweater-4.png",
    alt: "Elegant Comfort Sweater",
    label: "New Arrivals",
    href: "/shop?sort=newestitems&id=0",
  },
  {
    src: "/products/sock-3.png",
    alt: "Wool Socks",
    label: "Best-Seller",
    href: "/shop?sort=bestselling&id=1",
  },
  {
    src: "/products/bottoms-4.png",
    alt: "Effortless Style Jeans",
    label: "Sale!",
    href: "/shop/EffortlessStyleJeans?id=21",
  },
  {
    src: "/products/watch.jpg",
    alt: "The Murray",
    label: "Watches",
    href: "shop?category=Accessories",
  },
];

export const payments = [
  {
    label: "Direct Bank Transfer",
    content: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.",
  },
  {
    label: "Cheque Payment",
    content: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.",
  },
  {
    label: "Paypal",
    content: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.",
  },
];
