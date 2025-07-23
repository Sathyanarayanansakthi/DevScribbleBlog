"use client"

import { account } from "@/lib/appwrite"

export const handleOAuthLogin = () => {
  account.createOAuth2Session(
    "google",
    "http://localhost:3000/api/oauth/callback", // ✅ Success Redirect
    "http://localhost:3000" // ❌ Error Redirect
  )
}
