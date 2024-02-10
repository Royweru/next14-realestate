import * as z from "zod"


export const LoginSchema =z.object({
    email:z.string().email(),
    password:z.string().min(1)
})

export const RegisterSchema = z.object({
    email:z.string().email({
        message:"Email is required"
    }),
    password:z.string().min(6,{
        message:"Password should have a minimum of 6 characters"
    }),
    name:z.string().min(1,{
        message:"Name is required"
    })
})


export const SearchSchema = z.object({
       county:z.string().optional(),
       subCounty:z.string().optional(),
       categoryId:z.string().optional(),
       minPrice:z.coerce.number().optional(),
       maxPrice:z.coerce.number().optional()
})