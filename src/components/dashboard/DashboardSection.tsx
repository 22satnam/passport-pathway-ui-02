import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DashboardSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: React.ReactNode;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export const DashboardSection = ({ 
  title, 
  description, 
  icon: Icon, 
  children, 
  primaryAction,
  className = ""
}: DashboardSectionProps) => {
  return (
    <Card className={`section-card fade-in ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-primary shadow-primary">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
          {primaryAction && (
            <Button 
              onClick={primaryAction.onClick}
              className="bg-gradient-primary hover:bg-gradient-hover text-primary-foreground shadow-primary hover-glow"
            >
              {primaryAction.label}
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {children}
      </CardContent>
    </Card>
  );
};