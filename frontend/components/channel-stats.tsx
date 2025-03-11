"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const youtubeData = [
  { name: "Mon", views: 4000, subscribers: 40 },
  { name: "Tue", views: 3000, subscribers: 30 },
  { name: "Wed", views: 5000, subscribers: 50 },
  { name: "Thu", views: 7000, subscribers: 70 },
  { name: "Fri", views: 6000, subscribers: 60 },
  { name: "Sat", views: 8000, subscribers: 80 },
  { name: "Sun", views: 9000, subscribers: 90 },
]

const facebookData = [
  { name: "Mon", views: 5000, followers: 50 },
  { name: "Tue", views: 4000, followers: 40 },
  { name: "Wed", views: 6000, followers: 60 },
  { name: "Thu", views: 8000, followers: 80 },
  { name: "Fri", views: 7000, followers: 70 },
  { name: "Sat", views: 9000, followers: 90 },
  { name: "Sun", views: 10000, followers: 100 },
]

export function ChannelStats() {
  return (
    <Tabs defaultValue="youtube">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="youtube">YouTube</TabsTrigger>
        <TabsTrigger value="facebook">Facebook</TabsTrigger>
      </TabsList>
      <TabsContent value="youtube" className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">Subscribers</div>
              <div className="text-2xl font-bold">24.5K</div>
              <div className="text-xs text-green-500">+1.2K this week</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">Watch Time</div>
              <div className="text-2xl font-bold">142K hrs</div>
              <div className="text-xs text-green-500">+12K this week</div>
            </CardContent>
          </Card>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={youtubeData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#FF0000" strokeWidth={2} name="Views" />
              <Line type="monotone" dataKey="subscribers" stroke="#4CAF50" strokeWidth={2} name="New Subscribers" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>
      <TabsContent value="facebook" className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">Followers</div>
              <div className="text-2xl font-bold">32.8K</div>
              <div className="text-xs text-green-500">+1.8K this week</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="text-sm font-medium text-muted-foreground">Minutes Viewed</div>
              <div className="text-2xl font-bold">215K</div>
              <div className="text-xs text-green-500">+18K this week</div>
            </CardContent>
          </Card>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={facebookData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="views" stroke="#1877F2" strokeWidth={2} name="Views" />
              <Line type="monotone" dataKey="followers" stroke="#4CAF50" strokeWidth={2} name="New Followers" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>
    </Tabs>
  )
}

