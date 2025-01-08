"use client";

import { columns } from "@/components/sub-categories/data-table/columns";
import { DataTable } from "@/components/categories/data-table/data-table";
import { subCategories } from "@/lib/data/sub-categories";

export function SubCategoriesTab() {
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