import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="bg-black py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
            Entre em Contato
          </h2>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Nossa equipe está pronta para atender você. Entre em contato por telefone, e-mail ou visite nossa sede.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">


          <Card title="Telefone" body='(11) 0000-0000' info="Seg a Sex, 8h às 18h">
            <Phone className="text-green-500 w-7 h-7" />
          </Card>
          <Card title="E-mail" body='contato@protyre.com.br' info="Respondemos em até 24h">
            <Mail className="text-green-500 w-7 h-7" />
          </Card>
          <Card title="Endereço" body='Santo André' info="São Paulo">
            <MapPin className="text-green-500 w-7 h-7" />
          </Card>
        </div>
      </div>
    </section>
  );
};

const Card = ({ children, title, body, info }: any 	// eslint-disable-line
) => (
  <div className="flex flex-col lg:flex-row items-center p-6 sm:p-8 bg-[##FFFFFF0D] rounded-3xl border border-[#FFFFFF1A] shadow-sm hover:shadow-md transition-shadow">
    <div className="bg-[#00AA0E1A] p-4 rounded-2xl mr-6 shrink-0">
      {children}
    </div>
    <div className='flex flex-col text-md'>
      <span className='text-white'>
        {title}
      </span>
      <span className="text-[#00AA0E] font-medium sm:text-md">
        {body}
      </span>
      <span className="text-[#FFFFFF80] font-medium sm:text-md">
        {info}
      </span>
    </div>
  </div>)

export { ContactSection };
