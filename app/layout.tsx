import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emre Uslu – Portfolio',
  description: 'Frontend & Mobile Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed top-[-200px] left-[-150px] w-[400px] h-[400px] bg-blue-700 blur-intense rounded-full z-[-10] opacity-40" />
        <div className="fixed bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-purple-700 blur-intense rounded-full z-[-10] opacity-30" />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
