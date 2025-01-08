"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send } from "lucide-react";

export function WhatsAppTab() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <MessageSquare className="h-6 w-6 text-green-600" />
          <h3 className="text-lg font-semibold">Quick Messages</h3>
        </div>
        <div className="space-y-4">
          <Button className="w-full" variant="outline">
            <Send className="mr-2 h-4 w-4" />
            Send Product Catalog
          </Button>
          <Button className="w-full" variant="outline">
            <Send className="mr-2 h-4 w-4" />
            Send Price List
          </Button>
          <Button className="w-full" variant="outline">
            <Send className="mr-2 h-4 w-4" />
            Send Installation Guide
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <MessageSquare className="h-6 w-6 text-green-600" />
          <h3 className="text-lg font-semibold">Recent Chats</h3>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">No recent chats to display.</p>
        </div>
      </Card>
    </div>
  );
}