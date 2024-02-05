"use client";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useModal } from "@/hooks/use-modal-store";

export const SignUpModal = () => {
  const { isOpen, onClose, type } = useModal();
  const modalOpen = isOpen && type === "sign-up";

  return (
    <Dialog open={modalOpen} onOpenChange={onClose}>
      <DialogContent className=" bg-zinc-200 overflow-hidden ">
        <DialogHeader>
          <DialogTitle>SIGN UP</DialogTitle>
        </DialogHeader>
        REG FORM GOES HERE
      </DialogContent>
    </Dialog>
  );
};
