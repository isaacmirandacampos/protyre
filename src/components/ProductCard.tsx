import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-zinc-800 rounded-lg overflow-hidden flex flex-col hover:shadow-xl hover:shadow-green-900/20 transition-all duration-300 border border-zinc-700/50 cursor-pointer">
      <div className="relative h-64 bg-zinc-900 p-6 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-overlay opacity-80"
        />
        <div className="absolute inset-0 border-[20px] border-zinc-800 rounded-full opacity-20 scale-90 group-hover:scale-95 transition-transform"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col bg-zinc-800">
        <h3 className="text-xl font-bold text-white mb-1">{product.name}</h3>
        <p className="text-zinc-400 text-xs mb-4 line-clamp-2 min-h-[2.5em]">{product.description}</p>
        <div className="mt-auto flex items-center text-sm font-semibold text-zinc-300 group-hover:text-green-500 transition-colors">
          Ver Detalhes <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
