"use client";

import { columns } from "@/components/invoices/data-table/columns";
import { DataTable } from "@/components/invoices/data-table/data-table";
import { mockInvoices } from "@/lib/data/mock-invoices";

export function GSTInvoicesTab() {
  // Filter GST invoices
  const gstInvoices = mockInvoices.filter(invoice => invoice.gst);
  
  return <DataTable columns={columns} data={gstInvoices} />;
}