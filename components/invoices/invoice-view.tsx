"use client";

import { Invoice } from "@/lib/types/invoice";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, calculateTotalAmount } from "@/lib/utils/table";
import { format } from "date-fns";
import { Separator } from "@/components/ui/separator";

interface InvoiceViewProps {
  invoice: Invoice;
}

export function InvoiceView({ invoice }: InvoiceViewProps) {
  const totalAmount = calculateTotalAmount(invoice.products);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">Invoice Details</h2>
          <p className="text-muted-foreground">
            Date: {format(new Date(invoice?.createdAt), "PPP")}
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
              <p className="font-medium">{invoice.customerDetails.name}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Phone:</span>
              <p className="font-medium">{invoice.customerDetails.phone}</p>
            </div>
            {invoice.customerDetails.email && (
              <div>
                <span className="text-muted-foreground">Email:</span>
                <p className="font-medium">{invoice.customerDetails.email}</p>
              </div>
            )}
            <div>
              <span className="text-muted-foreground">Address:</span>
              <p className="font-medium">{invoice.customerDetails.address}</p>
            </div>
          </div>
        </Card>

        {/* GST Details */}
        {invoice.gst && invoice.gstDetails && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">GST Details</h3>
            <div className="space-y-2">
              <div>
                <span className="text-muted-foreground">Registered Name:</span>
                <p className="font-medium">{invoice.gstDetails.gstName}</p>
              </div>
              <div>
                <span className="text-muted-foreground">GST Number:</span>
                <p className="font-medium">{invoice.gstDetails.gstNo}</p>
              </div>
              {invoice.gstDetails.gstPhone && (
                <div>
                  <span className="text-muted-foreground">Phone:</span>
                  <p className="font-medium">{invoice.gstDetails.gstPhone}</p>
                </div>
              )}
              {invoice.gstDetails.gstEmail && (
                <div>
                  <span className="text-muted-foreground">Email:</span>
                  <p className="font-medium">{invoice.gstDetails.gstEmail}</p>
                </div>
              )}
              {invoice.gstDetails.gstAddress && (
                <div>
                  <span className="text-muted-foreground">Address:</span>
                  <p className="font-medium">{invoice.gstDetails.gstAddress}</p>
                </div>
              )}
            </div>
          </Card>
        )}
      </div>

      {/* Products */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Products</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-12 text-sm font-medium text-muted-foreground">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-right">Quantity</div>
            <div className="col-span-2 text-right">Price</div>
            <div className="col-span-2 text-right">Total</div>
          </div>
          <Separator />
          {invoice.products.map((product, index) => (
            <div key={index} className="grid grid-cols-12 text-sm">
              <div className="col-span-6">
                <p className="font-medium">{product.productName}</p>
                {product.productSerialNo && (
                  <p className="text-muted-foreground text-xs">
                    S/N: {product.productSerialNo}
                  </p>
                )}
              </div>
              <div className="col-span-2 text-right">{product.productQuantity}</div>
              <div className="col-span-2 text-right">
                {formatCurrency(product.productPrice)}
              </div>
              <div className="col-span-2 text-right">
                {formatCurrency(product.productPrice * product.productQuantity)}
              </div>
            </div>
          ))}
          <Separator />
          <div className="grid grid-cols-12 text-sm font-medium">
            <div className="col-span-10 text-right">Total Amount:</div>
            <div className="col-span-2 text-right">{formatCurrency(totalAmount)}</div>
          </div>
        </div>
      </Card>

      {/* Additional Details */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Payment Details */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
          <div className="space-y-2">
            <div>
              <span className="text-muted-foreground">Payment Type:</span>
              <p className="font-medium capitalize">{invoice.paymentType || "Not specified"}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Status:</span>
              <p className="font-medium">{invoice.paidStatus || "Pending"}</p>
            </div>
          </div>
        </Card>

        {/* Transport Details */}
        {(invoice.transport.deliveredBy || invoice.transport.deliveryDate !== "Invalid date") && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Transport Details</h3>
            <div className="space-y-2">
              {invoice.transport.deliveredBy && (
                <div>
                  <span className="text-muted-foreground">Delivered By:</span>
                  <p className="font-medium">{invoice.transport.deliveredBy}</p>
                </div>
              )}
              {invoice.transport.deliveryDate !== "Invalid date" && (
                <div>
                  <span className="text-muted-foreground">Delivery Date:</span>
                  <p className="font-medium">
                    {format(new Date(invoice.transport.deliveryDate), "PPP")}
                  </p>
                </div>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}