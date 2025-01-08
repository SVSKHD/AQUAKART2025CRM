"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FileUpload } from "@/components/ui/file-upload";
import { UseFormReturn } from "react-hook-form";
import { ProductFormValues } from "../schema";

interface ImageUploadProps {
  form: UseFormReturn<ProductFormValues>;
  selectedImage: File | null;
  onImageChange: (file: File | null) => void;
  defaultImage?: string;
}

export function ImageUpload({ 
  form, 
  selectedImage, 
  onImageChange,
  defaultImage 
}: ImageUploadProps) {
  const imageUrl = selectedImage 
    ? URL.createObjectURL(selectedImage)
    : defaultImage;

  return (
    <FormField
      control={form.control}
      name="image"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Product Image</FormLabel>
          <FormControl>
            <FileUpload
              value={field.value}
              onChange={onImageChange}
              accept="image/*"
              maxSize={5 * 1024 * 1024} // 5MB
            />
          </FormControl>
          {imageUrl && (
            <div className="mt-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
                <img
                  src={imageUrl}
                  alt="Preview"
                  className="h-full w-full object-cover"
                  onLoad={() => {
                    if (selectedImage) {
                      URL.revokeObjectURL(imageUrl);
                    }
                  }}
                />
              </div>
            </div>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}