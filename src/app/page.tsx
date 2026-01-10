import { type Metadata } from "next"; import Link from "next/link";
import Image from 'next/image';
import {
  CheckCircle,
  ArrowRight,
  DownloadIcon,
} from "lucide-react";
import { ProductListCarousel } from "@/components/ProductListCarousel";
import DistributorSection from "@/components/DistributorSection";
import { ContactSection } from "@/components/ContactSection";
import { createClient } from "@/prismicio";
import { Content, asText, LinkField } from "@prismicio/client";
import { Product } from "@/types/product";
import { PrismicNextLink } from "@prismicio/next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Protyre - Pneus de Alta Performance",
    description:
      "Pneus de alta performance desenvolvidos com tecnologia de ponta para garantir aderência e segurança em cada quilômetro.",
  };
}

function convertPrismicProductToProduct(doc: Content.ProductDocument): Product | null {
  const productSlice = doc.data.slices[0] as Content.ProductSlice;
  if (!productSlice || productSlice.slice_type !== 'product') return null;

  const data = productSlice.primary;

  // Extrair todas as imagens do grupo repetível
  const allImages: string[] = [];
  if (data.imagens && Array.isArray(data.imagens)) {
    data.imagens.forEach((group) => {
      // Adicionar todas as imagens do grupo (imagem, imagem2, imagem3, imagem_4)
      if (group.imagem?.url) allImages.push(group.imagem.url);
      if (group.imagem2?.url) allImages.push(group.imagem2.url);
      if (group.imagem3?.url) allImages.push(group.imagem3.url);
      if (group.imagem_4?.url) allImages.push(group.imagem_4.url);
    });
  }

  // Extrair texto da descrição
  const fullDescription = data.descricao ? asText(data.descricao) : '';
  const description = fullDescription.split('\n')[0] || '';

  return {
    id: doc.uid,
    name: data.title || "",
    code: data.codigo_do_produto?.toString() || '',
    description,
    fullDescription,
    image: allImages[0] || "/pneu.png", // Primeira imagem disponível
    specs: {
      measure: '',
      position: '',
      tube: '',
      loadIndex: ''
    }
  };
}

export default async function Home() {
  const client = createClient();
  const productsData = await client.getAllByType('product');
  const products = productsData.map(convertPrismicProductToProduct).filter((p): p is Product => p !== null);

  // Buscar dados da página home do Prismic
  const homeData = await client.getSingle('home');
  const catalogoLink = homeData.data.catalogo_de_download;

  return (
    <div className="flex flex-col w-screen">
      <Hero catalogoLink={catalogoLink} />
      <section id="produtos" className="bg-[#E7EEE5] py-20" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-2">
              Nossos Produtos
            </h2>
            <p className="text-black">
              Linha completa de pneus para todos os tipos de veículos e necessidades
            </p>
          </div>

          <ProductListCarousel products={products} />

          <div className="text-center mt-12">
            <Link
              href="/produtos"
              className="bg-green-500 text-black px-4 py-3 rounded-md hover:text-white hover:bg-green-500/90 transition-colors inline-flex items-center gap-4"
            >
              Ver Todos os Produtos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section >
      <Sobre />
      <DistributorSection />
      <ContactSection />
    </div >
  );
}

