'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      let currentSection = 'home'

      navItems.forEach((item) => {
        const section = document.querySelector(item.href)
        if (section) {
          const offsetTop = section.getBoundingClientRect().top + window.scrollY
          if (scrollY >= offsetTop - 100) {
            currentSection = item.href.slice(1)
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center fixed top-0 z-50 bg-background/70 backdrop-blur-md">
      <span className="text-white font-bold text-base sm:text-lg">Emre Uslu</span>
      <ul className="hidden md:flex space-x-6 md:space-x-8 text-sm md:text-lg font-medium text-white">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn(
                'hover:text-[#c6fbfd] transition-colors duration-300',
                activeSection === item.href.slice(1) &&
                  'text-accent border-b-2 border-accent pb-1'
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
