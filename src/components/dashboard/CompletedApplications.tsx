import { CompletedApplicationCard } from "./CompletedApplicationCard";

const completedApps = [
  {
    id: "1",
    bookingId: "VSA-2024-001245",
    country: "Australia",
    visaType: "Tourist Visa", 
    submittedDate: "2024-01-15",
    steps: [
      { name: "Payment Completed", status: "completed" as const, date: "2024-01-15" },
      { name: "Expert Connect", status: "completed" as const, date: "2024-01-16", details: "Video call completed with Sarah Johnson" },
      { name: "Appointment Booking", status: "completed" as const, date: "2024-01-18", details: "Confirmed: 25 Jan, 10:30 AM at Mumbai VFS" },
      { name: "Documentation", status: "completed" as const, date: "2024-01-20", details: "Home Visit Completed: 20 Jan, 2:00 PM" },
      { name: "Expert Review", status: "processing" as const, date: null, details: "Documents under review" },
      { name: "Document Delivery", status: "pending" as const, date: null },
      { name: "Application Submission", status: "pending" as const, date: null }
    ]
  },
  {
    id: "2",
    bookingId: "VSA-2024-001198", 
    country: "United Kingdom",
    visaType: "Business Visa",
    submittedDate: "2024-01-10",
    steps: [
      { name: "Payment Completed", status: "completed" as const, date: "2024-01-10" },
      { name: "Expert Connect", status: "completed" as const, date: "2024-01-11", details: "Consultation completed" },
      { name: "Appointment Booking", status: "processing" as const, date: null, details: "Booking in progress" },
      { name: "Documentation", status: "pending" as const, date: null },
      { name: "Expert Review", status: "pending" as const, date: null },
      { name: "Document Delivery", status: "pending" as const, date: null },
      { name: "Application Submission", status: "pending" as const, date: null }
    ]
  }
];

export const CompletedApplications = () => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-gradient-primary rounded-full"></div>
        <h2 className="text-2xl font-bold text-foreground">Payment Completed Applications</h2>
        <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
          {completedApps.length} In Progress
        </span>
      </div>
      
      <div className="space-y-6">
        {completedApps.map((app) => (
          <CompletedApplicationCard key={app.id} application={app} />
        ))}
      </div>
    </section>
  );
};