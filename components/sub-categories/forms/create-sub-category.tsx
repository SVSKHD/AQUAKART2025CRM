"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubCategoryForm } from "./sub-category-form";
import { useToast } from "@/components/ui/use-toast";

export function CreateSubCategory() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (values: any) => {
    try {
      // Here you would typically make an API call to create the sub-category
      console.log("Creating sub-category:", values);
      toast({
        title: "Sub-category created",
        description: "The sub-category has been created successfully.",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create sub-category. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Sub-Category</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Sub-Category</DialogTitle>
          <DialogDescription>
            Add a new sub-category to organize products and services.
          </DialogDescription>
        </DialogHeader>
        <SubCategoryForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}