import { type Metadata } from "next";
import Link from "next/link";
import { MOCK_PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export default function ProdutosPage() {
  return (
    <div className="bg-zinc-100 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-black text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1920"
            alt="Header Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-zinc-400 mb-2 text-sm uppercase tracking-widest">
            Home / Produtos
          </p>
          <h1 className="text-4xl font-bold text-white mb-4">
            Nossos <span className="text-green-500">Produtos</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-300">
            Explore nossa linha completa de pneus de alta performance para todos
            os tipos de veículos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...MOCK_PRODUCTS, ...MOCK_PRODUCTS].map((product, index) => (
              <Link
                key={`${product.id}-${index}`}
                href={`/produtos/${product.id}`}
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-zinc-800 mb-4">
            Protyre Pneus de Alta Performance
          </h3>
          <p className="text-zinc-600 leading-relaxed">
            Descubra a nossa linha de pneus para motos, projetados com
            tecnologia de ponta para oferecer máxima segurança e desempenho.
            Nossos pneus são ideais para qualquer tipo de estrada, garantindo
            que você tenha uma experiência de pilotagem segura e confiável.
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Produtos - Protyre",
    description:
      "Explore nossa linha completa de pneus de alta performance para todos os tipos de veículos.",
  };
}
