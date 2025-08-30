import { MessageCircle, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardSection } from "./DashboardSection";

const supportOptions = [
  {
    id: "1",
    title: "Live Chat Support",
    description: "Get instant help from our visa experts",
    icon: MessageCircle,
    action: "Start Chat",
    available: true,
    responseTime: "< 2 mins"
  },
  {
    id: "2",
    title: "WhatsApp Support", 
    description: "Quick assistance via WhatsApp",
    icon: Phone,
    action: "Open WhatsApp",
    available: true,
    responseTime: "< 5 mins"
  },
  {
    id: "3",
    title: "Email Support",
    description: "Detailed queries and document assistance",
    icon: Mail,
    action: "Send Email",
    available: true,
    responseTime: "< 4 hours"
  }
];

export const SupportHelp = () => {
  return (
    <DashboardSection
      title="Support & Help"
      description="Direct access to chat support and expert assistance"
      icon={MessageCircle}
    >
      <div className="space-y-4">
        {supportOptions.map((option) => {
          const Icon = option.icon;
          return (
            <div 
              key={option.id}
              className="p-4 bg-gradient-card rounded-xl border hover-lift group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{option.title}</h4>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-xs text-success font-medium">
                        Available • {option.responseTime}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  size="sm" 
                  className="bg-gradient-primary hover:bg-gradient-hover text-primary-foreground shadow-primary"
                >
                  {option.action}
                  <ExternalLink className="h-3 w-3 ml-2" />
                </Button>
              </div>
            </div>
          );
        })}
        
        <div className="pt-4 border-t border-border">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-3">
              Need immediate assistance?
            </p>
            <Button className="bg-gradient-primary hover:bg-gradient-hover text-primary-foreground shadow-primary animate-pulse-glow">
              <Phone className="h-4 w-4 mr-2" />
              Call Now: +91-9876543210
            </Button>
          </div>
        </div>
      </div>
    </DashboardSection>
  );
};