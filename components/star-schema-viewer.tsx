"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DatabaseIcon, TableIcon, KeyIcon } from "lucide-react"

const schema = {
  facts: [
    {
      name: "fact_orders",
      rows: "1.2M",
      columns: [
        { name: "order_id", type: "INTEGER", key: "PK" },
        { name: "customer_id", type: "INTEGER", key: "FK" },
        { name: "product_id", type: "INTEGER", key: "FK" },
        { name: "order_date", type: "DATE", key: null },
        { name: "quantity", type: "INTEGER", key: null },
        { name: "total_amount", type: "DECIMAL", key: null },
        { name: "discount_amount", type: "DECIMAL", key: null },
      ],
    },
    {
      name: "fact_sessions",
      rows: "3.4M",
      columns: [
        { name: "session_id", type: "VARCHAR", key: "PK" },
        { name: "customer_id", type: "INTEGER", key: "FK" },
        { name: "session_start", type: "TIMESTAMP", key: null },
        { name: "session_end", type: "TIMESTAMP", key: null },
        { name: "page_views", type: "INTEGER", key: null },
        { name: "converted", type: "BOOLEAN", key: null },
      ],
    },
  ],
  dimensions: [
    {
      name: "dim_customers",
      rows: "450K",
      columns: [
        { name: "customer_id", type: "INTEGER", key: "PK" },
        { name: "email", type: "VARCHAR", key: null },
        { name: "first_name", type: "VARCHAR", key: null },
        { name: "last_name", type: "VARCHAR", key: null },
        { name: "signup_date", type: "DATE", key: null },
        { name: "customer_segment", type: "VARCHAR", key: null },
        { name: "lifetime_value", type: "DECIMAL", key: null },
      ],
    },
    {
      name: "dim_products",
      rows: "25K",
      columns: [
        { name: "product_id", type: "INTEGER", key: "PK" },
        { name: "product_name", type: "VARCHAR", key: null },
        { name: "category", type: "VARCHAR", key: null },
        { name: "subcategory", type: "VARCHAR", key: null },
        { name: "price", type: "DECIMAL", key: null },
        { name: "cost", type: "DECIMAL", key: null },
      ],
    },
  ],
}

export function StarSchemaViewer() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Star Schema Architecture</CardTitle>
          <CardDescription>Snowflake data warehouse design for optimal query performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 p-4">
            <DatabaseIcon className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Snowflake Warehouse: ANALYTICS_WH</p>
              <p className="text-xs text-muted-foreground">Schema: PROD.MARTS • Query runtime: 3.2s avg (↓40%)</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Fact Tables</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {schema.facts.map((table) => (
              <Card key={table.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TableIcon className="h-4 w-4 text-chart-1" />
                      <CardTitle className="text-base">{table.name}</CardTitle>
                    </div>
                    <Badge variant="outline">{table.rows} rows</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {table.columns.map((column) => (
                      <div key={column.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          {column.key && <KeyIcon className="h-3 w-3 text-primary" />}
                          <span className="font-mono text-foreground">{column.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">{column.type}</span>
                          {column.key && (
                            <Badge variant="outline" className="text-xs">
                              {column.key}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-foreground">Dimension Tables</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {schema.dimensions.map((table) => (
              <Card key={table.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TableIcon className="h-4 w-4 text-chart-2" />
                      <CardTitle className="text-base">{table.name}</CardTitle>
                    </div>
                    <Badge variant="outline">{table.rows} rows</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {table.columns.map((column) => (
                      <div key={column.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          {column.key && <KeyIcon className="h-3 w-3 text-primary" />}
                          <span className="font-mono text-foreground">{column.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">{column.type}</span>
                          {column.key && (
                            <Badge variant="outline" className="text-xs">
                              {column.key}
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Schema Benefits</CardTitle>
          <CardDescription>Performance improvements from star schema design</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-2/10">
              <span className="text-sm font-bold text-chart-2">40%</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Query runtime reduction</p>
              <p className="text-xs text-muted-foreground">
                Optimized joins and denormalization improved analyst productivity
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-4/10">
              <span className="text-sm font-bold text-chart-4">35%</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Maintenance overhead reduction</p>
              <p className="text-xs text-muted-foreground">
                Clear separation of facts and dimensions simplified dbt models
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-chart-1/10">
              <span className="text-sm font-bold text-chart-1">5s</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Looker dashboard performance</p>
              <p className="text-xs text-muted-foreground">
                All dashboards load in under 5 seconds with cached queries
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
