"use server"
import *as z from "zod"
import bcrypt from "bcrypt"
import { RegisterSchema } from "@/schemas"

import prisma from "@/lib/prismadb"
import { getUserByEmail } from "@/data/user"

export const register =async (values:z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)

    if(!validatedFields.success)return {error:"Invalid Fields!"}

    const{email,name,password} = validatedFields.data

    const hashedPwd = await bcrypt.hash(password,10)

    const exsistingUser = await getUserByEmail(email)

    
    if(exsistingUser)return {error:"Email already exists!"}

    await prisma.user.create({
        data:{
            email,
            password:hashedPwd,
            name
        }
    })
    return {success:"User created!"}
}