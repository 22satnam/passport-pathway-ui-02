import { useState } from "react";
import { Eye, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProgressTracker } from "./ProgressTracker";

interface ApplicationStep {
  name: string;
  status: "completed" | "processing" | "pending";
  date: string | null;
  details?: string;
  icon?: string;
}

interface CompletedApplication {
  id: string;
  bookingId: string;
  country: string;
  visaType: string;
  submittedDate: string;
  steps: ApplicationStep[];
}

interface CompletedApplicationCardProps {
  application: CompletedApplication;
}

export const CompletedApplicationCard = ({ application }: CompletedApplicationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const completedSteps = application.steps.filter(step => step.status === "completed").length;
  const totalSteps = application.steps.length;
  
  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 border-0">
      <CardHeader>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 font-mono text-sm">
              {application.bookingId}
            </Badge>
            <Badge 
              variant="secondary"
              className="bg-processing text-processing-foreground"
            >
              In Progress
            </Badge>
          </div>
          
          <div>
            <h3 className="font-bold text-xl text-foreground mb-1">
              {application.country} – {application.visaType}
            </h3>
            <p className="text-sm text-muted-foreground">
              Started: {new Date(application.submittedDate).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-sm text-muted-foreground">
                Progress: {completedSteps}/{totalSteps} steps completed
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="gap-2"
            >
              <Eye className="h-4 w-4" />
              {isExpanded ? "Hide Details" : "View Details"}
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-0">
          <ProgressTracker steps={application.steps} />
        </CardContent>
      )}
    </Card>
  );
};