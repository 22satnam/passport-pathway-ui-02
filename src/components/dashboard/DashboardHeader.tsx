import { Receipt, MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export const DashboardHeader = () => {
  return (
    <header className="bg-gradient-hero text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Visa Application Dashboard</h1>
            <p className="text-blue-100 text-lg">Track your applications with complete transparency</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
              <MessageCircleQuestion className="h-4 w-4 mr-2" />
              Support
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};