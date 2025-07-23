import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Title */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
      </div>

      {/* Buttons */}
      <div className="grid gap-6">
        {/* Google Login */}
        <Button variant="outline" className="w-full gap-2 p-5">
          <FcGoogle className="h-5 w-5" />
          Login with Google
        </Button>

        {/* Apple Login Placeholder */}
        <div className="w-full flex items-center justify-center gap-2 text-muted-foreground border border-dashed rounded-md py-4 text-sm">
          <FaApple className="h-5 w-5" />
          Apple login coming soon
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  )
}
