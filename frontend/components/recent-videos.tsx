"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle2, Clock, Edit, ExternalLink, MoreHorizontal, PlayCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const videos = [
  {
    id: "v1",
    title: "Top 10 AI Tools for 2025",
    status: "in-progress",
    platform: "both",
    views: null,
    revenue: null,
    date: "In progress",
  },
  {
    id: "v2",
    title: "How to Invest in AI Stocks",
    status: "published",
    platform: "youtube",
    views: "124K",
    revenue: "$620",
    date: "2 days ago",
  },
  {
    id: "v3",
    title: "5 AI Tools That Will Replace Your Job",
    status: "published",
    platform: "both",
    views: "89K",
    revenue: "$445",
    date: "5 days ago",
  },
  {
    id: "v4",
    title: "AI vs Human: Who Wins?",
    status: "published",
    platform: "facebook",
    views: "210K",
    revenue: "$735",
    date: "1 week ago",
  },
]

export function RecentVideos() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Views</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {videos.map((video) => (
          <TableRow key={video.id}>
            <TableCell className="font-medium">{video.title}</TableCell>
            <TableCell>
              {video.status === "published" ? (
                <Badge className="bg-green-500">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Published
                </Badge>
              ) : (
                <Badge variant="outline">
                  <Clock className="mr-1 h-3 w-3" />
                  In Progress
                </Badge>
              )}
            </TableCell>
            <TableCell>
              {video.platform === "youtube" && (
                <Badge variant="outline" className="text-red-500 border-red-200">
                  YouTube
                </Badge>
              )}
              {video.platform === "facebook" && (
                <Badge variant="outline" className="text-blue-500 border-blue-200">
                  Facebook
                </Badge>
              )}
              {video.platform === "both" && (
                <div className="flex gap-1">
                  <Badge variant="outline" className="text-red-500 border-red-200">
                    YouTube
                  </Badge>
                  <Badge variant="outline" className="text-blue-500 border-blue-200">
                    Facebook
                  </Badge>
                </div>
              )}
            </TableCell>
            <TableCell>{video.views || "-"}</TableCell>
            <TableCell>{video.revenue || "-"}</TableCell>
            <TableCell>{video.date}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {video.status === "published" ? (
                    <>
                      <DropdownMenuItem>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Recreate
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Resume
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

