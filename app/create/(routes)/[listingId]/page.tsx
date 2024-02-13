import React from 'react'
import { CreateHero } from '@/components/create-hero'
import { CreateListingForm } from './components/create-listing-from'

import prisma from "@/lib/prismadb"
interface CreatePageProps{
   params:{
    listingId:string
   },
}

const CreatePage =async ({params}:CreatePageProps) => {
    const categories = await prisma.category.findMany()
    const sizes = await prisma.size.findMany()
  return (
    <div className=" w-full h-full flex flex-col min-h-screen py-10">
      <CreateHero />
      <CreateListingForm categories={categories} sizes={sizes}/>
    </div>
  )
}

export default CreatePage