import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Elixor Tech — Engineered for Excellence",
  description:
    "Elixor Tech builds scalable, secure, and smart digital products that drive real business growth. Web development, mobile apps, AI/ML, and cloud solutions.",
  keywords: "Elixor Tech, web development, mobile apps, AI, machine learning, cloud solutions, digital products",
  openGraph: {
    title: "Elixor Tech — Engineered for Excellence",
    description: "We engineer digital excellence. Scalable, secure, and smart digital products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
