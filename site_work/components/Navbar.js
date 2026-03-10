"use client"

import { Sun, Moon, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export default function Navbar() {

  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-4 bg-white dark:bg-black text-black dark:text-white shadow-md">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" className="h-8"/>
        <h1 className="font-bold text-lg">Success Infra Estate</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#properties">Properties</a>
        <a href="#contact">Contact</a>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 border rounded-lg"
        >
          {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
        </button>
      </div>

      {/* Mobile Buttons */}
      <div className="flex items-center gap-3 md:hidden">

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 border rounded-lg"
        >
          {darkMode ? <Sun size={18}/> : <Moon size={18}/>}
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-black flex flex-col items-center gap-6 py-6 shadow-md md:hidden">

          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#properties">Properties</a>
          <a href="#contact">Contact</a>

        </div>
      )}

    </nav>
  )
}