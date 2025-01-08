"use client";

import { useState } from "react";
import { Product } from "@/lib/types/product";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProductDialog } from "./product-dialog";
import { DataTable } from "../common/data-table/data-table";
import { columns } from "./columns";
import { useToast } from "@/components/ui/use-toast";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [mode, setMode] = useState<"create" | "edit">("create");
  const { toast } = useToast();

  const handleCreate = () => {
    setSelectedProduct(undefined);
    setMode("create");
    setDialogOpen(true);
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setMode("edit");
    setDialogOpen(true);
  };

  const handleDelete = (product: Product) => {
    toast({
      title: "Product deleted",
      description: `${product.title} has been deleted.`,
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button onClick={handleCreate}>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <DataTable
        columns={columns}
        data={products}
        searchColumn="title"
        searchPlaceholder="Search products..."
        meta={{
          onEdit: handleEdit,
          onDelete: handleDelete,
        }}
      />

      <ProductDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        product={selectedProduct}
        mode={mode}
      />
    </div>
  );
}