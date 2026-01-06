'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ProductImage {
  url: string;
  alt?: string;
}

interface ProductCarouselProps {
  images: ProductImage[];
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (!emblaMainApi) return;
    if (emblaMainApi?.canScrollPrev())
      return emblaMainApi.scrollPrev();
    emblaMainApi.scrollTo(images.length - 1);
  }, [emblaMainApi, images]);

  const scrollNext = useCallback(() => {
    if (!emblaMainApi) return;
    if (emblaMainApi?.canScrollNext())
      return emblaMainApi.scrollNext();
    emblaMainApi.scrollTo(0);
  }, [emblaMainApi]);

  const onSelect = useCallback(() => {
    if (!emblaMainApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, setSelectedIndex]);

  React.useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  if (images.length === 0) {
    return (
      <div className="relative h-full bg-white flex items-center justify-center">
        <p className="text-gray-400">Sem imagens disponíveis</p>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="relative h-full bg-white p-12 flex items-center justify-center">
        <Image
          src={images[0].url}
          alt={images[0].alt || 'Produto'}
          width={600}
          height={600}
          className="max-h-[600px] w-auto object-contain"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full flex flex-col">
      {/* Main Carousel */}
      <div className="flex-1 relative overflow-hidden" ref={emblaMainRef}>
        <div className="flex h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative flex items-center justify-center px-8 md:px-24 py-24 md:py-12"
            >
              <div className="w-full h-full bg-white flex items-center justify-center">
                <Image
                  src={image.url}
                  alt={image.alt || `Produto ${index + 1}`}
                  width={800}
                  height={800}
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute -left-4 md:left-4 top-1/2 -translate-y-1/2 p-3 text-[#00AA0E] hover:text-[#00AA0E]/80 transition-colors z-10"
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={32} strokeWidth={2.5} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute -right-4 md:right-4 top-1/2 -translate-y-1/2 p-3 text-[#00AA0E] hover:text-[#00AA0E]/80 transition-colors z-10"
          aria-label="Próxima imagem"
        >
          <ChevronRight size={32} strokeWidth={2.5} />
        </button>
      </div>

      {/* Dots Indicators */}
      <div className="pb-8 pt-4 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaMainApi?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${index === selectedIndex ? 'bg-[#00AA0E]' : 'bg-zinc-300'
              }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
