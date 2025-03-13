import { SignIn, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SignInPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/events");
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex justify-center items-center m-8">
      <SignIn />
    </div>
  );
}