import { Copy, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const passportData = [
  {
    passportNumber: "P123456789",
    fullName: "John Michael Doe",
    dateOfBirth: "1990-05-15",
    issueDate: "2020-01-10",
    expiryDate: "2030-01-10",
    placeOfIssue: "New York, USA",
    preferredCity: "London",
    preferredDate: "2024-03-15"
  },
  {
    passportNumber: "P987654321",
    fullName: "Jane Elizabeth Smith",
    dateOfBirth: "1985-08-22",
    issueDate: "2019-06-15",
    expiryDate: "2029-06-15",
    placeOfIssue: "London, UK",
    preferredCity: "Paris",
    preferredDate: "2024-04-01"
  }
];

export const AdminPassportDetails = () => {
  const { toast } = useToast();

  const copyAllPassportInfo = (passport: any) => {
    const info = `
Passport Number: ${passport.passportNumber}
Full Name: ${passport.fullName}
Date of Birth: ${passport.dateOfBirth}
Issue Date: ${passport.issueDate}
Expiry Date: ${passport.expiryDate}
Place of Issue: ${passport.placeOfIssue}
Preferred City: ${passport.preferredCity}
Preferred Date: ${passport.preferredDate}
    `.trim();

    navigator.clipboard.writeText(info);
    toast({
      title: "Copied to Clipboard",
      description: "All passport information has been copied successfully.",
    });
  };

  const copyAllData = () => {
    const allInfo = passportData.map(passport => `
Passport Number: ${passport.passportNumber}
Full Name: ${passport.fullName}
Date of Birth: ${passport.dateOfBirth}
Issue Date: ${passport.issueDate}
Expiry Date: ${passport.expiryDate}
Place of Issue: ${passport.placeOfIssue}
Preferred City: ${passport.preferredCity}
Preferred Date: ${passport.preferredDate}
---
    `).join('\n');

    navigator.clipboard.writeText(allInfo);
    toast({
      title: "All Data Copied",
      description: "Complete passport information for all applicants copied to clipboard.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Passport Details</h1>
          <p className="text-muted-foreground">Manage passport information and preferences</p>
        </div>
        <Button
          onClick={copyAllData}
          className="bg-gradient-primary hover:bg-gradient-hover"
        >
          <Copy className="h-4 w-4 mr-2" />
          Copy All Passport Info
        </Button>
      </div>

      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Passport Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Passport Number</TableHead>
                  <TableHead>Full Name</TableHead>
                  <TableHead>Date of Birth</TableHead>
                  <TableHead>Issue Date</TableHead>
                  <TableHead>Expiry Date</TableHead>
                  <TableHead>Place of Issue</TableHead>
                  <TableHead>Preferred City</TableHead>
                  <TableHead>Preferred Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {passportData.map((passport, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium text-primary">
                      {passport.passportNumber}
                    </TableCell>
                    <TableCell className="font-medium">
                      {passport.fullName}
                    </TableCell>
                    <TableCell>{passport.dateOfBirth}</TableCell>
                    <TableCell>{passport.issueDate}</TableCell>
                    <TableCell>{passport.expiryDate}</TableCell>
                    <TableCell>{passport.placeOfIssue}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-primary" />
                        {passport.preferredCity}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-primary" />
                        {passport.preferredDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyAllPassportInfo(passport)}
                        className="border-primary/30 hover:bg-primary/10"
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Copy
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-subtle border-primary/20">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">{passportData.length}</div>
            <p className="text-sm text-muted-foreground">Total Passports</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-subtle border-primary/20">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {passportData.filter(p => new Date(p.expiryDate) > new Date()).length}
            </div>
            <p className="text-sm text-muted-foreground">Valid Passports</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-subtle border-primary/20">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">
              {new Set(passportData.map(p => p.preferredCity)).size}
            </div>
            <p className="text-sm text-muted-foreground">Preferred Cities</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};