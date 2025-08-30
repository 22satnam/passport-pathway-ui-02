import { useState } from "react";
import { Search, Filter, Mail, Phone, Globe, Key } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const applications = [
  {
    id: "REF001",
    email: "john.doe@email.com",
    phone: "+1 234 567 8900",
    country: "United States",
    status: "In Progress",
    date: "2024-01-15"
  },
  {
    id: "REF002",
    email: "jane.smith@email.com", 
    phone: "+44 20 7946 0958",
    country: "United Kingdom",
    status: "Completed",
    date: "2024-01-14"
  },
  {
    id: "REF003",
    email: "alex.johnson@email.com",
    phone: "+33 1 42 86 83 26",
    country: "France",
    status: "Pending",
    date: "2024-01-13"
  }
];

export const AdminApplications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCountry, setFilterCountry] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = filterCountry === "all" || app.country === filterCountry;
    const matchesStatus = filterStatus === "all" || app.status === filterStatus;
    
    return matchesSearch && matchesCountry && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>;
      case "In Progress":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">In Progress</Badge>;
      default:
        return <Badge variant="secondary">Pending</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Applications Management</h1>
        <p className="text-muted-foreground">View and manage all visa applications</p>
      </div>

      {/* Filters */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by email or ref ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={filterCountry} onValueChange={setFilterCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                <SelectItem value="United States">United States</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="France">France</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setFilterCountry("all");
                setFilterStatus("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <div className="grid gap-4">
        {filteredApplications.map((app) => (
          <Card key={app.id} className="bg-gradient-subtle border-border/50 hover:shadow-lg transition-all duration-200">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="font-medium text-sm">{app.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="font-medium text-sm">{app.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Country</p>
                      <p className="font-medium text-sm">{app.country}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Key className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Reference ID</p>
                      <p className="font-medium text-sm">{app.id}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getStatusBadge(app.status)}
                  <Button size="sm" className="bg-gradient-primary hover:bg-gradient-hover">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <Card className="bg-gradient-card border-border/50">
          <CardContent className="p-12 text-center">
            <p className="text-muted-foreground">No applications found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setFilterCountry("all");
                setFilterStatus("all");
              }}
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};