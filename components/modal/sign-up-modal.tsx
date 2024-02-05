"use client";
import React, { startTransition, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { register } from "@/actions/register";

export const SignUpModal = () => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [err, setErr] = useState<string | undefined>("");
  const { isOpen, onClose, type } = useModal();
  const modalOpen = isOpen && type === "sign-up";

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (vals: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(vals).then((data) => {
        setSuccess(data?.success);
        setErr(data?.error);
        form.reset();
      });
    });
  };

  const isLoading = form.formState.isSubmitting;
  return (
    <Dialog open={modalOpen} onOpenChange={onClose}>
      <DialogContent className=" bg-zinc-200 overflow-hidden ">
        <DialogHeader>
          <DialogTitle>SIGN UP</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className=" w-full  space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NAME</FormLabel>
                    <FormControl>
                      <Input placeholder=" Enter your name please" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EMAIL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder=" Enter your email please"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PASSWORD</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder=" Enter your password please"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className=" w-full">
                <Button className=" w-full " type="submit" disabled={isLoading}>
                  CREATE ACCOUNT
                </Button>
              </div>
            </div>
          </form>
        </Form>
       
        <DialogFooter>
        {err && (
          <div className=" w-full bg-destructive p-3 text-xl font-mono mt-2 font-semibold">
            {err}
          </div>
        )}
        {success && (
          <div className=" w-full bg-emerald-300 p-3 text-xl font-mono mt-2 font-semibold">
            {success}
          </div>
        )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
