import React from 'react'

const mockProjects = [
  { id: 1, title: 'Task Manager', desc: 'A fullstack task management app with auth and realtime updates.', tech: ['React', 'Node', 'MongoDB'] },
  { id: 2, title: 'E-commerce UI', desc: 'Responsive product listing and cart flow with Stripe checkout mock.', tech: ['React', 'Tailwind'] },
  { id: 3, title: 'Chat App', desc: 'Websocket based chat with rooms and presence indicators.', tech: ['Node', 'Socket.io'] },
]

export default function Projects() {
  return (
    <main className="min-h-[80vh] bg-gradient-to-b from-gray-100 to-white py-12">
      <div className="container mx-auto px-6">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold">Projects</h1>
          <p className="text-sm text-gray-500">A selection of projects I built while learning and working.</p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((p) => (
            <article key={p.id} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="h-40 rounded-md overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-gray-400">Preview image</div>
              </div>
              <h3 className="mt-4 font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-yellow-50 text-yellow-600 rounded">{t}</span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a className="inline-block px-4 py-2 border border-gray-200 rounded hover:bg-gray-50">View</a>
                <a className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 rounded">Code</a>
              </div>
            </article>
          ))}
        </section>

      </div>
    </main>
  )
}
