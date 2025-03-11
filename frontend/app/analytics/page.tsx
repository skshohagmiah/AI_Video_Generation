import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RevenueAnalytics } from "@/components/revenue-analytics"
import { ViewsAnalytics } from "@/components/views-analytics"
import { AudienceAnalytics } from "@/components/audience-analytics"
import { PerformanceTable } from "@/components/performance-table"

export const metadata: Metadata = {
  title: "Analytics | AI Video Generation Platform",
  description: "Detailed analytics for your AI-generated videos",
}

export default function AnalyticsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Analytics Dashboard" text="Track performance metrics for your AI-generated videos." />
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="views">Views</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Revenue</CardTitle>
                <CardDescription>All platforms combined</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$24,892.50</div>
                <p className="text-xs text-muted-foreground">+18.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Views</CardTitle>
                <CardDescription>All platforms combined</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8.2M</div>
                <p className="text-xs text-muted-foreground">+24.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Average RPM</CardTitle>
                <CardDescription>Revenue per 1,000 views</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">$3.04</div>
                <p className="text-xs text-muted-foreground">-0.8% from last month</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Revenue by platform and source</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <RevenueAnalytics />
              </CardContent>
            </Card>
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Views Breakdown</CardTitle>
                <CardDescription>Views by platform over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ViewsAnalytics />
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Videos</CardTitle>
              <CardDescription>Your best performing videos across all platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <PerformanceTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
              <CardDescription>Detailed revenue breakdown by platform and source</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <RevenueAnalytics detailed />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="views" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Views Analytics</CardTitle>
              <CardDescription>Detailed views breakdown by platform and source</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <ViewsAnalytics detailed />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="audience" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audience Analytics</CardTitle>
              <CardDescription>Detailed audience demographics and engagement metrics</CardDescription>
            </CardHeader>
            <CardContent className="h-[500px]">
              <AudienceAnalytics />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

