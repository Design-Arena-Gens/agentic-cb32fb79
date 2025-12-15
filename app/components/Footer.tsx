'use client'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Built with Next.js, React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
