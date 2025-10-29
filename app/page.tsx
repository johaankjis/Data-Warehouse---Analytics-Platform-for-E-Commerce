import { Suspense } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OverviewDashboard } from "@/components/overview-dashboard"
import { DataQualityPanel } from "@/components/data-quality-panel"
import { PipelineStatus } from "@/components/pipeline-status"
import { ConversionFunnel } from "@/components/conversion-funnel"
import { CohortAnalysis } from "@/components/cohort-analysis"
import { StarSchemaViewer } from "@/components/star-schema-viewer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-foreground">E-Commerce Analytics Platform</h1>
                <p className="text-sm text-muted-foreground">Data Warehouse & BI Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Environment:</span>
              <span className="rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary">Production</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
            <TabsTrigger value="quality">Data Quality</TabsTrigger>
            <TabsTrigger value="conversion">Conversion</TabsTrigger>
            <TabsTrigger value="cohorts">Cohorts</TabsTrigger>
            <TabsTrigger value="schema">Schema</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Suspense fallback={<div>Loading...</div>}>
              <OverviewDashboard />
            </Suspense>
          </TabsContent>

          <TabsContent value="pipeline" className="space-y-6">
            <Suspense fallback={<div>Loading...</div>}>
              <PipelineStatus />
            </Suspense>
          </TabsContent>

          <TabsContent value="quality" className="space-y-6">
            <Suspense fallback={<div>Loading...</div>}>
              <DataQualityPanel />
            </Suspense>
          </TabsContent>

          <TabsContent value="conversion" className="space-y-6">
            <Suspense fallback={<div>Loading...</div>}>
              <ConversionFunnel />
            </Suspense>
          </TabsContent>

          <TabsContent value="cohorts" className="space-y-6">
            <Suspense fallback={<div>Loading...</div>}>
              <CohortAnalysis />
            </Suspense>
          </TabsContent>

          <TabsContent value="schema" className="space-y-6">
            <Suspense fallback={<div>Loading...</div>}>
              <StarSchemaViewer />
            </Suspense>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
