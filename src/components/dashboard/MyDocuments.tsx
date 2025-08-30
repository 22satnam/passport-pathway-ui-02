import { FileText, Download, Upload, Receipt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DashboardSection } from "./DashboardSection";

const documents = [
  {
    id: "1",
    name: "Passport Copy",
    type: "PDF",
    size: "2.1 MB",
    uploadDate: "2024-01-15",
    status: "Verified"
  },
  {
    id: "2", 
    name: "Payment Receipt - VSA-2024-001245",
    type: "PDF",
    size: "156 KB",
    uploadDate: "2024-01-15",
    status: "Completed"
  },
  {
    id: "3",
    name: "Educational Certificate",
    type: "PDF", 
    size: "1.8 MB",
    uploadDate: "2024-01-16",
    status: "Under Review"
  }
];

export const MyDocuments = () => {
  return (
    <DashboardSection
      title="My Documents"
      description="Store and access all visa documents and payment invoices"
      icon={FileText}
      primaryAction={{
        label: "Upload Document",
        onClick: () => console.log("Upload document")
      }}
    >
      <div className="space-y-3">
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className="flex items-center justify-between p-4 bg-gradient-card rounded-xl border hover-lift"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary">
                {doc.name.includes("Receipt") ? (
                  <Receipt className="h-4 w-4 text-secondary-foreground" />
                ) : (
                  <FileText className="h-4 w-4 text-secondary-foreground" />
                )}
              </div>
              <div>
                <h4 className="font-medium text-foreground">{doc.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {doc.type} • {doc.size} • {doc.uploadDate}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Badge 
                variant={doc.status === "Verified" || doc.status === "Completed" ? "default" : "secondary"}
                className="text-xs"
              >
                {doc.status}
              </Badge>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-border">
          <Button variant="outline" className="w-full">
            <Upload className="h-4 w-4 mr-2" />
            Add New Document
          </Button>
        </div>
      </div>
    </DashboardSection>
  );
};