"use client"

import { Sun, Moon, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Navbar() {

  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const router = useRouter()

  // Check existing theme on load
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setDarkMode(isDark)
  }, [])

  // Apply theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  const closeMenu = () => setMenuOpen(false)

  const goHome = () => {
    router.push("/")
    closeMenu()
  }

  const goProperties = () => {
    router.push("/?expand=true#properties")
    closeMenu()
  }

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-4 bg-white dark:bg-black text-black dark:text-white shadow-md">

      {/* Logo */}
      <button onClick={goHome} className="flex items-center gap-2">
        <img src="/images/logo.png" className="h-8" alt="logo" />
        <h1 className="font-bold text-lg">Success Infra Estate</h1>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">

        <button onClick={goHome} className="hover:text-blue-500 transition">
          Home
        </button>

        <Link href="/about" className="hover:text-blue-500 transition">
          About
        </Link>

        <button onClick={goProperties} className="hover:text-blue-500 transition">
          Properties
        </button>

        <Link href="/contact" className="hover:text-blue-500 transition">
          Contact
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

      </div>

      {/* Mobile Buttons */}
      <div className="flex items-center gap-3 md:hidden">

        <button
          onClick={toggleTheme}
          className="px-3 py-2 border rounded-lg"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-black flex flex-col items-center gap-6 py-6 shadow-md md:hidden">

          <button onClick={goHome}>
            Home
          </button>

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <button onClick={goProperties}>
            Properties
          </button>

          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

        </div>
      )}

    </nav>
  )
}