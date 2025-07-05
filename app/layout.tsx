import './globals.css'
import '../styles/animations.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MatrixBackground from '@/components/layout/MatrixBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Emre Uslu – Fullstack & Mobile Developer",
  description: "Portfolio of Emre Uslu, passionate frontend and mobile developer.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://emreuslu.terapinisec.com"), 
  openGraph: {
    title: "Emre Uslu – Fullstack & Mobile Developer",
    description: "Portfolio of Emre Uslu, passionate frontend and mobile developer.",
    url: "https://emreuslu.terapinisec.com",
    siteName: "Emre Uslu Portfolio",
    images: [
      {
        url: "/images/branding/EmreUslu.png", // public klasörüne koy
        width: 1200,
        height: 630,
        alt: "Emre Uslu Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emre Uslu – Fullstack & Mobile Developer",
    description: "Portfolio of Emre Uslu, passionate frontend and mobile developer.",
    images: ["/images/branding/EmreUslu.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MatrixBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
