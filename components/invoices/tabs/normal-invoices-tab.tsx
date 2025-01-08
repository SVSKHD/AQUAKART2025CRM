"use client";

import { columns } from "@/components/invoices/data-table/columns";
import { DataTable } from "@/components/invoices/data-table/data-table";
import { invoiceService } from "@/lib/services";
import { useEffect, useState } from "react";

export function NormalInvoicesTab() {
  // State to store invoices
  const [invoices, setInvoices] = useState<any[]>([]);

  useEffect(() => {
    // Fetch invoices only once when the component mounts
    const fetchInvoices = async () => {
      try {
        const res = await invoiceService.getAll();
        setInvoices(res.data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, []); // ✅ Empty dependency array ensures only one API call

  return <DataTable columns={columns} data={invoices} />;
}
