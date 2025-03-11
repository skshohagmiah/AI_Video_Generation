"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const monthlyData = [
  {
    name: "Jan",
    youtube: 400000,
    facebook: 300000,
  },
  {
    name: "Feb",
    youtube: 500000,
    facebook: 350000,
  },
  {
    name: "Mar",
    youtube: 600000,
    facebook: 400000,
  },
  {
    name: "Apr",
    youtube: 700000,
    facebook: 450000,
  },
  {
    name: "May",
    youtube: 800000,
    facebook: 500000,
  },
  {
    name: "Jun",
    youtube: 900000,
    facebook: 550000,
  },
]

interface ViewsAnalyticsProps {
  detailed?: boolean
}

export function ViewsAnalytics({ detailed = false }: ViewsAnalyticsProps) {
  if (detailed) {
    return (
      <Tabs defaultValue="line">
        <TabsList>
          <TabsTrigger value="line">Line Chart</TabsTrigger>
          <TabsTrigger value="area">Area Chart</TabsTrigger>
        </TabsList>
        <TabsContent value="line" className="h-[400px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value.toLocaleString()}`, "Views"]} />
              <Legend />
              <Line type="monotone" dataKey="youtube" name="YouTube" stroke="#FF0000" strokeWidth={2} />
              <Line type="monotone" dataKey="facebook" name="Facebook" stroke="#1877F2" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </TabsContent>
        <TabsContent value="area" className="h-[400px] pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value.toLocaleString()}`, "Views"]} />
              <Legend />
              <Area type="monotone" dataKey="youtube" name="YouTube" stackId="1" fill="#FF0000" stroke="#FF0000" />
              <Area type="monotone" dataKey="facebook" name="Facebook" stackId="1" fill="#1877F2" stroke="#1877F2" />
            </AreaChart>
          </ResponsiveContainer>
        </TabsContent>
      </Tabs>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={monthlyData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => [`${value.toLocaleString()}`, "Views"]} />
        <Legend />
        <Line type="monotone" dataKey="youtube" name="YouTube" stroke="#FF0000" strokeWidth={2} />
        <Line type="monotone" dataKey="facebook" name="Facebook" stroke="#1877F2" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

