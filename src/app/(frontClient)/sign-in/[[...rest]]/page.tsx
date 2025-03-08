import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center m-8">
    <SignIn />
    </div>
  );
}