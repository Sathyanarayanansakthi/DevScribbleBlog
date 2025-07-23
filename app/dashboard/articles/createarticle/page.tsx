"use client"

import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import  Tiptap  from "@/components/Tiptap"

const Page = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = () => {
    console.log("Title:", title)
    console.log("Content:", content)
    // TODO: Send title + content to Appwrite DB
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create an Article</h2>

      <div className="space-y-6 px-8">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="p-1">Title</Label>
          <Input
            id="title"
            placeholder="Enter your Article title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Tiptap Rich Text Editor */}
        <div className="space-y-2">
          <Label className="p-1">Content</Label>
          <Tiptap content={content} setContent={setContent} />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-black text-white rounded-md"
        >
          Submit Blog
        </button>
      </div>
    </div>
  )
}

export default Page
