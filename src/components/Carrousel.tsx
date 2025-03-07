"use client"

import * as React from "react";
import type { Evenement } from "@prisma/client";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useTheme } from 'next-themes';

export default function CarouselSize({ EventsImg }: { EventsImg: String[] }) {
  const { theme } = useTheme();
  const ArrEvent = EventsImg;

  return (
    <Carousel className="w-3/4 h-1/3">
      <CarouselContent className="-ml-1">
        {ArrEvent.map((Event, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image
                    src={"" + Event}
                    alt={"random image"}
                    width={500}
                    height={250}
                    className="rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}