"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`w-full h-screen flex flex-col justify-center items-center gap-5 p-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <Image src={"https://i.pinimg.com/736x/0b/a8/35/0ba8351a6657aedf4de1f1ec914e119b.jpg"} alt="Landing Page Image" width={500} height={400} className="mt-8 rounded-lg shadow-lg max-w-full h-auto" />
      <div className="w-full max-w-md text-center">
        <h1 className={`text-4xl font-extrabold mb-4 ${theme === 'dark' ? 'text-white' : 'text-blue-600'}`}>Welcome to TAPAKILA</h1>
        <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Your one-stop solution for event tickets</p>
        <Button className={`font-bold py-2 px-4 rounded ${theme === 'dark' ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-700 text-white`}>
          <Link href="/events">See Events</Link>
        </Button>
      </div>
    </div>
  );
}