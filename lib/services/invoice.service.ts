import { api } from './api';
import { API_ENDPOINTS } from '../config/api';
import { Invoice } from '@/lib/types/invoice';

export const invoiceService = {
  async getAll() {
    const response = await api.get(API_ENDPOINTS.INVOICES);
    return response.data;
  },

  async getById(id: any) {
    const response = await api.get(API_ENDPOINTS.INVOICE_BY_ID(id));
    return response.data;
  },

  async create(data: Partial<Invoice>) {
    const response = await api.post(API_ENDPOINTS.INVOICES, data);
    return response.data;
  },

  async update(id: string, data: Partial<Invoice>) {
    const response = await api.put(API_ENDPOINTS.INVOICE_BY_ID(id), data);
    return response.data;
  },

  async delete(id: string) {
    const response = await api.delete(API_ENDPOINTS.INVOICE_BY_ID(id));
    return response.data;
  },
};