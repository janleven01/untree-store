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