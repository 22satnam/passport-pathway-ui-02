import { Users, Briefcase, Building, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const applicants = [
  {
    id: "1",
    name: "John Michael Doe",
    occupation: "Software Engineer",
    employerName: "Tech Solutions Inc.",
    employerAddress: "123 Silicon Valley, San Francisco, CA 94102",
    applicationType: "Business",
    email: "john.doe@email.com",
    country: "United States"
  },
  {
    id: "2",
    name: "Jane Elizabeth Smith",
    occupation: "Marketing Manager",
    employerName: "Global Marketing Ltd.",
    employerAddress: "456 Oxford Street, London, UK W1A 0AA",
    applicationType: "Tourist",
    email: "jane.smith@email.com",
    country: "United Kingdom"
  },
  {
    id: "3",
    name: "Alex Johnson",
    occupation: "Freelance Designer",
    employerName: "Self-Employed",
    employerAddress: "789 Design Avenue, Paris, France 75001",
    applicationType: "Visitor",
    email: "alex.johnson@email.com",
    country: "France"
  }
];

export const AdminApplicantPersona = () => {
  const getApplicationTypeBadge = (type: string) => {
    switch (type) {
      case "Business":
        return <Badge className="bg-blue-500 hover:bg-blue-600">💼 Business</Badge>;
      case "Tourist":
        return <Badge className="bg-green-500 hover:bg-green-600">🏖️ Tourist</Badge>;
      default:
        return <Badge className="bg-purple-500 hover:bg-purple-600">👥 Visitor</Badge>;
    }
  };

  const getStats = () => {
    const businessCount = applicants.filter(app => app.applicationType === "Business").length;
    const touristCount = applicants.filter(app => app.applicationType === "Tourist").length;
    const visitorCount = applicants.filter(app => app.applicationType === "Visitor").length;
    
    return { businessCount, touristCount, visitorCount };
  };

  const { businessCount, touristCount, visitorCount } = getStats();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Applicant Persona</h1>
        <p className="text-muted-foreground">Detailed profiles and employment information</p>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-subtle border-primary/20">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">{applicants.length}</div>
            <p className="text-sm text-muted-foreground">Total Applicants</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-subtle border-blue-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{businessCount}</div>
            <p className="text-sm text-muted-foreground">Business</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-subtle border-green-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{touristCount}</div>
            <p className="text-sm text-muted-foreground">Tourist</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-subtle border-purple-200">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">{visitorCount}</div>
            <p className="text-sm text-muted-foreground">Visitor</p>
          </CardContent>
        </Card>
      </div>

      {/* Applicant Cards */}
      <div className="grid gap-6">
        {applicants.map((applicant) => (
          <Card key={applicant.id} className="bg-gradient-card border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-primary shadow-primary">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{applicant.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{applicant.email}</p>
                  </div>
                </div>
                {getApplicationTypeBadge(applicant.applicationType)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Personal & Application Info */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                    <Briefcase className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Occupation</h4>
                      <p className="text-sm text-muted-foreground">{applicant.occupation}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Country</h4>
                      <p className="text-sm text-muted-foreground">{applicant.country}</p>
                    </div>
                  </div>
                </div>

                {/* Employment Details */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                    <Building className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Employer Name</h4>
                      <p className="text-sm text-muted-foreground">{applicant.employerName}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground">Employer Address</h4>
                      <p className="text-sm text-muted-foreground">{applicant.employerAddress}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Application Type Distribution */}
      <Card className="bg-gradient-subtle border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Application Type Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <div className="text-3xl mb-2">💼</div>
              <div className="text-2xl font-bold text-blue-600">{businessCount}</div>
              <p className="text-sm text-muted-foreground">Business Applications</p>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div className="text-3xl mb-2">🏖️</div>
              <div className="text-2xl font-bold text-green-600">{touristCount}</div>
              <p className="text-sm text-muted-foreground">Tourist Applications</p>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
              <div className="text-3xl mb-2">👥</div>
              <div className="text-2xl font-bold text-purple-600">{visitorCount}</div>
              <p className="text-sm text-muted-foreground">Visitor Applications</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};