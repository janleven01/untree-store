import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UntreeStore",
    short_name: "UntreeStore",
    description: "Discover your style with our curated collections.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#B84592",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
