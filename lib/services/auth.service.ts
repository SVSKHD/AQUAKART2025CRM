import { api } from './api';
import { API_ENDPOINTS } from '../config/api';
import { LoginCredentials, LoginResponse } from '@/lib/types/auth';

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    const response = await api.post(API_ENDPOINTS.LOGIN, credentials);
    return response.data;
  },
  
  logout() {
    localStorage.removeItem('token');
  }
};