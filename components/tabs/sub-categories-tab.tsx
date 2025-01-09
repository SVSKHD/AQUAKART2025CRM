"use client";

import { columns } from "@/components/sub-categories/data-table/columns";
import { DataTable } from "@/components/categories/data-table/data-table";
import { useState, useEffect } from "react";
import { SubCategoryService } from "@/lib/services/subcategory.service";

export function SubCategoriesTab() {
  const [subCategories, setSubCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await SubCategoryService.getAllSubCategories();
        setSubCategories(response.data);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchSubCategories(); // Call the function correctly
  }, []); // Empty dependency array to run only once

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Sub-Categories</h2>
      </div>
      <DataTable
        columns={columns}
        data={subCategories}
        searchColumn="title"
        searchPlaceholder="Search sub-categories..."
      />
    </div>
  );
}