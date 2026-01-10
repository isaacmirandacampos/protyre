import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group w-full mx-auto bg-zinc-800 rounded-lg overflow-hidden flex flex-col hover:shadow-xl hover:shadow-green-900/20 transition-all duration-300 cursor-pointer h-full">
      <div className="relative aspect-square w-full bg-white overflow-hidden">
        <Image
          fill
          src={product.image}
          alt={product.name}
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 sm:p-6 flex-1 flex flex-col bg-#464845 group-hover:bg-[#000000B2]">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-[#E4E4E4] text-sm mb-4 line-clamp-3 flex-1">{product.description}</p>
        <div className="mt-auto flex items-center text-sm font-semibold text-zinc-300 group-hover:text-green-500 transition-colors">
          Ver Detalhes <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
