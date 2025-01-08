"use client";

import { Card } from "@/components/ui/card";
import { products } from "@/lib/data/products";
import { Package, AlertTriangle, CheckCircle2 } from "lucide-react";

export function StockCards() {
  const totalProducts = products.length;
  const lowStock = products.filter(p => p.stock < 5).length;
  const inStock = products.filter(p => p.stock > 0).length;

  return (
    <div className="grid gap-4 md:grid-cols-3 mb-6">
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <Package className="h-8 w-8 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Total Products</p>
            <h3 className="text-2xl font-bold">{totalProducts}</h3>
          </div>
        </div>
      </Card>
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <AlertTriangle className="h-8 w-8 text-destructive" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
            <h3 className="text-2xl font-bold">{lowStock}</h3>
          </div>
        </div>
      </Card>
      <Card className="p-6">
        <div className="flex items-center space-x-4">
          <CheckCircle2 className="h-8 w-8 text-green-500" />
          <div>
            <p className="text-sm font-medium text-muted-foreground">In Stock</p>
            <h3 className="text-2xl font-bold">{inStock}</h3>
          </div>
        </div>
      </Card>
    </div>
  );
}