import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { TrackApplication } from "./TrackApplication";
import { MyDocuments } from "./MyDocuments";
import { PaymentInvoices } from "./PaymentInvoices";
import { SupportHelp } from "./SupportHelp";

export const DashboardLayout = () => {
  const [activeSection, setActiveSection] = useState("tracking");

  const renderContent = () => {
    switch (activeSection) {
      case "tracking":
        return <TrackApplication />;
      case "documents":
        return <MyDocuments />;
      case "invoices":
        return <PaymentInvoices />;
      case "support":
        return <SupportHelp />;
      default:
        return <TrackApplication />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background w-full">
        <DashboardHeader />
        
        <div className="flex w-full">
          <AppSidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
          
          <main className="flex-1 min-h-screen">
            {/* Mobile/Desktop Sidebar Trigger */}
            <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50">
              <div className="flex items-center gap-4 p-4">
                <SidebarTrigger className="hover:bg-primary/10 hover:scale-110 transition-all duration-200 rounded-lg p-2">
                  <Menu className="h-5 w-5 text-primary" />
                </SidebarTrigger>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-foreground capitalize">
                    {activeSection === "tracking" ? "Application Tracking" : 
                     activeSection === "documents" ? "My Documents" :
                     activeSection === "invoices" ? "Payment Invoices" : "Support & Help"}
                  </h2>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
              <div className="animate-fade-in">
                {renderContent()}
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};