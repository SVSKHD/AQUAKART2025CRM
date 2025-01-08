"use client";

import { ColumnDef } from "@tanstack/react-table";
import { SubCategory } from "@/lib/types/sub-category";
import { DataTableColumnHeader } from "@/components/categories/data-table/data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { formatKeywords } from "@/lib/utils/category";

export const columns: ColumnDef<SubCategory>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const subCategory = row.original;
      return (
        <div className="flex items-center space-x-3">
          <img
            src={subCategory.photos[0]?.secure_url}
            alt={subCategory.title}
            className="h-10 w-10 rounded-lg object-cover"
          />
          <span className="font-medium">{subCategory.title}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Parent Category" />
    ),
    cell: ({ row }) => {
      const category = row.original.category;
      return category ? (
        <Badge variant="outline">{category.title}</Badge>
      ) : (
        <Badge variant="secondary">Uncategorized</Badge>
      );
    },
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => {
      const description = row.getValue("description") as string;
      return (
        <div className="max-w-[300px] truncate" title={description}>
          {description}
        </div>
      );
    },
  },
  {
    accessorKey: "keywords",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Keywords" />
    ),
    cell: ({ row }) => {
      const keywords = row.getValue("keywords") as string;
      return (
        <div className="flex flex-wrap gap-1">
          {formatKeywords(keywords).slice(0, 3).map((keyword, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {keyword}
            </Badge>
          ))}
          {formatKeywords(keywords).length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{formatKeywords(keywords).length - 3} more
            </Badge>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as string;
      return format(new Date(date), "MMM d, yyyy");
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];