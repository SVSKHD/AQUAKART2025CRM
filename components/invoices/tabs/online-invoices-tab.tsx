"use client";

import { columns } from "@/components/invoices/data-table/columns";
import { DataTable } from "@/components/invoices/data-table/data-table";
import { mockInvoices } from "@/lib/data/mock-invoices";

export function OnlineInvoicesTab() {
  // Filter online ordered invoices
  const onlineInvoices = mockInvoices.filter(invoice => invoice.aquakartOnlineUser);
  
  return <DataTable columns={columns} data={onlineInvoices} />;
}