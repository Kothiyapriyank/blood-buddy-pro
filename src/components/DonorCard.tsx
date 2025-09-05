import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Star, Phone, Heart } from "lucide-react";

interface DonorCardProps {
  donor: {
    id: string;
    name: string;
    bloodType: string;
    distance: string;
    lastDonation: string;
    rating: number;
    totalDonations: number;
    isAvailable: boolean;
    estimatedArrival: string;
    phoneNumber?: string;
  };
  onContact?: (donorId: string) => void;
  onRequest?: (donorId: string) => void;
}

const DonorCard = ({ donor, onContact, onRequest }: DonorCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-3 flex-1">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">
                {donor.name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{donor.name}</h3>
              <div className="flex items-center space-x-2">
                <Badge className="bg-primary text-primary-foreground">
                  {donor.bloodType}
                </Badge>
                {donor.isAvailable ? (
                  <Badge variant="outline" className="text-success border-success">
                    Available
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-muted-foreground">
                    Unavailable
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{donor.distance}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>ETA: {donor.estimatedArrival}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Heart className="h-4 w-4" />
              <span>{donor.totalDonations} donations</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Star className="h-4 w-4 fill-current text-warning" />
              <span>{donor.rating}/5</span>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            Last donation: {donor.lastDonation}
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          {onContact && (
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => onContact(donor.id)}
              disabled={!donor.isAvailable}
            >
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
          )}
          {onRequest && (
            <Button 
              size="sm" 
              className="bg-gradient-primary"
              onClick={() => onRequest(donor.id)}
              disabled={!donor.isAvailable}
            >
              Request
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default DonorCard;