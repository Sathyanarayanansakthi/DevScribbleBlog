"use client"

import * as React from "react"
import {BookOpen,Bot,SquareTerminal,} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { Sidebar,SidebarContent,SidebarFooter,SidebarHeader, SidebarRail,} from "@/components/ui/sidebar"

// Sample app data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    //Blogs
    {
      title: "Blog",
      url: "/dashboard/blog",
      icon: SquareTerminal,
      isActive: true,
      items: [
                {
          title: "Blogs",
          url:"/dashboard/blog"
        },
        {
          title: "Create a Blog",
          url: "/dashboard/blog/createblog"
        },
        {
          title: "Blog List",
          url: "/dashboard/blog/listblog",
        },
      ],
    },

    //Articles
    {
      title: "Article",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Create an Article",
          url: "#",
        },
        {
          title: "Article List",
          url: "#",
        },
      ],
    },

    //Roadmaps
    {
      title: "Road Maps",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Create a Roadmaps",
          url: "#",
        },
        {
          title: "List the Roadmaps",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* Removed TeamSwitcher */}
        <div className="text-lg font-semibold px-4 py-2">Dev Scribble</div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
