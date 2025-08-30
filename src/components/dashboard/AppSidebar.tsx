import { useState } from "react";
import { FileText, Receipt, MessageCircle, MapPin } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { 
    title: "Application Tracking", 
    id: "tracking", 
    icon: MapPin,
    description: "Track your visa applications"
  },
  { 
    title: "My Documents", 
    id: "documents", 
    icon: FileText,
    description: "Store and access documents"
  },
  { 
    title: "Payment Invoices", 
    id: "invoices", 
    icon: Receipt,
    description: "View payment history"
  },
  { 
    title: "Support", 
    id: "support", 
    icon: MessageCircle,
    description: "Get help and assistance"
  },
];

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar
      className={`transition-all duration-300 ease-in-out ${collapsed ? "w-16" : "w-64"} bg-gradient-primary/10 backdrop-blur-xl border-r border-primary/20 shadow-elegant`}
      collapsible="icon"
    >
      <SidebarContent className="p-4 bg-gradient-subtle/50">
        <SidebarGroup>
          <SidebarGroupLabel className={`text-primary font-bold mb-6 text-center ${collapsed ? "hidden" : "block"} bg-gradient-primary bg-clip-text text-transparent`}>
            Dashboard Menu
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <SidebarMenuItem key={item.id}>
                     <SidebarMenuButton
                      onClick={() => onSectionChange(item.id)}
                      className={`
                        w-full mb-2 p-3 rounded-xl transition-all duration-300 ease-out hover-lift group relative overflow-hidden
                        ${isActive 
                          ? "bg-gradient-primary text-primary-foreground shadow-elegant scale-105" 
                          : "hover:bg-primary/5 hover:shadow-glow text-foreground hover:scale-105"
                        }
                        before:absolute before:inset-0 before:bg-gradient-primary before:opacity-0 before:transition-opacity before:duration-300
                        ${!isActive ? "hover:before:opacity-10" : ""}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                        {!collapsed && (
                          <div className="flex flex-col items-start">
                            <span className="font-medium text-sm">{item.title}</span>
                            <span className={`text-xs ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                              {item.description}
                            </span>
                          </div>
                        )}
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}