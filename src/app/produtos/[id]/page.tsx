import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Download } from "lucide-react";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";

function convertPrismicProductToProduct(doc: Content.ProductDocument) {
  const productSlice = doc.data.slices[0] as Content.ProductSlice;
  if (!productSlice || productSlice.slice_type !== 'product') return null;

  const data = productSlice.primary;

  return {
    id: doc.uid,
    name: data.title,
    code: data.codigo_do_produto?.toString() || '',
    description: data.descricao?.[0]?.text || '',
    fullDescription: data.descricao?.map(p => p.text).join('\n') || '',
    descricaoRichText: data.descricao,
    image: data.produto?.url,
    imagemDescricao: data.imagem_na_descricao?.url,
    catalogoUrl: data.catalogo_para_download?.url,
  };
}

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;

  const client = createClient();
  let productDoc;

  try {
    productDoc = await client.getByUID('product', id);
  } catch (error) {
    notFound();
  }

  const product = convertPrismicProductToProduct(productDoc);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#E7EEE5]">
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-black text-xs mt-4 uppercase">
            <Link href="/">Home</Link> / <Link href="/produtos">Produtos</Link> /{" "}
            <Link href={`/produtos/${product.name}`} className="text-black font-bold">{product.name}</Link>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
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
                <h1 className="text-4xl font-bold text-zinc-900 mb-2">
                  {product.name}{" "}
                </h1>
                <p className="text-[#777777]">Código: {product.code}</p>
              </div>

              <div className="text-[#353535] text-md my-2 leading-relaxed">
                {product.fullDescription}
              </div>

              {product.imagemDescricao && (
                <img
                  src={product.imagemDescricao}
                  alt={product.name}
                  className="max-h-[500px] w-auto object-contain mix-blend-multiply"
                />
              )}

              {product.catalogoUrl && (
                <a
                  href={product.catalogoUrl}
                  download
                  target="_blank"
                  className="bg-[#00AA0E] hover:bg-green-700 text-white mt-4 px-8 py-2 text-sm rounded font-bold transition-colors flex items-center gap-3 w-fit"
                >
                  <Download size={20} />
                  Baixar Catálogo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;

  const client = createClient();
  let productDoc;

  try {
    productDoc = await client.getByUID('product', id);
  } catch (error) {
    return {
      title: "Produto não encontrado - Protyre",
    };
  }

  const product = convertPrismicProductToProduct(productDoc);

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
