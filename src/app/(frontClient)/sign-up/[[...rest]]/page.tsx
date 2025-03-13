import { SignUp } from "@clerk/nextjs";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function SignUpPage() {
  const handleComplete = async (result: any) => {
    try {
      await prisma.utilisateur.create({
        data: {
          email: result.emailAddress,
          nom: result.lastName || '',
          prenom: result.firstName || '',
          role: 'CLIENT',
        },
      });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <SignUp
        afterSignUpUrl="/events"
        signInUrl="/sign-in"
        redirectUrl="/events"
        appearance={{
          elements: {
            rootBox: "mx-auto",
          },
        }}
        afterSignInUrl="/events"
      />
    </div>
  );
}