"use client";

import { User } from "@/lib/types/user";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { UserForm } from "./user-form";
import { useToast } from "@/components/ui/use-toast";

interface EditUserProps {
  user: User;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EditUser({
  user,
  open,
  onOpenChange,
}: EditUserProps) {
  const { toast } = useToast();

  const handleSubmit = async (values: any) => {
    try {
      // Here you would typically make an API call to update the user
      console.log("Updating user:", values);
      toast({
        title: "User updated",
        description: "The user has been updated successfully.",
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update user. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>
            Update the user information.
          </DialogDescription>
        </DialogHeader>
        <UserForm 
          defaultValues={user} 
          isEditing 
          onSubmit={handleSubmit}
        />
      </DialogContent>
    </Dialog>
  );
}