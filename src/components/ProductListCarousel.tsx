'use client';

import React, { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { ProductCard } from './ProductCard';
import { Product } from '@/types/product';

interface ProductListCarouselProps {
  products: Product[];
}

export const ProductListCarousel: React.FC<ProductListCarouselProps> = ({ products }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 4 },
    },
  });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi?.canScrollPrev())
      return emblaApi.scrollPrev();
    emblaApi.scrollTo(products.length - 1);
  }, [emblaApi, products]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi?.canScrollNext())
      return emblaApi.scrollNext();
    emblaApi.scrollTo(0);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Nenhum produto disponível</p>
      </div>
    );
  }

  // Mostrar apenas os primeiros 8 produtos
  const displayProducts = products.slice(0, 8);

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {displayProducts.map((product) => (
            <div
              key={product.id}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-8px)] lg:flex-[0_0_calc(25%-12px)]"
            >
              <Link href={`/produtos/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Only show if more than 4 items */}
      {displayProducts.length > 4 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-12 p-3 text-[#00AA0E] hover:text-[#00AA0E]/80 transition-colors z-10"
            aria-label="Produtos anteriores"
          >
            <ChevronLeft size={32} strokeWidth={2.5} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-12 p-3 text-[#00AA0E] hover:text-[#00AA0E]/80 transition-colors z-10"
            aria-label="Próximos produtos"
          >
            <ChevronRight size={32} strokeWidth={2.5} />
          </button>
        </>
      )}

      {/* Dots Indicators */}
      {displayProducts.length > 4 && (
        <div className="pt-6 flex justify-center gap-2">
          {Array.from({ length: Math.ceil(displayProducts.length / 4) }).map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index * 4)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${Math.floor(selectedIndex / 4) === index ? 'bg-[#00AA0E]' : 'bg-zinc-300'
                }`}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
