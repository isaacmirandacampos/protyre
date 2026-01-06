import { type Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { Product } from "@/types/product";

function convertPrismicProductToProduct(doc: Content.ProductDocument): Product | null {
  const productSlice = doc.data.slices[0] as Content.ProductSlice;
  if (!productSlice || productSlice.slice_type !== 'product') return null;

  const data = productSlice.primary;

  // Extrair todas as imagens do grupo repetível
  const allImages: string[] = [];
  if (data.imagens && Array.isArray(data.imagens)) {
    data.imagens.forEach((group: any) => {
      // Adicionar todas as imagens do grupo (imagem, imagem2, imagem3, imagem_4)
      if (group.imagem?.url) allImages.push(group.imagem.url);
      if (group.imagem2?.url) allImages.push(group.imagem2.url);
      if (group.imagem3?.url) allImages.push(group.imagem3.url);
      if (group.imagem_4?.url) allImages.push(group.imagem_4.url);
    });
  }

  return {
    id: doc.uid,
    name: data.title || 'Produto',
    code: data.codigo_do_produto?.toString() || '',
    description: data.descricao?.[0]?.text || '',
    fullDescription: data.descricao?.map(p => p.text).join('\n') || '',
    image: allImages[0] || '/pneu.png', // Primeira imagem disponível
    specs: {
      measure: '',
      position: '',
      tube: '',
      loadIndex: ''
    }
  };
}

export default async function ProdutosPage() {
  const client = createClient();
  const productsData = await client.getAllByType('product');
  const products = productsData.map(convertPrismicProductToProduct).filter((p): p is Product => p !== null);
  return (
    <div className="bg-[#E7EEE5] min-h-screen pb-20">
      {/* Page Header */}
      <div className="text-white relative overflow-hidden">
        <div className="inset-0 h-54">
          <img
            src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=1920"
            alt="Header Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative bg-[#E7EEE5] font-lato z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-black m-6 text-sm tracking-widest">
            <Link href="/">Home</Link> / <Link href="/produtos" className="font-bold">Produtos</Link>
          </p>
          <h1 className="text-center text-4xl font-bold text-black mb-4">
            Nossos <span className="text-green-500">Produtos</span>
          </h1>
          <p className="text-center max-w-2xl mx-auto text-[#1A1A19]">
            Explore nossa linha completa de pneus de alta performance para todos
            os tipos de veículos.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-[#E7EEE5] py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/produtos/${product.id}`}
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-zinc-800 mb-4">
            Protyre Pneus de Alta Performance para Motos: Segurança e Tecnologia em Cada Estrada
          </h3>
          <p className="text-zinc-600 leading-relaxed">
            Descubra a nossa linha de pneus para motos, projetados com tecnologia de ponta para oferecer máxima segurança e desempenho. Nossos pneus são ideais para qualquer tipo de estrada, garantindo que você tenha uma experiência de pilotagem segura e confiável. Explore a qualidade e inovação que fazem a diferença na sua jornada.
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
