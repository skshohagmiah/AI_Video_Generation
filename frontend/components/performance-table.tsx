"use client"

import { Button } from "@/components/ui/button"

import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, ExternalLink, MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const videos = [
  {
    id: "v1",
    title: "Top 10 AI Tools for 2025",
    platform: "both",
    views: "450K",
    revenue: "$1,350",
    change: "+12%",
    trending: "up",
  },
  {
    id: "v2",
    title: "How to Invest in AI Stocks",
    platform: "youtube",
    views: "380K",
    revenue: "$1,140",
    change: "+8%",
    trending: "up",
  },
  {
    id: "v3",
    title: "5 AI Tools That Will Replace Your Job",
    platform: "both",
    views: "320K",
    revenue: "$960",
    change: "+5%",
    trending: "up",
  },
  {
    id: "v4",
    title: "AI vs Human: Who Wins?",
    platform: "facebook",
    views: "290K",
    revenue: "$870",
    change: "-3%",
    trending: "down",
  },
  {
    id: "v5",
    title: "The Future of AI in 2025",
    platform: "youtube",
    views: "250K",
    revenue: "$750",
    change: "+2%",
    trending: "up",
  },
]

export function PerformanceTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Views</TableHead>
          <TableHead>Revenue</TableHead>
          <TableHead>Change</TableHead>
          <TableHead className="w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {videos.map((video) => (
          <TableRow key={video.id}>
            <TableCell className="font-medium">{video.title}</TableCell>
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
            <TableCell>{video.views}</TableCell>
            <TableCell>{video.revenue}</TableCell>
            <TableCell>
              <div className="flex items-center gap-1">
                {video.trending === "up" ? (
                  <>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-green-500">{video.change}</span>
                  </>
                ) : (
                  <>
                    <TrendingDown className="h-4 w-4 text-red-500" />
                    <span className="text-red-500">{video.change}</span>
                  </>
                )}
              </div>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <BarChart className="mr-2 h-4 w-4" />
                    Analytics
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

