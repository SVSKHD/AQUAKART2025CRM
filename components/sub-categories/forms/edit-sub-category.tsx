"use client";

import { SubCategory } from "@/lib/types/sub-category";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SubCategoryForm } from "./sub-category-form";
import { useToast } from "@/components/ui/use-toast";

interface EditSubCategoryProps {
  subCategory: SubCategory;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditSubCategory({
  subCategory,
  open,
  onOpenChange,
}: EditSubCategoryProps) {
  const { toast } = useToast();

  const handleSubmit = async (values: any) => {
    try {
      // Here you would typically make an API call to update the sub-category
      console.log("Updating sub-category:", values);
      toast({
        title: "Sub-category updated",
        description: "The sub-category has been updated successfully.",
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update sub-category. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Sub-Category</DialogTitle>
          <DialogDescription>
            Update the sub-category information and settings.
          </DialogDescription>
        </DialogHeader>
        <SubCategoryForm 
          defaultValues={subCategory} 
          isEditing 
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}