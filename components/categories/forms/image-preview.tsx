"use client";

import { Category } from "@/lib/types/category";
import { getCategoryImage } from "@/lib/utils/category";

interface ImagePreviewProps {
  category?: Category;
  newImage?: File;
}

export function ImagePreview({ category, newImage }: ImagePreviewProps) {
  if (!category?.photos?.length && !newImage) return null;

  const imageUrl = newImage 
    ? URL.createObjectURL(newImage)
    : category ? getCategoryImage(category) 
    : null;

  if (!imageUrl) return null;

  return (
    <div className="mt-2">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border">
        <img
          src={imageUrl}
          alt="Preview"
          className="h-full w-full object-cover"
          onLoad={() => {
            if (newImage) {
              URL.revokeObjectURL(imageUrl);
            }
          }}
        />
      </div>
    </div>
  );
}