import React from 'react'
import prisma from '../../lib/db';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';


export default async function Cards() {
const Events = await prisma.evenement.findMany({
    orderBy:{nom:'asc'},
    include: {tickets: true,
      categorie: true,
      lieu: true
    },
    take: 10,
    skip	: 0
})





  return (
    <div className="w-auto h-auto flex flex-wrap gap-4 p-3 m-3 justify-center items-center">
        {
            Events.map((Event)=>
            (
                
                <Card key={Event.id} className="bg-slate-400 w-2/4">
                <br />
                <CardContent className='flex justify-center items-center gap-1'>
                  <Image 
                    src={""+Event.imageUrl}
                    alt={""+Event.nom}
                    width={300}
                    height={150}
                    className="rounded-lg "
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className='text-2xl font-bold'>{Event.nom}</h1>
                    <br />
                    <p className='text-xl'> {Event.description} </p>
                    <br />
                    <p className='font-semibold p-3 bg-slate-950 rounded-lg w-fit text-white'>{Event.categorie.nom}</p>
                  </div>
                

                </CardContent>
                <CardFooter>
                  <Button >
                    <Link href={`/events/event/${Event.id}`} className="font-bold">View details</Link>
                  </Button>
                </CardFooter>
              </Card>
              
            )
            )
            
        }
        </div>
  )
}
