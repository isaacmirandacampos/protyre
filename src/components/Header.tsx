'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Download } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center cursor-pointer">
            <span className="text-3xl font-bold italic tracking-tighter">
              <span className="text-white">PRO</span>
              <span className="text-green-500">TYRE</span>
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Início</Link>
              <Link href="/produtos" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Produtos</Link>
              <Link href="/#sobre" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Sobre</Link>
              <Link href="/#distribuidor" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Seja um Distribuidor</Link>
              <Link href="/#contato" className="hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contato</Link>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center gap-2 text-sm font-bold transition-colors">
              <Download size={16} />
              Baixar Catálogo
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-zinc-900 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Início</Link>
            <Link href="/produtos" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Produtos</Link>
            <Link href="/#distribuidor" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Seja um Distribuidor</Link>
            <button className="mt-4 w-full bg-green-600 text-white px-4 py-3 rounded flex items-center justify-center gap-2 font-bold">
              <Download size={16} /> Baixar Catálogo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
