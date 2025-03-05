import React from 'react'
import prisma from '../../lib/db';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';


export default async function Cards() {
const Events = await prisma.evenement.findMany({
    orderBy:{nom:'asc'},
    

})



  return (
    <div className="w-auto h-auto flex flex-wrap gap-4 p-3 m-3 justify-center items-center bg-slate-700">
        {
            Events.map((Event)=>
            (
                <Card key={Event.id} className="bg-slate-400">
                <CardHeader>
                  <CardTitle>{Event.nom}</CardTitle>
                </CardHeader>
                <CardContent>
                <h2>Description:</h2>
                <p>{Event.description}</p>
                <br />
                <h2>Date de debut:</h2>
                <p>{""+Event.dateDebut}</p>
                
                <br />
                <h2>Date de fin:</h2>
                <p>{""+Event.dateFin}</p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-slate-800">
                    <Link href={`/Events/Event/${Event.id}`} className="font-bold">Book</Link>
                  </Button>
                </CardFooter>
              </Card>
            )
            )
        }
        
        </div>
  )
}
