import React from 'react'
import Cards from '@/components/Cards'
import CarouselSize from '@/components/Carrousel'
import prisma from '../../../../lib/db'

let EventsImg: (string | null)[] = []

export default async function page() {
  const Events = await prisma.evenement.findMany({
    orderBy:{nom:'asc'},
    include: {tickets: true,
      categorie: true,
      lieu: true
    },
    take: 10,
    skip	: 0
})

Events.map((event) => 
    event.imageUrl && EventsImg.push(event.imageUrl));


const Images = EventsImg.filter((event) => event !== null);

  return (
    <div className='w-auto h-auto flex flex-col justify-center items-center  gap-5'>
        
        <div className="w-5/6 min-h-64  flex justify-center items-center p-3 m-3">
        
        <CarouselSize EventsImg={Images}/>
        
        </div>
        
        <h1 className='text-3xl font-bold'> Popular events : </h1>

        <Cards/>
        
    </div>
  )
}
