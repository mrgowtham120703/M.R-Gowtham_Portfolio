import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-white py-3 px-5 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: profile image + name/title */}
        <div className="flex items-center gap-3">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400"
          />
          <div className="leading-tight">
            <h1 className="text-lg sm:text-xl font-bold">M.R Gowtham</h1>
            <p className="text-xs text-yellow-300">MERN Stack Developer</p>
          </div>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-serif font-semibold">
          <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400 transition">About Me</Link></li>
          <li><Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition">Contacts</Link></li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-yellow-400 text-gray-900"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="flex flex-col gap-2 py-3 px-5">
            <li><Link onClick={() => setOpen(false)} to="/" className="block py-2 hover:text-yellow-400">Home</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/about" className="block py-2 hover:text-yellow-400">About Me</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/projects" className="block py-2 hover:text-yellow-400">Projects</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/contact" className="block py-2 hover:text-yellow-400">Contacts</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
