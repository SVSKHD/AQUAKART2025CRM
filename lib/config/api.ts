// API configuration
export const API_BASE_URL = 'https://api.aquakart.co.in/v1';

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/user/login',
  
  // Invoices
  INVOICES: '/crm/admin/all-invoices?user=true',
  INVOICE_BY_ID: (id: string) => `/invoices/${id}`,
  
  // Categories
  CATEGORIES: '/allcategories',
  CATEGORY_BY_ID: (id: string) => `/categories/${id}`,
  SUB_CATEGORIES: '/sub-categories',
  SUB_CATEGORY_BY_ID: (id: string) => `/sub-categories/${id}`,
} as const;