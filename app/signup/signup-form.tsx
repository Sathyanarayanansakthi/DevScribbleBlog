"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import { account } from "@/lib/appwrite"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
const handleGoogleLogin = () => {
  const provider: OAuthProvider = "google";

  account.createOAuth2Session(
    provider,
    "http://localhost:3000/api/oauth/callback",
    "http://localhost:3000"
  );
};


  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
      </div>

      <div className="grid gap-6">
        <Button
          variant="outline"
          className="w-full gap-2 p-5"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="h-5 w-5" />
          Sign up with Google
        </Button>

        <div className="w-full flex items-center justify-center gap-2 text-muted-foreground border border-dashed rounded-md py-4 text-sm">
          <FaApple className="h-5 w-5" />
          Apple sign in coming soon
        </div>
      </div>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/" className="underline underline-offset-4">
          Log in
        </Link>
      </div>
    </form>
  )
}




// Client ID
// 597420120376-g1qv5qj2809snjh8ae68n7j6fn4hs8l9.apps.googleusercontent.com

// Client Secret 
// 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


// appwrite URI
// https://fra.cloud.appwrite.io/v1/account/sessions/oauth2/callback/google/687f95c90029c5f4acf0