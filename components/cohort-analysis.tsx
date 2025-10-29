"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const retentionData = [
  { month: "Month 0", jan: 100, feb: 100, mar: 100, apr: 100 },
  { month: "Month 1", jan: 68, feb: 72, mar: 75, apr: 78 },
  { month: "Month 2", jan: 52, feb: 58, mar: 62, apr: 65 },
  { month: "Month 3", jan: 42, feb: 48, mar: 52, apr: 56 },
  { month: "Month 4", jan: 36, feb: 42, mar: 46, apr: null },
  { month: "Month 5", jan: 32, feb: 38, mar: null, apr: null },
  { month: "Month 6", jan: 29, feb: null, mar: null, apr: null },
]

const cohortMetrics = [
  { cohort: "January 2024", size: 12500, retention30: 68, retention90: 42, ltv: 385 },
  { cohort: "February 2024", size: 14200, retention30: 72, retention90: 48, ltv: 412 },
  { cohort: "March 2024", size: 15800, retention30: 75, retention90: 52, ltv: 438 },
  { cohort: "April 2024", size: 16900, retention30: 78, retention90: 56, ltv: 465 },
]

export function CohortAnalysis() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Cohort Retention Analysis</CardTitle>
          <CardDescription>Customer retention by acquisition month</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              jan: {
                label: "January Cohort",
                color: "hsl(var(--chart-1))",
              },
              feb: {
                label: "February Cohort",
                color: "hsl(var(--chart-2))",
              },
              mar: {
                label: "March Cohort",
                color: "hsl(var(--chart-3))",
              },
              apr: {
                label: "April Cohort",
                color: "hsl(var(--chart-4))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={retentionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Line type="monotone" dataKey="jan" stroke="var(--color-jan)" strokeWidth={2} name="January" />
                <Line type="monotone" dataKey="feb" stroke="var(--color-feb)" strokeWidth={2} name="February" />
                <Line type="monotone" dataKey="mar" stroke="var(--color-mar)" strokeWidth={2} name="March" />
                <Line type="monotone" dataKey="apr" stroke="var(--color-apr)" strokeWidth={2} name="April" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cohort Metrics</CardTitle>
          <CardDescription>Key performance indicators by customer cohort</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-xs font-medium text-muted-foreground">Cohort</th>
                  <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Size</th>
                  <th className="pb-3 text-right text-xs font-medium text-muted-foreground">30-Day Retention</th>
                  <th className="pb-3 text-right text-xs font-medium text-muted-foreground">90-Day Retention</th>
                  <th className="pb-3 text-right text-xs font-medium text-muted-foreground">LTV</th>
                </tr>
              </thead>
              <tbody>
                {cohortMetrics.map((cohort) => (
                  <tr key={cohort.cohort} className="border-b border-border/50">
                    <td className="py-3 text-sm font-medium text-foreground">{cohort.cohort}</td>
                    <td className="py-3 text-right text-sm text-foreground">{cohort.size.toLocaleString()}</td>
                    <td className="py-3 text-right text-sm text-foreground">{cohort.retention30}%</td>
                    <td className="py-3 text-right text-sm text-foreground">{cohort.retention90}%</td>
                    <td className="py-3 text-right text-sm font-medium text-chart-2">${cohort.ltv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg 30-Day Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">73.3%</div>
            <p className="text-xs text-chart-2 mt-1">+5.2% from previous quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg 90-Day Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">49.5%</div>
            <p className="text-xs text-chart-2 mt-1">+6.8% from previous quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Customer LTV</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">$425</div>
            <p className="text-xs text-chart-2 mt-1">+12.4% from previous quarter</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Retention Insights</CardTitle>
          <CardDescription>Key findings from cohort analysis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-2/10">
              <span className="text-sm font-bold text-chart-2">↑</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Retention improving across all cohorts</p>
              <p className="text-xs text-muted-foreground">Recent cohorts show 10% better 30-day retention than Q1</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-4/10">
              <span className="text-sm font-bold text-chart-4">$</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">LTV increasing with better onboarding</p>
              <p className="text-xs text-muted-foreground">April cohort shows $80 higher LTV than January</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-1/10">
              <span className="text-sm font-bold text-chart-1">!</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Month 1-2 critical for retention</p>
              <p className="text-xs text-muted-foreground">Focus engagement campaigns on first 60 days</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
