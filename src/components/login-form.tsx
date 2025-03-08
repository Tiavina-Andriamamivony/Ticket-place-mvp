import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SignInButton, SignUpButton } from '@clerk/nextjs'

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
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
  )
}