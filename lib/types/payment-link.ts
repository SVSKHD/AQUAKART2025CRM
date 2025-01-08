export interface PaymentLink {
  _id: string;
  title: string;
  amount: number;
  status: 'active' | 'expired' | 'completed';
  provider: 'razorpay' | 'phonepe';
  paymentId?: string;
  expiresAt: string;
  createdAt: string;
  usedAt?: string;
  usedBy?: string;
}