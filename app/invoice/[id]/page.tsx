"use client";

import { useParams } from "next/navigation";
import { InvoiceView } from "@/components/invoices/invoice-view";
import { mockInvoices } from "@/lib/data/mock-invoices";
import { NotFound } from "@/components/shared/not-found";

export default function InvoicePage() {
  const { id } = useParams();
  const invoice = mockInvoices.find((inv) => inv._id === id);

  if (!invoice) {
    return <NotFound message="Invoice not found" />;
  }

  return (
    <div className="container mx-auto py-8">
      <InvoiceView invoice={invoice} />
    </div>
  );
}