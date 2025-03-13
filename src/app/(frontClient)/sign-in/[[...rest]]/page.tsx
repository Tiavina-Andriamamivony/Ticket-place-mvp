"use client";


import { SignIn, useAuth } from "@clerk/nextjs";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignInPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/events");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return <div><FontAwesomeIcon icon={faSpinner} size='5x' className='animate-spin'/></div>;
  }

  return (
    <div className="flex justify-center items-center m-8">
      <SignIn />
    </div>
  );
}