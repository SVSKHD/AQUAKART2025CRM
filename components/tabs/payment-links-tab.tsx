"use client";

import { PaymentLinkTabs } from "@/components/payment-links/payment-link-tabs";

export function PaymentLinksTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Payment Links</h2>
      </div>
      <PaymentLinkTabs />
    </div>
  );
}