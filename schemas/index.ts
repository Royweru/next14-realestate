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


export const formSchema = z.object({
    title:z.string().min(1,{
        message:"Title is required"
    }),
    description:z.string().min(1,{
        message:"Desription is required"
    }),
    County:z.string().min(1,{
        message:"County is required"
    }),
    amenities:z.string().min(1,{
        message:"amenities are required"
    }),
    subCounty:z.string().min(1,{
        message:"sub County is required"
    }),
    area:z.string().min(1,{
        message:"the area is required"
    }),
    categoryId:z.string().min(1,{
        message:"category id is required"
    }),
    sizeId:z.string().min(1,{
        message:"size id is required"
    }),
    coverage:z.string().min(1,{
        message:"The area coverage is required"
    }),
    bathroomCount:z.number(),
    rentalPrice:z.coerce.number(),
    purchasePrice:z.coerce.number(),
    images:z.object({url:z.string()}).array(),
    parking:z.boolean().default(false),
    security:z.boolean().default(false),
    internetCoverage:z.boolean().default(false),
    pool:z.boolean().default(false),
    waterSupply:z.boolean().default(false)
})