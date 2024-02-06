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
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Social } from "../auth/social";

export const SignUpModal = () => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [err, setErr] = useState<string | undefined>("");
  const { isOpen, onClose, type,onOpen } = useModal();
  const modalOpen = isOpen && type === "sign-up";

  const router = useRouter()

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
      <DialogContent className=" bg-white overflow-hidden ">
        <DialogHeader>
          <DialogTitle>
            <h1 className=" font-semibold text-xl font-serif text-center">
              SIGN UP FOR APARTAMENTI
            </h1>
          </DialogTitle>
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
            <div
              className=" w-full bg-destructive p-3 text-xl font-mono 
          mt-2 font-semibold text-center rounded-lg"
            >
              {err}
            </div>
          )}
          {success && (
            <div
              className=" w-full bg-emerald-300 p-3 text-xl
           font-mono mt-2 font-semibold text-center rounded-lg"
            >
              {success}
            </div>
          )}
        </DialogFooter>
        <DialogFooter className=" w-full ">
        <Social />
        </DialogFooter>
        <DialogFooter>
          <div className=" w-full text-xl text-center font-semibold font-serif underline ">
             <Button variant="link" className=" w-full" onClick={()=>onOpen("login")}>
               Already have an account? Login
             </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
