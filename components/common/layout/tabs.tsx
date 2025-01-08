"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Tab {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: Tab[];
  defaultValue?: string;
  className?: string;
  onChange?: (value: string) => void;
}

export function CustomTabs({
  tabs,
  defaultValue,
  className,
  onChange,
}: CustomTabsProps) {
  return (
    <Tabs
      defaultValue={defaultValue || tabs[0].value}
      className={cn("w-full", className)}
      onValueChange={onChange}
    >
      <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}