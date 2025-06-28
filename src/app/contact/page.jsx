'use client'

import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const contacts = [
    {
      icon: <Mail className="w-5 h-5 mr-2" />,
      label: 'Email',
      value: 'muhammadridhankhoirullah6@gmail.com',
      href: 'mailto:muhammadridhankhoirullah6@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5 mr-2" />,
      label: 'WhatsApp',
      value: '+62 895 3444 44286',
      href: 'https://wa.me/62895344444286',
    },
    {
      icon: <Linkedin className="w-5 h-5 mr-2" />,
      label: 'LinkedIn',
      value: '@muhammad-ridhan-khoirullah',
      href: 'https://www.linkedin.com/in/muhammad-ridhan-khoirullah/',
    },
    {
      icon: <Github className="w-5 h-5 mr-2" />,
      label: 'GitHub',
      value: '@Ridhan0101',
      href: 'https://github.com/Ridhan0101',
    },
  ]

  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:muhammadridhankhoirullah6@gmail.com?subject=Hello from ${form.name}&body=${form.message}%0AFrom: ${form.email}`
    window.location.href = mailto
  }

  return (
    <main className="px-6 py-12 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">📬 Contact Me</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Feel free to reach out—I'm open for collaboration, freelance work, or a friendly chat. 😊
      </p>

      {/* Contact Links */}
      <div className="space-y-4 mb-10">
        {contacts.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-blue-600 hover:underline dark:text-blue-400 transition"
          >
            {item.icon}
            <span className="text-base">{item.value}</span>
          </a>
        ))}
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-xl font-semibold mb-4">📨 Or send me a message directly</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <textarea
            rows="4"
            required
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="w-full h-64 rounded overflow-hidden shadow-lg mb-12">
        <iframe
          title="Palembang Location"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15933.44933658033!2d104.748095!3d-2.990934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b74af9c348b9f%3A0xbebcbe1f9fbb6951!2sPalembang%2C%20South%20Sumatra!5e0!3m2!1sen!2sid!4v1719000000000"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* CTA Section */}
      <div className="mt-16 bg-blue-50 dark:bg-blue-900 rounded-xl py-8 px-6 shadow text-center">
        <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-3">
          🚀 Let’s Build Something Together
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4">
          I'm available for collaborations, freelance work, or project discussions.
          Expect a reply within <span className="font-medium">24 hours</span>.
        </p>
        <a
          href="mailto:muhammadridhankhoirullah6@gmail.com"
          className="inline-block mt-2 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition transform hover:scale-105"
        >
          ✉️ Get In Touch Now
        </a>
      </div>

      {/* Location & Timezone */}
      <div className="mt-10 text-sm text-gray-600 dark:text-gray-400 text-center">
        📍 Based in Palembang, Indonesia | UTC+7 (WIB)
      </div>
    </main>
  )
}
