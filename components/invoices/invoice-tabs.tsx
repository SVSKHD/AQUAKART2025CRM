"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GSTInvoicesTab } from "./tabs/gst-invoices-tab";
import { NormalInvoicesTab } from "./tabs/normal-invoices-tab";
import { OnlineInvoicesTab } from "./tabs/online-invoices-tab";
import { AllInvoicesTab } from "./tabs/all-invoices";

export function InvoiceTabs() {
  return (
    <Tabs defaultValue="normal" className="space-y-4">
      <TabsList>
        <TabsTrigger value="normal">Normal Invoices</TabsTrigger>
        <TabsTrigger value="gst">GST Invoices</TabsTrigger>
        <TabsTrigger value="online">Online Orders</TabsTrigger>
        <TabsTrigger value="All">All Invoices</TabsTrigger>
      </TabsList>
      <TabsContent value="normal">
        <NormalInvoicesTab />
      </TabsContent>
      <TabsContent value="gst">
        <GSTInvoicesTab />
      </TabsContent>
      <TabsContent value="online">
        <OnlineInvoicesTab />
      </TabsContent>
      <TabsContent value="All">
        <AllInvoicesTab />
      </TabsContent>
    </Tabs>
  );
}