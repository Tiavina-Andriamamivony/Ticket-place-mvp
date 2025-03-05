import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-auto h-screen flex justify-center items-center bg-gray-100 gap-5">
      <h1 className="text-3xl font-bold"> Welcome to TAPAKILA </h1>
      <br />
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href="\events"> See evenements</Link>
      </Button>
    </div>
  );
}
