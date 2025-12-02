import { type Metadata } from "next";
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Download } from 'lucide-react';
import { MOCK_PRODUCTS } from '@/data/products';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="bg-zinc-100 py-4 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/produtos" className="text-sm text-zinc-500 hover:text-green-600 flex items-center gap-1">
            <ChevronLeft size={14} /> Voltar para produtos
          </Link>
          <p className="text-zinc-400 text-xs mt-2 uppercase">Home / Produtos / <span className="text-black font-bold">{product.name}</span></p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column: Image */}
            <div className="p-12 bg-zinc-50 flex flex-col items-center justify-center relative border-r border-zinc-100">
              <Link
                href="/produtos"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-zinc-400 hover:text-green-600 lg:hidden"
              >
                <ChevronLeft />
              </Link>

              <img
                src={product.image}
                alt={product.name}
                className="max-h-[500px] w-auto object-contain mix-blend-multiply"
              />

              <div className="flex gap-2 mt-8">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
              </div>
            </div>

            {/* Right Column: Info */}
            <div className="p-12">
              <div className="mb-2">
                <h1 className="text-4xl font-bold text-zinc-900 mb-2">{product.name} <span className="text-green-600">{product.specs.measure.split(' ')[0]}</span></h1>
                <p className="text-zinc-500">Código: {product.code}</p>
              </div>

              <p className="text-zinc-600 my-8 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="border rounded-lg overflow-hidden mb-8">
                <div className="grid grid-cols-3 border-b">
                  <div className="col-span-1 bg-white p-4 font-bold text-zinc-800 text-right pr-6">Código:</div>
                  <div className="col-span-2 bg-white p-4 text-zinc-600 pl-6">{product.code}</div>
                </div>
                <div className="grid grid-cols-3 border-b">
                  <div className="col-span-1 bg-zinc-100 p-4 font-bold text-zinc-800 text-right pr-6">Medida:</div>
                  <div className="col-span-2 bg-zinc-100 p-4 text-zinc-600 pl-6">{product.specs.measure}</div>
                </div>
                <div className="grid grid-cols-3 border-b">
                  <div className="col-span-1 bg-white p-4 font-bold text-zinc-800 text-right pr-6">Dianteiro/Traseiro:</div>
                  <div className="col-span-2 bg-white p-4 text-zinc-600 pl-6">{product.specs.position}</div>
                </div>
                <div className="grid grid-cols-3 border-b">
                  <div className="col-span-1 bg-zinc-100 p-4 font-bold text-zinc-800 text-right pr-6">Câmara:</div>
                  <div className="col-span-2 bg-zinc-100 p-4 text-zinc-600 pl-6">{product.specs.tube}</div>
                </div>
                <div className="grid grid-cols-3">
                  <div className="col-span-1 bg-white p-4 font-bold text-zinc-800 text-right pr-6">Índice de Carga/Vel.:</div>
                  <div className="col-span-2 bg-white p-4 text-zinc-600 pl-6">{product.specs.loadIndex}</div>
                </div>
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded font-bold transition-colors flex items-center gap-3 shadow-lg shadow-green-900/20">
                <Download size={20} />
                Baixar Catálogo Técnico
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return {
      title: "Produto não encontrado - Protyre",
    };
  }

  return {
    title: `${product.name} - Protyre`,
    description: product.fullDescription,
  };
}
