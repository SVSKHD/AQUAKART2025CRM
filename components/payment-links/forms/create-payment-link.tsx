"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PaymentLinkForm } from "./payment-link-form";
import { useToast } from "@/components/ui/use-toast";

export function CreatePaymentLink() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (values: any) => {
    try {
      // Here you would typically make an API call to create the payment link
      console.log("Creating payment link:", values);
      toast({
        title: "Payment link created",
        description: "The payment link has been created successfully.",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create payment link. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Payment Link</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create Payment Link</DialogTitle>
          <DialogDescription>
            Create a new payment link for your customers.
          </DialogDescription>
        </DialogHeader>
        <PaymentLinkForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}