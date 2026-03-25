import { vehiclesMock } from "@/lib/vehicles"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function VeiculoDetail({ params }: { params: { id: string } }) {
  const vehicle = vehiclesMock.find((v) => v.id === parseInt(params.id))
  if (!vehicle) notFound()

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/estoque" className="text-amber-600 hover:text-amber-700 mb-6 inline-block">
          ← Voltar ao Estoque
        </Link>
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="relative h-96 mb-8 bg-slate-200 rounded-lg overflow-hidden">
            <Image src={vehicle.image} alt={vehicle.model} fill className="object-cover" priority />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">{vehicle.brand} {vehicle.model}</h1>
              <p className="text-xl text-slate-600 mb-6">{vehicle.type}</p>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-slate-500">Preço</p>
                  <p className="text-3xl font-bold text-amber-600">
                    {vehicle.price > 0 ? `R$ ${vehicle.price.toLocaleString("pt-BR")}` : "Consulte"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Visualizações</p>
                  <p className="text-lg font-semibold">{vehicle.views}</p>
                </div>
              </div>
              <a
                href={`https://wa.me/5514996859393?text=Olá! Tenho interesse no ${vehicle.brand} ${vehicle.model}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg text-center transition"
              >
                💬 Falar no WhatsApp
              </a>
            </div>
            <div className="bg-slate-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Informações</h2>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-slate-600">Tipo</dt>
                  <dd className="font-semibold">{vehicle.type}</dd>
                </div>
                <div>
                  <dt className="text-slate-600">Marca</dt>
                  <dd className="font-semibold">{vehicle.brand}</dd>
                </div>
                <div>
                  <dt className="text-slate-600">Modelo</dt>
                  <dd className="font-semibold">{vehicle.model}</dd>
                </div>
                <div className="pt-4 border-t border-slate-300">
                  <dt className="text-slate-600 font-semibold mb-2">Contato</dt>
                  <p>📧 vendas@grupopedrotti.com.br</p>
                  <p>📞 (14) 3376-1651</p>
                  <p>💬 (14) 99685-9393</p>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}