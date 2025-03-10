"use client"

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInButton, SignUpButton, useUser } from '@clerk/nextjs';
import { useEffect } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      // Ajouter l'utilisateur à la base de données s'il est nouveau
      const addUserToDatabase = async () => {
        try {
          const userData = {
            email: user.emailAddresses[0].emailAddress,
            nom: user.firstName,
            prenom: user.lastName,
            telephone: user.phoneNumbers[0]?.phoneNumber,
            role: 'CLIENT', // Vous pouvez ajuster le rôle si nécessaire
          };
          console.log('Données utilisateur:', userData);

          // Vérifier si l'utilisateur existe déjà
          const checkResponse = await fetch(`/api/check-user?email=${userData.email}`);
          if (!checkResponse.ok) {
            throw new Error('Erreur lors de la vérification de l\'utilisateur');
          }

          const userExists = await checkResponse.json();
          if (userExists) {
            console.log('Utilisateur déjà existant dans la base de données');
            return;
          }

          // Ajouter l'utilisateur s'il n'existe pas
          const response = await fetch('/api/add-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
          });

          if (!response.ok) {
            throw new Error('Erreur lors de l\'ajout de l\'utilisateur à la base de données');
          }
        } catch (error) {
          console.error("Erreur lors de l'ajout de l'utilisateur à la base de données:", error);
        }
      };

      addUserToDatabase();
    }
  }, [user]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Click the button below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <SignInButton mode="modal">
              <Button variant="outline" className="w-full">
                Login with Clerk
              </Button>
            </SignInButton>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <SignUpButton mode="modal">
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </SignUpButton>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}