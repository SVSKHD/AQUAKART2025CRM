"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Product } from "@/lib/types/product";
import { productFormSchema } from "./schema";
import { BasicDetails } from "./sections/basic-details";
import { PricingDetails } from "./sections/pricing-details";
import { CategoryDetails } from "./sections/category-details";
import { ImageUpload } from "./sections/image-upload";

interface ProductFormProps {
  defaultValues?: Product;
  isEditing?: boolean;
  onSubmit: (values: any) => void;
}

export function ProductForm({ defaultValues, isEditing, onSubmit }: ProductFormProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const form = useForm({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      title: defaultValues?.title || "",
      description: defaultValues?.description || "",
      price: defaultValues?.price || 0,
      stock: defaultValues?.stock || 0,
      brand: defaultValues?.brand || "",
      categoryId: defaultValues?.category || "",
      keywords: defaultValues?.keywords || "",
      discountPriceStatus: defaultValues?.discountPriceStatus || false,
    },
  });

  const handleImageChange = (file: File | null) => {
    setSelectedImage(file);
    form.setValue("image", file);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <BasicDetails form={form} />
        <PricingDetails form={form} />
        <CategoryDetails form={form} />
        <ImageUpload 
          form={form}
          selectedImage={selectedImage}
          onImageChange={handleImageChange}
          defaultImage={defaultValues?.photos[0]?.secure_url}
        />
        
        <div className="flex justify-end">
          <Button type="submit">
            {isEditing ? "Update Product" : "Create Product"}
          </Button>
        </div>
      </form>
    </Form>
  );
}