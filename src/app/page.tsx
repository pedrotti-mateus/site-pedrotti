import Link from "next/link"
import Image from "next/image"
import { vehiclesMock } from "@/lib/vehicles"

export default function Home() {
  const featured = vehiclesMock.slice(0, 6)
  
  return (
    <main>
      <section className="relative h-96 bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Grupo Pedrotti</h1>
          <p className="text-xl text-slate-300 mb-8">Carretas e Semi-reboques de Qualidade</p>
          <Link href="/estoque" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Ver Estoque
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Veículos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((v) => (
            <Link key={v.id} href={`/veiculo/${v.id}`}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer">
                <div className="relative h-48 bg-slate-200">
                  <Image src={v.image} alt={v.model} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-500">{v.type}</p>
                  <h3 className="text-lg font-semibold">{v.brand} {v.model}</h3>
                  <p className="text-xl font-bold text-amber-600 mt-2">
                    {v.price > 0 ? `R$ ${(v.price / 1000).toFixed(0)}k` : "Consulte"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Não encontrou o que procura?</h2>
        <Link href="/estoque" className="inline-block border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-bold py-2 px-6 rounded-lg transition">
          Ver Todos os Veículos
        </Link>
      </section>
    </main>
  )
}