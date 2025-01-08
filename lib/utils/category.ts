import { Category } from "@/lib/types/category";

export const formatKeywords = (keywords: string): string[] => {
  return keywords.split('\n').filter(keyword => keyword.trim() !== '');
};

export const getCategoryImage = (category: Category): string => {
  return category.photos[0]?.secure_url || '';
};

export const sortCategories = (categories: Category[]): Category[] => {
  return [...categories].sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};