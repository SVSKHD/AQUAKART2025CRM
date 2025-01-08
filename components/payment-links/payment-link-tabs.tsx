"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/common/data-table/data-table";
import { columns } from "./data-table/columns";
import { paymentLinks } from "@/lib/data/payment-links";
import { CreatePaymentLink } from "./forms/create-payment-link";

export function PaymentLinkTabs() {
  // Filter payment links by provider
  const razorpayLinks = paymentLinks.filter(link => link.provider === "razorpay");
  const phonepeLinks = paymentLinks.filter(link => link.provider === "phonepe");

  return (
    <Tabs defaultValue="all" className="space-y-4">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="all">All Links</TabsTrigger>
          <TabsTrigger value="razorpay">Razorpay</TabsTrigger>
          <TabsTrigger value="phonepe">PhonePe</TabsTrigger>
        </TabsList>
        <CreatePaymentLink />
      </div>
      <TabsContent value="all">
        <DataTable 
          columns={columns} 
          data={paymentLinks}
          searchColumn="title"
          searchPlaceholder="Search payment links..."
        />
      </TabsContent>
      <TabsContent value="razorpay">
        <DataTable 
          columns={columns} 
          data={razorpayLinks}
          searchColumn="title"
          searchPlaceholder="Search Razorpay links..."
        />
      </TabsContent>
      <TabsContent value="phonepe">
        <DataTable 
          columns={columns} 
          data={phonepeLinks}
          searchColumn="title"
          searchPlaceholder="Search PhonePe links..."
        />
      </TabsContent>
    </Tabs>
  );
}