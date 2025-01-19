"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductForm } from "./product-form";
import { useToast } from "@/components/ui/use-toast";

export function CreateProduct() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (values: any) => {
    try {
      // Here you would typically make an API call to create the product
      console.log("Creating product:", values);
      toast({
        title: "Product created",
        description: "The product has been created successfully.",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create product. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Product</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Product</DialogTitle>
          <DialogDescription>
            Add a new product to your catalog.
          </DialogDescription>
        </DialogHeader>
        <ProductForm onSubmit={handleSubmit} isEditing={false} />
      </DialogContent>
    </Dialog>
  );
}