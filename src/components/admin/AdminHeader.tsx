import { Bell, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const AdminHeader = () => {
  return (
    <header className="sticky top-0 z-40 h-16 bg-gradient-primary backdrop-blur-md border-b border-border/50 shadow-elegant">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-primary-foreground">
            Visa Admin Dashboard
          </h1>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/20">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};