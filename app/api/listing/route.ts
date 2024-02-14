/**
 * Handles a POST request to create a new listing.
 * @param req - The request object containing the POST data.
 * @returns A Response object with an error message if any required field is missing, otherwise proceeds with creating a new listing.
 */

import db from "@/lib/prismadb";

import { auth } from "@/auth";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const session = await auth();


    if(!session){
      return new NextResponse("Unauthenticated",{status:403})
    }
    const {
      County,
      subCounty,
      area,
      sizeId,
      categoryId,
      title,
      description,
      amenities,
      bathroomCount,
      coverage,
      images,
      security,
      parking,
      internetCoverage,
      pool,
      waterSupply,
      rentalPrice,
      purchasePrice,
    } = body;

    const requiredFields = [
      { field: County, message: "County is required!" },
      { field: subCounty, message: "sub county is required!" },
      { field: area, message: "area is required!" },
      { field: sizeId, message: "size id is required!" },
      { field: categoryId, message: "category id is required!" },
      { field: title, message: "title is required!" },
      { field: description, message: "description is required!" },
      { field: amenities, message: "amenities are required!" },
      { field: rentalPrice, message: "rental price is required!" },
      { field: purchasePrice, message: "purchase price is required!" },
      { field: coverage, message: "area coverage is required!" },
      { field: bathroomCount, message: "bathroom count is required!" },
      {
        field: images,
        message: "images are required!",
        condition: images && images.length > 0,
      },
    ];

    for (const { field, message, condition } of requiredFields) {
      if (!field || (condition !== undefined && !condition)) {
        return new NextResponse(message);
      }
    }

    // Proceed with creating a new listing
    const listing = await db.listing.create({
      data: {
        userId: session?.user.id as string,
        categoryId,
        sizeId,
        title,
        description,
        bathroomCount,
        purchasePrice: parseInt(purchasePrice),
        rentalPrice: parseInt(rentalPrice),
        amenities,
        waterSupply,
        images: {
          createMany: {
            data: [...images.map((image: { url: string }) => image)],
          },
        },
        County,
        subCounty,
        coverage,
        area,
        parking,
        internetCoverage,
        pool,
        security,

      },
    });
    return NextResponse.json(listing)
  } catch (error) {
    return new Response("An error occurred while processing the request.", {
      status: 500,
    });
  }
}
