import { ArrowRight, CreditCard, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OngoingApplication {
  id: string;
  country: string;
  visaType: string;
  status: string;
  currentStep: string;
  isPaid: boolean;
}

interface OngoingApplicationCardProps {
  application: OngoingApplication;
}

export const OngoingApplicationCard = ({ application }: OngoingApplicationCardProps) => {
  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 border-0">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <h3 className="font-bold text-lg text-foreground">
              {application.country} – {application.visaType}
            </h3>
          </div>
          <Badge 
            variant={application.status === "Incomplete" ? "destructive" : "secondary"}
            className="shrink-0"
          >
            {application.status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <CreditCard className="h-4 w-4" />
          <span className="text-sm">{application.currentStep}</span>
        </div>
        
        <Button className="w-full bg-gradient-primary hover:bg-primary/90 text-white shadow-primary">
          Continue Application
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};