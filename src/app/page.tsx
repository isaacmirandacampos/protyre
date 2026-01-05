import { type Metadata } from "next";
import Link from "next/link";
import Image from 'next/image'
import {
  CheckCircle,
  ArrowRight,
  DownloadIcon,
  Award,
  Users,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { MOCK_PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

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
        className="w-screen absolute h-full 
                     lg:object-contain object-cover"
      />
      <div className="absolute bg-gradient-to-b from-black via-black/80 to-black  inset-0 xl:bg-gradient-to-b xl:from-black/95 xl:via-black/60 xl:to-black/60"></div>
    </div>


    <div className="relative z-1 max-w-7xl mx-auto px-4 mb-10 sm:px-6 xl:px-8 mt-28 w-full">
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

    <div className="relative w-[calc(100vw-40px)] mx-auto sm:w-screen z-1 my-20 border-t border-zinc-700" />
    <div className="relative mt-1 z-1 flex justify-center gap-4 items-center gap-12 sm:gap-28 pt-8">
      <div className="flex justify-center xl:items-center flex-col">
        <span className="block text-3xl text-green-500">
          30+
        </span>
        <span className="text-sm text-zinc-400 capitalize tracking-wider">
          Anos de Experiência
        </span>
      </div>
      <div className="flex justify-center xl:items-center gap-2 flex-col">
        <span className="block text-3xl text-green-500">
          2M+
        </span>
        <span className="text-sm text-zinc-400 capitalize tracking-wider">
          Pneus Vendidos
        </span>
      </div>
      <div className="flex justify-center xl:items-center gap-2 flex-col">
        <span className="block text-3xl text-green-500">
          98%
        </span>
        <span className="text-sm text-zinc-400 capitalize tracking-wider">
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

const DistributorSection = () => {
  return (
    <section id="distribuidor" className="relative bg-black">
      <div className="bg-gradient pt-16 pb-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#00AA0E] mb-6">
            Seja um Distribuidor
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-[#FFFFFFB2]">
            Junte-se à rede de distribuidores da marca que mais cresce no
            Brasil. Oferecemos suporte completo, margem competitiva e produtos
            de alta qualidade que seus clientes vão adorar.
          </p>

          {/* Cards de benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FFFFFF0D] backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Award className="w-8 h-8 text-[#00AA0E]" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Produtos de Qualidade
              </h3>
              <p className="text-[#FFFFFF99] text-sm">
                Linha completa testada e aprovada com certificação
                internacional.
              </p>
            </div>

            <div className="bg-[#FFFFFF0D] backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <Users className="w-8 h-8 text-[#00AA0E]" />
              </div>
              <h3 className="text-white font-semibold mb-2">Suporte Técnico</h3>
              <p className="text-[#FFFFFF99] text-sm">
                Treinamento especializado e assistência técnica completa.
              </p>
            </div>

            <div className="bg-[#FFFFFF0D] backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-[#00AA0E]" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Alto Potencial de Lucro
              </h3>
              <p className="text-[#FFFFFF99] text-sm">
                Margem competitiva e produtos de alta rotatividade no mercado.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black pb-20">
        <div className="bg-gradient pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
            <div className="bg-[#E7EEE5] rounded-2xl shadow-xl p-8 md:p-10">
              <form className="space-y-8">
                {/* Dados da Empresa */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Dados da Empresa
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Razão Social<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Razão social da empresa"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Nome Fantasia<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Nome fantasia da empresa"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Inscrição Estadual (IE)
                      </label>
                      <input
                        type="text"
                        placeholder='000.000.000.000 (ou "Isento")'
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        CNPJ<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="00.000.000/0000-00"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Ramo de Atividade<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select className="w-full bg-white border-0 rounded-lg p-3 text-gray-400 appearance-none focus:ring-2 focus:ring-green-500 focus:outline-none cursor-pointer">
                          <option value="">Selecione o ramo de atuação</option>
                          <option value="varejo">Varejo</option>
                          <option value="atacado">Atacado</option>
                          <option value="oficina">Oficina Mecânica</option>
                          <option value="revenda">Revenda de Pneus</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Data de Fundação<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="dd/mm/aaaa"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Dados de Contato */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Dados de contato
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Telefone com DDD<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="(00) 00000-0000"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        E-mail<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Confirmação de e-mail
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Confirme seu e-mail"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Site
                      </label>
                      <input
                        type="text"
                        placeholder="Cole aqui o link"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Rede Social
                      </label>
                      <input
                        type="text"
                        placeholder="Cole aqui o link"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Endereço */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Endereço
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        CEP<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="00000-000"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Estado<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select className="w-full bg-white border-0 rounded-lg p-3 text-gray-400 appearance-none focus:ring-2 focus:ring-green-500 focus:outline-none cursor-pointer">
                          <option value="">Selecione o estado</option>
                          <option value="SP">São Paulo</option>
                          <option value="RJ">Rio de Janeiro</option>
                          <option value="MG">Minas Gerais</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Cidade<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select className="w-full bg-white border-0 rounded-lg p-3 text-gray-400 appearance-none focus:ring-2 focus:ring-green-500 focus:outline-none cursor-pointer">
                          <option value="">Selecione a cidade</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Bairro<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Informe o bairro"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Logradouro<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Rua / Avenida"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Nº<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="000"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm text-gray-700 font-medium">
                        Complemento
                      </label>
                      <input
                        type="text"
                        placeholder="Opcional"
                        className="w-full bg-white border-0 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Checkbox e Botão */}
                <div className="space-y-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                    />
                    <span className="text-sm text-gray-600">
                      Li e aceito as{" "}
                      <a
                        href="#"
                        className="underline"
                      >
                        Políticas de Privacidade
                      </a>{" "}
                      e{" "}
                      <a
                        href="#"
                        className="underline"
                      >
                        Políticas de Cookies
                      </a>
                      .
                    </span>
                  </label>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-black font-semibold py-4 px-8 rounded-lg transition-colors inline-flex items-center gap-2"
                    >
                      Enviar cadastro para ser um distribuidor
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sobre = () => {
  return (<section id="sobre" className="bg-black overflow-hidden relative">
    <div className="max-w-7xl 2xl:mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-[40vw] py-20">
          <Image
            width={737}
            height={527}
            src="/sobre-nos.png"
            alt="Protyre Headquarters"
            className="relative max-w-[650px] w-[70vw] z-1 shadow-2xl shadow-black/50"
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
          <div className="relative z-10">
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
