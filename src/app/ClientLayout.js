"use client";
import 'bootstrap/dist/css/bootstrap.min.css'
// import '@/assets/styles/style.scss'

import { usePathname } from "next/navigation";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Layouts/Header";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Header />}
      <main>{children}</main>
      {!isDashboard && <Footer />}
    </>
  );
}
