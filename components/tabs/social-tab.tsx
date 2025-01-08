"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FacebookTab } from "@/components/social/facebook-tab";
import { InstagramTab } from "@/components/social/instagram-tab";
import { WhatsAppTab } from "@/components/social/whatsapp-tab";

export function SocialTab() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Social Media</h2>
      </div>
      <Tabs defaultValue="whatsapp" className="space-y-4">
        <TabsList>
          <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
          <TabsTrigger value="instagram">Instagram</TabsTrigger>
          <TabsTrigger value="facebook">Facebook</TabsTrigger>
        </TabsList>
        <TabsContent value="whatsapp">
          <WhatsAppTab />
        </TabsContent>
        <TabsContent value="instagram">
          <InstagramTab />
        </TabsContent>
        <TabsContent value="facebook">
          <FacebookTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}