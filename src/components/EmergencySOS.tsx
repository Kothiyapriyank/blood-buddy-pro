import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const EmergencySOS = () => {
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [urgentRequests, setUrgentRequests] = useState([
    {
      id: 1,
      bloodType: "O-",
      location: "City General Hospital",
      distance: "2.3 km",
      timeAgo: "5 minutes ago",
      patient: "Emergency Room",
      units: 3
    },
    {
      id: 2,
      bloodType: "A+",
      location: "St. Mary's Medical Center",
      distance: "4.1 km", 
      timeAgo: "12 minutes ago",
      patient: "Surgery Unit",
      units: 2
    }
  ]);

  const handleSOSActivation = () => {
    setIsSOSActive(true);
    // In real app, this would trigger the SOS broadcast
    setTimeout(() => setIsSOSActive(false), 5000);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Emergency Blood Requests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Critical situations require immediate action. Our Emergency SOS system 
            connects patients with nearby donors instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* SOS Activation Panel */}
          <Card className="p-8 text-center bg-card shadow-card">
            <div className="space-y-6">
              <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                isSOSActive 
                  ? 'bg-emergency shadow-emergency animate-pulse' 
                  : 'bg-emergency/10'
              }`}>
                <AlertTriangle className={`h-10 w-10 ${
                  isSOSActive ? 'text-emergency-foreground' : 'text-emergency'
                }`} />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Emergency SOS
                </h3>
                <p className="text-muted-foreground">
                  For hospitals and urgent care facilities only. 
                  Broadcasts to all compatible donors within 10km radius.
                </p>
              </div>

              {!isSOSActive ? (
                <Button 
                  size="lg"
                  onClick={handleSOSActivation}
                  className="bg-emergency hover:bg-emergency/90 text-emergency-foreground shadow-emergency px-8 py-4 text-lg"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Activate Emergency SOS
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="text-emergency font-semibold text-lg">
                    SOS Broadcast Active
                  </div>
                  <div className="bg-emergency-soft rounded-lg p-4">
                    <p className="text-emergency text-sm">
                      Broadcasting to 47 compatible donors within 10km...
                    </p>
                  </div>
                </div>
              )}

              <div className="text-xs text-muted-foreground border-t border-border pt-4">
                Emergency use only • Hospital verification required
              </div>
            </div>
          </Card>

          {/* Active Urgent Requests */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Active Urgent Requests
            </h3>
            
            {urgentRequests.map((request) => (
              <Card key={request.id} className="p-6 bg-card shadow-card border-l-4 border-l-primary">
                <div className="flex items-start justify-between">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                        {request.bloodType}
                      </div>
                      <div className="bg-emergency/10 text-emergency px-2 py-1 rounded text-xs font-medium">
                        URGENT
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground">{request.location}</h4>
                      <p className="text-sm text-muted-foreground">{request.patient}</p>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
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

                  <div className="text-right space-y-2">
                    <div className="text-sm text-muted-foreground">
                      {request.units} units needed
                    </div>
                    <Button size="sm" className="bg-gradient-primary">
                      Respond
                    </Button>
                  </div>
                </div>
              </Card>
            ))}

            <Card className="p-6 bg-success-soft border border-success/20">
              <div className="text-center">
                <div className="text-success font-medium">3 donors responding</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Estimated arrival: 12-15 minutes
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySOS;