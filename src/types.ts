export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  images: string[];
  category: string;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
