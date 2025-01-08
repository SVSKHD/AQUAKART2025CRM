import { User } from "@/lib/types/user";

export const users: User[] = [
  {
    _id: "1",
    email: "admin@aquakart.co.in",
    phone: 9876543210,
    role: "admin",
    createdAt: "2024-01-01T00:00:00.000Z",
    updatedAt: "2024-01-01T00:00:00.000Z"
  },
  {
    _id: "2",
    email: "user@aquakart.co.in",
    phone: 9876543211,
    role: "user",
    createdAt: "2024-01-02T00:00:00.000Z",
    updatedAt: "2024-01-02T00:00:00.000Z"
  }
];