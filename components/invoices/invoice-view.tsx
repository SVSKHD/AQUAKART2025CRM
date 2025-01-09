"use client";

import { Invoice } from "@/lib/types/invoice";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils/table";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";
import AquaLists from "../reusables/lists";
import { FaWhatsapp, FaDownload, FaShareAlt, FaEllipsisV } from "react-icons/fa";
import { useState } from "react";



interface InvoiceViewProps {
  invoice?: Invoice;
}

export function InvoiceView({ invoice }: InvoiceViewProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  if (!invoice) {
    return (
      <div className="p-6 text-center text-red-500">
        <p>Error: Invoice data is missing or unavailable.</p>
      </div>
    );
  }

  const totalAmount = invoice?.products?.reduce((a, b) => a + b.productPrice, 0);

  const gstValueGenerate = (price: number) => {
    let basePrice = Math.floor(price * 0.8474594);
    let gst = Math.floor(basePrice * 0.18);
    return gst;
  };

  const BasePrice = (price: number) => {
    let basePrice = Math.floor(price * 0.8474594);
    return basePrice;
  };

  let termsAndConditions = [
    {
      title: "Transport",
      description: "TRANSPORT / LIFTING CHARGES WILL BE BORNE BY THE CUSTOMER.",
    },
    {
      title: "Plumber",
      description:
        "PLUMBER SHOULD BE PROVIDED AT THE TIME OF PLUMBING (OR) OUR PLUMBING CONTRACTORS WILL ATTRACT PLUMBING CHARGES.",
    },
    {
      title: "Plumbing Material",
      description:
        "PLUMBING MATERIALS / ELECTRICAL CONNECTION BY CUSTOMER. IF THE PRESSURE BOOSTER PUMP PLUMBING IS REQUIRED, IT WILL ATTRACT EXTRA CHARGES.",
    },
    {
      title: "Sales Return",
      description: "IF THE UNIT IS UNBOXED, THE MACHINE WILL NOT BE TAKEN BACK.",
    },
    {
      title: "Delivery & Installation Policy",
      description: "DELIVERY / INSTALLATION COMPLETED WITHIN 7 WORKING DAYS.",
    },
    { title: "Advance Policy", description: "100% ADVANCE ALONG WITH PO." },
    {
      title: "Work Monitoring",
      description:
        "PLUMBING WORK VERIFICATION, PROGRAMMING, TRAINING, AND WARRANTY UPLOAD WILL BE DONE BY OUR SERVICE ENGINEERS.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Title and GST Header */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold text-blue-900">Aquakart</h1>
        <Badge className="fs-6 bg-blue-500">GST: 36AJOPH6387A1Z2</Badge>
      </div>

      {/* Invoice Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">Invoice Details</h2>
          <p className="text-muted-foreground">
            {invoice.createdAt ? format(new Date(invoice.createdAt), "PPP") : "Date unavailable"}
          </p>
        </div>
        <Badge variant={invoice.paidStatus === "Paid" ? "success" : "destructive"}>
          {invoice.paidStatus || "Pending"}
        </Badge>
      </div>
     

      <div className="grid gap-6 md:grid-cols-2">
        {/* Customer Details */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Customer Details</h3>
          <div className="space-y-2">
            <div>
              <span className="text-muted-foreground">Name:</span>
              <p className="font-medium">{invoice.customerDetails?.name || "N/A"}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Phone:</span>
              <p className="font-medium">{invoice.customerDetails?.phone || "N/A"}</p>
            </div>
            {invoice.customerDetails?.email && (
              <div>
                <span className="text-muted-foreground">Email:</span>
                <p className="font-medium">{invoice.customerDetails.email}</p>
              </div>
            )}
            <div>
              <span className="text-muted-foreground">Address:</span>
              <p className="font-medium">{invoice.customerDetails?.address || "N/A"}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Products */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Products</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-12 text-sm font-medium text-muted-foreground">
            <div className="col-span-4">Product</div>
            <div className="col-span-2 text-right">Quantity</div>
            <div className="col-span-2 text-right">Price</div>
            <div className="col-span-2 text-right">GST(18%)</div>
            <div className="col-span-2 text-right">Total</div>
          </div>
          <Separator />
          {invoice.products && Array.isArray(invoice.products) ? (
            invoice.products.map((product, index) => (
              <div key={index} className="grid grid-cols-12 text-sm">
                <div className="col-span-4">
                  <p className="font-medium">{product.productName || "Unknown Product"}</p>
                </div>
                <div className="col-span-2 text-right">{product.productQuantity || "N/A"}</div>
                <div className="col-span-2 text-right">
                  {formatCurrency(BasePrice(product.productPrice || 0))}/-
                </div>
                <div className="col-span-2 text-right">
                  {formatCurrency(gstValueGenerate(product.productPrice || 0))}/-
                </div>
                <div className="col-span-2 text-right">
                  {formatCurrency(product?.productPrice)}/-
                </div>
              </div>
            ))
          ) : (
            <p className="text-red-500 text-sm">No products available.</p>
          )}
          <Separator />
          <div className="grid grid-cols-12 text-sm font-medium">
            <div className="col-span-10 text-right">Total Amount:</div>
            <div className="col-span-2 text-right">{formatCurrency(totalAmount)}/-</div>
          </div>
        </div>
      </Card>

          {/* Terms & Conditions Section */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Terms & Conditions</h3>
        <ul className="space-y-4">
          {termsAndConditions.map((term, index) => (
            <AquaLists key={index} number={index + 1} title={term.title} description={term.description} />
          ))}
        </ul>
      </div>
    </div>
  );
}