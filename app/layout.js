import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SubscriptionForm from "./components/subscriptionForm/SusbscriptionForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Victoria Joyas y Diseño",
  description: "Descubre la elegancia eterna en cada pieza de oro y plata.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        {children}
        <SubscriptionForm></SubscriptionForm>
        <Footer></Footer>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GID || ''} />
    </html>
  );
}
