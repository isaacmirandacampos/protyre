import { type Metadata } from "next"; import Link from "next/link";
import Image from 'next/image';
import {
  CheckCircle,
  ArrowRight,
  DownloadIcon,
} from "lucide-react";
import { MOCK_PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import DistributorSection from "@/components/DistributorSection";
import { ContactSection } from "@/components/ContactSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Protyre - Pneus de Alta Performance",
    description:
      "Pneus de alta performance desenvolvidos com tecnologia de ponta para garantir aderência e segurança em cada quilômetro.",
  };
}

export default function Home() {
  return (
    <div className="flex flex-col w-screen">
      <Hero />
      <section className="bg-[#E7EEE5] py-20" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-2">
              Nossos Produtos
            </h2>
            <p className="text-black">
              Linha completa de pneus para todos os tipos de veículos e necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MOCK_PRODUCTS.map((product) => (
              <Link key={product.id} href={`/produtos/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/produtos"
              className="bg-[#00AA0E] text-black px-4 py-3 rounded-md hover:bg-zinc-800 transition-colors inline-flex items-center gap-4"
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

const Hero = () => {
  return (<section className="relative
        aspect-[1534/944]       
  ">
    <div className="absolute inset-0 z-0">
      <Image
        width={1534}
        height={944}
        src="/hero.png"
        alt="Motociclista em alta velocidade na rua"
        priority
        className="w-screen absolute h-full
                     lg:object-contain object-cover"
      />
      <div className="absolute bg-gradient-to-b from-black via-black/80 to-black  inset-0 xl:bg-gradient-to-b xl:from-black/95 xl:via-black/60 xl:to-black/60"></div>
    </div>


    <div className="relative z-1 max-w-7xl mx-auto px-4 mb-8 sm:mb-10 sm:px-6 xl:px-8 mt-8 sm:mt-14 lg:mt-28 w-full">
      <div className="max-w-2xl">
        <h2 className="text-5xl md:text-6xl text-white leading-tight my-8">
          Performance que <br />
          <span className="text-green-500">Domina a Pista</span>
        </h2>
        <p className="text-zinc-300 text-lg my-8 max-w-lg">
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
          <Link
            href="/#sobre"
            className="bg-white hover:bg-gray-200 items-center justify-center flex gap-2 text-sm text-black w-fit xl:w-42 px-2 py-3 rounded-md transition-colors"
          >
            <DownloadIcon className="text-xs h-4" />
            Baixar catálogo
          </Link>
        </div>
      </div>
    </div>

    <div className="relative w-[calc(100vw-40px)] mx-auto sm:w-screen z-1 my-2 sm:my-10 lg:my-20 border-t border-zinc-700" />
    <div className="relative mt-1 z-1 flex justify-center gap-6 items-center sm:gap-28 pt-8">
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
    <div className="z-1 relative my-6 sm:my-12 flex justify-center flex-col items-center">
      <span className="text-white/40 gap-8 uppercase">Role para baixo</span>
      <Image height={40} width={24} src="/scroll-to-below.svg" alt="Icone avisando indicando que tem mais conteúdo visível ao rolar a página" />
    </div>
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
