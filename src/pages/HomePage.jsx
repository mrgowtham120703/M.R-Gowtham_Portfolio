import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className="min-h-[80vh] flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <section className="flex-1 flex items-center">
        <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10 py-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Hi, I'm <span className="text-yellow-300">M.R Gowtham</span>
            </h2>
            <p className="mt-4 text-gray-300 max-w-xl">
              I build scalable web apps with the MERN stack — React, Node, Express and MongoDB. I focus on clean UI, readable code and developer experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link to="/projects" className="inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow hover:scale-105 transform transition">
                See Projects
              </Link>
              <Link to="/contact" className="inline-block px-6 py-3 border border-yellow-400 text-yellow-300 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition">
                Get in touch
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-yellow-400 via-pink-400 to-purple-500 flex items-center justify-center">
              <img src="/images/hero-dev.png" alt="developer illustration" className="w-full h-full object-cover opacity-95" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">© {new Date().getFullYear()} M.R Gowtham — Built with MERN</div>
      </footer>
    </main>
  )
}
