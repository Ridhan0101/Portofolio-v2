
'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 border-t border-gray-300 dark:border-gray-700 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Muhammad Ridhan Khoirullah. All rights reserved.</p>
        <p className="mt-1">
          Contact: <a href="mailto:muhammadridhankhoirullah6@gmail.com" className="text-blue-600 hover:underline">muhammadridhankhoirullah6@gmail.com</a>
        </p>
      </div>
    </footer>
  )
}
