import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpRight,
  CalendarDays,
  DollarSign,
  LineChart,
  PlayCircle,
  Plus,
  TrendingUp,
  Upload,
  Users,
  Zap,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RevenueChart } from "@/components/revenue-chart"
import { VideoGenerationProgress } from "@/components/video-generation-progress"
import { RecentVideos } from "@/components/recent-videos"
import { ChannelStats } from "@/components/channel-stats"

export const metadata: Metadata = {
  title: "Dashboard | AI Video Generation Platform",
  description: "Monitor and control your AI video generation platform",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      {/* <DashboardHeader heading="Dashboard" text="Monitor and control your AI video generation platform.">
        <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
          <Plus className="mr-2 h-4 w-4" />
          New Video Project
        </Button>
      </DashboardHeader> */}

      {/* Welcome Card */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-none shadow-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Welcome back, Creator!</h2>
              <p className="text-muted-foreground">
                Your AI video generation platform is ready to create more revenue-generating content.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="shadow-sm">
                <PlayCircle className="mr-2 h-4 w-4" />
                Quick Start Guide
              </Button>
              <Button className="shadow-sm bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                <Zap className="mr-2 h-4 w-4" />
                Create New Video
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-background border shadow-sm h-11">
          <TabsTrigger value="overview" className="text-sm">
            Overview
          </TabsTrigger>
          <TabsTrigger value="analytics" className="text-sm">
            Analytics
          </TabsTrigger>
          <TabsTrigger value="projects" className="text-sm">
            Projects
          </TabsTrigger>
          <TabsTrigger value="settings" className="text-sm">
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="shadow-sm hover:shadow-md transition-shadow border-muted">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <div className="p-2 bg-primary/10 rounded-full">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,231.89</div>
                <div className="flex items-center pt-1 space-x-1">
                  <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-xs text-green-500 font-medium">+20.1%</span>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow border-muted">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Videos Published</CardTitle>
                <div className="p-2 bg-primary/10 rounded-full">
                  <PlayCircle className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <div className="flex items-center pt-1 space-x-1">
                  <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-xs text-green-500 font-medium">+12</span>
                  <span className="text-xs text-muted-foreground">since last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow border-muted">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2M</div>
                <div className="flex items-center pt-1 space-x-1">
                  <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-xs text-green-500 font-medium">+573K</span>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-shadow border-muted">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">RPM Average</CardTitle>
                <div className="p-2 bg-primary/10 rounded-full">
                  <TrendingUp className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$3.52</div>
                <div className="flex items-center pt-1 space-x-1">
                  <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-xs text-green-500 font-medium">+$0.24</span>
                  <span className="text-xs text-muted-foreground">from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 shadow-sm hover:shadow-md transition-shadow border-muted">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>Revenue breakdown by platform and source</CardDescription>
                </div>
                <Link href="/analytics" className="flex items-center text-xs text-primary hover:underline">
                  <span>View Details</span>
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </CardHeader>
              <CardContent className="pl-2">
                <RevenueChart />
              </CardContent>
            </Card>
            <Card className="col-span-3 shadow-sm hover:shadow-md transition-shadow border-muted">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Active Video Generation</CardTitle>
                  <CardDescription>Current video generation progress</CardDescription>
                </div>
                <Button variant="outline" size="sm" className="h-8">
                  <PlayCircle className="mr-1 h-3.5 w-3.5" />
                  <span className="text-xs">View All</span>
                </Button>
              </CardHeader>
              <CardContent>
                <VideoGenerationProgress />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4 shadow-sm hover:shadow-md transition-shadow border-muted">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Videos</CardTitle>
                  <CardDescription>Your recently published and in-progress videos</CardDescription>
                </div>
                <Link href="/videos" className="flex items-center text-xs text-primary hover:underline">
                  <span>View All</span>
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </CardHeader>
              <CardContent>
                <RecentVideos />
              </CardContent>
            </Card>
            <Card className="col-span-3 shadow-sm hover:shadow-md transition-shadow border-muted">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Channel Stats</CardTitle>
                  <CardDescription>Performance metrics across platforms</CardDescription>
                </div>
                <Link href="/analytics" className="flex items-center text-xs text-primary hover:underline">
                  <span>View Details</span>
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </CardHeader>
              <CardContent>
                <ChannelStats />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card className="shadow-sm hover:shadow-md transition-shadow border-muted">
            <CardHeader>
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>Detailed performance metrics for your AI-generated videos</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <LineChart className="mx-auto h-12 w-12 text-primary/50" />
                <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                  Detailed analytics will appear here, showing performance across YouTube, Facebook, and other
                  platforms.
                </p>
                <Button className="mt-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                  <LineChart className="mr-2 h-4 w-4" />
                  View Full Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <Card className="shadow-sm hover:shadow-md transition-shadow border-muted">
            <CardHeader>
              <CardTitle>Video Projects</CardTitle>
              <CardDescription>Manage your video generation projects</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="mx-auto h-12 w-12 text-primary/50" />
                <h3 className="mt-4 text-lg font-medium">Video Projects</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                  Create and manage your AI video generation projects here. Start with a new project or continue working
                  on existing ones.
                </p>
                <div className="flex gap-4 justify-center mt-6">
                  <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Import Project
                  </Button>
                  <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    <Plus className="mr-2 h-4 w-4" />
                    New Video Project
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card className="shadow-sm hover:shadow-md transition-shadow border-muted">
            <CardHeader>
              <CardTitle>Platform Settings</CardTitle>
              <CardDescription>Configure your AI video generation platform</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <CalendarDays className="mx-auto h-12 w-12 text-primary/50" />
                <h3 className="mt-4 text-lg font-medium">Platform Settings</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md">
                  Configure AI models, API keys, platform connections, and other settings to customize your video
                  generation experience.
                </p>
                <Button className="mt-6">Configure Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

