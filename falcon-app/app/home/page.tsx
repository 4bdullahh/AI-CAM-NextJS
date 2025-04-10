import {
  Activity,
  AlertTriangle,
  Camera,
  CheckCircle,
  Clock,
  Eye,
  HardHat,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { ViolationChart } from "@/components/violation-chart";
import { CameraStatusTable } from "@/components/camera-status-table";
import { RecentViolationsTable } from "@/components/recent-violations-table";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleString()}
              </span>
            </div>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="cameras">Cameras</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Violations
                    </CardTitle>
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">247</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last week
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Cameras
                    </CardTitle>
                    <Camera className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">18/20</div>
                    <p className="text-xs text-muted-foreground">
                      2 cameras offline
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Compliance Rate
                    </CardTitle>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">84%</div>
                    <p className="text-xs text-muted-foreground">
                      +2% from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Workers Monitored
                    </CardTitle>
                    <Users className="h-4 w-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">342</div>
                    <p className="text-xs text-muted-foreground">
                      Across 5 work zones
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Violation Trends</CardTitle>
                    <CardDescription>
                      Daily PPE violations across all cameras
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <ViolationChart />
                  </CardContent>
                </Card>

                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Violation Types</CardTitle>
                    <CardDescription>Distribution by PPE type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="flex items-center space-x-2 mr-4">
                          <HardHat className="h-4 w-4 text-orange-500" />
                          <span className="text-sm font-medium">Hard Hat</span>
                        </div>
                        <div className="ml-auto font-medium">124</div>
                        <div className="ml-2 w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="bg-orange-500 h-full rounded-full"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="flex items-center space-x-2 mr-4">
                          <Eye className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-medium">
                            Safety Glasses
                          </span>
                        </div>
                        <div className="ml-auto font-medium">86</div>
                        <div className="ml-2 w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="bg-blue-500 h-full rounded-full"
                            style={{ width: "35%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="flex items-center space-x-2 mr-4">
                          <Shield className="h-4 w-4 text-green-500" />
                          <span className="text-sm font-medium">
                            Safety Vest
                          </span>
                        </div>
                        <div className="ml-auto font-medium">37</div>
                        <div className="ml-2 w-1/2 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="bg-green-500 h-full rounded-full"
                            style={{ width: "15%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 grid-cols-1">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Recent Violations</CardTitle>
                    <CardDescription>
                      Latest detected PPE violations across all cameras
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentViolationsTable />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Advanced Analytics</CardTitle>
                  <CardDescription>
                    Detailed analysis of PPE compliance patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-[300px] items-center justify-center border rounded">
                    <p className="text-muted-foreground">
                      Select analytics parameters to view detailed reports
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cameras" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Camera Status</CardTitle>
                    <CardDescription>
                      Overview of all monitoring cameras
                    </CardDescription>
                  </div>
                  <Link
                    href="/cameras"
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    View all cameras
                    <Activity className="ml-1 h-4 w-4" />
                  </Link>
                </CardHeader>
                <CardContent>
                  <CameraStatusTable />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
