export interface User {
  _id: string;
  email: string;
  phone: number;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
}