"use client";

import { OrderTabs } from "@/components/orders/order-tabs";

export function OrdersTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Orders</h2>
      </div>
      <OrderTabs />
    </div>
  );
}