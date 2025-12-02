import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <span className="text-3xl font-bold italic tracking-tighter">
              <span className="text-white">PRO</span>
              <span className="text-green-500">TYRE</span>
            </span>
            <p className="text-zinc-500 text-sm">
              Excelência em pneus automotivos. Tecnologia, performance e segurança em cada quilômetro.
            </p>
            <div className="flex gap-4 pt-2">
              <Instagram className="text-zinc-400 hover:text-green-500 cursor-pointer" />
              <Facebook className="text-zinc-400 hover:text-green-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-green-500 font-bold mb-4 uppercase text-sm">Produtos</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="hover:text-white cursor-pointer">Todos os Produtos</li>
              <li className="hover:text-white cursor-pointer">Linha Street</li>
              <li className="hover:text-white cursor-pointer">Linha Off-Road</li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-500 font-bold mb-4 uppercase text-sm">Outros</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li className="hover:text-white cursor-pointer">Download Catálogo</li>
              <li className="hover:text-white cursor-pointer">Seja um Distribuidor</li>
              <li className="hover:text-white cursor-pointer">Política de Privacidade</li>
            </ul>
          </div>

          <div>
            <h3 className="text-green-500 font-bold mb-4 uppercase text-sm">Contato</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-green-500 mt-1" />
                <span>Santo André - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-500" />
                <span>(11) 0000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-green-500" />
                <span>contato@protyre.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>© 2025 Protyre. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">desenvolvido por <span className="text-white font-bold">five.minds</span></p>
        </div>
      </div>
    </footer>
  );
};
