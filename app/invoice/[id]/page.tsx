'use client'

import { InvoiceView } from "@/components/invoices/invoice-view";
// import { mockInvoices } from "@/lib/data/mock-invoices";
import { NotFound } from "@/components/shared/not-found";
import { invoiceService } from "@/lib/services";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function InvoicePage() {
  const {id} = useParams()
  const [invoice, setInvoice] = useState<any>({})
  useEffect(()=>{
    const fetchInvoice = async()=>{
      try {
        const res = await invoiceService.getById(id)
        setInvoice(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchInvoice()
  },[id])
  return (
    <div className="container mx-auto py-8">
      {invoice?<InvoiceView invoice={invoice} />:"No Invoice with this id"}
      {/*  */}
    </div>
  );
}

