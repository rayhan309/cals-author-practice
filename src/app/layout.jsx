import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navber from "@/layouts/components/Navber/Navber";
import Footer from "@/layouts/components/Footer/Footer";

const poppins = Poppins(
  {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
  }
);

export const metadata = {
  title: "DashForge – Role-Based Dashboard Management",
  description:
    "DashForge empowers teams with secure, role-based dashboards. Build, control, and scale your projects effortlessly.",
  keywords: [
    "DashForge",
    "Dashboard",
    "SaaS",
    "Role-Based Access",
    "React",
    "Next.js",
    "Admin Panel",
    "User Management",
  ],
  authors: [{ name: "Rayhan", url: "https://cals-author.vercel.app" }],
  creator: "Rayhan",
  themeColor: "#8b5cf6", // matches purple-500
  openGraph: {
    title: "DashForge – Role-Based Dashboard Management",
    description:
      "DashForge empowers teams with secure, role-based dashboards. Build, control, and scale your projects effortlessly.",
    url: "https://cals-author.vercel.app",
    siteName: "DashForge",
    images: [
      {
        url: "/logo.png", // replace with your logo path
        width: 800,
        height: 600,
        alt: "DashForge Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DashForge – Role-Based Dashboard Management",
    description:
      "DashForge empowers teams with secure, role-based dashboards. Build, control, and scale your projects effortlessly.",
    creator: "@rayhan", // your twitter handle
    images: ["/logo.png"], // same as OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <nav>
          <Navber />
        </nav>
        <main className="min-h-[calc(100vh-240px)]">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
