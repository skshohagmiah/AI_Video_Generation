"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const monthlyData = [
  {
    name: "Jan",
    youtube: 1200,
    facebook: 800,
    affiliate: 400,
    sponsorship: 200,
  },
  {
    name: "Feb",
    youtube: 1500,
    facebook: 1000,
    affiliate: 500,
    sponsorship: 300,
  },
  {
    name: "Mar",
    youtube: 1800,
    facebook: 1200,
    affiliate: 600,
    sponsorship: 400,
  },
  {
    name: "Apr",
    youtube: 2100,
    facebook: 1400,
    affiliate: 700,
    sponsorship: 500,
  },
  {
    name: "May",
    youtube: 2400,
    facebook: 1600,
    affiliate: 800,
    sponsorship: 600,
  },
  {
    name: "Jun",
    youtube: 2700,
    facebook: 1800,
    affiliate: 900,
    sponsorship: 700,
  },
]

const pieData = [
  { name: "YouTube AdSense", value: 11700, fill: "#FF0000" },
  { name: "Facebook In-Stream", value: 7800, fill: "#1877F2" },
  { name: "Affiliate Marketing", value: 3900, fill: "#4CAF50" },
  { name: "Sponsorships", value: 2700, fill: "#9C27B0" },
]

interface RevenueAnalyticsProps {
  detailed?: boolean
}

export function RevenueAnalytics({ detailed = false }: RevenueAnalyticsProps) {
  if (detailed) {
    return (
      <Tabs defaultValue="bar">
        <TabsList>
          <TabsTrigger value="bar">Bar Chart</TabsTrigger>
          <TabsTrigger value="area">Area Chart</TabsTrigger>
          <TabsTrigger value="pie">Pie Chart</TabsTrigger>
        </TabsList>
        <TabsContent value="bar" className="h-[400px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="youtube" name="YouTube AdSense" fill="#FF0000" />
              <Bar dataKey="facebook" name="Facebook In-Stream" fill="#1877F2" />
              <Bar dataKey="affiliate" name="Affiliate Marketing" fill="#4CAF50" />
              <Bar dataKey="sponsorship" name="Sponsorships" fill="#9C27B0" />
            </BarChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="area" className="h-[400px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="youtube"
                name="YouTube AdSense"
                stackId="1"
                fill="#FF0000"
                stroke="#FF0000"
              />
              <Area
                type="monotone"
                dataKey="facebook"
                name="Facebook In-Stream"
                stackId="1"
                fill="#1877F2"
                stroke="#1877F2"
              />
              <Area
                type="monotone"
                dataKey="affiliate"
                name="Affiliate Marketing"
                stackId="1"
                fill="#4CAF50"
                stroke="#4CAF50"
              />
              <Area
                type="monotone"
                dataKey="sponsorship"
                name="Sponsorships"
                stackId="1"
                fill="#9C27B0"
                stroke="#9C27B0"
              />
            </AreaChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="pie" className="h-[400px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={120}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              />
              <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={monthlyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="youtube" name="YouTube AdSense" fill="#FF0000" />
        <Bar dataKey="facebook" name="Facebook In-Stream" fill="#1877F2" />
        <Bar dataKey="affiliate" name="Affiliate Marketing" fill="#4CAF50" />
        <Bar dataKey="sponsorship" name="Sponsorships" fill="#9C27B0" />
      </BarChart>
    </ResponsiveContainer>
  )
}

