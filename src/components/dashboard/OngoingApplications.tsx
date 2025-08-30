import { OngoingApplicationCard } from "./OngoingApplicationCard";

const ongoingApps = [
  {
    id: "1",
    country: "Germany",
    visaType: "Student Visa",
    status: "Incomplete",
    currentStep: "Form Filled, Payment Pending",
    isPaid: false
  },
  {
    id: "2", 
    country: "Canada",
    visaType: "Work Permit",
    status: "Not Paid",
    currentStep: "Application Started",
    isPaid: false
  }
];

export const OngoingApplications = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-primary rounded-full"></div>
        <h2 className="text-2xl font-bold text-foreground">Incomplete Applications</h2>
        <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
          {ongoingApps.length} Pending
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ongoingApps.map((app) => (
          <OngoingApplicationCard key={app.id} application={app} />
        ))}
      </div>
    </section>
  );
};