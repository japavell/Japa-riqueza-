git add .
git commit -m "Renomeia projeto e adiciona arquivos CSS/JS"
git push// src/app/page.tsx "use client";

import { useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Input } from "@/components/ui/input"; import { Button } from "@/components/ui/button";

export default function Home() { const [valor, setValor] = useState(0); const [entrada, setEntrada] = useState(0); const [saida, setSaida] = useState(0); const [historico, setHistorico] = useState<string[]>([]);

const saldo = entrada - saida;

const registrar = (tipo: "entrada" | "saida") => { if (!valor) return; if (tipo === "entrada") { setEntrada((prev) => prev + valor); setHistorico((prev) => [ + R$ ${valor.toFixed(2)} (entrada), ...prev, ]); } else { setSaida((prev) => prev + valor); setHistorico((prev) => [ - R$ ${valor.toFixed(2)} (saída), ...prev, ]); } setValor(0); };

return ( <main className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white p-4"> <h1 className="text-3xl md:text-5xl font-bold text-center mb-8"> 💸 Japa Riqueza 💸 </h1>

<p className="text-center italic text-sm text-purple-300 mb-6">
    Este app é apenas para controle financeiro pessoal, sem uso de dinheiro real.
  </p>

  <div className="max-w-xl mx-auto space-y-6">
    <Card className="bg-purple-950 border-purple-800">
      <CardContent className="p-6 space-y-4">
        <p className="text-xl font-bold">Saldo: R$ {saldo.toFixed(2)}</p>
        <div className="space-y-1">
          <p>Entradas: R$ {entrada.toFixed(2)}</p>
          <p>Saídas: R$ {saida.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>

    <Card className="bg-purple-950 border-purple-800">
      <CardContent className="p-6 space-y-4">
        <Input
          type="number"
          value={valor || ""}
          onChange={(e) => setValor(parseFloat(e.target.value))}
          placeholder="Digite um valor"
          className="bg-black text-white border-purple-700"
        />
        <div className="flex gap-4">
          <Button
            className="bg-green-700 hover:bg-green-600"
            onClick={() => registrar("entrada")}
          >
            Entrada
          </Button>
          <Button
            className="bg-red-700 hover:bg-red-600"
            onClick={() => registrar("saida")}
          >
            Saída
          </Button>
        </div>
      </CardContent>
    </Card>

    <Card className="bg-purple-950 border-purple-800">
      <CardContent className="p-6">
        <h2 className="text-lg font-semibold mb-2">Histórico místico:</h2>
        <ul className="list-disc pl-5 space-y-1 text-purple-200">
          {historico.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
</main>

); }

