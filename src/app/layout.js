import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tyler Scaringella",
  description: "Portfolio of Tyler Scaringella",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 bg-stone-950 lg:mx-auto ${inter.className}`} >{children}</body>
    </html>
  );
}
