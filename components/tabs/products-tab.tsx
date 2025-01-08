"use client";

import { ProductList } from "@/components/products/product-list";
import { products } from "@/lib/data/products";

export function ProductsTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Products</h2>
      </div>
      <ProductList products={products} />
    </div>
  );
}