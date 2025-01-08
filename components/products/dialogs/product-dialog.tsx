"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProductForm } from "../forms/product-form";
import { Product } from "@/lib/types/product";
import { useToast } from "@/components/ui/use-toast";

interface ProductDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product?: Product;
  mode: "create" | "edit";
}

export function ProductDialog({ 
  open, 
  onOpenChange, 
  product, 
  mode 
}: ProductDialogProps) {
  const { toast } = useToast();
  const isEditing = mode === "edit";

  const handleSubmit = async (values: any) => {
    try {
      // Here you would typically make an API call to create/update the product
      console.log(`${isEditing ? "Updating" : "Creating"} product:`, values);
      toast({
        title: `Product ${isEditing ? "updated" : "created"}`,
        description: `The product has been ${isEditing ? "updated" : "created"} successfully.`,
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to ${isEditing ? "update" : "create"} product. Please try again.`,
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit Product" : "Create New Product"}
          </DialogTitle>
          <DialogDescription>
            {isEditing 
              ? "Update the product information and settings." 
              : "Add a new product to your catalog."}
          </DialogDescription>
        </DialogHeader>
        <ProductForm 
          defaultValues={product} 
          isEditing={isEditing} 
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}