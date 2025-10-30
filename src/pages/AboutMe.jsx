import React from 'react'

export default function AboutMe() {
  return (
    <main className="min-h-[80vh] bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img src="/images/profile.jpg" alt="profile" className="w-44 h-44 rounded-full object-cover border-4 border-yellow-400" />
          </div>

          <div className="md:col-span-2">
            <h1 className="text-2xl sm:text-3xl font-bold">About Me</h1>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I'm a MERN Stack developer with a passion for building responsive and accessible web applications. I enjoy translating product requirements into engineering solutions and learning new tools that improve developer productivity.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold">Skills</h3>
                <p className="text-sm text-gray-600 mt-2">React, Node.js, Express, MongoDB, TailwindCSS, Git, REST APIs</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold">Work Style</h3>
                <p className="text-sm text-gray-600 mt-2">Readable code, component-driven UI, testable backends and clear documentation.</p>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a href="/resume.pdf" className="inline-block px-5 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md">Download Resume</a>
              <a href="/contact" className="inline-block px-5 py-3 border border-yellow-400 text-yellow-400 rounded-md">Contact me</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
