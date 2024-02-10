"use client";
import React, { startTransition, useState } from "react";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle,DialogFooter } from "../ui/dialog";
import {
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useModal } from "@/hooks/use-modal-store";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";
import { FaGithub, FaGithubAlt, FaGoogle, FaGooglePlus } from "react-icons/fa";
import { Social } from "../auth/social";
import { useRouter } from "next/navigation";

export const LoginModal = () => {
  const router = useRouter()
  const[err,setErr] = useState<string|undefined>("")
  const[success,setSuccess] = useState<string|undefined>("")
  const { isOpen, onOpen, onClose, type } = useModal();
  const modalOpen = isOpen && type === "login";

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (vals: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(vals).then((data)=>{
        setErr(data?.error)
        form.reset()
        router.push("/")
      });
    });
  };
  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog open={modalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-400 overflow-hidden ">
        <DialogHeader>
          <DialogTitle>
            <h1 className=" w-full text-center font-semibold font-serif text-2xl text-rose-200">
              LOGIN 🔒
            </h1>
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className=" w-full  space-y-4">
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
              {err&&(
                <div className=" w-full  p-4 rounded-xl bg-destructive text-center font-mono text-lg text-white font-semibold">
                  {err},please try again
                </div>
              )}
              <div className=" w-full">
                <Button className=" w-full " type="submit" disabled={isLoading}>
                  LOGIN
                </Button>
              </div>
            </div>
          </form>
        </Form>
        <DialogFooter className=" w-full ">
          <Social />
        </DialogFooter>
        <DialogFooter>
          <div className=" w-full text-xl text-center font-semibold font-serif underline ">
             <Button variant="link" className=" w-full" onClick={()=>onOpen("sign-up")}>
               Don&#39;t have an acount? sign up
             </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
