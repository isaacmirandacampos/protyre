export interface Product {
  id: string;
  name: string;
  code: string;
  description: string;
  fullDescription: string;
  image: string;
  specs: {
    measure: string;
    position: string;
    tube: string;
    loadIndex: string;
  };
}
