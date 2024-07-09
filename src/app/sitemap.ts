import { products } from "@/constants/products";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  const product: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/${product.name.replace(/\s+/g, '')}?id=${product.id}`,
    lastModified: product.date
  })) 
  
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/men`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/women`,
      lastModified: new Date()
    },
    ...product,
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/page`,
      lastModified: new Date()
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
      lastModified: new Date()
    },
  ]
}