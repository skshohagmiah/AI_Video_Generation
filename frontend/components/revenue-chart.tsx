"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    youtube: 400,
    facebook: 240,
    affiliate: 100,
    sponsorship: 50,
  },
  {
    name: "Feb",
    youtube: 500,
    facebook: 280,
    affiliate: 120,
    sponsorship: 80,
  },
  {
    name: "Mar",
    youtube: 600,
    facebook: 320,
    affiliate: 140,
    sponsorship: 100,
  },
  {
    name: "Apr",
    youtube: 700,
    facebook: 400,
    affiliate: 180,
    sponsorship: 150,
  },
  {
    name: "May",
    youtube: 800,
    facebook: 480,
    affiliate: 220,
    sponsorship: 180,
  },
  {
    name: "Jun",
    youtube: 1000,
    facebook: 600,
    affiliate: 280,
    sponsorship: 220,
  },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
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

