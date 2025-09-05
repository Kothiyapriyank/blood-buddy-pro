import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Layers, Search, Filter } from "lucide-react";

interface MapLocation {
  id: string;
  type: "donor" | "request" | "bloodbank";
  name: string;
  bloodType?: string;
  distance: string;
  lat: number;
  lng: number;
  urgency?: string;
  available?: boolean;
}

const MapContainer = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);
  const [mapView, setMapView] = useState<"donors" | "requests" | "bloodbanks">("donors");

  // Mock data for map locations
  const locations: MapLocation[] = [
    {
      id: "1",
      type: "donor",
      name: "John Doe",
      bloodType: "O+",
      distance: "1.2 km",
      lat: 40.7589,
      lng: -73.9851,
      available: true
    },
    {
      id: "2",
      type: "request",
      name: "Manhattan General Hospital",
      bloodType: "AB-",
      distance: "2.1 km",
      lat: 40.7614,
      lng: -73.9776,
      urgency: "Critical"
    },
    {
      id: "3",
      type: "bloodbank",
      name: "NYC Blood Center",
      distance: "3.5 km",
      lat: 40.7505,
      lng: -73.9934,
      available: true
    }
  ];

  const getLocationIcon = (type: string) => {
    switch (type) {
      case "donor": return "👤";
      case "request": return "🏥";
      case "bloodbank": return "🩸";
      default: return "📍";
    }
  };

  const getLocationColor = (location: MapLocation) => {
    if (location.type === "request" && location.urgency === "Critical") {
      return "border-emergency bg-emergency-soft";
    }
    if (location.type === "donor" && location.available) {
      return "border-success bg-success-soft";
    }
    return "border-primary bg-primary-soft";
  };

  return (
    <div className="space-y-6">
      {/* Map Controls */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Interactive Map
          </h3>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button size="sm" variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm" variant="outline">
              <Navigation className="h-4 w-4 mr-2" />
              My Location
            </Button>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex space-x-2 mb-4">
          <Button
            size="sm"
            variant={mapView === "donors" ? "default" : "outline"}
            onClick={() => setMapView("donors")}
            className={mapView === "donors" ? "bg-gradient-primary" : ""}
          >
            <Layers className="h-4 w-4 mr-2" />
            Donors
          </Button>
          <Button
            size="sm"
            variant={mapView === "requests" ? "default" : "outline"}
            onClick={() => setMapView("requests")}
            className={mapView === "requests" ? "bg-gradient-primary" : ""}
          >
            Requests
          </Button>
          <Button
            size="sm"
            variant={mapView === "bloodbanks" ? "default" : "outline"}
            onClick={() => setMapView("bloodbanks")}
            className={mapView === "bloodbanks" ? "bg-gradient-primary" : ""}
          >
            Blood Banks
          </Button>
        </div>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Mock Map Display */}
        <div className="lg:col-span-2">
          <Card className="p-4">
            <div className="bg-muted/30 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
              {/* Mock map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
              
              {/* Mock location markers */}
              {locations
                .filter(loc => mapView === "donors" ? loc.type === "donor" : 
                              mapView === "requests" ? loc.type === "request" :
                              mapView === "bloodbanks" ? loc.type === "bloodbank" : true)
                .map((location) => (
                <div
                  key={location.id}
                  className={`absolute w-12 h-12 rounded-full border-2 ${getLocationColor(location)} flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg`}
                  style={{
                    left: `${(location.lng + 74) * 400}px`,
                    top: `${(40.8 - location.lat) * 400}px`
                  }}
                  onClick={() => setSelectedLocation(location)}
                >
                  <span className="text-lg">{getLocationIcon(location.type)}</span>
                </div>
              ))}

              {/* Center indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-primary rounded-full shadow-lg animate-pulse"></div>
              </div>

              <div className="text-center text-muted-foreground">
                <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">Interactive Map View</p>
                <p className="text-sm">
                  {mapView === "donors" && "Showing available blood donors nearby"}
                  {mapView === "requests" && "Showing active blood requests"}
                  {mapView === "bloodbanks" && "Showing blood banks and centers"}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Location Details */}
        <div className="space-y-4">
          {selectedLocation ? (
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full ${getLocationColor(selectedLocation)} flex items-center justify-center`}>
                    <span className="text-lg">{getLocationIcon(selectedLocation.type)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{selectedLocation.name}</h3>
                    <p className="text-sm text-muted-foreground capitalize">{selectedLocation.type}</p>
                  </div>
                </div>

                {selectedLocation.bloodType && (
                  <Badge className="bg-primary text-primary-foreground">
                    {selectedLocation.bloodType}
                  </Badge>
                )}

                {selectedLocation.urgency && (
                  <Badge className="bg-emergency text-emergency-foreground">
                    {selectedLocation.urgency}
                  </Badge>
                )}

                <div className="text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 inline mr-1" />
                  {selectedLocation.distance} away
                </div>

                <div className="space-y-2">
                  {selectedLocation.type === "donor" && (
                    <>
                      <Button className="w-full bg-gradient-primary">
                        Request Donation
                      </Button>
                      <Button variant="outline" className="w-full">
                        Contact Donor
                      </Button>
                    </>
                  )}
                  {selectedLocation.type === "request" && (
                    <>
                      <Button className="w-full bg-gradient-primary">
                        Respond to Request
                      </Button>
                      <Button variant="outline" className="w-full">
                        Get Directions
                      </Button>
                    </>
                  )}
                  {selectedLocation.type === "bloodbank" && (
                    <>
                      <Button className="w-full bg-gradient-primary">
                        Check Stock
                      </Button>
                      <Button variant="outline" className="w-full">
                        Contact Center
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card>
          ) : (
            <Card className="p-6 text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-50" />
              <p className="text-muted-foreground">
                Click on a marker to view details
              </p>
            </Card>
          )}

          {/* Legend */}
          <Card className="p-4">
            <h4 className="font-semibold text-foreground mb-3">Map Legend</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-success border border-success"></div>
                <span>Available Donors</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-emergency border border-emergency"></div>
                <span>Critical Requests</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-primary border border-primary"></div>
                <span>Blood Banks</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MapContainer;