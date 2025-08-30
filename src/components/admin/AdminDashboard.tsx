import { useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import { AdminHeader } from "./AdminHeader";
import { AdminOverview } from "./AdminOverview";
import { AdminApplications } from "./AdminApplications";
import { AdminPassportDetails } from "./AdminPassportDetails";
import { AdminDocuments } from "./AdminDocuments";
import { AdminAppointments } from "./AdminAppointments";
import { AdminApplicantPersona } from "./AdminApplicantPersona";
import { AdminJourneyControl } from "./AdminJourneyControl";
import { AdminSettings } from "./AdminSettings";

export const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <AdminOverview />;
      case "applications":
        return <AdminApplications />;
      case "passport":
        return <AdminPassportDetails />;
      case "documents":
        return <AdminDocuments />;
      case "appointments":
        return <AdminAppointments />;
      case "persona":
        return <AdminApplicantPersona />;
      case "journey":
        return <AdminJourneyControl />;
      case "settings":
        return <AdminSettings />;
      default:
        return <AdminOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-background w-full">
      <AdminHeader />
      
      <div className="flex w-full">
        <AdminSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        
        <main className="flex-1 min-h-screen ml-64">
          <div className="container mx-auto px-6 py-8">
            <div className="animate-fade-in">
              {renderContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};