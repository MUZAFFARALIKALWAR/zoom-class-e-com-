"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 
import { client } from '@/sanity/lib/client'
import React, { useEffect, useState } from 'react'
// const [product,setproduct] = useState("")
async function Product() {
    // useEffect(()=>{
    
    //     const fetchdata = async ()=>{
    //         const res = await client.fetch(`*[_type == 'product']`)
    //         setproduct(res)
    //     } 
    //     fetchdata()
    // })
   
    const res:any =await client.fetch(`*[_type == 'product']`)

  return (
    <div className="w-full  flex justify-center items-center mt-10 mb-[100px] ">
    <Carousel className="w-[80%]  ">
  <CarouselContent >
     {
      res.map((item:any)=>{
          return (
              <CarouselItem  className="md:basis-1/2 lg:basis-1/3 ">
              <div className="p-1">
                <Card className="w-[300px]">
                  <CardContent className="flex flex-col p-4">
                      <p className="flex text-yellow-400"></p>
                      <h1 className="font-bold">{item.name}</h1>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )
      })
     }
  </CarouselContent>
  <CarouselPrevious  className="hidden md:block"/>
  <CarouselNext className="hidden md:block"/>
</Carousel>
</div>
  ) 
}

export default Product