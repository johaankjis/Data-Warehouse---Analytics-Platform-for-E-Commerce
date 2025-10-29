import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon, DatabaseIcon, CheckCircle2Icon, ClockIcon } from "lucide-react"

const metrics = [
  { label: "Total Revenue", value: "$2.4M", change: "+8.2%", trend: "up", icon: ArrowUpIcon },
  { label: "Conversion Rate", value: "3.8%", change: "+0.4%", trend: "up", icon: CheckCircle2Icon },
  { label: "Avg Order Value", value: "$127", change: "-2.1%", trend: "down", icon: DatabaseIcon },
  { label: "Query Runtime", value: "3.2s", change: "-40%", trend: "up", icon: ClockIcon },
]

const pipelineMetrics = [
  { label: "dbt Models", value: "47", status: "success" },
  { label: "Data Quality Tests", value: "156", status: "success" },
  { label: "Test Coverage", value: "97%", status: "success" },
  { label: "Last Run", value: "12m ago", status: "success" },
]

export function OverviewDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.label}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{metric.label}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{metric.value}</div>
                <p
                  className={`text-xs ${metric.trend === "up" ? "text-chart-2" : "text-destructive"} flex items-center gap-1 mt-1`}
                >
                  {metric.trend === "up" ? <ArrowUpIcon className="h-3 w-3" /> : <ArrowDownIcon className="h-3 w-3" />}
                  {metric.change} from last month
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pipeline Health</CardTitle>
            <CardDescription>dbt & Great Expectations Status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {pipelineMetrics.map((metric) => (
              <div key={metric.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="h-4 w-4 text-chart-2" />
                  <span className="text-sm text-foreground">{metric.label}</span>
                </div>
                <span className="text-sm font-medium text-foreground">{metric.value}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Insights</CardTitle>
            <CardDescription>Key findings from analytics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-2/10">
                <ArrowUpIcon className="h-4 w-4 text-chart-2" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Checkout conversion improved</p>
                <p className="text-xs text-muted-foreground">12% drop-off reduced to 8% after UX changes</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-1/10">
                <DatabaseIcon className="h-4 w-4 text-chart-1" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Query performance optimized</p>
                <p className="text-xs text-muted-foreground">Star schema reduced runtime by 40%</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-4/10">
                <CheckCircle2Icon className="h-4 w-4 text-chart-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Data quality at 97%</p>
                <p className="text-xs text-muted-foreground">Schema incidents prevented by validation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
