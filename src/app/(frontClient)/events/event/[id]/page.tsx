

import prisma from "../../../../../../lib/db";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMapLocationDot, faUser, faUsers } from "@fortawesome/free-solid-svg-icons"; 
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default async function EventPage(

    {params}:{params: Promise<{id: string}>}

){
    const {id} = await params;
    
    const event = await prisma.evenement.findUnique({
        where: {
            id: parseInt(id) // Convert string to integer
        },
        include: {
            lieu: true ,
            tickets: true
        },
        
    });
    return (
        <Card key={event?.id} className="bg-slate-700 flex flex-col justify-center items-center p-3 m-3">
        <CardHeader>
          <CardTitle className="font-extrabold text-center text-3xl">{event?.nom}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center">

        <Image 
          src={""+event?.imageUrl}
          alt={""+event?.nom}
          width={300}
          height={150}
          className="rounded-lg "

          />

            <div className="w-1/2 h-auto bg-slate-700 flex   p-3 m-3">
            <div className="w-1/2 flex-col">
            <h2>Description:</h2>
                <p>{event?.description}</p>
                <br />
                <h2>Date de debut:</h2>
                <p>{(""+event?.dateDebut).slice(0,(""+event?.dateDebut).indexOf("G"))}</p>
                
                <br />
                <h2>Date de fin:</h2>
                <p>{(""+event?.dateFin).slice(0,(""+event?.dateFin).indexOf("G"))}</p>
                <br />
                <FontAwesomeIcon icon={faMapLocationDot} />
                <p>{event?.lieu.adresse}</p>
            </div>

            <div className="w-1/2">
            {event?.tickets.map((ticket) => (
                    <div key={ticket.id}>
                        <h1 className="font-semibold">Type de ticket : {""+ticket.type} </h1>
                        <h2>Prix: {""+ticket.prix}</h2>
                        <br />
                        <FontAwesomeIcon icon={faUsers} />
                        <h2>Quantité disponible: {""+ticket.quantiteDisponible}</h2>
                        <br />
                    </div>
                    
                ))}
            </div>
                

            </div>
      
        </CardContent>
        <CardFooter>
        <DropdownMenu>
  <DropdownMenuTrigger>
  <Button className="bg-slate-800 content-end p-7" size="lg">
            Buy tickets
          </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Ticket type :</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {event?.tickets.map((ticket) => (
                    <DropdownMenuItem key={ticket.id}>
                        {""+ticket.type}
                    </DropdownMenuItem>)
                )}
  </DropdownMenuContent>
</DropdownMenu>
        </CardFooter>
      </Card>
    );
}