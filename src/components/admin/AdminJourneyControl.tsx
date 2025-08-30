import { useState } from "react";
import { Check, Clock, AlertCircle, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  status: "done" | "in-progress" | "pending";
}

const initialSteps: JourneyStep[] = [
  { id: 1, title: "Payment Done", description: "Payment received and confirmed", status: "done" },
  { id: 2, title: "Expert Connect", description: "Connect with visa expert", status: "pending" },
  { id: 3, title: "Appointment Booking", description: "Schedule visa appointment", status: "pending" },
  { id: 4, title: "Documentation", description: "Prepare required documents", status: "pending" },
  { id: 5, title: "Expert Review", description: "Expert reviews application", status: "pending" },
  { id: 6, title: "Delivery of Docs", description: "Documents delivered to embassy", status: "pending" },
  { id: 7, title: "Ready for Submission", description: "Application ready for final submission", status: "pending" },
];

export const AdminJourneyControl = () => {
  const [steps, setSteps] = useState<JourneyStep[]>(initialSteps);
  const { toast } = useToast();

  const updateStepStatus = (stepId: number, newStatus: "done" | "in-progress" | "pending") => {
    setSteps(prev => prev.map(step => 
      step.id === stepId ? { ...step, status: newStatus } : step
    ));

    const step = steps.find(s => s.id === stepId);
    if (step && newStatus === "done") {
      toast({
        title: "Status Updated",
        description: `"${step.title}" marked as completed. User will be notified.`,
      });
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "done":
        return <Check className="h-4 w-4 text-green-500" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "done":
        return <Badge className="bg-green-500 hover:bg-green-600">✅ Done</Badge>;
      case "in-progress":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">⏳ In Progress</Badge>;
      default:
        return <Badge variant="secondary">⏸️ Pending</Badge>;
    }
  };

  const completedSteps = steps.filter(step => step.status === "done").length;
  const progressPercentage = (completedSteps / steps.length) * 100;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-gradient-primary shadow-primary">
          <MapPin className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Journey Control Center</h1>
          <p className="text-muted-foreground">Manage 7-step visa application process</p>
        </div>
      </div>

      {/* Progress Overview */}
      <Card className="bg-gradient-subtle border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl text-primary">Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={progressPercentage} className="h-3" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {completedSteps} of {steps.length} steps completed
              </span>
              <span className="font-semibold text-primary">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Journey Steps */}
      <div className="grid gap-4">
        {steps.map((step, index) => (
          <Card key={step.id} className="bg-gradient-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/20">
                    <span className="text-sm font-bold text-primary">{step.id}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground flex items-center gap-2">
                      {step.title}
                      {getStatusIcon(step.status)}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {getStatusBadge(step.status)}
                  <Select
                    value={step.status}
                    onValueChange={(value: "done" | "in-progress" | "pending") => 
                      updateStepStatus(step.id, value)
                    }
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">⏸️ Pending</SelectItem>
                      <SelectItem value="in-progress">⏳ In Progress</SelectItem>
                      <SelectItem value="done">✅ Done</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-primary/5 border-primary/30">
        <CardHeader>
          <CardTitle className="text-lg text-primary">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button 
              onClick={() => {
                const nextPending = steps.find(s => s.status === "pending");
                if (nextPending) {
                  updateStepStatus(nextPending.id, "in-progress");
                }
              }}
              className="bg-gradient-primary hover:bg-gradient-hover"
            >
              Start Next Step
            </Button>
            <Button 
              variant="outline"
              onClick={() => {
                const inProgress = steps.find(s => s.status === "in-progress");
                if (inProgress) {
                  updateStepStatus(inProgress.id, "done");
                }
              }}
              className="border-primary/30 hover:bg-primary/10"
            >
              Complete Current Step
            </Button>
            <Button 
              variant="secondary"
              onClick={() => {
                toast({
                  title: "Notification Sent",
                  description: "User has been notified of current progress.",
                });
              }}
            >
              Notify User
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};