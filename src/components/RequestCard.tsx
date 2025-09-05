import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, User, Phone, AlertTriangle } from "lucide-react";

interface RequestCardProps {
  request: {
    id: string;
    bloodType: string;
    location: string;
    distance: string;
    urgency: "Critical" | "Urgent" | "Routine";
    timeAgo: string;
    patient: string;
    unitsNeeded: number;
    hospitalContact?: string;
    description?: string;
  };
  onRespond?: (requestId: string) => void;
  onContact?: (requestId: string) => void;
}

const RequestCard = ({ request, onRespond, onContact }: RequestCardProps) => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Critical": return "bg-emergency text-emergency-foreground";
      case "Urgent": return "bg-warning text-warning-foreground";
      case "Routine": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    if (urgency === "Critical") {
      return <AlertTriangle className="h-4 w-4" />;
    }
    return null;
  };

  return (
    <Card className={`p-6 hover:shadow-lg transition-shadow ${
      request.urgency === "Critical" ? "border-l-4 border-l-emergency shadow-emergency/20" : ""
    }`}>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <div className="flex items-center space-x-3">
              <Badge className="bg-primary text-primary-foreground text-base px-3 py-1">
                {request.bloodType}
              </Badge>
              <Badge className={`${getUrgencyColor(request.urgency)} flex items-center space-x-1`}>
                {getUrgencyIcon(request.urgency)}
                <span>{request.urgency}</span>
              </Badge>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground text-lg">{request.location}</h3>
              <p className="text-sm text-muted-foreground">{request.patient}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{request.distance}</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{request.timeAgo}</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <User className="h-4 w-4" />
                <span>{request.unitsNeeded} units needed</span>
              </div>
              {request.hospitalContact && (
                <div className="flex items-center space-x-1 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span className="truncate">{request.hospitalContact}</span>
                </div>
              )}
            </div>

            {request.description && (
              <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                {request.description}
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-2 ml-4">
            {onRespond && (
              <Button 
                size="sm" 
                className={
                  request.urgency === "Critical" 
                    ? "bg-emergency hover:bg-emergency/90 text-emergency-foreground" 
                    : "bg-gradient-primary"
                }
                onClick={() => onRespond(request.id)}
              >
                {request.urgency === "Critical" ? "Emergency Response" : "Respond"}
              </Button>
            )}
            {onContact && (
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => onContact(request.id)}
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Button>
            )}
          </div>
        </div>

        {request.urgency === "Critical" && (
          <div className="bg-emergency-soft border border-emergency/20 rounded-lg p-3">
            <div className="flex items-center space-x-2 text-emergency">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">
                Critical request - Immediate response needed
              </span>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default RequestCard;