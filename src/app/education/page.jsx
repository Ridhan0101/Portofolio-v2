export const metadata = {
  title: 'Education | Muhammad Ridhan Khoirullah',
  description: 'Educational background of Muhammad Ridhan Khoirullah.',
}

export default function EducationPage() {
  const educationHistory = [
    {
      degree: '🎓 Bachelor of Accounting (S.Ak)',
      institution: 'Universitas Anak Bangsa',
      location: 'Pangkalpinang, Indonesia',
      period: 'Aug 2021 – Aug 2025 (Expected)',
      notes: `Saat ini sedang menyusun skripsi dan direncanakan sidang pada Juli 2025 serta wisuda pada Agustus 2025.
Fokus studi pada akuntansi manajemen dan perencanaan keuangan.`,
      focus: ['Akuntansi Manajemen', 'Perencanaan Keuangan'],
    },
    {
      degree: '🎓 Bachelor of Computer Science (S.Kom)',
      institution: 'Universitas Sriwijaya',
      location: 'Palembang, Indonesia',
      period: 'Aug 2021 – Jan 2025',
      gpa: 'GPA: 3.90 / 4.00 (Cum Laude)',
      notes: `Menyelesaikan studi dalam 3.5 tahun. Aktif di organisasi, magang di PT Dirgantara Indonesia, bekerja sebagai Data Analyst di UMKM RIZAN 858 SNACK.
Terlibat dalam pengembangan proyek perangkat lunak: Java GUI Desktop, Website Developer, Game Developer, dan memiliki fokus pada bidang Data Mining.`,
      focus: ['Java GUI', 'Website Development', 'Game Development', 'Data Mining'],
      activities: [
        'Staf HRD FASCO (Fasilkom Science Community)',
        'Panitia lomba internal FASCO',
        'Panitia lomba TEMAN (Technology Manuscript 2023)',
        'Panitia Webinar FASCO Academy',
      ],
      certificates: [
        'Studi Independen Ruangguru x Kampus Merdeka – Backend Developer (Golang)',
      ],
    },
    {
      degree: '🏫 Senior High School (SMA)',
      institution: 'SMA Negeri di Palembang',
      location: 'Palembang, Indonesia',
      period: '2019 – 2021',
      gpa: 'GPA: 93 / 100',
      notes: `Lulus program percepatan dalam 2 tahun. Tinggal di asrama selama 1 tahun, hafal Juz 30, dan aktif dalam ekstrakurikuler robotika.`,
      focus: ['Robotika', 'Kedisiplinan Asrama', 'Hafalan Al-Qur\'an'],
    },
  ]

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Educational Background</h1>
      <div className="space-y-10">
        {educationHistory.map((edu, index) => (
          <div key={index} className="border-b border-gray-300 dark:border-gray-700 pb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {edu.institution} — {edu.location}
            </p>
            <p className="text-sm italic text-gray-500">{edu.period}</p>
            {edu.gpa && (
              <p className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400">{edu.gpa}</p>
            )}
            {edu.notes && (
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">{edu.notes}</p>
            )}

            {edu.focus && (
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Fokus Studi / Keahlian:</h3>
                <ul className="flex flex-wrap gap-2 text-sm mt-1">
                  {edu.focus.map((item, i) => (
                    <li key={i} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2 py-1 rounded">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {edu.activities && (
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Organisasi & Kepanitiaan:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mt-1">
                  {edu.activities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {edu.certificates && (
              <div className="mt-3">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">Sertifikasi & Studi Independen:</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mt-1">
                  {edu.certificates.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Refleksi */}
      <div className="mt-12 text-sm italic text-center text-gray-600 dark:text-gray-400">
        Pendidikan saya menjadi fondasi kuat untuk berkembang sebagai analis data, pengembang perangkat lunak, dan pemimpin tim yang adaptif dalam berbagai skala organisasi.
      </div>
    </main>
  )
}
