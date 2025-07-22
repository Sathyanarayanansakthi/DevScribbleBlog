"use client"

import { LoginForm } from "@/app/login/login-form"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        {/* Branding */}
        <div className="flex justify-center gap-2 md:justify-start">
          <span className="font-medium text-lg">
            Dev Scribble
          </span>
        </div>

        {/* Login Form */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="relative hidden lg:block bg-muted">
        <Image
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg"
          alt="Code background"
          fill
          className="object-cover dark:brightness-[0.2] dark:grayscale"
          priority
        />
      </div>
    </div>
  )
}
