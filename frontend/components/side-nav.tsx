"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BarChart3,
  FileText,
  Headphones,
  Layers,
  LayoutDashboard,
  MessageSquare,
  PlayCircle,
  Settings,
  Upload,
  Users,
  Video,
  Zap,
} from "lucide-react"

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Videos",
    href: "/videos",
    icon: PlayCircle,
  },
  {
    title: "Workflow",
    href: "/workflow",
    icon: Layers,
    submenu: [
      {
        title: "Script Generation",
        href: "/workflow/script",
        icon: FileText,
      },
      {
        title: "Text-to-Speech",
        href: "/workflow/tts",
        icon: Headphones,
      },
      {
        title: "Video Generation",
        href: "/workflow/video",
        icon: Video,
      },
      {
        title: "Video Editing",
        href: "/workflow/editing",
        icon: Layers,
      },
      {
        title: "Subtitles",
        href: "/workflow/subtitles",
        icon: MessageSquare,
      },
      {
        title: "Publishing",
        href: "/workflow/publishing",
        icon: Upload,
      },
    ],
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Audience",
    href: "/audience",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

export function SideNav() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-muted/10 lg:block lg:w-64 lg:flex-shrink-0 bg-white">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">VideoGenAI</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm">
            {sidebarLinks.map((link, index) => (
              <div key={index}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                    pathname === link.href && "bg-muted text-foreground font-medium",
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  {link.title}
                </Link>
                {link.submenu && (
                  <div className="ml-4 mt-1 grid gap-1">
                    {link.submenu.map((sublink, subindex) => (
                      <Link
                        key={subindex}
                        href={sublink.href}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground text-xs",
                          pathname === sublink.href && "bg-muted text-foreground font-medium",
                        )}
                      >
                        <sublink.icon className="h-3.5 w-3.5" />
                        {sublink.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <div className="rounded-lg border bg-card p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Pro Plan</p>
                <p className="text-xs text-muted-foreground">15 videos/month</p>
              </div>
            </div>
            <div className="mt-3">
              <Link href="/settings/billing">
                <div className="text-xs text-center py-1 w-full rounded-md bg-primary text-primary-foreground hover:bg-primary/90">
                  Manage Subscription
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

