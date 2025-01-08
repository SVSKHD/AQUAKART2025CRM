"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Category } from "@/lib/types/category";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { getCategoryImage, formatKeywords } from "@/lib/utils/category";

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const category = row.original;
      return (
        <div className="flex items-center space-x-3">
          <img
            src={getCategoryImage(category)}
            alt={category.title}
            className="h-10 w-10 rounded-lg object-cover"
          />
          <span className="font-medium">{category.title}</span>
        </div>
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