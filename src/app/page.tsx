"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { MarqueeDemo } from "@/components/Marquee";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { MyGlobe } from "@/components/Glob";
import LandingNavbar from "@/components/landingNavbar";


export default function AuroraBackgroundDemo() {
  return (
    <AuroraBackground className="flex flex-col items-center justify-center h-fit m-5">
      
      <LandingNavbar/>

      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 pb-12"
      >
        <div className="text-3xl md:text-6xl font-bold dark:text-white text-center pt-4">
        Seamless tickets, effortless events.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        And your access, is limitless.
        </div>
        <Link href="/sign-in" >
          
        <ShimmerButton className="shadow-2xl">
          <p className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Get your ticket now.
          
          </p> 
            
        </ShimmerButton>
</Link>
        
        
      </motion.div>

        <MarqueeDemo/>

        <MyGlobe/>
        
        

    </AuroraBackground>
  );
}
