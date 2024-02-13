"use client";
import React,{useState,useEffect} from "react";

import { formSchema } from "@/schemas";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Header } from "@/components/ui/header";
import { FormControl, FormField, FormItem, Form, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectLabel,
} from "@/components/ui/select";
import { Category, Size } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { ImageUpload } from "@/components/image-upload";
import { data } from "@/lib/data";

interface CreateListingFormProps {
  categories: Category[];
  sizes:Size[]
}
export const CreateListingForm = (
  { 
  categories,
  sizes
 }: CreateListingFormProps) => {
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

  const [subCounties, setSubCounties] = useState<string[]|undefined>([]);
  const [sub, setSub] = useState("");
  const [selectedCounty, setSelectedCounty] = useState("");

  useEffect(() => {
    if (data) {
       const county = data.find((county)=>county.name===selectedCounty)
       
       
    }

  }, [setSubCounties,selectedCounty]);

  const onSubmit = (vals: z.infer<typeof formSchema>) => {
    console.log(vals);
  };



  const isLoading = form.formState.isSubmitting;
  return (
    <div className=" w-full flex flex-col gap-y-5 h-full ">
      <Header title="Upload an image" subTitle="Make sure you capture an image of every room" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className=" w-full flex justify-center items-center h-full p-6">
              <FormField
                name="images"
                control={form.control}
                render={({field})=>(
                  <FormItem>

                     <FormControl>
                        <ImageUpload
                         value={field.value.map(img=>img.url)}
                         onChange={(url)=>field.onChange([...field.value,{url}])}
                         onRemove ={(url)=>field.onChange([...field.value.filter((current)=>current.url!==url)])}
                         disabled={isLoading}
                         />
                     </FormControl>
                  </FormItem>
                )}
                />
          </div>
          <div className=" w-full h-full grid grid-cols-3 gap-4 px-2">
            <FormField
              name="categoryId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    SELECT A CATEGORY:
                  </FormLabel>
                  <Select
                    value={field.value}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Choose a category"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories?.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="sizeId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    SELECT THE SIZE
                  </FormLabel>
                  <Select
                    value={field.value}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                   
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="Choose the size"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sizes?.map((size) => (
                        <SelectItem key={size.id} value={size.id}>
                          {size.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
               name="title"
               control={form.control}
               render={({field})=>(
                <FormItem>
                    <FormLabel>
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="give your property a title.."
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
               )}
               />
                 <FormField
               name="description"
               control={form.control}
               render={({field})=>(
                <FormItem>
                    <FormLabel>
                      Description
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="describe something about your property e.g sweet one bedroom apartment in Kilimani.."
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
               )}
               />
          </div>
          <div className=" w-full flex flex-col px-16 gap-y-4 ">
            <Header title="The location for your property"/>
             <FormField
             name="County"
             control={form.control}
             render={({field})=>(
              <FormItem>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Enter the county..." defaultValue={field.value}/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {data?.map(county=>(
                      <SelectItem key={county.code} value={county.name}>
                       {county.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
             )}
             />
               <FormField
             name="subCounty"
             control={form.control}
             render={({field})=>(
              <FormItem>
                <Select value={field.value} onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Enter the sub county" defaultValue={field.value}/>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                  {data?.map(county=>(
                     <>
                       {county.sub_counties.map((sub)=>(
                        <SelectItem key={sub} value={sub}>
                            {sub}
                        </SelectItem>
                       ))}
                     </>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
             )}
             />
             <FormField
             name="area"
             control={form.control}
             render={({field})=>(
              <FormItem>
                <FormControl>
                  <Input placeholder=" The area name" 
                   {...field}
                  />
                </FormControl>
              </FormItem>
             )}
             />
          </div>
          <Header title="The pricing of the property" />
          <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
            <FormField
             name="rentalPrice"
             control={form.control}
             render={({field})=>(
              <FormItem>
                <FormLabel>
                  Rental Price if Rental
                </FormLabel>
               <FormDescription>
                If the property is for rent input the rental orice if the property is only for sale leave this blank
               </FormDescription>
                 <FormControl>
                     <Input 
                      placeholder="Input the rental price"
                      {...field}
                    />
                 </FormControl>
                <FormMessage />
              </FormItem>
             )}
             />
               <FormField
             name="purchasePrice"
             control={form.control}
             render={({field})=>(
              <FormItem>
                <FormLabel>
                  Purchase Price if for buy
                </FormLabel>
                <FormDescription>
                If the property is for buy input the purchase price, if the property is only for rent leave this blank
               </FormDescription>
                 <FormControl>
                     <Input 
                      placeholder="Input the purchase price"
                      {...field}
                    />
                 </FormControl>
                <FormMessage />
              </FormItem>
             )}
             />
          </div>
         <div className=" w-full flex justify-center items-center">
            
         </div>
        </form>
      </Form>
    </div>
  );
};
