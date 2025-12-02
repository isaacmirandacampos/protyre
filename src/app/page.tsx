import { type Metadata } from "next";
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function Home() {
  return (<div className="flex flex-col">
    {/* Hero Section */}
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=1920"
          alt="Motorcycle on road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Performance que <br />
            <span className="text-green-500">Domina a Pista</span>
          </h2>
          <p className="text-zinc-300 text-lg mb-8 max-w-lg">
            Pneus de alta performance desenvolvidos com tecnologia de ponta para garantir aderência e segurança em cada quilômetro.
          </p>
          <div className="flex gap-4">
            <Link href="/produtos" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded font-bold transition-colors shadow-lg shadow-green-900/50">
              Ver Produtos
            </Link>
            <Link href="/#sobre" className="bg-white hover:bg-gray-200 text-black px-8 py-3 rounded font-bold transition-colors">
              Saiba Mais
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            <div>
              <span className="block text-3xl font-bold text-green-500">30+</span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider">Anos de Experiência</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-green-500">2M+</span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider">Pneus Vendidos</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-green-500">98%</span>
              <span className="text-xs text-zinc-400 uppercase tracking-wider">Satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Products Preview */}
    <section className="bg-zinc-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-2">Nossos <span className="text-green-600">Produtos</span></h2>
          <p className="text-zinc-600">Conheça nossa linha completa para todos os tipos de terrenos</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_PRODUCTS.map(product => (
            <Link key={product.id} href={`/produtos/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/produtos"
            className="bg-black text-white px-8 py-3 rounded font-bold hover:bg-zinc-800 transition-colors inline-flex items-center gap-2"
          >
            Todos os Produtos <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="sobre" className="bg-black py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-green-600/20 rounded-lg transform -rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1562519818-b223014a93cf?auto=format&fit=crop&q=80&w=800"
              alt="Protyre Headquarters"
              className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Sobre <span className="text-green-500">Nós</span></h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Somos apaixonados por motociclismo e dedicados a entregar a melhor experiência sobre duas rodas.
              Nossa estrutura conta com tecnologia de ponta e uma equipe especializada para garantir a qualidade de cada pneu que sai de nossa fábrica.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-zinc-300">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                Tecnologia de ponta
              </li>
              <li className="flex items-center text-zinc-300">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                Matéria prima de alta qualidade
              </li>
              <li className="flex items-center text-zinc-300">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                Qualidade e durabilidade
              </li>
              <li className="flex items-center text-zinc-300">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                Compromisso com o cliente
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Distributor Form Section */}
    <section id="distribuidor" className="bg-green-900/20 py-20 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Seja um <span className="text-green-500">Distribuidor</span></h2>
          <p className="text-zinc-400">Junte-se à rede de distribuição da marca que mais cresce no Brasil. Ofereça aos seus clientes o melhor custo-benefício.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-white font-semibold mb-4 border-b border-white/10 pb-2">Dados da Empresa</h3>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-zinc-400 uppercase font-bold">Nome / Razão Social</label>
              <input type="text" className="w-full bg-black/50 border border-zinc-700 rounded p-3 text-white focus:border-green-500 focus:outline-none" placeholder="Sua empresa" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-zinc-400 uppercase font-bold">CNPJ</label>
              <input type="text" className="w-full bg-black/50 border border-zinc-700 rounded p-3 text-white focus:border-green-500 focus:outline-none" placeholder="00.000.000/0000-00" />
            </div>

            <div className="md:col-span-2">
              <h3 className="text-white font-semibold mt-4 mb-4 border-b border-white/10 pb-2">Dados de Contato</h3>
            </div>

            <div className="space-y-2">
              <label className="text-xs text-zinc-400 uppercase font-bold">Nome do Contato</label>
              <input type="text" className="w-full bg-black/50 border border-zinc-700 rounded p-3 text-white focus:border-green-500 focus:outline-none" placeholder="Seu nome" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-zinc-400 uppercase font-bold">E-mail</label>
              <input type="email" className="w-full bg-black/50 border border-zinc-700 rounded p-3 text-white focus:border-green-500 focus:outline-none" placeholder="seu@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-zinc-400 uppercase font-bold">Telefone / WhatsApp</label>
              <input type="text" className="w-full bg-black/50 border border-zinc-700 rounded p-3 text-white focus:border-green-500 focus:outline-none" placeholder="(00) 00000-0000" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-zinc-400 uppercase font-bold">Cidade / Estado</label>
              <input type="text" className="w-full bg-black/50 border border-zinc-700 rounded p-3 text-white focus:border-green-500 focus:outline-none" placeholder="São Paulo - SP" />
            </div>

            <div className="md:col-span-2 mt-4">
              <button type="button" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded transition-colors uppercase tracking-wider">
                Enviar solicitação
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>);
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Protyre - Pneus de Alta Performance",
    description: "Pneus de alta performance desenvolvidos com tecnologia de ponta para garantir aderência e segurança em cada quilômetro.",
  };
}
