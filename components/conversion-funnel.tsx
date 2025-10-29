"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const funnelData = [
  { stage: "Sessions", users: 125000, percentage: 100, color: "hsl(var(--chart-1))" },
  { stage: "Product Views", users: 87500, percentage: 70, color: "hsl(var(--chart-2))" },
  { stage: "Add to Cart", users: 37500, percentage: 30, color: "hsl(var(--chart-3))" },
  { stage: "Checkout", users: 11250, percentage: 9, color: "hsl(var(--chart-4))" },
  { stage: "Purchase", users: 4750, percentage: 3.8, color: "hsl(var(--chart-5))" },
]

const dropOffAnalysis = [
  {
    from: "Sessions",
    to: "Product Views",
    dropOff: 30,
    impact: "Medium",
    insight: "Homepage engagement could be improved",
  },
  { from: "Product Views", to: "Add to Cart", dropOff: 57, impact: "High", insight: "Product pages need better CTAs" },
  { from: "Add to Cart", to: "Checkout", dropOff: 70, impact: "Critical", insight: "Cart abandonment is high" },
  { from: "Checkout", to: "Purchase", dropOff: 58, impact: "Critical", insight: "Checkout flow friction identified" },
]

export function ConversionFunnel() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Conversion Funnel Analysis</CardTitle>
          <CardDescription>User journey from session to purchase</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              users: {
                label: "Users",
                color: "hsl(var(--chart-1))",
              },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} layout="vertical" margin={{ left: 100, right: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis type="category" dataKey="stage" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="users" radius={[0, 4, 4, 0]}>
                  {funnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {funnelData.map((stage) => (
              <div key={stage.stage} className="space-y-1 text-center">
                <p className="text-2xl font-bold text-foreground">{stage.users.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{stage.stage}</p>
                <p className="text-xs font-medium text-foreground">{stage.percentage}%</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Drop-Off Analysis</CardTitle>
          <CardDescription>Identifying friction points in the user journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dropOffAnalysis.map((item, index) => (
              <div key={index} className="rounded-lg border border-border bg-card p-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium text-foreground">
                      {item.from} → {item.to}
                    </h4>
                    <p className="text-xs text-muted-foreground">{item.insight}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-destructive">{item.dropOff}%</p>
                    <p className="text-xs text-muted-foreground">drop-off</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Impact:</span>
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                      item.impact === "Critical"
                        ? "bg-destructive/10 text-destructive"
                        : item.impact === "High"
                          ? "bg-chart-1/10 text-chart-1"
                          : "bg-chart-2/10 text-chart-2"
                    }`}
                  >
                    {item.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Key Findings</CardTitle>
            <CardDescription>Actionable insights from funnel analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                <span className="text-sm font-bold text-destructive">1</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Checkout drop-off reduced from 12% to 8%</p>
                <p className="text-xs text-muted-foreground">After implementing one-click checkout</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-1/10">
                <span className="text-sm font-bold text-chart-1">2</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Cart abandonment remains high at 70%</p>
                <p className="text-xs text-muted-foreground">Recommend email recovery campaigns</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-2/10">
                <span className="text-sm font-bold text-chart-2">3</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Overall conversion rate: 3.8%</p>
                <p className="text-xs text-muted-foreground">+0.4% improvement from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Impact</CardTitle>
            <CardDescription>Business outcomes from optimization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Revenue Increase</span>
                <span className="font-medium text-chart-2">+8.2%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Additional Monthly Revenue</span>
                <span className="font-medium text-foreground">$182,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Avg Order Value</span>
                <span className="font-medium text-foreground">$127</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Orders (30d)</span>
                <span className="font-medium text-foreground">18,897</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
