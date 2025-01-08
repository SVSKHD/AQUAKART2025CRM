"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Post {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  scheduledFor?: string;
  status: "scheduled" | "published" | "failed";
}

const mockPosts: Post[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1624927637280-f033784c1278?w=800&h=800&fit=crop",
    caption: "New water purifier installation #WaterPurifier #CleanWater",
    likes: 45,
    comments: 12,
    status: "published"
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&h=800&fit=crop",
    caption: "Maintenance tips for your RO system #Maintenance #WaterFilter",
    likes: 0,
    comments: 0,
    scheduledFor: "2024-04-01T09:00:00Z",
    status: "scheduled"
  }
];

export function PostGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {mockPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <div className="aspect-square relative">
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="object-cover w-full h-full"
            />
            <Badge
              className="absolute top-2 right-2"
              variant={post.status === "published" ? "default" : "secondary"}
            >
              {post.status === "scheduled" 
                ? `Scheduled for ${format(new Date(post.scheduledFor!), "MMM d, h:mm a")}`
                : post.status}
            </Badge>
          </div>
          <div className="p-4 space-y-2">
            <p className="text-sm line-clamp-2">{post.caption}</p>
            {post.status === "published" && (
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>{post.likes} likes</span>
                <span>{post.comments} comments</span>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}