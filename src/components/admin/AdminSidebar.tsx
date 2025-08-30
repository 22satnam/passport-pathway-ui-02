import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  FolderOpen, 
  Calendar, 
  Users, 
  MapPin, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "applications", label: "Applications", icon: FileText },
  { id: "passport", label: "Passport Details", icon: CreditCard },
  { id: "documents", label: "Documents", icon: FolderOpen },
  { id: "appointments", label: "Appointments", icon: Calendar },
  { id: "persona", label: "Applicants Persona", icon: Users },
  { id: "journey", label: "Journey Control", icon: MapPin, priority: true },
  { id: "settings", label: "Settings / Staff", icon: Settings },
];

export const AdminSidebar = ({ activeSection, onSectionChange }: AdminSidebarProps) => {
  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gradient-primary/5 backdrop-blur-xl border-r border-primary/20 shadow-elegant z-30">
      <div className="p-6">
        <h2 className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
          Admin Panel
        </h2>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200",
                activeSection === item.id
                  ? "bg-gradient-primary text-primary-foreground shadow-primary"
                  : "hover:bg-primary/10 text-foreground hover:text-primary",
                item.priority && "ring-2 ring-primary/30 bg-gradient-subtle"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5",
                item.priority && "text-primary"
              )} />
              <span className={cn(
                "font-medium",
                item.priority && "text-primary font-semibold"
              )}>
                {item.label}
                {item.priority && <span className="ml-2 text-xs">🔑</span>}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};