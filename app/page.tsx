"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InvoicesTab } from "@/components/tabs/invoices-tab";
import { CategoriesTab } from "@/components/tabs/categories-tab";
import { SubCategoriesTab } from "@/components/tabs/sub-categories-tab";
import { OrdersTab } from "@/components/tabs/orders-tab";
import { CultureTab } from "@/components/tabs/culture-tab";
import { UsersTab } from "@/components/tabs/users-tab";
import { PaymentLinksTab } from "@/components/tabs/payment-links-tab";
import { SocialTab } from "@/components/tabs/social-tab";
import { ProductsTab } from "@/components/tabs/products-tab";
import { StockTab } from "@/components/tabs/stock-tab";
import { AuthCheck } from "@/components/auth/auth-check";
import { StockCards } from "@/components/dashboard/stock-cards";

export default function Home() {
  return (
    <AuthCheck>
      <div className="container mx-auto py-10">
        <StockCards />
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="sub-categories">Sub-Categories</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="payment-links">Payment Links</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="stock">Stock</TabsTrigger>
            <TabsTrigger value="culture">Culture</TabsTrigger>
          </TabsList>
          <TabsContent value="products">
            <ProductsTab />
          </TabsContent>
          <TabsContent value="categories">
            <CategoriesTab />
          </TabsContent>
          <TabsContent value="sub-categories">
            <SubCategoriesTab />
          </TabsContent>
          <TabsContent value="invoices">
            <InvoicesTab />
          </TabsContent>
          <TabsContent value="orders">
            <OrdersTab />
          </TabsContent>
          <TabsContent value="users">
            <UsersTab />
          </TabsContent>
          <TabsContent value="payment-links">
            <PaymentLinksTab />
          </TabsContent>
          <TabsContent value="social">
            <SocialTab />
          </TabsContent>
          <TabsContent value="stock">
            <StockTab />
          </TabsContent>
          <TabsContent value="culture">
            <CultureTab />
          </TabsContent>
        </Tabs>
      </div>
    </AuthCheck>
  );
}