"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@/lib/types/product";
import { DataTableColumnHeader } from "@/components/categories/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { formatCurrency } from "@/lib/utils/format";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";

interface DataTableMeta {
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export const columns: ColumnDef<Product, unknown>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
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
          <span className="font-medium">{product.title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price" />
    ),
    cell: ({ row }) => formatCurrency(row.getValue("price")),
  },
  {
    accessorKey: "stock",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stock" />
    ),
    cell: ({ row }) => {
      const stock = row.getValue("stock") as number;
      return (
        <Badge variant={stock > 0 ? "success" : "destructive"}>
          {stock} in stock
        </Badge>
      );
    },
  },
  {
    accessorKey: "brand",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Brand" />
    ),
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => format(new Date(row.getValue("createdAt")), "PPP"),
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      const meta = table.options.meta as DataTableMeta;
      if (!meta?.onEdit || !meta?.onDelete) return null;
      
      return (
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => meta.onEdit(row.original)}
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => meta.onDelete(row.original)}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      );
    },
  },
];