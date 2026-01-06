import { type Metadata } from "next";
import Image from 'next/image'
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Download } from "lucide-react";
import { createClient } from "@/prismicio";
import { Content, asText } from "@prismicio/client";
import { ProductCarousel, ProductImage } from "@/components/ProductCarousel";

function convertPrismicProductToProduct(doc: Content.ProductDocument) {
  const productSlice = doc.data.slices[0] as Content.ProductSlice;
  if (!productSlice || productSlice.slice_type !== 'product') return null;

  const data = productSlice.primary;

  // Extrair todas as imagens do grupo repetível
  const carouselImages: Array<{ url: string; alt?: string }> = [];
  if (data.imagens && Array.isArray(data.imagens)) {
    data.imagens.forEach((group: any, // eslint-disable-line
      groupIndex: number) => {
      // Adicionar todas as imagens do grupo (imagem, imagem2, imagem3, imagem_4)
      if (group.imagem?.url) {
        carouselImages.push({
          url: group.imagem.url,
          alt: group.imagem.alt ?? `Imagem do produto ${groupIndex * 4 + 1}`
        });
      }
      if (group.imagem2?.url) {
        carouselImages.push({
          url: group.imagem2.url,
          alt: group.imagem2.alt ?? `Imagem do produto ${groupIndex * 4 + 2}`
        });
      }
      if (group.imagem3?.url) {
        carouselImages.push({
          url: group.imagem3.url,
          alt: group.imagem3.alt ?? `Imagem do produto ${groupIndex * 4 + 3}`
        });
      }
      if (group.imagem_4?.url) {
        carouselImages.push({
          url: group.imagem_4.url,
          alt: group.imagem_4.alt ?? `Imagem do produto ${groupIndex * 4 + 4}`
        });
      }
    });
  }

  // Extrair texto da descrição
  const fullDescription = data.descricao ? asText(data.descricao) : '';
  const description = fullDescription.split('\n')[0] || '';

  // Extrair URL do catálogo (LinkToMediaField)
  const catalogoUrl = data.catalogo_para_download && 'url' in data.catalogo_para_download
    ? data.catalogo_para_download.url
    : undefined;

  return {
    id: doc.uid,
    name: data.title,
    code: data.codigo_do_produto?.toString() || '',
    description,
    fullDescription,
    descricaoRichText: data.descricao,
    image: carouselImages[0]?.url || '/pneu.png',
    carouselImages,
    imagemDescricao: data.imagem_na_descricao?.url,
    catalogoUrl,
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
  } catch {
    notFound();
  }

  const product = convertPrismicProductToProduct(productDoc);

  if (!product) {
    notFound();
  }

  // Preparar imagens para o carrossel
  const allImages: ProductImage[] = [];

  // Se houver imagens no carrossel, usar elas
  if (product.carouselImages && product.carouselImages.length > 0) {
    allImages.push(...product.carouselImages);
  } else if (product.image) {
    // Caso contrário, usar a imagem principal
    allImages.push({ url: product.image, alt: product.name ?? '' });
  }

  return (
    <div className="bg-[#E7EEE5]">
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-black text-sm">
            <Link href="/">Home</Link> / <Link href="/produtos">Produtos</Link> /{" "}
            <Link href={`/produtos/${product.name}`} className="text-black font-bold">{product.name}</Link>
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative border-r border-zinc-100 min-h-[600px]">
              <Link
                href="/produtos"
                className="absolute left-4 top-4 z-10 p-2 rounded-full bg-white shadow-md text-zinc-400 hover:text-green-600 lg:hidden"
              >
                <ChevronLeft />
              </Link>

              <ProductCarousel images={allImages} />
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
                <Image
                  height={150}
                  width={150}
                  src={product.imagemDescricao}
                  alt={product.name as string}
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
  } catch {
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
