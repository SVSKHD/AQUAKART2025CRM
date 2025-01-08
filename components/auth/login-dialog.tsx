"use client";

import { useCallback, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch } from "react-redux";
import { authService } from "@/lib/services/auth.service";
import { setCredentials } from "@/lib/store/slices/authSlice";
import { DropletIcon } from "lucide-react";
import { LoginForm } from "./login-form";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const handleSubmit = useCallback(async (values: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      try {
        const response = await authService.login(values);
        dispatch(setCredentials({
          token: response.token,
          user: response.user
        }));
        localStorage.setItem('token', response.token);
        toast({
          title: "Login successful",
          description: "Welcome to Aquakart Dashboard!",
        });
        onOpenChange(false);
      } catch (error: any) {
        toast({
          title: "Login failed",
          description: error.response?.data?.message || "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Login failed",
        description: error?.response?.data?.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, onOpenChange, toast]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">Login to Aquakart Dashboard</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 mb-6">
          <DropletIcon className="h-12 w-12 text-primary" />
          <div className="text-2xl font-semibold">Welcome Back</div>
          <p className="text-sm text-muted-foreground">Login to access the dashboard</p>
        </div>
        <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      </DialogContent>
    </Dialog>
  );
}