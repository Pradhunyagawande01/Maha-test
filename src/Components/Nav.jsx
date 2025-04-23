import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <img className="h-8 w-auto" src="/img/hack4maha.webp" alt="Hack4Maha" />
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
              <Link to="/timeline" className="hover:bg-gray-700 px-3 py-2 rounded-md">Timeline</Link>
              <Link to="/venue" className="hover:bg-gray-700 px-3 py-2 rounded-md">Venue</Link>
              <Link to="/prize" className="hover:bg-gray-700 px-3 py-2 rounded-md">Prizes</Link>
              <Link to="/sponser" className="hover:bg-gray-700 px-3 py-2 rounded-md">Sponsors</Link>
              <Link to="/team" className="hover:bg-gray-700 px-3 py-2 rounded-md">Team</Link>
              <Link to="/faq" className="hover:bg-gray-700 px-3 py-2 rounded-md">FAQ</Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/about" className="block hover:bg-gray-700 px-3 py-2 rounded-md">About</Link>
            <Link to="/timeline" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Timeline</Link>
            <Link to="/venue" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Venue</Link>
            <Link to="/prize" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Prizes</Link>
            <Link to="/sponser" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Sponsors</Link>
            <Link to="/team" className="block hover:bg-gray-700 px-3 py-2 rounded-md">Team</Link>
            <Link to="/faq" className="block hover:bg-gray-700 px-3 py-2 rounded-md">FAQ</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
