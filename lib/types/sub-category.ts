export interface SubCategory {
  _id: string;
  title: string;
  description: string;
  photos: {
    id: string;
    secure_url: string;
    _id: string;
  }[];
  keywords: string;
  category: {
    _id: string;
    title: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  __v: number;
}