import React from 'react'
import { CreateHero } from '@/components/create-hero'
import { CreateListingForm } from './components/create-listing-from'

interface CreatePageProps{
   params:{
    listingId:string
   },
}
const CreatePage = ({params}:CreatePageProps) => {
  return (
    <div className=" w-full h-full flex flex-col min-h-screen py-16">
      <CreateHero />
      <CreateListingForm />
    </div>
  )
}

export default CreatePage