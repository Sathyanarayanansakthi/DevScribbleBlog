"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  SquareTerminal,
  Package,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// Sidebar data config
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    // Blogs
    {
      title: "Blog",
      url: "/dashboard/blog",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "Blogs", url: "/dashboard/blog" },
        { title: "Create a Blog", url: "/dashboard/blog/createblog" },
        { title: "Blog List", url: "/dashboard/blog/listblog" },
      ],
    },

    // Articles
    {
      title: "Article",
      url: "/dashboard/article",
      icon: Bot,
      items: [
        { title: "Create an Article", url: "/dashboard/articles/createarticle" },
        { title: "Article List", url: "/dashboard/article/list" },
      ],
    },

    // Roadmaps
    {
      title: "Road Maps",
      url: "/dashboard/roadmaps",
      icon: BookOpen,
      items: [
        { title: "Create a Roadmap", url: "/dashboard/roadmaps/create" },
        { title: "List the Roadmaps", url: "/dashboard/roadmaps/list" },
      ],
    },

    // Products
    {
      title: "Products",
      url: "/dashboard/products",
      icon: Package,
      items: [
        { title: "Create a Product", url: "/dashboard/products/create" },
        { title: "Product List", url: "/dashboard/products/list" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
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
