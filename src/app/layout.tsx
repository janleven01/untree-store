import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Provider } from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: {
    default: "UntreeStore",
    template: "%s / UntreeStore",
  },
  description: "Discover your style with our curated collections.",
  openGraph: {
    title: "UntreeStore",
    description: "Explore curated collections here at Untree.co",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <Provider>
          <NavBar />
          {children}
          <Services />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
