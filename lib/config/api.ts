// API configuration
export const API_BASE_URL = "https://api.aquakart.co.in/v1";

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/crm/user/login',
  
  // Invoices
  INVOICES: '/crm/admin/all-invoices?user=true',
  GSTINVOICES: '/crm/admin/all-invoices?gst=true',
  ALLINVOICES: '/crm/admin/all-invoices',
  INVOICE_BY_ID: (id: string) => `crm/invoice/${id}`,
  
  // Categories
  CATEGORIES: '/allcategories',
  CATEGORY_BY_ID: (id: string) => `/categories/${id}`,
  SUB_CATEGORIES: '/all-subcategories',
  SUB_CATEGORY_BY_ID: (id: string) => `/sub-categories/${id}`,
  // Products
  PRODUCTS:"/all-products",
  CREATE_PRODUCT: '/product-add',
  UPDATE_PRODUCT: (id: string) => `/product-update/${id}`,
} as const;