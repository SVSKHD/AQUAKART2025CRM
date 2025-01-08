"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { LoginDialog } from "./login-dialog";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";


export function AuthCheck({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const [loginOpen, setLoginOpen] = useState(!isAuthenticated);

  const handleLogin = useCallback(() => {
    setLoginOpen(true);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="relative">
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50" />
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Welcome to Aquakart Dashboard</h2>
            <p className="text-muted-foreground">Please login to continue</p>
            <Button size="lg" onClick={handleLogin}>
              <LogIn className="mr-2 h-5 w-5" />
              Login to Dashboard
            </Button>
          </div>
          <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
        </div>
        <div className="filter blur-sm pointer-events-none">
          {children}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}