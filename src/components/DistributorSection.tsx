import {
  Award,
  Users,
  TrendingUp,
} from 'lucide-react';
import DistributorForm from './DistributorForm';

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
          <DistributorForm />
        </div>
      </div>
    </section>
  );
};

export default DistributorSection;
