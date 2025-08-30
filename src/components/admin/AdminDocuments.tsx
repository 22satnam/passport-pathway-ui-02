import { useState } from "react";
import { Upload, Download, FileText, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Document {
  id: string;
  name: string;
  status: "uploaded" | "missing" | "pending";
  type: string;
  uploadDate?: string;
  size?: string;
}

const initialDocuments: Document[] = [
  { id: "1", name: "Passport Copy", status: "uploaded", type: "PDF", uploadDate: "2024-01-15", size: "2.3 MB" },
  { id: "2", name: "Visa Application Form", status: "uploaded", type: "PDF", uploadDate: "2024-01-14", size: "1.8 MB" },
  { id: "3", name: "Bank Statement", status: "missing", type: "PDF" },
  { id: "4", name: "Employment Letter", status: "pending", type: "PDF" },
  { id: "5", name: "Travel Insurance", status: "uploaded", type: "PDF", uploadDate: "2024-01-13", size: "956 KB" },
];

export const AdminDocuments = () => {
  const [documents, setDocuments] = useState<Document[]>(initialDocuments);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const { toast } = useToast();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "uploaded":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "missing":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "uploaded":
        return <Badge className="bg-green-500 hover:bg-green-600">✅ Uploaded</Badge>;
      case "missing":
        return <Badge className="bg-red-500 hover:bg-red-600">❌ Missing</Badge>;
      default:
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">⏳ Pending</Badge>;
    }
  };

  const handleFileUpload = (docId: string) => {
    if (!uploadFile) {
      toast({
        title: "No File Selected",
        description: "Please select a file to upload.",
        variant: "destructive",
      });
      return;
    }

    setDocuments(prev => prev.map(doc => 
      doc.id === docId 
        ? { 
            ...doc, 
            status: "uploaded" as const, 
            uploadDate: new Date().toISOString().split('T')[0],
            size: `${(uploadFile.size / (1024 * 1024)).toFixed(1)} MB`
          }
        : doc
    ));

    toast({
      title: "Document Uploaded",
      description: `${uploadFile.name} has been uploaded and will reflect on user dashboard.`,
    });

    setUploadFile(null);
  };

  const uploadedCount = documents.filter(doc => doc.status === "uploaded").length;
  const missingCount = documents.filter(doc => doc.status === "missing").length;
  const pendingCount = documents.filter(doc => doc.status === "pending").length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Documents Management</h1>
        <p className="text-muted-foreground">Upload and manage visa documents</p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-subtle border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <div>
                <div className="text-2xl font-bold text-green-600">{uploadedCount}</div>
                <p className="text-sm text-muted-foreground">Uploaded</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-subtle border-red-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <XCircle className="h-5 w-5 text-red-500" />
              <div>
                <div className="text-2xl font-bold text-red-600">{missingCount}</div>
                <p className="text-sm text-muted-foreground">Missing</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-subtle border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500" />
              <div>
                <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Section */}
      <Card className="bg-gradient-card border-primary/30">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            Admin Upload
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Input
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) => setUploadFile(e.target.files?.[0] || null)}
              className="flex-1"
            />
            <Button 
              disabled={!uploadFile}
              className="bg-gradient-primary hover:bg-gradient-hover"
            >
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Uploaded documents will instantly reflect on user dashboard
          </p>
        </CardContent>
      </Card>

      {/* Documents List */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Document Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/30">
                <div className="flex items-center gap-3">
                  {getStatusIcon(doc.status)}
                  <div>
                    <h4 className="font-medium text-foreground">{doc.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Type: {doc.type}</span>
                      {doc.uploadDate && <span>Uploaded: {doc.uploadDate}</span>}
                      {doc.size && <span>Size: {doc.size}</span>}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {getStatusBadge(doc.status)}
                  {doc.status === "uploaded" && (
                    <Button size="sm" variant="outline">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  )}
                  {doc.status !== "uploaded" && (
                    <Button 
                      size="sm" 
                      onClick={() => handleFileUpload(doc.id)}
                      disabled={!uploadFile}
                      className="bg-gradient-primary hover:bg-gradient-hover"
                    >
                      <Upload className="h-3 w-3 mr-1" />
                      Upload
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};