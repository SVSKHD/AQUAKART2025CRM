"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { Mail, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const { toast } = useToast();
  const isFiltered = table.getState().columnFilters.length > 0;

  const handleBulkEmail = () => {
    const selectedRows = table.getFilteredRowModel().rows;
    const emails = selectedRows.map(row => row.getValue("email")).join(",");
    window.open(`mailto:${emails}`);
  };

  const handleBulkWhatsApp = () => {
    toast({
      title: "WhatsApp Broadcast",
      description: "Opening WhatsApp broadcast list...",
    });
  };

  const handleBulkMessage = () => {
    toast({
      title: "SMS Broadcast",
      description: "Opening SMS broadcast...",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-1 items-center space-x-2">
          <Input
            placeholder="Filter users..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
          {isFiltered && (
            <Button
              variant="ghost"
              onClick={() => table.resetColumnFilters()}
              className="h-8 px-2 lg:px-3"
            >
              Reset
              <Cross2Icon className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
        <DataTableViewOptions table={table} />
      </div>
      
      <div className="flex space-x-2">
        <Button variant="outline" size="sm" onClick={handleBulkEmail}>
          <Mail className="mr-2 h-4 w-4" />
          Send Email to All
        </Button>
        <Button variant="outline" size="sm" onClick={handleBulkWhatsApp}>
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp Broadcast
        </Button>
        <Button variant="outline" size="sm" onClick={handleBulkMessage}>
          <Send className="mr-2 h-4 w-4" />
          SMS Broadcast
        </Button>
      </div>
    </div>
  );
}