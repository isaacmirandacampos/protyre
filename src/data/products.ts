import { Product } from '@/types/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'PRO SR - 140',
    code: '3330',
    description: 'Design moderno, esportivo e urbano. Excelente para média cilindrada.',
    fullDescription: 'O pneu PROTYRE PRO SR 140 tem design moderno, esportivo e urbano. Sendo excelente para motos de baixa a média cilindrada. Possui ótima dirigibilidade e rendimento quilométrico.',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?auto=format&fit=crop&q=80&w=500',
    specs: {
      measure: '3.50-21 (≈ 90/90-21)',
      position: 'Dianteiro/Traseiro',
      tube: 'C/C',
      loadIndex: '54S'
    }
  },
  {
    id: '2',
    name: 'TIGER - 60/100',
    code: '3331',
    description: 'Ideal para terrenos mistos, garantindo aderência e segurança.',
    fullDescription: 'O modelo TIGER foi desenvolvido para quem enfrenta desafios diários em terrenos mistos. Sua composição garante durabilidade extrema e tração superior.',
    image: 'https://images.unsplash.com/photo-1629814404639-50c6d3283259?auto=format&fit=crop&q=80&w=500',
    specs: {
      measure: '60/100-17',
      position: 'Dianteiro',
      tube: 'C/C',
      loadIndex: '33L'
    }
  },
  {
    id: '3',
    name: 'BUD TURBO - 100/90',
    code: '3332',
    description: 'Performance superior em asfalto molhado e curvas acentuadas.',
    fullDescription: 'O BUD TURBO é sinônimo de velocidade e segurança. Seus sulcos foram desenhados para dispersão rápida de água, garantindo estabilidade em altas velocidades.',
    image: 'https://images.unsplash.com/photo-1583209590740-1555239f60d6?auto=format&fit=crop&q=80&w=500',
    specs: {
      measure: '100/90-18',
      position: 'Traseiro',
      tube: 'S/C',
      loadIndex: '56P'
    }
  },
  {
    id: '4',
    name: 'PRO MT - 110',
    code: '3333',
    description: 'Robustez para o dia a dia com alta durabilidade.',
    fullDescription: 'O PRO MT é o cavalo de batalha da nossa linha. Feito para aguentar o tranco das ruas brasileiras com uma carcaça reforçada.',
    image: 'https://images.unsplash.com/photo-1622185135505-2d795043906a?auto=format&fit=crop&q=80&w=500',
    specs: {
      measure: '110/80-18',
      position: 'Traseiro',
      tube: 'C/C',
      loadIndex: '58S'
    }
  },
];
