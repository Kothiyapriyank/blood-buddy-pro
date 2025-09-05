import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-blood-donation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Blood donation community" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Save Lives with{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  One Click
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Connect blood donors with patients in urgent need. Our AI-powered platform 
                matches donors by proximity, availability, and compatibility in real-time.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Donors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-success">500+</div>
                <div className="text-sm text-muted-foreground">Lives Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-secondary">24/7</div>
                <div className="text-sm text-muted-foreground">Available</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary shadow-medical text-lg px-8 py-3"
              >
                <Users className="h-5 w-5 mr-2" />
                Become a Donor
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-3 border-primary hover:bg-primary-soft"
              >
                <MapPin className="h-5 w-5 mr-2" />
                Find Blood Bank
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Response time: &lt;5 min</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Nationwide coverage</span>
              </div>
            </div>
          </div>

          {/* Feature Cards - Right Side */}
          <div className="hidden lg:block space-y-4">
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-card border border-border">
              <h3 className="font-semibold text-foreground mb-3">AI-Powered Matching</h3>
              <p className="text-muted-foreground text-sm">
                Smart algorithm ranks donors by proximity, compatibility, and availability
              </p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-card border border-border">
              <h3 className="font-semibold text-foreground mb-3">Real-time Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Track donation history, earn rewards, and build your lifesaver profile
              </p>
            </div>
            <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-card border border-border">
              <h3 className="font-semibold text-foreground mb-3">Emergency SOS</h3>
              <p className="text-muted-foreground text-sm">
                Instant broadcast to all nearby compatible donors in crisis situations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;