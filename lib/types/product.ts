export interface ProductPhoto {
  id: string;
  secure_url: string;
  _id: string;
}

export interface Product {
  _id: string;
  title: string;
  discountPriceStatus: boolean;
  price: number;
  description: string;
  photos: ProductPhoto[];
  category: string;
  stock: number;
  brand: string;
  ratings: number;
  numberOfReviews: number;
  createdAt: string;
  slug: string;
  arPhotos: any[];
  reviews: any[];
  __v: number;
}