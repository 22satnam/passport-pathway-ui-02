import { MapPin } from "lucide-react";
import { DashboardSection } from "./DashboardSection";
import { CompletedApplications } from "./CompletedApplications";
import { OngoingApplications } from "./OngoingApplications";

export const TrackApplication = () => {
  return (
    <DashboardSection
      title="Track Application"
      description="See status of ongoing and completed applications"
      icon={MapPin}
      primaryAction={{
        label: "New Application",
        onClick: () => console.log("New application")
      }}
    >
      <div className="space-y-8">
        {/* Mobile-optimized: Compact view with summary first */}
        <div className="lg:hidden">
          <div className="bg-gradient-card rounded-xl p-4 border mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium text-foreground">Quick Summary</h4>
                <p className="text-sm text-muted-foreground">2 in progress • 2 pending</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-primary">75%</div>
                <div className="text-xs text-muted-foreground">Avg. Progress</div>
              </div>
            </div>
          </div>
        </div>
        
        <CompletedApplications />
        <OngoingApplications />
      </div>
    </DashboardSection>
  );
};