'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const html = document.documentElement
    const storedMode = localStorage.getItem('theme')

    if (storedMode === 'dark') {
      html.classList.add('dark')
      setDarkMode(true)
    } else if (!storedMode && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setDarkMode(!darkMode)
  }

  // ⛔ Hindari render sebelum mount
  if (!mounted) return null

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50 transition-colors">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Ridhan</h1>
        <ul className="flex space-x-6 text-sm font-medium items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/experience">Experience</Link></li>
          <li><Link href="/education">Education</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="ml-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
