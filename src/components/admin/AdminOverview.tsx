import { FileText, Users, Calendar, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AdminOverview = () => {
  const stats = [
    { title: "Total Applications", value: "124", icon: FileText, color: "text-blue-500" },
    { title: "Active Applicants", value: "87", icon: Users, color: "text-green-500" },
    { title: "Pending Appointments", value: "23", icon: Calendar, color: "text-yellow-500" },
    { title: "Completed Applications", value: "56", icon: CheckCircle, color: "text-purple-500" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Comprehensive view of all visa applications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card border-border/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-subtle border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg text-primary">Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                <span className="text-sm">New application submitted</span>
                <span className="text-xs text-muted-foreground">2 min ago</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                <span className="text-sm">Appointment confirmed</span>
                <span className="text-xs text-muted-foreground">15 min ago</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                <span className="text-sm">Document uploaded</span>
                <span className="text-xs text-muted-foreground">1 hour ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-subtle border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg text-primary">Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Applications this week</span>
                <span className="font-semibold">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Approval rate</span>
                <span className="font-semibold text-green-600">94%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Average processing time</span>
                <span className="font-semibold">7 days</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};