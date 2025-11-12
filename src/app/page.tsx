"use client"

import { CheckCircle2, FileSpreadsheet, Calculator, TrendingUp, DollarSign, ShoppingCart, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const handleCompra = () => {
    // Redireciona para o link do Kirvano
    window.location.href = "https://pay.kirvano.com/75f73a69-56dd-4e9d-80a5-f39d06743aa4"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Oferta Exclusiva - Preço Jamais Visto!
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Planilha Completa de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">Precificação</span> para Seu Negócio
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Organize seu cardápio, controle custos operacionais e precifique corretamente para delivery e cardápio digital. Tudo em uma única planilha profissional!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-gray-900">
                R$ 29,90
              </div>
              <div className="text-sm text-gray-500 line-through">R$ 97,00</div>
              <div className="text-green-600 font-semibold">Economia de 69%</div>
            </div>
          </div>

          <Button 
            onClick={handleCompra}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Comprar Agora por R$ 29,90
          </Button>

          <p className="text-sm text-gray-500 mt-4">
            ✓ Acesso imediato após pagamento • ✓ Pagamento 100% seguro
          </p>
        </div>
      </section>

      {/* Recursos Principais */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Tudo que Você Precisa em Uma Planilha
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Ferramenta completa para gestão profissional do seu negócio gastronômico
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 bg-white">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                <FileSpreadsheet className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ficha Técnica
              </h3>
              <p className="text-gray-600">
                Organize todo seu cardápio com fichas técnicas detalhadas e profissionais
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 bg-white">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Controle de Custos
              </h3>
              <p className="text-gray-600">
                Dados completos para controlar e reduzir seus custos operacionais
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 bg-white">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Precificação Cardápio
              </h3>
              <p className="text-gray-600">
                Calcule o preço ideal para cada item do seu cardápio físico
              </p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 bg-white">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Precificação iFood
              </h3>
              <p className="text-gray-600">
                Preços otimizados para delivery e cardápio digital com margem garantida
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-gradient-to-br from-orange-500 to-amber-600 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              Por Que Esta Planilha é Diferente?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Fácil de usar - não precisa ser expert em Excel",
                "Cálculos automáticos - economia de tempo",
                "Precificação estratégica para delivery",
                "Controle total dos seus custos",
                "Aumento comprovado de lucratividade",
                "Suporte e atualizações incluídas"
              ].map((beneficio, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{beneficio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comece a Lucrar Mais Hoje Mesmo
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Investimento único de apenas R$ 29,90 para transformar a gestão do seu negócio
          </p>

          <Card className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 mb-8">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              R$ 29,90
            </div>
            <div className="text-gray-600 mb-6">
              Preço promocional - Por tempo limitado
            </div>
            
            <Button 
              onClick={handleCompra}
              size="lg"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xl px-8 py-7 rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              <ShoppingCart className="w-6 h-6 mr-2" />
              Garantir Minha Planilha Agora
            </Button>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Acesso Imediato
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Pagamento Seguro
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              Suporte Incluído
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  )
}
