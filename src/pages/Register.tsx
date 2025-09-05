import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Heart, MapPin, Phone, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodType: "",
    location: "",
    age: "",
    weight: "",
    lastDonation: "",
    medicalConditions: false,
    emergencyContact: "",
    availableForEmergency: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration logic
    console.log("Registration data:", { userType, ...formData });
    alert("Registration successful! Welcome to LifeLink.");
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
              <span className="text-xl font-bold text-foreground">LifeLink Registration</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">Join the LifeLink Community</h1>
            <p className="text-muted-foreground">Register to save lives or get help when you need it most</p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">I want to register as:</Label>
                <RadioGroup value={userType} onValueChange={setUserType}>
                  <div className="flex items-center space-x-2 p-4 border border-border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value="donor" id="donor" />
                    <Label htmlFor="donor" className="flex-1 cursor-pointer">
                      <div className="font-medium">Blood Donor</div>
                      <div className="text-sm text-muted-foreground">Help save lives by donating blood</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border border-border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value="recipient" id="recipient" />
                    <Label htmlFor="recipient" className="flex-1 cursor-pointer">
                      <div className="font-medium">Patient/Hospital</div>
                      <div className="text-sm text-muted-foreground">Request blood for patients in need</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {userType && (
                <>
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        <User className="h-4 w-4 inline mr-2" />
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        <Mail className="h-4 w-4 inline mr-2" />
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        <Phone className="h-4 w-4 inline mr-2" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bloodType">Blood Type</Label>
                      <Select value={formData.bloodType} onValueChange={(value) => setFormData({...formData, bloodType: value})}>
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
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">
                      <MapPin className="h-4 w-4 inline mr-2" />
                      Location/Address
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="City, State, Country"
                      required
                    />
                  </div>

                  {userType === "donor" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="age">Age</Label>
                          <Input
                            id="age"
                            type="number"
                            value={formData.age}
                            onChange={(e) => setFormData({...formData, age: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="weight">Weight (kg)</Label>
                          <Input
                            id="weight"
                            type="number"
                            value={formData.weight}
                            onChange={(e) => setFormData({...formData, weight: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastDonation">Last Donation</Label>
                          <Input
                            id="lastDonation"
                            type="date"
                            value={formData.lastDonation}
                            onChange={(e) => setFormData({...formData, lastDonation: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="emergency"
                            checked={formData.availableForEmergency}
                            onCheckedChange={(checked) => setFormData({...formData, availableForEmergency: checked as boolean})}
                          />
                          <Label htmlFor="emergency" className="text-sm">
                            I'm available for emergency donations (24/7 notifications)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="medical"
                            checked={formData.medicalConditions}
                            onCheckedChange={(checked) => setFormData({...formData, medicalConditions: checked as boolean})}
                          />
                          <Label htmlFor="medical" className="text-sm">
                            I have medical conditions that might affect donation eligibility
                          </Label>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="emergency-contact">Emergency Contact</Label>
                    <Input
                      id="emergency-contact"
                      value={formData.emergencyContact}
                      onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                      placeholder="Name and phone number"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary text-lg py-3"
                    size="lg"
                  >
                    Complete Registration
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

export default Register;