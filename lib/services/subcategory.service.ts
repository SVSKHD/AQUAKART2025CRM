import { api } from "./api";
import { API_ENDPOINTS } from "../config/api";
import { SubCategory } from '@/lib/types/category';

export const SubCategoryService={
    async getAllSubCategories(){
        const response = await api.get(API_ENDPOINTS.SUB_CATEGORIES)
        return response.data
    }
}