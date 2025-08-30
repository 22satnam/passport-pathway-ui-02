import { Settings, Users, Shield, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export const AdminSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings & Staff</h1>
        <p className="text-muted-foreground">Manage system settings and staff permissions</p>
      </div>

      {/* System Settings */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            System Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Send email notifications for new applications</p>
            </div>
            <Switch id="notifications" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="auto-approval">Auto Approval</Label>
              <p className="text-sm text-muted-foreground">Automatically approve completed applications</p>
            </div>
            <Switch id="auto-approval" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms-alerts">SMS Alerts</Label>
              <p className="text-sm text-muted-foreground">Send SMS alerts for urgent updates</p>
            </div>
            <Switch id="sms-alerts" />
          </div>
        </CardContent>
      </Card>

      {/* Staff Management */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Staff Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AD</span>
                </div>
                <div>
                  <h4 className="font-medium">Admin User</h4>
                  <p className="text-sm text-muted-foreground">admin@visaplatform.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Active</span>
                <Button size="sm" variant="outline">Edit</Button>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">ST</span>
                </div>
                <div>
                  <h4 className="font-medium">Staff Member</h4>
                  <p className="text-sm text-muted-foreground">staff@visaplatform.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Limited</span>
                <Button size="sm" variant="outline">Edit</Button>
              </div>
            </div>
          </div>
          
          <Button className="mt-4 bg-gradient-primary hover:bg-gradient-hover">
            <Users className="h-4 w-4 mr-2" />
            Add New Staff Member
          </Button>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Security & Permissions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="two-factor">Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">Require 2FA for all admin accounts</p>
            </div>
            <Switch id="two-factor" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="session-timeout">Auto Session Timeout</Label>
              <p className="text-sm text-muted-foreground">Automatically log out after 30 minutes of inactivity</p>
            </div>
            <Switch id="session-timeout" defaultChecked />
          </div>
          
          <Button variant="outline" className="mt-4">
            <Shield className="h-4 w-4 mr-2" />
            View Security Logs
          </Button>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium">Email Notifications</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="new-apps" defaultChecked />
                  <Label htmlFor="new-apps" className="text-sm">New Applications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="status-changes" defaultChecked />
                  <Label htmlFor="status-changes" className="text-sm">Status Changes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="urgent-alerts" defaultChecked />
                  <Label htmlFor="urgent-alerts" className="text-sm">Urgent Alerts</Label>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Dashboard Alerts</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="daily-summary" defaultChecked />
                  <Label htmlFor="daily-summary" className="text-sm">Daily Summary</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="system-status" defaultChecked />
                  <Label htmlFor="system-status" className="text-sm">System Status</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="weekly-reports" />
                  <Label htmlFor="weekly-reports" className="text-sm">Weekly Reports</Label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};