"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataTable } from "@/components/common/data-table/data-table";
import { columns } from "./data-table/columns";
import { mockOrders } from "@/lib/data/mock-orders";

export function OrderTabs() {
  // Filter orders by status
  const pendingOrders = mockOrders.filter(order => order.status === "pending");
  const processingOrders = mockOrders.filter(order => order.status === "processing");
  const completedOrders = mockOrders.filter(order => order.status === "delivered");
  const cancelledOrders = mockOrders.filter(order => order.status === "cancelled");
  const codOrders = mockOrders.filter(order => order.paymentMethod === "cod");

  return (
    <Tabs defaultValue="all" className="space-y-4">
      <TabsList>
        <TabsTrigger value="all">All Orders</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="processing">Processing</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
        <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        <TabsTrigger value="cod">COD</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <DataTable columns={columns} data={mockOrders} />
      </TabsContent>
      <TabsContent value="pending">
        <DataTable columns={columns} data={pendingOrders} />
      </TabsContent>
      <TabsContent value="processing">
        <DataTable columns={columns} data={processingOrders} />
      </TabsContent>
      <TabsContent value="completed">
        <DataTable columns={columns} data={completedOrders} />
      </TabsContent>
      <TabsContent value="cancelled">
        <DataTable columns={columns} data={cancelledOrders} />
      </TabsContent>
      <TabsContent value="cod">
        <DataTable columns={columns} data={codOrders} />
      </TabsContent>
    </Tabs>
  );
}