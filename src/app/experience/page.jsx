export const metadata = {
  title: 'Experience | Muhammad Ridhan Khoirullah',
  description: 'Professional work experience of Muhammad Ridhan Khoirullah.',
}

const highlightKeywords = (text) => {
  const keywords = ['Power BI', 'Excel', 'SQL', 'Java GUI', 'MySQL', 'NetBeans']
  let highlighted = text
  keywords.forEach((word) => {
    const regex = new RegExp(`\\b(${word})\\b`, 'g')
    highlighted = highlighted.replace(
      regex,
      '<span class="text-blue-600 dark:text-blue-400 font-medium">$1</span>'
    )
  })
  return highlighted
}

export default function ExperiencePage() {
  const experiences = [
    {
      icon: '📊',
      role: 'Data Analyst',
      company: 'RIZAN 858 SNACK',
      location: 'Palembang, Indonesia',
      duration: 'June 2022 – Nov 2023',
      badge: 'Full Time',
      description: `
        RIZAN 858 SNACK adalah UMKM yang bergerak di bidang produksi dan distribusi keripik serta makanan ringan.
        Selama bekerja, saya bertanggung jawab atas pengolahan dan analisis data transaksi harian yang membantu
        pengambilan keputusan dalam pengadaan dan strategi pemasaran.
      `,
      tools: ['Excel', 'SQL', 'Power BI'],
      achievements: [
        'Mengurangi waktu pelaporan manual hingga 60% melalui otomatisasi laporan menggunakan Power BI.',
        'Meningkatkan akurasi peramalan permintaan berdasarkan tren penjualan musiman.',
        'Memberikan rekomendasi stok berbasis data yang menurunkan risiko overstock dan waste produk.'
      ],
      reflection: 'Pengalaman ini membentuk fondasi kuat saya dalam analisis data bisnis skala mikro serta pendekatan berbasis data untuk pengambilan keputusan.'
    },
    {
      icon: '🧑‍💻',
      role: 'Java Developer Intern',
      company: 'PT Dirgantara Indonesia (PTDI)',
      location: 'Bandung, Indonesia',
      duration: 'Dec 2023 – Jan 2024',
      badge: 'Internship',
      description: `
        PTDI adalah BUMN yang bergerak di bidang manufaktur pesawat dan rekayasa kedirgantaraan.
        Sebagai intern, saya berkontribusi dalam pengembangan aplikasi manajemen vendor berbasis Java GUI
        yang digunakan untuk mencatat dan memonitor status mitra kerja TI.
      `,
      tools: ['Java GUI', 'NetBeans', 'MySQL'],
      achievements: [
        'Berhasil mengembangkan dan menerapkan sistem manajemen vendor dalam waktu 1 bulan.',
        'Berperan dalam debugging dan optimasi performa aplikasi sebelum deployment.',
        'Bekerja sama dengan tim TI untuk mengintegrasikan fitur visualisasi data monitoring.'
      ],
      reflection: 'Magang ini membuka wawasan saya tentang pengembangan software di lingkungan BUMN, termasuk tantangan dalam menyederhanakan sistem internal.',
      projectLink: 'https://github.com/Ridhan0101/Vendor_Management',
    }
  ]

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Professional Experience</h1>
      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="grid md:grid-cols-4 gap-6">
            {/* Left column */}
            <div className="md:col-span-1 flex flex-col items-start">
              <div className="text-3xl">{exp.icon}</div>
              <h2 className="text-xl font-semibold mt-2">{exp.role}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.badge}</p>
              <p className="text-sm italic text-gray-500">{exp.duration}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
            </div>

            {/* Right column */}
            <div className="md:col-span-3">
              <div
                className="text-gray-700 dark:text-gray-300 whitespace-pre-line text-sm"
                dangerouslySetInnerHTML={{ __html: highlightKeywords(exp.description) }}
              />

              {/* Tools */}
              <div className="mt-4">
                <h3 className="font-semibold text-sm mb-1">Tools & Technologies:</h3>
                <ul className="flex flex-wrap gap-2 text-sm text-blue-600 dark:text-blue-400">
                  {exp.tools.map((tool, i) => (
                    <li key={i} className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">{tool}</li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="mt-4">
                <h3 className="font-semibold text-sm mb-1">Key Achievements:</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Project Link */}
              {exp.projectLink && (
                <div className="mt-4">
                  <a
                    href={exp.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    🔗 Lihat Proyek GitHub
                  </a>
                </div>
              )}

              {/* Reflection */}
              <div className="mt-4 text-sm italic text-gray-600 dark:text-gray-400">
                {exp.reflection}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
