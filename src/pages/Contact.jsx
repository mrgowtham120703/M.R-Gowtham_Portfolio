import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // placeholder: integrate your email/service here
    setStatus('Thanks — message received (demo)')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <main className="min-h-[80vh] bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-2xl shadow p-8">
            <h1 className="text-2xl font-bold">Contact</h1>
            <p className="mt-3 text-gray-600">Want to work together or ask a quick question? Send a message and I will reply as soon as I can.</p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l4-4m-4 4l4 4" /></svg>
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <div className="text-sm text-gray-500">gowthammr120703@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m6 0v12a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h8z" /></svg>
                <div>
                  <div className="text-sm font-semibold">Location</div>
                  <div className="text-sm text-gray-500">Chennai, India</div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-8">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Name</span>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-yellow-400 focus:border-yellow-400" />
            </label>

            <label className="block mt-4">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-yellow-400 focus:border-yellow-400" />
            </label>

            <label className="block mt-4">
              <span className="text-sm font-medium text-gray-700">Message</span>
              <textarea name="message" rows={5} value={form.message} onChange={handleChange} required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-yellow-400 focus:border-yellow-400" />
            </label>

            <div className="mt-6 flex items-center justify-between">
              <button type="submit" className="px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md">Send Message</button>
              {status && <div className="text-sm text-green-600">{status}</div>}
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
