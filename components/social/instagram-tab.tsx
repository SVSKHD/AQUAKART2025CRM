"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UploadPost } from "./instagram/upload-post";
import { PostGrid } from "./instagram/post-grid";

export function InstagramTab() {
  return (
    <Tabs defaultValue="posts" className="space-y-4">
      <TabsList>
        <TabsTrigger value="posts">Posts</TabsTrigger>
        <TabsTrigger value="upload">Upload</TabsTrigger>
      </TabsList>
      <TabsContent value="posts">
        <PostGrid />
      </TabsContent>
      <TabsContent value="upload">
        <UploadPost />
      </TabsContent>
    </Tabs>
  );
}