"use client";
import React from "react";

import { formSchema } from "@/schemas";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Header } from "@/components/ui/header";
import { FormControl, FormField, FormItem, Form } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { Category } from "@prisma/client";

interface CreateListingFormProps {
  data: Category[];
}
export const CreateListingForm = ({ data }: CreateListingFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      images: [],
      bathroomCount: 0,
      rentalPrice: 0,
      purchasePrice: 0,
      amenities: "",
      categoryId: "",
      County: "",
      subCounty: "",
      area: "",
      coverage: "",
    },
  });

  const onSubmit = (vals: z.infer<typeof formSchema>) => {
    console.log(vals);
  };

  const isLoading = form.formState.isSubmitting;
  return (
    <div className=" w-full flex flex-col gap-y-5 h-full ">
      <Header title="Create a new listing" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" w-full h-full grid grid-cols-3 gap-4 ">
            <FormField
              name="categoryId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Select
                    value={field.value}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Chooce a category"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data.map((category) => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="categoryId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Select
                    value={field.value}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Chooce a category"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {data.map((category) => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};
