'use client'

import { useState } from 'react'

const projects = [
  {
    title: 'Website Portfolio V1',
    description: 'Versi awal portofolio saya dengan HTML, CSS, dan JavaScript. Menampilkan profil dan proyek, dihosting di GitHub Pages.',
    image: 'https://images.unsplash.com/photo-1559027615-ce3c1a5b7f2a?auto=format&fit=crop&w=600&h=400&q=80',
    demoLink: 'https://ridhan0101.github.io/Website-Portofolio-Ridhan/',
    githubLink: 'https://github.com/Ridhan0101/Website-Portofolio-Ridhan',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Purchase Association Analysis (Apriori)',
    description: 'Skripsi analisis pola pembelian keripik dan kerupuk menggunakan algoritma Apriori. Menampilkan asosiasi itemset dan lift ratio.',
    image: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&w=600&h=400&q=80',
    demoLink: 'https://github.com/Ridhan0101/Project_Skripsi_Muhammad-RIdhan-Khoirullah',
    githubLink: 'https://github.com/Ridhan0101/Project_Skripsi_Muhammad-RIdhan-Khoirullah',
    tech: ['Python', 'Flask', 'Pandas', 'Apriori'],
  },
  {
    title: 'Electricity Monitoring Chatbot',
    description: 'Proyek akhir Studi Independen Ruang Guru. Chatbot backend untuk memantau konsumsi listrik rumah dan memberikan saran berbasis AI.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345f?auto=format&fit=crop&w=600&h=400&q=80',
    demoLink: '#',
    githubLink: '#',
    tech: ['Golang', 'REST API', 'AI'],
  },
  {
    title: 'Inventory & Sales App (Java GUI)',
    description: 'Aplikasi desktop berbasis Java GUI untuk mencatat penjualan, mengelola stok barang, dan membuat laporan otomatis.',
    image: 'https://images.unsplash.com/photo-1580894894513-79f17d29d384?auto=format&fit=crop&w=600&h=400&q=80',
    demoLink: 'https://github.com/RKHOI/Aplikasi-Sistem-Inventaris-',
    githubLink: 'https://github.com/RKHOI/Aplikasi-Sistem-Inventaris-',
    tech: ['Java', 'MySQL'],
  },
  {
    title: 'Medical Record System (Web)',
    description: 'Aplikasi web pencatatan rekam medis menggunakan CodeIgniter, HTML, dan MySQL. Mendukung input data pasien dan riwayat kunjungan.',
    image: 'https://images.unsplash.com/photo-1588774069220-c0e5f7f2c496?auto=format&fit=crop&w=600&h=400&q=80',
    demoLink: 'https://github.com/RKHOI/Website_Tugas_SI',
    githubLink: 'https://github.com/RKHOI/Website_Tugas_SI',
    tech: ['PHP', 'CodeIgniter', 'MySQL'],
  },
  {
    title: 'Stock Prediction System (ARIMA)',
    description: 'Aplikasi prediksi permintaan barang menggunakan model ARIMA untuk membantu manajemen stok gudang.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&h=400&q=80',
    demoLink: 'https://github.com/Ridhan0101/Prediksi_Permintaan_Stok_Barang_di_Gudang',
    githubLink: 'https://github.com/Ridhan0101/Prediksi_Permintaan_Stok_Barang_di_Gudang',
    tech: ['Python', 'Streamlit', 'ARIMA', 'Pandas'],
  },
  {
  title: 'Roblox Spam E & Anti-AFK Bot',
  description: 'Bot desktop berbasis Python untuk menekan tombol E secara otomatis di Roblox dan mencegah AFK dengan gerakan acak.',
  image: 'https://images.unsplash.com/photo-1611224923854-a1ff9d1fca46?auto=format&fit=crop&w=600&h=400&q=80',
  demoLink: 'https://github.com/Ridhan0101/Roblox-Spam-E-Anti-AFK',
  githubLink: 'https://github.com/Ridhan0101/Roblox-Spam-E-Anti-AFK',
  tech: ['Python', 'Tkinter', 'Keyboard', 'psutil'],
},
]

function ProjectCard({ project, onClick }) {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition bg-white dark:bg-gray-800 cursor-pointer" onClick={onClick}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-200 hover:scale-105"
      />
      <div className="p-5 text-left">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <p className="text-xs text-gray-400">Tech: {project.tech.join(', ')}</p>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const allTech = [...new Set(projects.flatMap(p => p.tech))]
  const filteredProjects = selectedTech === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(selectedTech))

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">My Projects</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Proyek-proyek berikut mencerminkan perjalanan saya dalam pengembangan perangkat lunak dan eksplorasi data.
      </p>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button onClick={() => setSelectedTech('All')} className={`px-4 py-1 rounded-full border ${selectedTech === 'All' ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}>All</button>
        {allTech.map((tech, i) => (
          <button key={i} onClick={() => setSelectedTech(tech)} className={`px-4 py-1 rounded-full border ${selectedTech === tech ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300'}`}>{tech}</button>
        ))}
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-lg w-full relative">
            <button onClick={() => setSelectedProject(null)} className="absolute top-2 right-3 text-gray-500 hover:text-red-600">✖</button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{selectedProject.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{selectedProject.description}</p>
            <p className="text-xs text-gray-400 mb-2">Tech: {selectedProject.tech.join(', ')}</p>
            <div className="flex gap-4">
              {selectedProject.demoLink !== '#' && <a href={selectedProject.demoLink} className="text-blue-600 hover:underline" target="_blank">🔗 Demo</a>}
              {selectedProject.githubLink !== '#' && <a href={selectedProject.githubLink} className="text-blue-600 hover:underline" target="_blank">📁 GitHub</a>}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
