"use client";

import { Product } from "@/lib/types/product";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils/format";
import { format } from "date-fns";
import { categories } from "@/lib/data/categories";

interface ViewProductProps {
  product: Product;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ViewProduct({ product, open, onOpenChange }: ViewProductProps) {
  const category = categories.find(c => c._id === product.category);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Product Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <img
              src={product.photos[0]?.secure_url}
              alt={product.title}
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-sm text-muted-foreground">
                Added on {format(new Date(product.createdAt), "PPP")}
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Price:</span>
                <span className="font-semibold">{formatCurrency(product.price)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Stock:</span>
                <Badge variant={product.stock > 0 ? "success" : "destructive"}>
                  {product.stock} in stock
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Category:</span>
                <Badge variant="outline">{category?.title || "Uncategorized"}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Brand:</span>
                <span>{product.brand}</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <div className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
            {product.keywords && (
              <div>
                <h4 className="font-semibold mb-2">Keywords</h4>
                <div className="flex flex-wrap gap-1">
                  {product.keywords.split("\n").map((keyword, index) => (
                    <Badge key={index} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}