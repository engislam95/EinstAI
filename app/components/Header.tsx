'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Chatbot', path: '/Chat' },
    { name: 'Image AI', path: '/ImageGenerator' },
    { name: 'Voice AI', path: '/VoiceGenerator' },
    { name: 'Code Assistant ( .. Soon )', path: '/code' },
  ]

  return (
    <header className="sticky top-0 z-50 mb-5 bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-md">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight"
        >
          <Image src="/ai.png" alt="home" width={50} height={50} />
          <p className="">EinstAI</p>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path} className="hover:underline">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block cursor-pointer focus:outline-none md:hidden"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-white hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
