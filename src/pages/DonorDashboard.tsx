import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  MapPin, 
  Clock, 
  Phone, 
  Bell, 
  Award, 
  Calendar,
  Users,
  Settings,
  Star,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const DonorDashboard = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [emergencyNotifications, setEmergencyNotifications] = useState(true);

  // Mock data
  const donorProfile = {
    name: "John Doe",
    bloodType: "O+",
    location: "New York, NY",
    joinDate: "March 2024",
    totalDonations: 12,
    livesImpacted: 36,
    lastDonation: "2024-08-15",
    nextEligible: "2024-11-15",
    badges: ["Lifesaver", "Regular Donor", "Emergency Responder"],
    compatibleWith: ["O+", "A+", "B+", "AB+"]
  };

  const nearbyRequests = [
    {
      id: 1,
      bloodType: "O+",
      location: "Manhattan General Hospital",
      distance: "1.2 km",
      urgency: "Critical",
      timeAgo: "15 minutes ago",
      unitsNeeded: 2
    },
    {
      id: 2,
      bloodType: "A+",
      location: "Brooklyn Medical Center",
      distance: "3.5 km",
      urgency: "Urgent",
      timeAgo: "1 hour ago",
      unitsNeeded: 1
    },
    {
      id: 3,
      bloodType: "AB+",
      location: "Queens Hospital",
      distance: "5.1 km",
      urgency: "Routine",
      timeAgo: "3 hours ago",
      unitsNeeded: 3
    }
  ];

  const donationHistory = [
    { date: "2024-08-15", location: "City Blood Bank", type: "Whole Blood", status: "Completed" },
    { date: "2024-05-10", location: "Emergency Hospital", type: "Platelets", status: "Completed" },
    { date: "2024-02-22", location: "Community Center", type: "Whole Blood", status: "Completed" },
    { date: "2023-11-18", location: "City Blood Bank", type: "Whole Blood", status: "Completed" }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Critical": return "bg-emergency text-emergency-foreground";
      case "Urgent": return "bg-warning text-warning-foreground";
      case "Routine": return "bg-primary text-primary-foreground";
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
                <span className="text-xl font-bold text-foreground">Donor Dashboard</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Available for donation</span>
                <Switch checked={isAvailable} onCheckedChange={setIsAvailable} />
              </div>
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
                  <span className="text-2xl font-bold text-primary-foreground">
                    {donorProfile.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">{donorProfile.name}</h2>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {donorProfile.bloodType}
                    </Badge>
                    {isAvailable && (
                      <Badge variant="outline" className="text-success border-success">
                        Available
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {donorProfile.location}
                </div>
              </div>
            </Card>

            {/* Statistics */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center">
                <Award className="h-4 w-4 mr-2" />
                Your Impact
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Donations</span>
                  <span className="text-2xl font-bold text-primary">{donorProfile.totalDonations}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Lives Impacted</span>
                  <span className="text-2xl font-bold text-success">{donorProfile.livesImpacted}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-medium">{donorProfile.joinDate}</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <div className="text-sm text-muted-foreground">Next eligible donation</div>
                  <div className="font-medium text-foreground">{donorProfile.nextEligible}</div>
                </div>
              </div>
            </Card>

            {/* Badges */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Achievements
              </h3>
              <div className="flex flex-wrap gap-2">
                {donorProfile.badges.map((badge, index) => (
                  <Badge key={index} variant="outline" className="bg-success-soft text-success">
                    {badge}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="requests" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="requests">Nearby Requests</TabsTrigger>
                <TabsTrigger value="history">Donation History</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent value="requests" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-foreground">Blood Requests Near You</h3>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    View Map
                  </Button>
                </div>

                {nearbyRequests.map((request) => (
                  <Card key={request.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center space-x-3">
                          <Badge className="bg-primary text-primary-foreground">
                            {request.bloodType}
                          </Badge>
                          <Badge className={getUrgencyColor(request.urgency)}>
                            {request.urgency}
                          </Badge>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground">{request.location}</h4>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{request.distance}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{request.timeAgo}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right space-y-2">
                        <div className="text-sm text-muted-foreground">
                          {request.unitsNeeded} units needed
                        </div>
                        <Button 
                          size="sm" 
                          className={request.urgency === "Critical" ? "bg-emergency hover:bg-emergency/90" : "bg-gradient-primary"}
                        >
                          Respond
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Your Donation History</h3>
                
                {donationHistory.map((donation, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="font-semibold text-foreground">{donation.location}</div>
                        <div className="text-sm text-muted-foreground">{donation.type}</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {donation.date}
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-success-soft text-success">
                        {donation.status}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="notifications" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-foreground">Notification Settings</h3>
                </div>

                <Card className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">Emergency SOS Alerts</div>
                      <div className="text-sm text-muted-foreground">Get notified for critical blood requests</div>
                    </div>
                    <Switch checked={emergencyNotifications} onCheckedChange={setEmergencyNotifications} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">Nearby Requests</div>
                      <div className="text-sm text-muted-foreground">Notifications for requests within 10km</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">Donation Reminders</div>
                      <div className="text-sm text-muted-foreground">Remind me when I'm eligible to donate again</div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Recent Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-emergency-soft rounded-lg">
                      <Bell className="h-4 w-4 text-emergency mt-1" />
                      <div>
                        <div className="text-sm font-medium text-foreground">Emergency SOS Alert</div>
                        <div className="text-xs text-muted-foreground">Critical O+ blood needed at Manhattan General - 2 hours ago</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                      <MapPin className="h-4 w-4 text-primary mt-1" />
                      <div>
                        <div className="text-sm font-medium text-foreground">New Request Nearby</div>
                        <div className="text-xs text-muted-foreground">A+ blood needed at Brooklyn Medical Center - 5 hours ago</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DonorDashboard;