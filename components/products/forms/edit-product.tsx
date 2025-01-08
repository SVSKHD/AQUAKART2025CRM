"use client";

import { Product } from "@/lib/types/product";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProductForm } from "./product-form";
import { useToast } from "@/components/ui/use-toast";

interface EditProductProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditProduct({
  product,
  open,
  onOpenChange,
}: EditProductProps) {
  const { toast } = useToast();

  const handleSubmit = async (values: any) => {
    try {
      // Here you would typically make an API call to update the product
      console.log("Updating product:", values);
      toast({
        title: "Product updated",
        description: "The product has been updated successfully.",
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update product. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Update the product information and settings.
          </DialogDescription>
        </DialogHeader>
        <ProductForm 
          defaultValues={product} 
          isEditing 
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}