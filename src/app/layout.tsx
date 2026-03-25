import type { Metadata } from "next"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: "Grupo Pedrotti | Carretas e Semi-reboques",
  description: "Carretas e semi-reboques de qualidade. Estoque variado de implementos rodoviários.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white">
        <header className="bg-slate-900 text-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-amber-600">
              Pedrotti
            </Link>
            <nav className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-amber-600">Home</Link>
              <Link href="/estoque" className="hover:text-amber-600">Estoque</Link>
              <a href="https://wa.me/5514996859393" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">Contato</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-slate-900 text-white mt-16">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <p className="text-slate-400 text-sm">© 2026 Grupo Pedrotti — (14) 3376-1651</p>
          </div>
        </footer>
        <a href="https://wa.me/5514996859393" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg transition">
          💬
        </a>
      </body>
    </html>
  )
}