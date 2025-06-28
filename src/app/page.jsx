'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center py-12">
      <div className="max-w-3xl w-full">
        {/* Hero Section */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Muhammad Ridhan Khoirullah
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Fullstack Developer & Data Enthusiast. Passionate about building modern web applications and automating data workflows with <span className="font-semibold">Python</span>, <span className="font-semibold">Streamlit</span>, and <span className="font-semibold">Next.js</span>.
        </p>

        {/* Navigasi */}
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="/about" className="text-blue-600 hover:underline font-medium">About</Link>
          <Link href="/projects" className="text-blue-600 hover:underline font-medium">Projects</Link>
          <Link href="/contact" className="text-blue-600 hover:underline font-medium">Contact</Link>
        </div>

        {/* Foto */}
        <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 max-w-full mb-10">
          <Image
            src="/images/Foto_Jas_BG_Putih.png"
            alt="Foto Profil Ridhan"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Ringkasan Profil */}
        <div className="space-y-4 text-left text-gray-700 dark:text-gray-300 mb-10">
          <p>🎓 <strong>Lulus S1 dalam 3,5 tahun</strong> dengan predikat <span className="text-blue-500 font-semibold">Cum Laude</span> (GPA 3.90 / 4.00).</p>
          <p>💡 Memiliki kemampuan dalam merancang sistem dari UI hingga logika backend & data analytics.</p>
          <p>🚀 Telah menyelesaikan <strong>5+ proyek real-world</strong> yang digunakan secara internal/eksternal.</p>
          <p>🛠️ Menguasai <strong>Next.js, Laravel, Flask, MongoDB, TailwindCSS, MySQL, Git</strong>, dan banyak lagi.</p>
        </div>

        {/* Tech Stack */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Tech Stack I Use</h2>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-700 dark:text-gray-300">
            {['Next.js', 'Python', 'Streamlit', 'Flask', 'Laravel', 'MongoDB', 'MySQL', 'Git', 'TailwindCSS'].map((tech, index) => (
              <span key={index} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow text-left">
              <h3 className="font-semibold text-lg text-blue-600">Medical Record System</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Web app built with CodeIgniter & MySQL to manage digital patient records.</p>
              <Link href="/projects" className="text-blue-500 text-sm font-medium hover:underline mt-2 inline-block">View More</Link>
            </div>
            <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow text-left">
              <h3 className="font-semibold text-lg text-blue-600">Stock Forecasting ARIMA</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">Streamlit app to predict warehouse stock using ARIMA time-series model.</p>
              <Link href="/projects" className="text-blue-500 text-sm font-medium hover:underline mt-2 inline-block">View More</Link>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Fun Facts</h2>
          <ul className="list-disc list-inside text-left text-gray-700 dark:text-gray-300 space-y-1">
            <li>Lulus kuliah dalam 3.5 tahun, SMA hanya 2 tahun!</li>
            <li>Hobi: membaca, eksplorasi tools baru, dan bikin mini project tiap bulan.</li>
            <li>Suka debugging lebih dari ngoding fitur baru 😄</li>
          </ul>
        </div>

        {/* Keunggulan */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Why Hire Me?</h2>
          <ul className="list-disc list-inside text-left space-y-2 text-gray-700 dark:text-gray-300">
            <li>Kemampuan komunikasi yang baik & terbiasa bekerja dalam tim maupun individu.</li>
            <li>Pemahaman kuat terhadap <span className="font-medium">design pattern</span> dan <span className="font-medium">clean code</span>.</li>
            <li>Terbiasa menyelesaikan proyek tepat waktu dan mampu berpikir kritis.</li>
            <li>Berpengalaman dalam menyusun dokumentasi teknis & analisis kebutuhan pengguna.</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <a
            href="/CV_Muhammad_Ridhan_Khoirullah.pdf"
            download
            className="inline-block px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium transition"
          >
            📄 Download CV
          </a>
          <a
            href="mailto:muhammadridhankhoirullah6@gmail.com"
            className="inline-block px-6 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium transition"
          >
            📬 Hire Me
          </a>
        </div>

        {/* Outro */}
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>Let's build something great together. Open for full-time, freelance, and collaborative projects!</p>
        </div>
      </div>
    </main>
  )
}
