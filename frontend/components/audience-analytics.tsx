"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ageData = [
  { name: "18-24", value: 25 },
  { name: "25-34", value: 35 },
  { name: "35-44", value: 20 },
  { name: "45-54", value: 10 },
  { name: "55+", value: 10 },
]

const genderData = [
  { name: "Male", value: 65, fill: "#1E88E5" },
  { name: "Female", value: 32, fill: "#E91E63" },
  { name: "Other", value: 3, fill: "#7CB342" },
]

const locationData = [
  { name: "United States", value: 45 },
  { name: "United Kingdom", value: 12 },
  { name: "Canada", value: 8 },
  { name: "Australia", value: 7 },
  { name: "Germany", value: 5 },
  { name: "Other", value: 23 },
]

const deviceData = [
  { name: "Mobile", value: 60, fill: "#FF9800" },
  { name: "Desktop", value: 30, fill: "#2196F3" },
  { name: "Tablet", value: 8, fill: "#4CAF50" },
  { name: "TV", value: 2, fill: "#9C27B0" },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82CA9D"]

export function AudienceAnalytics() {
  return (
    <Tabs defaultValue="demographics">
      <TabsList>
        <TabsTrigger value="demographics">Demographics</TabsTrigger>
        <TabsTrigger value="geography">Geography</TabsTrigger>
        <TabsTrigger value="devices">Devices</TabsTrigger>
      </TabsList>
      <TabsContent value="demographics" className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <div className="h-[300px]">
          <h3 className="text-lg font-medium mb-2">Age Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
              <Bar dataKey="value" fill="#8884d8">
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-[300px]">
          <h3 className="text-lg font-medium mb-2">Gender Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              />
              <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </TabsContent>
      <TabsContent value="geography" className="h-[400px] pt-4">
        <h3 className="text-lg font-medium mb-2">Geographic Distribution</h3>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={locationData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={100} />
            <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
            <Bar dataKey="value" fill="#8884d8">
              {locationData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </TabsContent>
      <TabsContent value="devices" className="h-[400px] pt-4">
        <h3 className="text-lg font-medium mb-2">Device Distribution</h3>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={deviceData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            />
            <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </TabsContent>
    </Tabs>
  )
}

