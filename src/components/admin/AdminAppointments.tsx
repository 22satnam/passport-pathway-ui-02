import { useState } from "react";
import { Calendar, MapPin, Clock, Upload, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Appointment {
  id: string;
  city: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "completed";
  confirmationPdf?: string;
}

const initialAppointments: Appointment[] = [
  {
    id: "1",
    city: "London",
    date: "2024-03-15",
    time: "10:00 AM",
    status: "confirmed",
    confirmationPdf: "appointment_confirmation_001.pdf"
  },
  {
    id: "2", 
    city: "Paris",
    date: "2024-04-01",
    time: "2:30 PM",
    status: "pending"
  }
];

export const AdminAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [newAppointment, setNewAppointment] = useState({
    city: "",
    date: "",
    time: "",
    confirmationFile: null as File | null
  });
  const { toast } = useToast();

  const handleAddAppointment = () => {
    if (!newAppointment.city || !newAppointment.date || !newAppointment.time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all appointment details.",
        variant: "destructive",
      });
      return;
    }

    const appointment: Appointment = {
      id: Date.now().toString(),
      city: newAppointment.city,
      date: newAppointment.date,
      time: newAppointment.time,
      status: newAppointment.confirmationFile ? "confirmed" : "pending",
      confirmationPdf: newAppointment.confirmationFile?.name
    };

    setAppointments(prev => [...prev, appointment]);
    
    toast({
      title: "Appointment Added",
      description: `Appointment in ${newAppointment.city} has been scheduled. User dashboard updated.`,
    });

    setNewAppointment({
      city: "",
      date: "",
      time: "",
      confirmationFile: null
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">✅ Confirmed</span>;
      case "completed":
        return <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">✓ Completed</span>;
      default:
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">⏳ Pending</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Appointments Management</h1>
        <p className="text-muted-foreground">Schedule and manage visa appointments</p>
      </div>

      {/* Add New Appointment */}
      <Card className="bg-gradient-card border-primary/30">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Schedule New Appointment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <Label htmlFor="city">Appointment City</Label>
              <Input
                id="city"
                placeholder="e.g., London, Paris"
                value={newAppointment.city}
                onChange={(e) => setNewAppointment(prev => ({ ...prev, city: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={newAppointment.date}
                onChange={(e) => setNewAppointment(prev => ({ ...prev, date: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={newAppointment.time}
                onChange={(e) => setNewAppointment(prev => ({ ...prev, time: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="confirmation">Confirmation PDF</Label>
              <Input
                id="confirmation"
                type="file"
                accept=".pdf"
                onChange={(e) => setNewAppointment(prev => ({ 
                  ...prev, 
                  confirmationFile: e.target.files?.[0] || null 
                }))}
              />
            </div>
          </div>
          <Button 
            onClick={handleAddAppointment}
            className="bg-gradient-primary hover:bg-gradient-hover"
          >
            <Upload className="h-4 w-4 mr-2" />
            Schedule Appointment
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Scheduled appointments will instantly appear on user dashboard
          </p>
        </CardContent>
      </Card>

      {/* Appointments List */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Current Appointments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="font-medium">{appointment.city}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{appointment.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{appointment.time}</span>
                      </div>
                    </div>
                    {appointment.confirmationPdf && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <FileText className="h-3 w-3" />
                        <span>{appointment.confirmationPdf}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {getStatusBadge(appointment.status)}
                  {appointment.confirmationPdf && (
                    <Button size="sm" variant="outline">
                      <FileText className="h-3 w-3 mr-1" />
                      View PDF
                    </Button>
                  )}
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => {
                      setAppointments(prev => prev.map(app => 
                        app.id === appointment.id 
                          ? { ...app, status: "completed" as const }
                          : app
                      ));
                      toast({
                        title: "Appointment Completed",
                        description: "Appointment status updated successfully.",
                      });
                    }}
                    disabled={appointment.status === "completed"}
                  >
                    Mark Complete
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {appointments.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No appointments scheduled yet.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-subtle border-primary/20">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">{appointments.length}</div>
            <p className="text-sm text-muted-foreground">Total Appointments</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-subtle border-green-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {appointments.filter(app => app.status === "confirmed").length}
            </div>
            <p className="text-sm text-muted-foreground">Confirmed</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-subtle border-yellow-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">
              {appointments.filter(app => app.status === "pending").length}
            </div>
            <p className="text-sm text-muted-foreground">Pending</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};