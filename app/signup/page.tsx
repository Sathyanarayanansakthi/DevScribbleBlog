"use client"

import { SignupForm } from "@/app/signup/signup-form"
import Image from "next/image"

export default function SignupPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Section: Form + Branding */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Branding */}
        <div className="flex justify-center gap-2 md:justify-start">
          <span className="font-medium text-lg">
            Dev Scribble
          </span>
        </div>

        {/* Signup Form */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="relative hidden lg:block bg-muted">
        <Image
          src="https://images.pexels.com/photos/603800/pexels-photo-603800.jpeg"
          alt="Signup Illustration"
          fill
          className="object-cover dark:brightness-[0.2] dark:grayscale"
          priority
        />
      </div>
    </div>
  )
}
