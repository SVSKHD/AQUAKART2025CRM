"use client";

import { ProductList } from "@/components/products/product-list";
// import { products } from "@/lib/data/products";
import { ProductService } from "@/lib/services/products.service";
import { useEffect, useState } from "react";

export function ProductsTab() { 
  const [products, setProducts] = useState<any[]>([])
  useEffect(()=>{
    const fetchProducts = async()=>{
      try {
        const response = await ProductService.getAllProducts()
        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProducts()
  },[])  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Products</h2>
      </div>
      <ProductList products={products} />
    </div>
  );
}