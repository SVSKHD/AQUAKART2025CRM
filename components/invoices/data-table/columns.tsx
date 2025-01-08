"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Invoice } from "@/lib/types/invoice";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { calculateTotalAmount, formatCurrency } from "@/lib/utils/table";
import { ContactButtons } from "./contact-buttons";

export const columns: ColumnDef<Invoice>[] = [
  {
    id: "customerName",
    accessorFn: (row) => row.customerDetails.name,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer Name" />
    ),
  },
  {
    id: "customerPhone",
    accessorFn: (row) => row.customerDetails.phone,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone" />
    ),
    cell: ({ row }) => {
      const phone = row.original.customerDetails.phone;
      const email = row.original.customerDetails.email;
      return (
        <div className="flex items-center justify-between">
          <span>{phone}</span>
          <ContactButtons phone={phone} email={email} />
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt", // Use createdAt directly
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      const createdAt = row.original.createdAt;
      return createdAt ? format(new Date(createdAt), "dd/MM/yyyy") : "N/A";
    },
  },
  {
    accessorKey: "paidStatus",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("paidStatus") as string;
      return (
        <Badge variant={status === "Paid" ? "success" : "destructive"}>
          {status || "Pending"}
        </Badge>
      );
    },
  },
  {
    id: "totalAmount",
    accessorFn: (row) => calculateTotalAmount(row.products),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Amount" />
    ),
    cell: ({ row }) => {
      const amount = row.getValue("totalAmount") as number;
      return formatCurrency(amount);
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];