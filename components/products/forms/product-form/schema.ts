import * as z from "zod";

export const productFormSchema = z.object({
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

export type ProductFormValues = z.infer<typeof productFormSchema>;