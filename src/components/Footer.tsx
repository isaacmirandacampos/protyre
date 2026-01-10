import React from "react";
import Link from 'next/link'
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import Logo from "@/app/logo";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo e descrição */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Logo />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Excelência em pneus automotivos. Tecnologia, performance e
              segurança em cada quilômetro.
            </p>
            <a
              href="https://www.instagram.com/oficialprotyre"
              target="_blank"
              className="flex items-center gap-3 text-zinc-400 hover:text-green-500 transition-colors pt-2"
            >
              <div className="border border-zinc-600 rounded p-1.5">
                <Instagram size={18} />
              </div>
              <span className="text-sm">@oficialprotyre</span>
            </a>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-green-500 font-semibold mb-1 text-sm">
              Produtos
            </h3>
            <div className="w-12 h-0.5 bg-green-500 mb-6" />
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link href="/produtos">
                  Todos os Produtos
                </Link>
              </li>
            </ul>
          </div>

          {/* Outros */}
          <div>
            <h3 className="text-green-500 font-semibold mb-1 text-sm">
              Outros
            </h3>
            <div className="w-12 h-0.5 bg-green-500 mb-6" />
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                Download Catálogo
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link href="#distribuidor">
                  Seja um Distribuidor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-green-500 font-semibold mb-1 text-sm">
              Contato
            </h3>
            <div className="w-12 h-0.5 bg-green-500 mb-6" />
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-green-500 mt-0.5 flex-shrink-0"
                />
                <span>Santo André - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-500 flex-shrink-0" />
                <a href="https://wa.me/5511000000000" target="_blank" className="hover:text-[#00AA0E] font-medium sm:text-md hover:underline">
                  (11) 0000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-green-500 flex-shrink-0" />
                <a href="mailto:contato@protyre.com.br" target="_blank" className="hover:text-[#00AA0E] font-medium sm:text-md hover:underline">contato@protyre.com.br</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>© 2025 Protyre. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">
            desenvolvido por{" "}
            <span className="text-white font-bold">five.minds</span>
          </p>
        </div>
      </div>
    </footer >
  );
};
