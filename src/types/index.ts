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