 ![Untree banner](https://github.com/user-attachments/assets/bf8c70f0-d919-4eb0-990c-59543a926edf)
<div align="center">
   <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
 
  <h1 align="center">UntreeStore</h3>
  <br/>
  <div align="center">
     An online clothing store offers a user-friendly search feature, convenient add-to-cart functionality, and a well-structured shop, cart, and checkout page.
  </div>
  <br/>
 
  <a href="https://untree-store.vercel.app/" target="_blank"> <img src="https://img.shields.io/badge/Vercel%20live-black?logo=vercel&logoColor=white&color=black"/></a>
</div>

## 📋 <a name="table">Table of Contents</a>

1. ✨ [Features](#features)
2. ⚙️ [Tech Stack](#tech-stack)
3. 📦 [Installation](#installation)
4. 🧩 [Snippets (Code to Copy)](#snippets)
5. 🔗 [Assets](#assets)
6. 📁 [Folder Structure](#folder-structure)
7. 🌱 [Improvement Insights](#improvement)
8. 💡 [Challenges and Learnings](#challenges)

## <a name="features">✨ Features</a>
 
🔸**Search Functionality:** Users can search for products using relevant keywords (e.g. item such as "wool sock" can be represented by various keywords, including "socks," "wool," "women's socks," "footwear", etc.) and receive a preview of related items.

🔸**Search Results Page:** When a user submits their search query, they are seamlessly redirected to a dedicated search results page displaying the relevant products.

🔸**Shop Page:** The shop page offers users the flexibility to sort products and navigate through various categories, allowing them to easily find items that cater to their specific needs.

🔸**Add-to-Cart:** Users can effortlessly add products to their cart, with items automatically updated in the cart.

🔸**Cart Page:** The cart page stores users' selected items, allowing them to adjust quantities or remove products while viewing the total amount.

🔸**Checkout Page:** Users can proceed to checkout with one or more products in their cart. Then complete the purchase by filling out the necessary forms.

🔸**Optimized User Experience:** The application leverages Next.js features, such as static page pre-rendering and image/font optimization, to deliver a smooth and fast-loading user experience, enhancing overall satisfaction and engagement.

🔸**SEO:** A sitemap is included primarily for SEO purposes, aiding search engine crawlers in indexing the site and enhancing brand visibility to attract more customers. Additionally, it provides a preview when shared on social media. A robots.txt file is included to disallow indexing of the cart, checkout, and search pages.

## <a name="tech-stack">⚙️ Tech stack</a>

🔹**Frontend:** React, Next.js, Typescript, TailwindCSS

🔹**Deployment:** Vercel

## <a name="installation">📦 Installation</a>

To run the UntreeStore app locally, follow these steps:

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [yarn](https://www.npmjs.com/package/yarn)

1. **Cloning the repository**

```bash
git clone https://github.com/janleven01/untree-store.git
cd untree-store
```

2. **Install dependencies**

Install the project dependencies using npm:

```bash
yarn add
```

3. **Set Up Environment Variables**

Create a .env file in the root directory add the following content:

```env
// Sitemap for SEO

NEXT_PUBLIC_BASE_URL = "http://localhost:3000"

```

4. **Running the application**

```bash
yarn dev
```

**Open in browser:** [http://localhost:3000](http://localhost:3000) to view the project.

## <a name="snippets">🧩 Snippets</a>

<details>
<summary><code>tailwind.config.ts</code></summary>
 
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: '#B84592',
        secondary: '#F8F9FA',
        aboutColor: '#FBF6F9'
      },
      screens: {
        'xs': '425px'
        // => @media (min-width: 425px)
      }
    },
  },
  plugins: [],
};
export default config;

```
</details>

<details>
<summary><code>app/global.css</code></summary>
 
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  cursor: default;
}

body {
  overflow-x: hidden;
}

h1,
h2,
h3 {
  font-family: var(--font-playfair);
}

/* START: Remove HTML Default Designs */

.required {
  font-size: 16px;
}

.required::after {
  content: " *";
  color: red;
}

select {
  appearance: none;
  scrollbar-width: none;
  /*For Firefox*/
  -ms-overflow-style: none;
  /*For Internet Explorer 10+*/
}

select::-webkit-scrollbar {
  /*For WebKit Browsers*/
  width: 0;
}

textarea {
  resize: none;
}

/* Remove Cancel Button */
[type="search"]::-webkit-search-cancel-button {
  appearance: none;
}

/* Remove rounded default in IOS */
textarea,
input[type] {
     border-radius: 0;
}

/* Hide number input controls */
@layer base {
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
/* END: Remove HTML Default Designs */

/* START: General styles */
.max-container {
  @apply w-full px-5 xs:px-8 md:px-16 lg:px-24 xl:px-36 max-w-[1440px] mx-auto;
}

.padding-y {
  @apply lg:py-28 xs:py-16 py-10;
}

.padding-b {
  @apply lg:pb-28 xs:pb-16 pb-10;
}

.flex-center {
  @apply flex items-center justify-center;
}

.flex-between {
  @apply flex justify-between items-center;
}

/* END: General styles */

/* Start: Reusable Styles */

.contact-form {
  @apply p-3 border border-black outline-none focus:border-purple;
}

.button-styles {
  @apply border text-xs font-semibold border-black xs:py-4 py-3 sm:px-6 px-4 tracking-wider transition-colors duration-200 uppercase;
}

.input_buttonStyles {
  @apply border border-black px-4 py-1 hover:text-white hover:bg-black transition-colors duration-200
}

.input_styles{
  @apply border border-y-black px-2 py-1 text-center bg-white text-[14px] outline-none focus:border-purple
}

/* END: Reusable Styles */

/* START: Navbar Styles */

.navbar_header {
 @apply w-full sticky top-0 md:py-5 sm:py-4 py-3 z-50 transition-all duration-500 ease-out max-lg:bg-white 
}

.navbar_menu-styles {
  @apply hover:text-purple transition-colors duration-200 ease-in
}

.navbar_menu-container {
  @apply absolute min-h-screen top-0 right-0 z-50 transition-all bg-white duration-500 ease-in-out shadow-xl
}

.navbar_menu-background {
  @apply fixed top-0 min-w-full min-h-screen transition-all duration-500 ease-in-out z-0
}

.navbar_menu-active {
  @apply bg-black/50 max-w-full max-h-screen visible
}

.navbar_menu-inactive {
  @apply bg-transparent max-h-0 max-w-0 invisible
}

.navlinks_container {
  @apply flex xl:gap-6 lg:gap-4 max-xl:pr-10 select-none
}

.navlinks_lg-dropdown {
  @apply translate-y-5 transition-all duration-200 ease-in-out 
}

.navlinks_mobile-menu {
  @apply transition-all duration-500 ease-in-out overflow-hidden
}

.navlinks_mobile-chevron {
  @apply absolute -right-8 pl-1 top-1.5
}

.navlinks_rotate {
  @apply transition-transform duration-500
}

.dropdown_links {
  @apply absolute text-black border mt-3 rounded-xl pt-3 px-4 shadow-md w-32
}

.dropdown_links-text {
  @apply flex flex-col text-[13px] pb-3 hover:text-purple
}

.navicon_cart {
  @apply flex-center absolute -top-1 -right-2 bg-black text-white rounded-full w-4 h-4 text-xs
}

/* END: Navbar Styles */

/* START: Hero Styles */
.hero_title-container {
  @apply 2xl:w-[30%] lg:w-[35vw] sm:w-[48vw] w-[55vw] absolute md:top-[30%] top-1/4
}

.hero_title {
  @apply md:text-[48px] sm:text-[36px] text-2xl font-bold text-black/80 leading-normal pb-10
}

.hero_image {
  @apply object-cover object-top w-full max-h-screen lg:min-h-screen sm:min-h-[94vh] min-h-[70vh]
}

.hero_image-dots {
  @apply absolute lg:bottom-4 flex md:bottom-4 bottom-2 left-1/2 -translate-x-1/2
}

/* END: Hero Styles */

/* START: Promo Styles */

.promo_image {
  @apply object-cover w-full sm:h-screen h-[75vh]
}

.promo_text-container {
  @apply absolute flex-center flex-col top-1/2 -translate-y-1/2 xl:px-20 md:px-10 lg:mx-56 sm:mx-28 mx-6 gap-2
}

.promo_offer {
  @apply uppercase text-white tracking-widest text-xs
}

.promo_title {
  @apply text-white text-center text-5xl underline font-medium
}

.promo_description {
  @apply text-white text-center tracking-tighter pt-5 pb-20
}

/* END: Promo Styles */

/* START: Products Styles */

.homeProducts_container {
  @apply grid lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 cursor-pointer place-items-center
}

.products_image {
  @apply object-cover hover:scale-110 transition-transform duration-300 ease-in-out
}

.products_new {
  @apply absolute top-3.5 rotate-90  text-[10px] px-3 py-1 bg-lime-600 text-white
}

.products_sale {
  @apply absolute top-4 rotate-90  text-[10px] px-3 py-1 bg-yellow-400 text-white
}

/* END: Products Styles */

/* START: PopularProducts Styles */

.loading-syles {
  @apply flex-center max-container min-h-[50vh]
}

.popularProducts_container {
  @apply relative min-w-full flex-center flex-col xs:min-w-[50%] lg:min-w-[33.333%] text-center
}

.popularProducts_image {
  @apply object-contain hover:scale-105 transition-transform duration-300 ease-in-out
}

.popularProducts_new {
  @apply absolute top-5 left-0 rotate-90 text-[10px] px-3 py-1 bg-lime-600 text-white 
}

.popularProducts_sale {
  @apply absolute top-[22px] rotate-90 text-[10px] px-3 py-1 bg-yellow-400 text-white 
}

.popularProducts_dots {
  @apply absolute left-1/2 -translate-x-1/2 sm:bottom-5 bottom-2
}

/* END: PopularProducts Styles */

/* START: Services Styles */

.services_container {
  @apply bg-white flex-center flex-col py-6 px-3 flex-auto w-72
}

.services_label {
  @apply uppercase text-xs text-center pt-8 tracking-[5px] font-medium
}

.services_description {
  @apply text-center text-gray-400 text-sm pt-3
}

/* END: Services Styles */

/* START: Footer Styles */

.footer_about-links-container {
  @apply flex gap-14 max-lg:flex-wrap
}

.footer_about-container {
  @apply flex flex-col max-w-full
}

.footer_about-description {
  @apply text-sm leading-relaxed pt-2 text-justify
}

.footer_about-input {
  @apply border border-black p-3 outline-none w-full max-w-[50vw]
}

.footer_links-container {
  @apply flex justify-between max-sm:gap-4 w-full
}

.footer_links-text {
  @apply text-[15px] text-black/80 hover:text-black cursor-pointer
}

.footer_socmed-container {
  @apply flex justify-center gap-5 pt-20
}

.footer_socmed-icons {
  @apply bg-secondary rounded-full p-2 w-9 h-9 hover:bg-purple/70
}

.footer_copyrights {
  @apply text-slate-500 text-[15px] text-center
}

.footer_copyrights-href {
  @apply border-b border-slate-500 hover:text-black hover:border-black
}

/* END: Footer Styles */

/* START: Shop Styles */

.shop_category-container {
 @apply flex flex-col pb-10 lg:min-w-[15vw] sm:min-w-[20vw]
}

.displayProducts_container {
  @apply grid lg:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 cursor-pointer place-items-center
}

.displayProducts_pageNumbers {
  @apply flex-center border rounded-full w-10 h-10 hover:border-black gap-2
}

.displayProducts_arrow-styles {
  @apply w-10 h-10 border p-3 rounded-full hover:border-black
}

.productSort_container {
  @apply flex-between max-sm:flex-col max-sm:items-start py-5 gap-5
}

.productSort_active {
  @apply absolute flex flex-col bg-white border border-slate-400 rounded-lg w-44 -left-1 top-0 lg:gap-1 gap-2 z-30 overflow-hidden
}

.productDetail_addCart {
  @apply bg-purple/85 text-white/90 hover:bg-purple hover:text-white border-none w-[60%]
}

/* END: Shop Styles */

/* START: About Styles */

.about_image {
  @apply object-cover object-top w-full max-h-screen lg:min-h-screen sm:min-h-[94vh] min-h-[70vh]
}

.about_title-container {
  @apply lg:w-[35vw] sm:w-[48vw] w-[55vw] absolute md:top-[30%] top-1/4
}

.about_title {
  @apply md:text-[48px] sm:text-[36px] text-2xl font-bold text-white  leading-normal pb-10 animate-slideUpShort
}

.about_button-explore {
  @apply button-styles bg-black text-white hover:brightness-125 animate-slideUpLong
}

.about_dataCount {
  @apply flex justify-between py-14 lg:w-[80%] sm:w-[40%] xs:w-[60%] w-full
}

.about_button-shopNow {
  @apply button-styles bg-black text-white hover:brightness-110
}

.about_button-learnMore {
  @apply button-styles bg-white text-black hover:bg-black hover:text-white
}

.about_image2-container {
  @apply absolute 2xl:-left-32 lg:-left-28 left-0 top-1/2 -translate-y-1/2 bg-aboutColor w-80 h-[70%] z-0
}

.about_image2 {
  @apply relative object-cover h-full w-[70vw] z-10
}

.about_links {
  @apply bg-secondary rounded-full p-2 w-9 h-9 hover:bg-purple/70
}

/* END: About Styles */

/* START: Thankyou Styles */

.thankyou_container {
  @apply flex flex-col items-center pt-20 sm:min-h-[90vh] min-h-[70vh] gap-14 bg-secondary 
}

.thankyou_checkStyles {
  @apply absolute w-9 h-10 left-[60%] transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-purple
}

.thankyou_circleStyles {
  @apply absolute w-20 h-20 top-4 left-2 z-0 p-4 bg-purple/20 rounded-full
}

.thankyou_button-shop {
  @apply button-styles bg-white text-black hover:bg-black hover:text-white
}

/* END: Thankyou Styles */

/* START: Contact Styles */

.contact_form-container {
  @apply w-full flex max-lg:flex-col gap-5 justify-between
}

.contact_form-button {
  @apply bg-purple text-white border-none w-[40%] sm:w-[30%] hover:brightness-105
}

/* END: Contact Styles */

/* START: Cart Styles */

.empty_cartStyles {
  @apply absolute left-1/2 transform -translate-x-1/2 top-32
}

.cart_table {
  @apply px-1 text-center border
}

.cart_total-title {
  @apply font-medium tracking-wide
}

.cart_total {
  @apply font-semibold tracking-wide
}

/* END: Cart Styles */

/* START: Checkout Styles */

.billingDetails-container {
  @apply grid grid-cols-2 max-md:grid-cols-1 gap-10 pt-14
}

.checkout_transition {
  @apply transition-all duration-500 ease-in-out overflow-hidden
}

.coupon_input {
  @apply w-2/3 border-black px-2 xs:py-3.5 py-2.5 border outline-none focus:border-purple text-sm
}

.checkout_total {
  @apply font-semibold py-3
}

.checkout_placeOrder {
  @apply pt-10 text-center button-styles bg-black text-white hover:brightness-125 w-full
}

.payment_button {
  @apply w-full text-black/80 underline hover:no-underline text-start text-sm
}

.payment_content {
  @apply text-sm pt-2 transition-all duration-700 ease-in-out overflow-hidden
}

/* END: Checkout Styles */

/* START: Search Styles */

.search_background {
  @apply fixed inset-0 transition-all duration-500 ease-in-out
}

.search_header {
  @apply max-container rounded-b-xl overflow-hidden h-[50rem] transition-all duration-500 ease-in-out
}

.search_header-true{
  @apply bg-white shadow-xl max-h-[35rem] sm:max-h-[30rem] lg:max-h-[20rem]
}

.search_header-false {
  @apply max-h-0 bg-transparent
}

.search_result-header{
  @apply flex max-lg:flex-col w-full px-2 lg:gap-5 h-[100vh]
}

.search_result-collection {
  @apply w-full lg:w-1/3 lg:border-r border-b border-black py-2
}

.search_result-collectionName {
  @apply flex flex-col pt-1 hover:text-purple/90 md:text-base xs:text-xs text-[10px] px-1
}

.search_result-image-container {
  @apply grid grid-cols-2 sm:grid-cols-4 sm:pt-2 gap-4
}

/* END: Search Styles */


@keyframes slideUpShort {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideUpLong {
  from {
    transform: translateY(150px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@layer components {
  .animate-slideUpShort {
    animation: slideUpShort 0.7s ease-out forwards;
    opacity: 0;
  }

  .animate-slideUpLong {
    animation: slideUpLong 0.7s ease-out forwards;
  }
}

```
</details>

<details>
<summary><code>types/index.ts</code></summary>
 
 ```typescript
export interface Product {
  id: number;
  name: string;
  src: string;
  price: string;
  sale?: boolean;
  discountPrice?: string;
  new?: boolean;
  men?: boolean;
  women?: boolean;
  top?: boolean;
  bottom?: boolean;
  footwear?: boolean;
  accessories?: boolean;
  outerwear?: boolean;
  date?: string;
  salesCount: number;
  description: string;
  stock: number;
  quantity?: number;
  keywords: string[];
}

export interface NavLinksProps {
  scrolled?: boolean;
  otherClassname?: string;
  sideBar?: boolean;
  activeNav: number | null
  setActiveNav: (activeNav: number) => void
}

export interface ButtonProps {
  type: "submit" | "button";
  title: string;
  otherClassname: string;
  handleClick?: () => void;
}

interface MenuLinksProps {
  name: string;
  href: string;
}

export interface DropDownMenuProps {
  items: MenuLinksProps[];
  scrolled?: boolean;
  sideBar?: boolean;
}

export interface DisplayProductsProps {
  currentPage: number;
  setCurrentPage: (
    currentPage: number | ((prevPage: number) => number)
  ) => void;
  filteredProducts: Product[];
}

export interface FormProps {
  label?: string;
  type?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  isContact?: boolean;
  contactForm?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  noLabel?: boolean;
  isRequired?: boolean;
}


export interface MostSearchedProps {
  src: string;
  alt: string;
  label: string;
  href: string;
  isNew?: boolean;
  isSale?: boolean;
};

export interface SearchResultProps {
  title1: string;
  handleSearch: () => void;
  title2?: string;
  searchedResults: Product[];
  isDefault?: boolean;
};

export interface AppContextType {
  cartItems: Product[];
  totalPrice: string;
  handleAddProduct: (product: Product, quantity: number) => void;
  handleReduceQuantity: (product: Product) => void;
  handleDeleteProduct: (product: Product) => void;
  handleQuantityChange: (product: Product, quantity: number) => void;
  handleAddQuantity: (product: Product) => void;
  handlePlaceOrder: () => void;
}

export interface SearchBarProps {
  isSearch: boolean;
  handleSearch: () => void;
  setIsSearch: (isSearch: boolean) => void;
}
```

</details>

<details>
<summary><code>lib/auto_close.ts</code></summary>
 
 ```typescript
import { set } from "lodash"
import { useEffect, RefObject } from "react"

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  scroll: boolean,
  setMenuActive: (menuActive: boolean) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setMenuActive(false)
      }
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuActive(false)
      }
    }

    const handleScroll = () => {
      setMenuActive(false)
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKey)
    if (scroll) window.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKey)
      if (scroll) window.removeEventListener("scroll", handleScroll)
    }
  }, [ref, scroll, setMenuActive])
}

```

</details>

<details>
<summary><code>constants/index.ts</code></summary>
 
 ```typescript
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

```

</details>

<details>
<summary><code>constants/products.ts</code></summary>

<a name="constants"></a>
 
 ```typescript
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Dark Jacket",
    src: "/products/jacket.jpg",
    price: "69.00",
    new: true,
    men: true,
    outerwear: true,
    date: "2024-06-28",
    salesCount: 15,
    stock: 12,
    description:
      "Stay stylishly warm with this sleek dark jacket. Perfect for any season.",
    keywords: [
      "dark jacket",
      "jacket",
      "outerwear",
      "men jacket",
      "black jacket",
      "men",
    ],
  },
  {
    id: 2,
    name: "Chino Bottoms",
    src: "/products/bottoms.jpg",
    price: "99.00",
    sale: true,
    discountPrice: "69.00",
    new: true,
    men: true,
    bottom: true,
    date: "2024-06-27",
    salesCount: 20,
    stock: 23,
    description:
      "Versatile and comfortable, perfect for any occasion. Elevate your casual look.",
    keywords: [
      "chino bottoms",
      "chino pants",
      "bottoms",
      "men pants",
      "casual pants",
      "men",
    ],
  },
  {
    id: 3,
    name: "Brown Shoe",
    src: "/products/shoe.jpg",
    price: "29.00",
    sale: false,
    men: true,
    footwear: true,
    date: "2024-06-15",
    salesCount: 8,
    stock: 18,
    description:
      "Classic brown shoes that match every outfit. Timeless style and comfort.",
    keywords: [
      "brown shoe",
      "shoes",
      "footwear",
      "men shoes",
      "classic shoes",
      "men",
    ],
  },
  {
    id: 4,
    name: "The Modern Sock",
    src: "/products/sock.jpg",
    price: "29.00",
    men: true,
    footwear: true,
    date: "2024-06-10",
    salesCount: 12,
    stock: 15,
    description:
      "Step into comfort with these modern socks. A perfect addition to your wardrobe.",
    keywords: [
      "modern socks",
      "socks",
      "footwear",
      "men socks",
      "comfortable socks",
      "men",
    ],
  },
  {
    id: 5,
    name: "Double Knit Sweater",
    src: "/products/sweater.jpg",
    price: "99.00",
    sale: true,
    discountPrice: "69.00",
    men: true,
    top: true,
    date: "2024-06-18",
    salesCount: 32,
    stock: 35,
    description: "Double the knit, double the warmth. Cozy up in style.",
    keywords: [
      "double knit sweater",
      "sweater",
      "top",
      "men sweater",
      "warm sweater",
      "men",
    ],
  },
  {
    id: 6,
    name: "The Murray",
    src: "/products/watch.jpg",
    price: "99.00",
    sale: true,
    discountPrice: "69.00",
    men: true,
    accessories: true,
    date: "2024-06-18",
    salesCount: 25,
    stock: 28,
    description:
      "Timeless elegance in a modern design. Perfect for any occasion.",
    keywords: [
      "Murray watch",
      "watch",
      "accessories",
      "men watch",
      "elegant watch",
      "men",
    ],
  },
  {
    id: 7,
    name: "Cream Jacket",
    src: "/products/jacket-4.png",
    price: "99.00",
    new: true,
    women: true,
    outerwear: true,
    date: "2024-06-29",
    salesCount: 10,
    stock: 14,
    description:
      "Chic and cozy, this cream jacket is a must-have. Elevate your outerwear collection.",
    keywords: [
      "cream jacket",
      "jacket",
      "outerwear",
      "women jacket",
      "chic jacket",
      "women",
    ],
  },
  {
    id: 8,
    name: "Plain Jeans",
    src: "/products/bottoms-3.png",
    price: "69.00",
    women: true,
    bottom: true,
    date: "2024-06-12",
    salesCount: 5,
    stock: 11,
    description:
      "Classic jeans for effortless style. Versatile and comfortable.",
    keywords: [
      "plain jeans",
      "jeans",
      "bottoms",
      "women jeans",
      "classic jeans",
      "women",
    ],
  },
  {
    id: 9,
    name: "Formal Sandals",
    src: "/products/shoe-3.png",
    price: "29.00",
    women: true,
    footwear: true,
    date: "2024-06-08",
    salesCount: 7,
    stock: 13,
    description:
      "Elegant sandals for a formal touch. Step into sophistication.",
    keywords: [
      "formal sandals",
      "sandals",
      "footwear",
      "women sandals",
      "elegant sandals",
      "women",
    ],
  },
  {
    id: 10,
    name: "Wool Sock",
    src: "/products/sock-3.png",
    price: "49.00",
    sale: true,
    discountPrice: "29.00",
    new: true,
    women: true,
    footwear: true,
    date: "2024-06-30",
    salesCount: 35,
    stock: 40,
    description:
      "Cozy up with these premium wool socks. Warmth and comfort guaranteed.",
    keywords: [
      "wool socks",
      "socks",
      "footwear",
      "women socks",
      "warm socks",
      "women",
    ],
  },
  {
    id: 11,
    name: "Comfy Wool Sweater",
    src: "/products/sweater-3.jpg",
    price: "99.00",
    new: true,
    women: true,
    top: true,
    date: "2024-06-26",
    salesCount: 16,
    stock: 17,
    description:
      "Stay warm and stylish with this comfy wool sweater. Perfect for chilly days.",
    keywords: [
      "comfy wool sweater",
      "sweater",
      "top",
      "women sweater",
      "warm sweater",
      "women",
    ],
  },
  {
    id: 12,
    name: "Vintage Timepiece",
    src: "/products/watch-2.jpg",
    price: "99.00",
    sale: true,
    discountPrice: "69.00",
    new: true,
    women: true,
    accessories: true,
    date: "2024-06-24",
    salesCount: 22,
    stock: 24,
    description:
      "Add a touch of vintage charm to your look. Classic design with a modern twist.",
    keywords: [
      "vintage watch",
      "watch",
      "timepiece",
      "accessories",
      "women watch",
      "classic watch",
      "women",
    ],
  },
  {
    id: 13,
    name: "Formal White Shirt",
    src: "/products/shirt-1.jpg",
    price: "39.00",
    new: true,
    men: true,
    top: true,
    date: "2024-06-23",
    salesCount: 9,
    stock: 19,
    description:
      "Sharp and clean, perfect for formal occasions. A wardrobe essential.",
    keywords: [
      "formal white shirt",
      "shirt",
      "top",
      "men shirt",
      "formal shirt",
      "men",
    ],
  },
  {
    id: 14,
    name: "Modern Jacket",
    src: "/products/jacket-3.png",
    price: "69.00",
    new: true,
    men: true,
    outerwear: true,
    date: "2024-06-22",
    salesCount: 11,
    stock: 21,
    description: "A modern jacket for a modern man. Stylish and practical.",
    keywords: [
      "modern jacket",
      "jacket",
      "outerwear",
      "men jacket",
      "stylish jacket",
      "men",
    ],
  },
  {
    id: 15,
    name: "Green Cargo Shorts",
    src: "/products/bottoms-2.jpg",
    price: "99.00",
    new: true,
    men: true,
    bottom: true,
    date: "2024-06-25",
    salesCount: 30,
    stock: 34,
    description:
      "Casual and practical, these cargo shorts are a staple. Perfect for everyday wear.",
    keywords: [
      "green cargo shorts",
      "cargo shorts",
      "bottoms",
      "men shorts",
      "casual shorts",
      "men",
    ],
  },
  {
    id: 16,
    name: "Classy Black Shoe",
    src: "/products/shoe-2.jpg",
    price: "49.00",
    new: true,
    men: true,
    footwear: true,
    date: "2024-06-21",
    salesCount: 13,
    stock: 20,
    description:
      "Elegant black shoes for every occasion. Timeless and versatile.",
    keywords: [
      "classy black shoes",
      "black shoes",
      "footwear",
      "men shoes",
      "elegant shoes",
      "men",
    ],
  },
  {
    id: 17,
    name: "Classic Calf Socks",
    src: "/products/sock-4.jpg",
    price: "29.00",
    men: true,
    footwear: true,
    date: "2024-06-20",
    salesCount: 10,
    stock: 17,
    description:
      "Classic calf socks for ultimate comfort. A wardrobe essential.",
    keywords: [
      "classic calf socks",
      "calf socks",
      "socks",
      "men socks",
      "comfortable socks",
      "men",
    ],
  },
  {
    id: 18,
    name: "Classic Cozy Sweater",
    src: "/products/sweater-2.jpg",
    price: "69.00",
    men: true,
    top: true,
    date: "2024-06-11",
    salesCount: 3,
    stock: 16,
    description: "Cozy up in this classic sweater. Perfect for chilly days.",
    keywords: [
      "classic cozy sweater",
      "cozy sweater",
      "sweater",
      "men sweater",
      "warm sweater",
      "men",
    ],
  },
  {
    id: 19,
    name: "The Modern Watch",
    src: "/products/watch-3.jpg",
    price: "99.00",
    new: true,
    men: true,
    accessories: true,
    date: "2024-06-19",
    salesCount: 19,
    stock: 27,
    description:
      "Sleek and modern, this watch is a statement piece. Elevate your look.",
    keywords: [
      "modern watch",
      "watch",
      "accessories",
      "men watch",
      "sleek watch",
      "men",
    ],
  },
  {
    id: 20,
    name: "Urban Jacket",
    src: "/products/jacket-2.jpg",
    price: "69.00",
    women: true,
    outerwear: true,
    date: "2024-06-13",
    salesCount: 8,
    stock: 14,
    description: "Urban chic with this stylish jacket. Stay warm and trendy.",
    keywords: [
      "urban jacket",
      "jacket",
      "outerwear",
      "women jacket",
      "chic jacket",
      "women",
    ],
  },
  {
    id: 21,
    name: "Effortless Style Jeans",
    src: "/products/bottoms-4.png",
    price: "99.00",
    sale: true,
    discountPrice: "69.00",
    women: true,
    bottom: true,
    date: "2024-06-17",
    salesCount: 27,
    stock: 32,
    description:
      "Jeans that offer effortless style and comfort. A perfect fit for any look.",
    keywords: [
      "effortless style jeans",
      "jeans",
      "bottoms",
      "women jeans",
      "comfortable jeans",
      "women",
    ],
  },
  {
    id: 22,
    name: "Elegant Formal Heels",
    src: "/products/shoe-4.jpg",
    price: "29.00",
    women: true,
    footwear: true,
    date: "2024-06-09",
    salesCount: 4,
    stock: 13,
    description:
      "Step up your style with these elegant heels. Perfect for formal occasions.",
    keywords: [
      "elegant formal heels",
      "formal heels",
      "heels",
      "women heels",
      "elegant heels",
      "women",
    ],
  },
  {
    id: 23,
    name: "Classic Knit Socks",
    src: "/products/sock-2.jpg",
    price: "29.00",
    new: true,
    women: true,
    footwear: true,
    date: "2024-06-31",
    salesCount: 7,
    stock: 16,
    description:
      "Keep it classic with these knit socks. Comfortable and stylish.",
    keywords: [
      "classic knit socks",
      "knit socks",
      "socks",
      "women socks",
      "comfortable socks",
      "women",
    ],
  },
  {
    id: 24,
    name: "Elegant Comfort Sweater",
    src: "/products/sweater-4.png",
    price: "99.00",
    new: true,
    women: true,
    top: true,
    date: "2024-06-29",
    salesCount: 29,
    stock: 39,
    description:
      "Elegance meets comfort in this stylish sweater. Perfect for any occasion.",
    keywords: [
      "elegant comfort sweater",
      "comfort sweater",
      "sweater",
      "women sweater",
      "stylish sweater",
      "women",
    ],
  },
  {
    id: 25,
    name: "Classic Silver Watch",
    src: "/products/watch-4.jpg",
    price: "99.00",
    new: true,
    women: true,
    accessories: true,
    date: "2024-06-28",
    salesCount: 14,
    stock: 28,
    description:
      "A classic silver watch for a timeless look. Perfect for any outfit.",
    keywords: [
      "classic silver watch",
      "silver watch",
      "watch",
      "women watch",
      "timeless watch",
      "women",
    ],
  },
  {
    id: 26,
    name: "Classic Green Shirt",
    src: "/products/shirt-2.jpg",
    price: "49.00",
    sale: true,
    discountPrice: "29.00",
    men: true,
    top: true,
    date: "2024-06-16",
    salesCount: 9,
    stock: 20,
    description:
      "Refresh your wardrobe with this classic green shirt. A staple for any occasion.",
    keywords: [
      "classic green shirt",
      "green shirt",
      "shirt",
      "top",
      "men shirt",
      "men",
    ],
  },
];

export function countProducts(products: Product[]) {
  const counts = {
    idCount: 0,
    newCount: 0,
    menCount: 0,
    womenCount: 0,
    topCount: 0,
    bottomCount: 0,
    footwearCount: 0,
    acceCount: 0,
    outerwearCount: 0,
  };

  products.forEach((product) => {
    if (product.id) counts.idCount++;
    if (product.new) counts.newCount++;
    if (product.men) counts.menCount++;
    if (product.women) counts.womenCount++;
    if (product.top) counts.topCount++;
    if (product.bottom) counts.bottomCount++;
    if (product.footwear) counts.footwearCount++;
    if (product.accessories) counts.acceCount++;
    if (product.outerwear) counts.outerwearCount++;
  });

  return counts;
}

const {
  idCount,
  newCount,
  menCount,
  womenCount,
  topCount,
  bottomCount,
  footwearCount,
  acceCount,
  outerwearCount,
} = countProducts(products);

export const categoryStatus = [
  { label: "All", count: idCount },
  { label: "New", count: newCount },
  { label: "Men", count: menCount },
  { label: "Women", count: womenCount },
  { label: "Top", count: topCount },
  { label: "Bottom", count: bottomCount },
  { label: "Footwear", count: footwearCount },
  { label: "Accessories", count: acceCount },
  { label: "Outerwear", count: outerwearCount },
];

```

</details>

<details>
<summary><code>utils/index.ts</code></summary>
 
 ```typescript
import { Product } from "@/types";

export const sortProducts = (products: Product[], activeSort: string): Product[] => {
  return [...products].sort((a, b) => {
    if (activeSort === "Newest Items") {
      // Ensure both dates are defined before comparing
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    }
    if (activeSort === "Best Selling") {
      return (b.salesCount || 0) - (a.salesCount || 0);
    }
    if (activeSort === "Price: Ascending") {
      return (
        parseFloat(a.price) -
        parseFloat(b.price)
      );
    }
    if (activeSort === "Price: Descending") {
      return (
        parseFloat(b.price) -
        parseFloat(a.price)
      );
    }
    return 0;
  });
};

export const filterProducts = (sortedProducts: Product[], activeCategory: string): Product[] => {
  return sortedProducts.filter((product) => {
    switch (activeCategory) {
      case "All":
        return true;
      case "New":
        return !!product.new;
      case "Men":
        return !!product.men;
      case "Women":
        return !!product.women;
      case "Top":
        return !!product.top;
      case "Bottom":
        return !!product.bottom;
      case "Footwear":
        return !!product.footwear;
      case "Accessories":
        return !!product.accessories;
      case "Outerwear":
        return !!product.outerwear;
      default:
        return false;
    }
  });
};
```

</details>

## <a name="assets">🔗 Assets</a>

You can find the project's public assets [here](https://drive.google.com/drive/folders/121tlOUOZ1MIf_984X1Un-RRTE9J0Yqz_?usp=drive_link).

## <a name="folder-structure">📁 Folder Structure</a>

```bash
medix/
├── public/                               # Public assets (e.g., images, icons)
├── src/
│   ├── app/                              # Next.js App Router configuration and routes
│       ├── cart/                           # Cart-related pages and functionality
│       ├── checkout/                       # Checkout process page
│       ├── contact/                        # Contact form page
│       ├── men/                            # Men's product categories
│       ├── page/                           # Statis pages for About, Team, etc.
│       ├── search/                         # Search result page
│       ├── shop/                           # Main shop page product page
│           ├── [productName]/                # Product Details page
│       ├── thankyou/                       # Thank you page after successful checkout
│       ├── women/                          # Women's product categories
│   ├── components/                       # Reusable UI components
│   ├── constants/                        # Global constants and default values
│   ├── lib/                              # Helper function
│   ├── types/                            # TypeScript types and interfaces
├── .env.local                            # NEXT_PUBLIC_BASE_URL for Sitemap
├── .gitignore                            # Specifies files and directories to be ignored by Git
├── package.json                          # Project dependencies
└── tailwind.config.ts                    # Tailwind CSS configuration file
```

## <a name="improvement">🌱 Improvement Insights</a>

1. **Premature Abstraction with Tailwind:** In this project, I overused the @apply directive in Tailwind CSS, and just writing CSS again instead of leveraging Tailwind’s utility-first approach. This practice undermined the workflow and maintainability benefits that Tailwind offers.

     Details here: [https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction](https://tailwindcss.com/docs/reusing-styles#avoiding-premature-abstraction)

2. **Relying on Static Product Data:** I stored all product data directly in the [constants folder](#constants) without integrating a database and implementing asynchronous processes. This approach limited the flexibility and scalability of the application, as adding or updating products required manual changes in the codebase

3. **Disorganized Components Folder:** I placed all reusable components in a single folder without proper organization, leading to a cluttered structure that made it difficult to locate and manage components. This lack of organization hindered maintainability and scalability as the project grew.

## <a name="challenges">💡 Challenges and Learnings</a>

1. **Utilizing React Context API**: By leveraging the React Context API, I can manage my cart state across the application without prop drilling. The context provides functions to add, remove, and update product quantities, as well as to clear the cart upon order placement.

   In my previous project, [Furni](https://github.com/janleven01/Furni), I relied heavily on prop drilling for state management, which highlighted the advantages of using the Context API for cleaner and more efficient state management. 

2. **Leveraging Next.js App Router:** I learned how to utilize Next.js built-in App Router, which eliminates the need for importing react-router as required in React. I learned how App Router navigation works (e.g. using useRouter() to push or replace routes, and useParams() to retrieve URL parameters from specific pages). Additionally, I maximized Next.js's built-in image and font optimization capabilities.

3. **Optimizing SEO with Next.js**: I learned to optimize metadata for SEO using Next.js, including understanding how sitemaps file work. With Next.js built-in features like server-side rendering (SSR) and static site generation (SSG), significantly enhancing the SEO further and improving initial page load speed for a better user experience. Additionally, I pre-rendered metadata routes for all products (dynamic route) to enhance visibility for search engine crawlers and provide previews on social media.

   Furthermore, in Next.js, each page in the "pages" directory is automatically assigned its own JavaScript bundle, while dynamic imports can be used to load non-essential components only when required. This not only improves performance but also contributes positively to SEO, as faster load times can lead to better search engine rankings.

```typescript
const product: MetadataRoute.Sitemap = products.map((product) => ({
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/${product.name.replace(/\s+/g, '')}?id=${product.id}`,
  lastModified: product.date
}));

```
     
4. **Using Only Tailwind CSS**:  In this project, I exclusively used Tailwind CSS for design and styling, combined with JavaScript for implementing interactive components such as pagination and carousels, without importing any additional libraries or dependencies.  This approach allowed me to gain a deeper understanding of Tailwind CSS's utility classes and JavaScript's role in building dynamic user interfaces
