import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  MapPin, 
  Clock, 
  Phone, 
  AlertTriangle,
  User,
  Calendar,
  Plus,
  Settings,
  ArrowLeft,
  CheckCircle,
  XCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const RecipientDashboard = () => {
  // Mock data
  const recipientProfile = {
    name: "Dr. Sarah Johnson",
    hospital: "Manhattan General Hospital",
    department: "Emergency Department",
    location: "New York, NY",
    joinDate: "January 2024",
    totalRequests: 24,
    successfulMatches: 22
  };

  const activeRequests = [
    {
      id: 1,
      patientName: "Patient #1247",
      bloodType: "O-",
      unitsNeeded: 3,
      urgency: "Critical",
      createdAt: "2024-11-15 14:30",
      status: "Active",
      respondingDonors: 5,
      confirmedDonors: 2,
      estimatedArrival: "20 minutes"
    },
    {
      id: 2,
      patientName: "Patient #1248",
      bloodType: "A+",
      unitsNeeded: 2,
      urgency: "Urgent",
      createdAt: "2024-11-15 12:15",
      status: "Donors Found",
      respondingDonors: 3,
      confirmedDonors: 2,
      estimatedArrival: "45 minutes"
    }
  ];

  const requestHistory = [
    {
      id: 1,
      patientName: "Patient #1245",
      bloodType: "B+",
      unitsNeeded: 1,
      urgency: "Routine",
      date: "2024-11-10",
      status: "Completed",
      donorsMatched: 1,
      responseTime: "15 minutes"
    },
    {
      id: 2,
      patientName: "Patient #1243",
      bloodType: "AB-",
      unitsNeeded: 2,
      urgency: "Critical",
      date: "2024-11-08",
      status: "Completed",
      donorsMatched: 3,
      responseTime: "8 minutes"
    },
    {
      id: 3,
      patientName: "Patient #1241",
      bloodType: "O+",
      unitsNeeded: 4,
      urgency: "Urgent",
      date: "2024-11-05",
      status: "Completed",
      donorsMatched: 4,
      responseTime: "22 minutes"
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Critical": return "bg-emergency text-emergency-foreground";
      case "Urgent": return "bg-warning text-warning-foreground";
      case "Routine": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-warning text-warning-foreground";
      case "Donors Found": return "bg-success text-success-foreground";
      case "Completed": return "bg-success text-success-foreground";
      case "Cancelled": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-primary rounded-lg p-2">
                  <Heart className="h-6 w-6 text-primary-foreground fill-current" />
                </div>
                <span className="text-xl font-bold text-foreground">Hospital Dashboard</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/request-blood">
                <Button className="bg-gradient-primary">
                  <Plus className="h-4 w-4 mr-2" />
                  New Request
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                  <User className="h-10 w-10 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">{recipientProfile.name}</h2>
                  <p className="text-muted-foreground">{recipientProfile.department}</p>
                  <p className="text-sm text-muted-foreground font-medium">{recipientProfile.hospital}</p>
                </div>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {recipientProfile.location}
                </div>
              </div>
            </Card>

            {/* Statistics */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                Request Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Requests</span>
                  <span className="text-2xl font-bold text-primary">{recipientProfile.totalRequests}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Successful Matches</span>
                  <span className="text-2xl font-bold text-success">{recipientProfile.successfulMatches}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-medium text-success">
                    {Math.round((recipientProfile.successfulMatches / recipientProfile.totalRequests) * 100)}%
                  </span>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="text-sm text-muted-foreground">Member Since</div>
                  <div className="font-medium text-foreground">{recipientProfile.joinDate}</div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/request-blood">
                  <Button className="w-full bg-gradient-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    New Blood Request
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Emergency SOS
                </Button>
                <Button variant="outline" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Blood Banks
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="active" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="active">Active Requests</TabsTrigger>
                <TabsTrigger value="history">Request History</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-foreground">Active Blood Requests</h3>
                  <Badge variant="outline" className="bg-warning-soft text-warning">
                    {activeRequests.length} Active
                  </Badge>
                </div>

                {activeRequests.map((request) => (
                  <Card key={request.id} className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-primary text-primary-foreground">
                            {request.bloodType}
                          </Badge>
                          <Badge className={getUrgencyColor(request.urgency)}>
                            {request.urgency}
                          </Badge>
                          <Badge className={getStatusColor(request.status)}>
                            {request.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          ID: {request.id}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Patient</div>
                          <div className="font-medium">{request.patientName}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Units Needed</div>
                          <div className="font-medium">{request.unitsNeeded} units</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Created</div>
                          <div className="font-medium">{request.createdAt}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Estimated Arrival</div>
                          <div className="font-medium text-success">{request.estimatedArrival}</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">{request.respondingDonors}</div>
                            <div className="text-xs text-muted-foreground">Responding</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-success">{request.confirmedDonors}</div>
                            <div className="text-xs text-muted-foreground">Confirmed</div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Phone className="h-4 w-4 mr-2" />
                            Contact Donors
                          </Button>
                          <Button size="sm" className="bg-gradient-primary">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                {activeRequests.length === 0 && (
                  <Card className="p-8 text-center">
                    <div className="text-muted-foreground">
                      <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No active blood requests</p>
                      <p className="text-sm mt-2">Create a new request when you need blood donations</p>
                    </div>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Request History</h3>
                
                {requestHistory.map((request) => (
                  <Card key={request.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-primary text-primary-foreground">
                            {request.bloodType}
                          </Badge>
                          <Badge className={getUrgencyColor(request.urgency)}>
                            {request.urgency}
                          </Badge>
                          <Badge className={getStatusColor(request.status)}>
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {request.status}
                          </Badge>
                        </div>
                        <div className="font-semibold text-foreground">{request.patientName}</div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{request.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>Response: {request.responseTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-1">
                        <div className="text-sm text-muted-foreground">
                          {request.unitsNeeded} units • {request.donorsMatched} donors
                        </div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipientDashboard;