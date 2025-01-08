import { PaymentLink } from "@/lib/types/payment-link";

export const paymentLinks: PaymentLink[] = [
  {
    _id: "1",
    title: "Water Softener Payment",
    amount: 30000,
    status: "active",
    provider: "razorpay",
    paymentId: "pay_123456",
    expiresAt: "2024-04-30T00:00:00.000Z",
    createdAt: "2024-04-01T00:00:00.000Z"
  },
  {
    _id: "2",
    title: "RO Service Payment",
    amount: 1500,
    status: "completed",
    provider: "phonepe",
    paymentId: "pay_789012",
    expiresAt: "2024-03-31T00:00:00.000Z",
    createdAt: "2024-03-15T00:00:00.000Z",
    usedAt: "2024-03-20T00:00:00.000Z",
    usedBy: "customer@example.com"
  },
  {
    _id: "3",
    title: "Filter Replacement",
    amount: 2500,
    status: "active",
    provider: "razorpay",
    paymentId: "pay_345678",
    expiresAt: "2024-04-15T00:00:00.000Z",
    createdAt: "2024-03-25T00:00:00.000Z"
  }
];