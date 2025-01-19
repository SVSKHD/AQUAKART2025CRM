import { api } from "./api";
import { API_ENDPOINTS } from "../config/api";
import {Product} from "@/lib/types/product"


export const ProductService = {
    async getAllProducts(){
        const response = await api.get(API_ENDPOINTS.PRODUCTS) 
        return response.data
    },
    async createProduct(product: Product){
        const response = await api.post(API_ENDPOINTS.PRODUCTS, product)
        return response.data
    },
    async updateProduct(product: Product, values: any){
        const response = await api.put(`${API_ENDPOINTS.UPDATE_PRODUCT(product)}`,values)
        return response.data
    },
}