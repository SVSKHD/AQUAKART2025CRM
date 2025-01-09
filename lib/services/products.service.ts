import { api } from "./api";
import { API_ENDPOINTS } from "../config/api";
import {Product} from "@/lib/types/product"


export const ProductService = {
    async getAllProducts(){
        const response = await api.get(API_ENDPOINTS.PRODUCTS) 
        return response.data
    }
}