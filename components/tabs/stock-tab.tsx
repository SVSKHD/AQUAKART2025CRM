"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data/products";
import { DataTable } from "@/components/common/data-table/data-table";
import { columns } from "@/components/stock/data-table/columns";
import { AlertTriangle, CheckCircle2, Package } from "lucide-react";

export function StockTab() {
  const totalProducts = products.length;
  const lowStock = products.filter(p => p.stock < 5).length;
  const inStock = products.filter(p => p.stock > 0).length;
  const outOfStock = products.filter(p => p.stock === 0).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Stock Management</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
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
            <CheckCircle2 className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">In Stock</p>
              <h3 className="text-2xl font-bold">{inStock}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <AlertTriangle className="h-8 w-8 text-amber-500" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
              <h3 className="text-2xl font-bold">{lowStock}</h3>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Out of Stock</p>
              <h3 className="text-2xl font-bold">{outOfStock}</h3>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Stock Overview</h3>
        <DataTable 
          columns={columns} 
          data={products}
          searchColumn="title"
          searchPlaceholder="Search products..."
        />
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Low Stock Items</h3>
        <div className="space-y-4">
          {products.filter(p => p.stock < 5).map((product) => (
            <div key={product._id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={product.photos[0]?.secure_url}
                  alt={product.title}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div>
                  <p className="font-medium">{product.title}</p>
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                </div>
              </div>
              <Badge variant={product.stock === 0 ? "destructive" : "secondary"}>
                {product.stock} in stock
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}