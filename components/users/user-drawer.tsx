"use client";

import { User } from "@/lib/types/user";
import { Drawer } from "@/components/common/layout/drawer";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Mail, Key, Calendar, UserCog, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface UserDrawerProps {
  user: User;
  open: boolean;
  onClose: () => void;
}

export function UserDrawer({ user, open, onClose }: UserDrawerProps) {
  return (
    <Drawer isOpen={open} onClose={onClose} position="right" size="md">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold">User Details</h2>
              <p className="text-sm text-muted-foreground">
                View and manage user information
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-6 py-4 space-y-6">
            {/* User Status */}
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="font-medium">{user.email}</p>
                <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                  {user.role}
                </Badge>
              </div>
            </div>

            <Separator />

            {/* User Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Account Information</h3>
              <div className="grid gap-4">
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <UserCog className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Role</p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {user.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-lg border p-4">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Member Since</p>
                    <p className="text-sm text-muted-foreground">
                      {format(new Date(user.createdAt), "PPP")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Activity */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <div className="text-sm text-muted-foreground">
                No recent activity to display.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t px-6 py-4">
          <div className="flex flex-col gap-2">
            <Button className="w-full" variant="default">
              <Key className="mr-2 h-4 w-4" />
              Reset Password
            </Button>
            <Button className="w-full" variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  );
}