export default function AboutPage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">About Me</h1>

      {/* Ringkasan Profesional */}
      <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
        I'm <span className="font-semibold text-blue-600">Muhammad Ridhan Khoirullah</span>, a Computer Science graduate from <strong>Sriwijaya University</strong> with <strong>cum laude honors (GPA 3.90)</strong>. I'm passionate about <strong>backend development</strong>, <strong>data mining</strong>, and <strong>full-stack web applications</strong>.
      </p>
      <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
        I have experience working with <strong>Golang, Laravel, Flask, Java</strong>, and managing databases like <strong>MySQL, MongoDB</strong>. I love building scalable systems and automating insights with technologies like <strong>ARIMA, Apriori, and RESTful APIs</strong>.
      </p>

      {/* Education */}
      <h2 className="text-2xl font-semibold mt-10 mb-3 text-gray-900 dark:text-white">🎓 Education</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
        <li>
          <strong>Bachelor of Informatics Engineering</strong>, Sriwijaya University (2021–2025) <br />
          GPA: 3.90 / 4.00 – Cum Laude <br />
          <em>Thesis:</em> Purchase Association of Chips and Crackers Using Apriori Algorithm<br />
          <em>Supervisors:</em> Dian Palupi Rini, M.Kom., Ph.D. & Desty Rodiah, S.Kom., M.T.
        </li>
        <li>
          <strong>Independent Study – Kampus Merdeka</strong> (Feb 2024 – Jun 2024) <br />
          Backend Developer Program at Ruang Guru – Focused on Golang, REST API, Microservices, and AI.
        </li>
        <li>
          <strong>Senior High School – MAN 3 Palembang</strong> (2019–2021) <br />
          Science Major – Completed in 2 years via Acceleration Program
        </li>
      </ul>

      {/* Work Experience */}
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">💼 Work Experience</h2>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <div>
          <p className="font-semibold">Java Developer Intern – PT Dirgantara Indonesia (PTDI)</p>
          <p className="text-sm italic">Dec 2023 – Jan 2024</p>
          <p className="text-sm">Built an internal IT Vendor Management System using Java GUI in a government aerospace agency.</p>
        </div>
        <div>
          <p className="font-semibold">Data Analyst – RIZAN 858 SNACK</p>
          <p className="text-sm italic">Jun 2022 – Nov 2023</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Analyzed sales & inventory data for UMKM chip/cracker business.</li>
            <li>Generated automated reports using Excel, SQL & Power BI.</li>
            <li>Forecasted demand & optimized stock to reduce waste.</li>
          </ul>
        </div>
      </div>

      {/* Skills */}
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">🛠️ Technical Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
        <li>Golang, Python, Java, PHP</li>
        <li>Laravel, CodeIgniter, Flask, Streamlit</li>
        <li>Next.js, Tailwind CSS</li>
        <li>MySQL, MongoDB, PostgreSQL, Oracle</li>
        <li>REST API, CRUD, MVC, Microservices</li>
        <li>Data Mining: Apriori, ARIMA</li>
        <li>Git, GitHub, Postman</li>
        <li>Power BI, Excel, Microsoft Office</li>
      </ul>

      {/* Tools & Platforms */}
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">⚙️ Tools & Platforms</h2>
      <div className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-300">
        {['VS Code', 'Postman', 'XAMPP', 'Netlify', 'Google Colab', 'Firebase', 'Power BI', 'GitHub'].map((tool, i) => (
          <span key={i} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">{tool}</span>
        ))}
      </div>

      {/* Projects */}
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">🚀 Key Projects</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li><strong>Electricity Monitoring Chatbot</strong> – Golang-based API for monitoring household electricity, integrated with AI usage recommendations (Ruang Guru Final Project)</li>
        <li><strong>Purchase Association Analysis</strong> – Final thesis project using Apriori to discover buying patterns in snack distributor data (Python + Flask)</li>
      </ul>

      {/* Certifications */}
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">📜 Certifications & Awards</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Certified Backend Developer – Ruang Guru x Kampus Merdeka (2024)</li>
        <li>Graduated Cum Laude – Sriwijaya University (GPA 3.90)</li>
        <li>Completed SMA in 2 Years – Acceleration Program</li>
        <li>TOEFL ITP Score: 530</li>
      </ul>

      {/* Organizational Experience */}
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">👥 Organizational Experience</h2>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Staff of HR Development – Fasilkom Science Community (FASCO)</strong> <br />
        Jan 2023 – Dec 2023<br />
        Supported student leadership & research, organized workshops, and mentored peers on academic and technical development.
      </p>

      {/* More About Me */}
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-900 dark:text-white">🌱 More About Me</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
        <li>Graduated college in 3.5 years, high school in 2 years (acceleration track).</li>
        <li>5+ real-world software & data projects deployed or used internally.</li>
        <li>Curious, fast learner, detail-oriented, and love working with data & backend logic.</li>
        <li>Open to full-time roles, freelance, or collaborative opportunities.</li>
      </ul>
    </main>
  )
}
