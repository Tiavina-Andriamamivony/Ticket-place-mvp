import prisma from "../../../../../../lib/db";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export default async function EventPage(

    {params}:{params: Promise<{id: string}>}

){
    const {id} = await params;
    
    const event = await prisma.evenement.findUnique({
        where: {
            id: parseInt(id) // Convert string to integer
        }
    });
    return (
        <Card key={event?.id} className="bg-slate-100">
        <CardHeader>
          <CardTitle className="font-extrabold">{event?.nom}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
            <div className="w-1/2 h-full bg-slate-400 flex flex-col gap-4 p-3 m-3">
            <h2>Description:</h2>
                <p>{event?.description}</p>
                <br />
                <h2>Date de debut:</h2>
                <p>{(""+event?.dateDebut).slice(0,(""+event?.dateDebut).indexOf("G"))}</p>
                
                <br />
                <h2>Date de fin:</h2>
                <p>{(""+event?.dateFin).slice(0,(""+event?.dateFin).indexOf("G"))}</p>
                <br />
            </div>
          <Image 
          src={""+event?.imageUrl}
          alt={""+event?.nom}
          width={300}
          height={150}
          className="rounded-lg "

          />
        </CardContent>
        <CardFooter>
          <Button className="bg-slate-800">
    Buy tickets
          </Button>
        </CardFooter>
      </Card>
    );
}