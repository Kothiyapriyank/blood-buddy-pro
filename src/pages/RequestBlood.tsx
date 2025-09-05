import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, AlertTriangle, MapPin, Clock, Phone, User, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const RequestBlood = () => {
  const [urgencyLevel, setUrgencyLevel] = useState("");
  const [requestData, setRequestData] = useState({
    patientName: "",
    bloodType: "",
    unitsNeeded: "",
    hospitalName: "",
    hospitalAddress: "",
    contactPerson: "",
    contactPhone: "",
    requiredBy: "",
    medicalCondition: "",
    additionalNotes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock request logic
    console.log("Blood request data:", { urgencyLevel, ...requestData });
    alert("Blood request submitted successfully! We're notifying nearby donors.");
  };

  const getUrgencyColor = (level: string) => {
    switch (level) {
      case "critical": return "text-emergency";
      case "urgent": return "text-warning";
      case "routine": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
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
              <span className="text-xl font-bold text-foreground">Request Blood</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Blood Request Form</h1>
            <p className="text-muted-foreground">Submit a request and we'll connect you with nearby donors immediately</p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Urgency Level */}
              <div className="space-y-4">
                <Label className="text-base font-semibold flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Urgency Level
                </Label>
                <RadioGroup value={urgencyLevel} onValueChange={setUrgencyLevel}>
                  <div className="flex items-center space-x-2 p-4 border border-emergency/30 rounded-lg hover:bg-emergency-soft">
                    <RadioGroupItem value="critical" id="critical" />
                    <Label htmlFor="critical" className="flex-1 cursor-pointer">
                      <div className="font-medium text-emergency">Critical (Life-threatening)</div>
                      <div className="text-sm text-muted-foreground">Immediate blood transfusion required</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-warning/30 rounded-lg hover:bg-warning-soft">
                    <RadioGroupItem value="urgent" id="urgent" />
                    <Label htmlFor="urgent" className="flex-1 cursor-pointer">
                      <div className="font-medium text-warning">Urgent (Within 24 hours)</div>
                      <div className="text-sm text-muted-foreground">Surgery or treatment scheduled</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value="routine" id="routine" />
                    <Label htmlFor="routine" className="flex-1 cursor-pointer">
                      <div className="font-medium">Routine (Within 1 week)</div>
                      <div className="text-sm text-muted-foreground">Planned procedure or treatment</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {urgencyLevel && (
                <>
                  {/* Patient Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="patientName">
                        <User className="h-4 w-4 inline mr-2" />
                        Patient Name
                      </Label>
                      <Input
                        id="patientName"
                        value={requestData.patientName}
                        onChange={(e) => setRequestData({...requestData, patientName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bloodType">Blood Type Needed</Label>
                      <Select value={requestData.bloodType} onValueChange={(value) => setRequestData({...requestData, bloodType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select blood type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="unitsNeeded">Units Needed</Label>
                      <Input
                        id="unitsNeeded"
                        type="number"
                        value={requestData.unitsNeeded}
                        onChange={(e) => setRequestData({...requestData, unitsNeeded: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="requiredBy">
                        <Clock className="h-4 w-4 inline mr-2" />
                        Required By
                      </Label>
                      <Input
                        id="requiredBy"
                        type="datetime-local"
                        value={requestData.requiredBy}
                        onChange={(e) => setRequestData({...requestData, requiredBy: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  {/* Hospital Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Hospital Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="hospitalName">Hospital Name</Label>
                        <Input
                          id="hospitalName"
                          value={requestData.hospitalName}
                          onChange={(e) => setRequestData({...requestData, hospitalName: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactPhone">
                          <Phone className="h-4 w-4 inline mr-2" />
                          Contact Phone
                        </Label>
                        <Input
                          id="contactPhone"
                          value={requestData.contactPhone}
                          onChange={(e) => setRequestData({...requestData, contactPhone: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="hospitalAddress">
                        <MapPin className="h-4 w-4 inline mr-2" />
                        Hospital Address
                      </Label>
                      <Input
                        id="hospitalAddress"
                        value={requestData.hospitalAddress}
                        onChange={(e) => setRequestData({...requestData, hospitalAddress: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Contact Person (Doctor/Nurse)</Label>
                      <Input
                        id="contactPerson"
                        value={requestData.contactPerson}
                        onChange={(e) => setRequestData({...requestData, contactPerson: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="medicalCondition">Medical Condition/Reason</Label>
                      <Textarea
                        id="medicalCondition"
                        value={requestData.medicalCondition}
                        onChange={(e) => setRequestData({...requestData, medicalCondition: e.target.value})}
                        placeholder="Brief description of the medical condition requiring blood transfusion"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea
                        id="additionalNotes"
                        value={requestData.additionalNotes}
                        onChange={(e) => setRequestData({...requestData, additionalNotes: e.target.value})}
                        placeholder="Any additional information for donors"
                      />
                    </div>
                  </div>

                  {/* Emergency SOS Option */}
                  {urgencyLevel === "critical" && (
                    <Card className="p-4 bg-emergency-soft border border-emergency/30">
                      <div className="flex items-center space-x-3">
                        <AlertTriangle className="h-5 w-5 text-emergency" />
                        <div>
                          <div className="font-semibold text-emergency">Critical Request</div>
                          <div className="text-sm text-muted-foreground">
                            This will trigger an Emergency SOS broadcast to all compatible donors within 10km
                          </div>
                        </div>
                      </div>
                    </Card>
                  )}

                  <Button 
                    type="submit" 
                    className={`w-full text-lg py-3 ${
                      urgencyLevel === "critical" 
                        ? "bg-emergency hover:bg-emergency/90 text-emergency-foreground shadow-emergency" 
                        : "bg-gradient-primary"
                    }`}
                    size="lg"
                  >
                    {urgencyLevel === "critical" ? "Send Emergency SOS" : "Submit Blood Request"}
                  </Button>
                </>
              )}
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default RequestBlood;