'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="w-full px-6 py-4 flex justify-center fixed top-0 z-50 bg-background/70 backdrop-blur-lg">
      <ul className="flex space-x-8 text-sm md:text-lg  font-medium text-white ">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn(
                'hover:text-[#c6fbfd] transition-colors duration-300',
                pathname === item.href && 'text-accent border-b-2 border-accent pb-1'
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