const Hero = ({ catalogoLink }: { catalogoLink: LinkField }) => {
  return (<section className="relative
        xl:aspect-[1534/944] lg:max-h-[100vh] xl:max-h-[80vh] overflow-hidden
  ">
    <div className="absolute inset-0 z-0">
      <Image
        width={1534}
        height={944}
        src="/hero.png"
        alt="Motociclista em alta velocidade na rua"
        priority
        className="w-full absolute h-full object-cover lg:object-cover object-bottom"
      />
      <div className="absolute bg-gradient-to-b from-black via-black/80 to-black  inset-0 xl:bg-gradient-to-b xl:from-black/95 xl:via-black/60 xl:to-black/60"></div>
    </div>


    <div className="relative z-1 max-w-7xl mx-auto px-4 mb-8 sm:mb-10 sm:px-6 xl:px-8 mt-4 sm:mt-8 xl:mt-28 w-full">
      <div className="max-w-2xl">
        <h2 className="text-5xl xl:text-6xl text-white leading-tight my-4 xl:my-8">
          Performance que <br />
          <span className="text-green-500">Domina a Pista</span>
        </h2>
        <p className="text-zinc-300 text-lg my-6 xl:my-8 max-w-lg">
          Pneus de alta performance desenvolvidos com tecnologia de ponta
          para garantir aderência e segurança em cada quilômetro.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/produtos"
            className="bg-green-600 hover:bg-green-700 text-white justify-center items-center w-fit xl:w-42 text-sm gap-2 flex px-2 py-3 rounded-md transition-colors shadow-lg shadow-green-900/50"
          >
            Explorar produtos <ArrowRight className="text-xs h-4" />
          </Link>
          <PrismicNextLink
            field={catalogoLink}
            target="_blank"
            className="bg-white hover:bg-gray-200 items-center justify-center flex gap-2 text-sm text-black w-fit xl:w-42 px-2 py-3 rounded-md transition-colors"
          >
            <DownloadIcon className="text-xs h-4" />
            Baixar catálogo
          </PrismicNextLink>
        </div>
      </div>
    </div>

    <div className="relative w-[calc(100vw-40px)] mx-auto sm:w-screen z-1 my-2 xl:my-20 border-t border-zinc-700" />
    <div className="relative mt-1 z-1 flex justify-center gap-6 items-center sm:gap-28 pt-4 xl:pt-8">
      <div className="flex justify-center xl:items-center flex-col">
        <span className="block text-3xl text-green-500">
          30+
        </span>
        <span className="text-xs sm:text-sm text-zinc-400 capitalize tracking-wider">
          Anos de Experiência
        </span>
      </div>
      <div className="flex justify-center xl:items-center gap-2 flex-col">
        <span className="block text-3xl text-green-500">
          2M+
        </span>
        <span className="text-xs sm:text-sm text-zinc-400 capitalize tracking-wider">
          Pneus Vendidos
        </span>
      </div>
      <div className="flex justify-center xl:items-center gap-2 flex-col">
        <span className="block text-3xl text-green-500">
          98%
        </span>
        <span className="text-xs sm:text-sm text-zinc-400 capitalize tracking-wider">
          Satisfação
        </span>
      </div>
    </div>
    <Link href="#produtos" className="z-1 relative my-4 xl:my-12 flex justify-center flex-col items-center">
      <span className="text-white/40 gap-8 uppercase">Role para baixo</span>
      <Image priority height={40} width={24} src="/scroll-to-below.svg" alt="Icone avisando indicando que tem mais conteúdo visível ao rolar a página" />
    </Link>
  </section >
  )
}


const Sobre = () => {
  return (<section id="sobre" className="bg-black overflow-hidden relative">
    <div className="max-w-7xl xl:mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative  aspect-[737/527] py-8 lg:py-20">
          <Image
            width={737}
            height={527}
            priority
            src="/sobre-nos.png"
            alt="Protyre Headquarters"
            className="relative lg:max-w-[650px] mx-auto w-[90vw] lg:w-[50vw] 2xl:w-[70vw] z-1 shadow-2xl shadow-black/50"
          />
        </div>
        <div>
          <div className="absolute inset-0 -top-20 w-[100vw] -right-20 -bottom-20 z-0 pointer-events-none mix-blend-screen">
            <Image
              src="/sobre-nos-arrow-bg.png"
              alt="Background Pattern"
              priority
              fill
              className="object-cover w-screen opacity-15 object-right-center"
            />
          </div>

          {/* Conteúdo de Texto - Z-Index maior para ficar por cima */}
          <div className="relative z-10 w-[90vw] pb-8 mx-auto lg:w-full">
            <h2 className="text-3xl font-bold text-green-500 mb-6">
              Sobre Nós
            </h2>

            <p className="text-white/70 mb-6 leading-relaxed">
              Somos uma fabricante brasileira de pneus e câmaras para motocicletas, unindo
              tecnologia, segurança e desempenho em cada produto. Todos os nossos pneus são
              homologados pelo Inmetro, garantindo qualidade e confiança na estrada.
            </p>

            <p className="text-white/70 mb-8 leading-relaxed">
              Oferecemos aderência, conforto e durabilidade para o dia a dia ou para quem busca aventura
              sobre duas rodas. Estamos presentes em todo o Brasil, impulsionando a paixão por pilotar.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center text-zinc-300">
                <CheckCircle className="text-green-500 mr-3 shrink-0" size={20} />
                Certificação ISO
              </li>
              <li className="flex items-center text-zinc-300">
                <CheckCircle className="text-green-500 mr-3 shrink-0" size={20} />
                + 200 Distribuidores em todos Brasil
              </li>
              <li className="flex items-center text-zinc-300">
                <CheckCircle className="text-green-500 mr-3 shrink-0" size={20} />
                Qualidade garantida
              </li>
              <li className="flex items-center text-zinc-300">
                <CheckCircle className="text-green-500 mr-3 shrink-0" size={20} />
                Garantia estendida em toda linha
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </section>);
}
