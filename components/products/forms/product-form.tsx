import React, { useState, useEffect } from "react";
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
import { Switch } from "@/components/ui/switch";
import { Combobox } from "@/components/ui/combobox";
import { products } from "@/lib/data/products";
import { SlowBuffer } from "buffer";

const productOptions = products.map((product) => ({
  value: product.title,
  label: product.title,
}));

const formSchema = z.object({
  title: z.string().min(2, { message: "Title must be at least 2 characters." }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.coerce
    .number()
    .min(0, { message: "Price must be a positive number." }),
  stock: z.coerce
    .number()
    .min(0, { message: "Stock must be a positive number." }),
  brand: z.string().min(1, { message: "Brand is required." }),
  categoryId: z.string().min(1, "Category is required"),
  keywords: z.string().optional(),
  discountPriceStatus: z.boolean().default(false),
  discountPercentage: z.coerce
    .number()
    .min(0, { message: "Discount must be a positive number." })
    .max(100, { message: "Discount cannot exceed 100%." })
    .optional(),
  slug: z.string().optional(),
});

interface ProductFormProps {
  defaultValues?: any;
  isEditing?: boolean;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export function ProductForm({
  defaultValues,
  isEditing,
  onSubmit,
}: ProductFormProps) {
  console.log("defaultValues", defaultValues);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: defaultValues?.title || "",
      description: defaultValues?.description || "",
      price: defaultValues?.price || 0,
      stock: defaultValues?.stock || 0,
      brand: defaultValues?.brand || "",
      slug: defaultValues?.slug || "",
      categoryId: defaultValues?.category || "",
      keywords: defaultValues?.keywords || "",
      discountPriceStatus: defaultValues?.discountPriceStatus || false,
      discountPercentage: defaultValues?.discountPercentage || 0,
    },
  });

  const [discountEnabled, setDiscountEnabled] = useState(defaultValues?.discountPriceStatus || false);

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "discountPriceStatus") {
        console.log("Discount Price Status changed:", value.discountPriceStatus);
        setDiscountEnabled(value.discountPriceStatus);
      }
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const handleProductSelect = (value: string) => {
    form.setValue("title", value);
    const selectedProduct = products.find((p) => p.title === value);
    if (selectedProduct) {
      form.setValue("description", selectedProduct.description);
      form.setValue("price", selectedProduct.price);
      form.setValue("brand", selectedProduct.brand);
      form.setValue("categoryId", selectedProduct.category);
      form.setValue("keywords", selectedProduct.keywords);
      form.setValue("slug", selectedProduct.slug);
      form.setValue("discountPriceStatus", selectedProduct.discountPriceStatus);
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
                <TipTapEditor content={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="discountPriceStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enable Discount</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={(value) => {
                    console.log("Switch checked:", value);
                    field.onChange(value);
                    setDiscountEnabled(value);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {discountEnabled && (
          <FormField
            control={form.control}
            name="discountPercentage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discount Percentage</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Enter discount percentage"
                    {...field}
                    onChange={(e) => {
                      console.log("Discount Percentage changed:", e.target.value);
                      field.onChange(e);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit">
          {isEditing ? "Update Product" : "Add Product"}
        </Button>
      </form>
    </Form>
  );
}
