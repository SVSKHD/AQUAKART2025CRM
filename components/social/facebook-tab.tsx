"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, BarChart2 } from "lucide-react";

export function FacebookTab() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Share2 className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Page Posts</h3>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">No recent posts to display.</p>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <BarChart2 className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Page Insights</h3>
        </div>
        <div className="space-y-4">
          <Button className="w-full" variant="outline">
            View Analytics
          </Button>
        </div>
      </Card>
    </div>
  );
}