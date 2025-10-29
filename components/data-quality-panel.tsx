"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2Icon, XCircleIcon, AlertTriangleIcon } from "lucide-react"

const qualityMetrics = [
  { label: "Schema Validation", passed: 47, failed: 0, coverage: 100 },
  { label: "Referential Integrity", passed: 38, failed: 0, coverage: 100 },
  { label: "Null Checks", passed: 52, failed: 1, coverage: 98 },
  { label: "Duplication Tests", passed: 19, failed: 0, coverage: 100 },
]

const expectations = [
  {
    suite: "orders_expectations",
    table: "fact_orders",
    tests: 42,
    passed: 42,
    failed: 0,
    status: "success",
    lastRun: "12m ago",
  },
  {
    suite: "customers_expectations",
    table: "dim_customers",
    tests: 38,
    passed: 38,
    failed: 0,
    status: "success",
    lastRun: "12m ago",
  },
  {
    suite: "products_expectations",
    table: "dim_products",
    tests: 28,
    passed: 27,
    failed: 1,
    status: "warning",
    lastRun: "12m ago",
  },
  {
    suite: "sessions_expectations",
    table: "fact_sessions",
    tests: 48,
    passed: 48,
    failed: 0,
    status: "success",
    lastRun: "12m ago",
  },
]

const recentIssues = [
  {
    severity: "warning",
    message: "Product description null rate at 3.2%",
    table: "dim_products",
    expectation: "expect_column_values_to_not_be_null",
    timestamp: "12 minutes ago",
  },
]

export function DataQualityPanel() {
  const totalTests = qualityMetrics.reduce((sum, m) => sum + m.passed + m.failed, 0)
  const totalPassed = qualityMetrics.reduce((sum, m) => sum + m.passed, 0)
  const overallCoverage = Math.round((totalPassed / totalTests) * 100)

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{totalTests}</div>
            <p className="text-xs text-muted-foreground mt-1">Across 4 expectation suites</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tests Passed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-chart-2">{totalPassed}</div>
            <p className="text-xs text-muted-foreground mt-1">Last run: 12 minutes ago</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tests Failed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{totalTests - totalPassed}</div>
            <p className="text-xs text-muted-foreground mt-1">Requires attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{overallCoverage}%</div>
            <p className="text-xs text-chart-2 mt-1">Target: ≥95% (achieved)</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quality Metrics by Category</CardTitle>
          <CardDescription>Great Expectations validation results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {qualityMetrics.map((metric) => (
            <div key={metric.label} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{metric.label}</span>
                <span className="text-sm text-muted-foreground">
                  {metric.passed} passed, {metric.failed} failed
                </span>
              </div>
              <Progress value={metric.coverage} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{metric.coverage}% coverage</span>
                <span>{metric.passed + metric.failed} tests</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Expectation Suites</CardTitle>
          <CardDescription>Validation status by data table</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expectations.map((suite) => (
              <div
                key={suite.suite}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-4"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                    {suite.status === "success" ? (
                      <CheckCircle2Icon className="h-5 w-5 text-chart-2" />
                    ) : suite.status === "warning" ? (
                      <AlertTriangleIcon className="h-5 w-5 text-chart-1" />
                    ) : (
                      <XCircleIcon className="h-5 w-5 text-destructive" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-foreground">{suite.suite}</h4>
                    <p className="text-xs text-muted-foreground">Table: {suite.table}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium text-foreground">{suite.tests} tests</p>
                    <p className="text-xs text-muted-foreground">
                      {suite.passed} passed, {suite.failed} failed
                    </p>
                  </div>
                  <Badge
                    variant={suite.status === "success" ? "outline" : "destructive"}
                    className={suite.status === "success" ? "bg-chart-2/10 text-chart-2 border-chart-2/20" : ""}
                  >
                    {suite.status === "success" ? "Passed" : "Warning"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {recentIssues.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Issues</CardTitle>
            <CardDescription>Data quality warnings and failures</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentIssues.map((issue, index) => (
                <div key={index} className="flex gap-3 rounded-lg border border-chart-1/20 bg-chart-1/5 p-4">
                  <AlertTriangleIcon className="h-5 w-5 shrink-0 text-chart-1" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">{issue.message}</p>
                    <p className="text-xs text-muted-foreground">
                      Table: {issue.table} • Expectation: {issue.expectation}
                    </p>
                    <p className="text-xs text-muted-foreground">{issue.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
