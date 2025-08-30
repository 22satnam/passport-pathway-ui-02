import { Receipt, Download, Eye, CreditCard, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DashboardSection } from "./DashboardSection";

const invoices = [
  {
    id: "INV-2024-001245",
    applicationId: "VSA-2024-001245",
    country: "Germany",
    visaType: "Student Visa",
    amount: "₹45,000",
    date: "2024-01-15",
    status: "Paid",
    paymentMethod: "Credit Card",
    description: "Visa application processing fee"
  },
  {
    id: "INV-2024-001246", 
    applicationId: "VSA-2024-001246",
    country: "Canada",
    visaType: "Work Visa",
    amount: "₹52,000",
    date: "2024-01-12",
    status: "Paid",
    paymentMethod: "UPI",
    description: "Visa application + documentation service"
  },
  {
    id: "INV-2024-001247",
    applicationId: "VSA-2024-001247", 
    country: "Australia",
    visaType: "Tourist Visa",
    amount: "₹38,000",
    date: "2024-01-10",
    status: "Refunded",
    paymentMethod: "Net Banking",
    description: "Visa application fee (Refunded due to cancellation)"
  }
];

export const PaymentInvoices = () => {
  return (
    <DashboardSection
      title="Payment Invoices"
      description="View and download all payment receipts and invoices"
      icon={Receipt}
      primaryAction={{
        label: "Download All",
        onClick: () => console.log("Download all invoices")
      }}
    >
      <div className="space-y-4">
        {invoices.map((invoice) => (
          <div 
            key={invoice.id} 
            className="p-6 bg-gradient-card rounded-xl border hover-lift"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h4 className="font-bold text-lg text-foreground mb-1">{invoice.id}</h4>
                <p className="text-sm text-muted-foreground">
                  {invoice.country} • {invoice.visaType} • {invoice.date}
                </p>
              </div>
              
              <div className="text-right">
                <div className="text-xl font-bold text-primary mb-1">{invoice.amount}</div>
                <Badge 
                  variant={invoice.status === "Paid" ? "default" : invoice.status === "Refunded" ? "secondary" : "destructive"}
                  className="text-xs"
                >
                  {invoice.status}
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Payment Method:</span>
                  <span className="text-sm font-medium text-foreground">{invoice.paymentMethod}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Receipt className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Application ID:</span>
                  <span className="text-sm font-medium text-primary">{invoice.applicationId}</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-1">Description:</p>
                <p className="text-sm text-foreground">{invoice.description}</p>
              </div>
            </div>
            
            <div className="flex gap-3 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="flex-1">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
              <Button size="sm" className="flex-1 bg-gradient-primary hover:bg-gradient-hover text-primary-foreground">
                <Download className="h-4 w-4 mr-2" />
                Download Invoice
              </Button>
            </div>
          </div>
        ))}
        
        <div className="pt-6 border-t border-border">
          <div className="bg-primary/5 rounded-xl p-4 text-center">
            <h4 className="font-medium text-foreground mb-2">Need help with payments?</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Contact our billing support for any payment related queries
            </p>
            <Button variant="outline" size="sm">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Billing Support
            </Button>
          </div>
        </div>
      </div>
    </DashboardSection>
  );
};