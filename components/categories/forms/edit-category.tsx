"use client";

import { Category } from "@/lib/types/category";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CategoryForm } from "./category-form";
import { useToast } from "@/components/ui/use-toast";

interface EditCategoryProps {
  category: Category;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditCategory({ category, open, onOpenChange }: EditCategoryProps) {
  const { toast } = useToast();

  const handleSubmit = async (values: any) => {
    try {
      // Here you would typically make an API call to update the category
      console.log("Updating category:", values);
      toast({
        title: "Category updated",
        description: "The category has been updated successfully.",
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update category. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogDescription>
            Update the category information and settings.
          </DialogDescription>
        </DialogHeader>
        <CategoryForm 
          defaultValues={category} 
          isEditing 
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}