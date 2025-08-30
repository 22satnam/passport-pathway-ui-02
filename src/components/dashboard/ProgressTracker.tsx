import { 
  CheckCircle, 
  Clock, 
  Loader2, 
  CreditCard, 
  Users, 
  Calendar, 
  FileText, 
  Eye, 
  Truck, 
  Flag 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ApplicationStep {
  name: string;
  status: "completed" | "processing" | "pending";
  date: string | null;
  details?: string;
}

interface ProgressTrackerProps {
  steps: ApplicationStep[];
}

const getStepIcon = (stepName: string, status: string) => {
  const iconMap: Record<string, any> = {
    "Payment Completed": CreditCard,
    "Expert Connect": Users,
    "Appointment Booking": Calendar,
    "Documentation": FileText,
    "Expert Review": Eye,
    "Document Delivery": Truck,
    "Application Submission": Flag
  };
  
  const IconComponent = iconMap[stepName] || FileText;
  
  if (status === "completed") {
    return <CheckCircle className="h-5 w-5 text-success" />;
  } else if (status === "processing") {
    return <Loader2 className="h-5 w-5 text-processing animate-spin" />;
  } else {
    return <Clock className="h-4 w-4 text-muted-foreground" />;
  }
};

const getStepStyles = (status: string) => {
  switch (status) {
    case "completed":
      return "border-success bg-success/5";
    case "processing":
      return "border-processing bg-processing/5";
    default:
      return "border-muted bg-muted/20";
  }
};

export const ProgressTracker = ({ steps }: ProgressTrackerProps) => {
  return (
    <div className="space-y-3">
      <h4 className="font-semibold text-foreground mb-4">Application Journey</h4>
      
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            {/* Timeline indicator */}
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-10 h-10 rounded-full border-2 flex items-center justify-center shrink-0",
                getStepStyles(step.status)
              )}>
                {getStepIcon(step.name, step.status)}
              </div>
              {index < steps.length - 1 && (
                <div className={cn(
                  "w-0.5 h-8 mt-2",
                  step.status === "completed" ? "bg-success/30" : "bg-muted/50"
                )} />
              )}
            </div>
            
            {/* Step content */}
            <div className="flex-1 min-w-0 pb-4">
              <div className="flex items-center gap-2 mb-1">
                <h5 className="font-medium text-foreground">{step.name}</h5>
                {step.status === "completed" && step.date && (
                  <span className="text-xs text-success bg-success/10 px-2 py-1 rounded-full">
                    {new Date(step.date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short'
                    })}
                  </span>
                )}
                {step.status === "processing" && (
                  <span className="text-xs text-processing bg-processing/10 px-2 py-1 rounded-full">
                    In Progress
                  </span>
                )}
              </div>
              
              {step.details && (
                <p className="text-sm text-muted-foreground">{step.details}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};