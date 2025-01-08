export interface CategoryPhoto {
  id: string;
  secure_url: string;
  _id: string;
}

export interface Category {
  _id: string;
  title: string;
  description: string;
  photos: CategoryPhoto[];
  keywords: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type CategoryType = 'softeners' | 'filters' | 'ro-purifiers' | 'pumps';

export const CATEGORY_TYPES: Record<CategoryType, string> = {
  'softeners': 'Softeners',
  'filters': 'Filters',
  'ro-purifiers': 'RO Purifiers',
  'pumps': 'Pumps'
} as const;