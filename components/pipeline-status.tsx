"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2Icon, ClockIcon, AlertCircleIcon } from "lucide-react"

const pipelineStages = [
  {
    name: "Data Ingestion",
    status: "success",
    duration: "8m 32s",
    lastRun: "12 minutes ago",
    details: "Snowpipe loaded 2.4M rows from transactional systems",
  },
  {
    name: "dbt Staging Models",
    status: "success",
    duration: "4m 18s",
    lastRun: "12 minutes ago",
    details: "12 staging models executed successfully",
  },
  {
    name: "dbt Intermediate Models",
    status: "success",
    duration: "6m 45s",
    lastRun: "12 minutes ago",
    details: "18 intermediate transformations completed",
  },
  {
    name: "dbt Mart Models",
    status: "success",
    duration: "9m 12s",
    lastRun: "12 minutes ago",
    details: "17 mart models built (fact_orders, dim_customers, etc.)",
  },
  {
    name: "Great Expectations Validation",
    status: "success",
    duration: "2m 34s",
    lastRun: "12 minutes ago",
    details: "156 expectations passed, 0 failed",
  },
  {
    name: "Looker Cache Refresh",
    status: "success",
    duration: "1m 08s",
    lastRun: "12 minutes ago",
    details: "Dashboard queries cached for optimal performance",
  },
]

const dbtModels = [
  { name: "stg_orders", type: "staging", rows: "1.2M", runtime: "18s" },
  { name: "stg_customers", type: "staging", rows: "450K", runtime: "12s" },
  { name: "stg_products", type: "staging", rows: "25K", runtime: "3s" },
  { name: "int_order_items_joined", type: "intermediate", rows: "3.4M", runtime: "45s" },
  { name: "int_customer_orders", type: "intermediate", rows: "450K", runtime: "28s" },
  { name: "fact_orders", type: "mart", rows: "1.2M", runtime: "62s" },
  { name: "dim_customers", type: "mart", rows: "450K", runtime: "34s" },
  { name: "dim_products", type: "mart", rows: "25K", runtime: "8s" },
]

export function PipelineStatus() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Pipeline Execution Status</CardTitle>
              <CardDescription>Daily orchestration window: 47 minutes (target: &lt;1 hour)</CardDescription>
            </div>
            <Badge variant="outline" className="bg-chart-2/10 text-chart-2 border-chart-2/20">
              <CheckCircle2Icon className="mr-1 h-3 w-3" />
              All Systems Operational
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pipelineStages.map((stage, index) => (
              <div key={stage.name} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-chart-2/10">
                  {stage.status === "success" ? (
                    <CheckCircle2Icon className="h-4 w-4 text-chart-2" />
                  ) : stage.status === "running" ? (
                    <ClockIcon className="h-4 w-4 text-chart-1" />
                  ) : (
                    <AlertCircleIcon className="h-4 w-4 text-destructive" />
                  )}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-foreground">{stage.name}</h4>
                    <span className="text-xs text-muted-foreground">{stage.duration}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{stage.details}</p>
                  <p className="text-xs text-muted-foreground">Last run: {stage.lastRun}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>dbt Model Performance</CardTitle>
          <CardDescription>Execution metrics for key transformations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-xs font-medium text-muted-foreground">Model Name</th>
                  <th className="pb-3 text-left text-xs font-medium text-muted-foreground">Type</th>
                  <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Rows</th>
                  <th className="pb-3 text-right text-xs font-medium text-muted-foreground">Runtime</th>
                </tr>
              </thead>
              <tbody>
                {dbtModels.map((model) => (
                  <tr key={model.name} className="border-b border-border/50">
                    <td className="py-3 text-sm font-mono text-foreground">{model.name}</td>
                    <td className="py-3">
                      <Badge variant="outline" className="text-xs">
                        {model.type}
                      </Badge>
                    </td>
                    <td className="py-3 text-right text-sm text-foreground">{model.rows}</td>
                    <td className="py-3 text-right text-sm text-muted-foreground">{model.runtime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
