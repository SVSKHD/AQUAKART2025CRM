"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface DrawerProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const sizeClasses = {
  sm: "w-1/4",
  md: "w-1/3",
  lg: "w-1/2",
  xl: "w-2/3",
  full: "w-full",
};

export function Drawer({
  children,
  isOpen,
  onClose,
  position = "right",
  size = "md",
}: DrawerProps) {
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed inset-y-0 z-50 bg-background shadow-xl transition-transform duration-300 ease-in-out transform",
          position === "left" ? "left-0" : "right-0",
          sizeClasses[size],
          isOpen
            ? "translate-x-0"
            : position === "left"
            ? "-translate-x-full"
            : "translate-x-full"
        )}
      >
        <div className="h-full overflow-y-auto">{children}</div>
      </div>
    </>
  );
}