"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { TipTapEditor } from "@/components/ui/tiptap-editor";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/lib/types/product";
import { FileUpload } from "@/components/ui/file-upload";
import { ImagePreview } from "@/components/categories/forms/image-preview";
import { categories } from "@/lib/data/categories";
import { Switch } from "@/components/ui/switch";
import { Combobox } from "@/components/ui/combobox";
import { products } from "@/lib/data/products";

// Create product options for the combobox
const productOptions = products.map(product => ({
  value: product.title,
  label: product.title
}));

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.coerce.number().min(0, {
    message: "Price must be a positive number.",
  }),
  stock: z.coerce.number().min(0, {
    message: "Stock must be a positive number.",
  }),
  brand: z.string().min(1, {
    message: "Brand is required.",
  }),
  categoryId: z.string().min(1, "Category is required"),
  keywords: z.string().optional(),
  discountPriceStatus: z.boolean().default(false),
  image: z.any().optional(),
});

interface ProductFormProps {
  defaultValues?: Product;
  isEditing?: boolean;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export function ProductForm({ defaultValues, isEditing, onSubmit }: ProductFormProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
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

  // Handle product selection from combobox
  const handleProductSelect = (value: string) => {
    form.setValue("title", value);
    
    // If the selected product exists, auto-fill other fields
    const selectedProduct = products.find(p => p.title === value);
    if (selectedProduct) {
      form.setValue("description", selectedProduct.description);
      form.setValue("price", selectedProduct.price);
      form.setValue("brand", selectedProduct.brand);
      form.setValue("categoryId", selectedProduct.category);
      form.setValue("keywords", selectedProduct.keywords);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Combobox
                  options={productOptions}
                  value={field.value}
                  onChange={handleProductSelect}
                  placeholder="Select or type product name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <TipTapEditor
                  content={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Rest of the form fields remain the same */}
        {/* ... */}
      </form>
    </Form>
  );
}