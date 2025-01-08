"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/lib/types/product";
import { DataTableColumnHeader } from "@/components/categories/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils/format";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Product" />
    ),
    cell: ({ row }) => {
      const product = row.original;
      return (
        <div className="flex items-center space-x-3">
          <img
            src={product.photos[0]?.secure_url}
            alt={product.title}
            className="h-10 w-10 rounded-lg object-cover"
          />
          <div>
            <div className="font-medium">{product.title}</div>
            <div className="text-sm text-muted-foreground">{product.brand}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stock" />
    ),
    cell: ({ row }) => {
      const stock = row.getValue("stock") as number;
      return (
        <Badge variant={
          stock === 0 ? "destructive" : 
          stock < 5 ? "warning" : 
          "success"
        }>
          {stock} in stock
        </Badge>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => formatCurrency(row.getValue("price") as number),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  }
];