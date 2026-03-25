"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { vehiclesMock } from "@/lib/vehicles"

export default function Estoque() {
  const [filter, setFilter] = useState("")
  const filtered = vehiclesMock.filter((v) =>
    filter === "" || v.type.toLowerCase().includes(filter.toLowerCase()) || v.model.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Nosso Estoque</h1>
        <input
          type="text"
          placeholder="Filtrar por tipo ou modelo..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-600 mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((v) => (
            <Link key={v.id} href={`/veiculo/${v.id}`}>
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                <div className="relative h-32 bg-slate-200">
                  <Image src={v.image} alt={v.model} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <p className="text-xs text-slate-500">{v.type}</p>
                  <h3 className="font-semibold text-sm">{v.brand} {v.model}</h3>
                  <p className="text-amber-600 font-bold mt-1">
                    {v.price > 0 ? `R$ ${(v.price / 1000).toFixed(0)}k` : "Consulte"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && <p className="text-center text-slate-500 py-12">Nenhum veículo encontrado</p>}
      </div>
    </main>
  )
}