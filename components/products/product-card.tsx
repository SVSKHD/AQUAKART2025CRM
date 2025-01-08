"use client";

import { Product } from "@/lib/types/product";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { formatCurrency } from "@/lib/utils/format";
import { categories } from "@/lib/data/categories";

interface ProductCardProps {
  product: Product;
  onEdit: () => void;
}

export function ProductCard({ product, onEdit }: ProductCardProps) {
  const category = categories.find(c => c._id === product.category);

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={product.photos[0]?.secure_url}
          alt={product.title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="space-y-2">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-semibold leading-none">{product.title}</h3>
            <p className="text-sm text-muted-foreground">{product.brand}</p>
          </div>
          <Badge variant={product.stock > 0 ? "default" : "destructive"}>
            {product.stock} in stock
          </Badge>
        </div>
        {category && (
          <Badge variant="outline">{category.title}</Badge>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">
          {formatCurrency(product.price)}
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="outline" className="w-full" onClick={onEdit}>
          <Edit className="h-4 w-4 mr-2" />
          Edit
        </Button>
        <Button variant="destructive" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}