import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Trophy, 
  Smartphone, 
  Building2, 
  Globe, 
  Shield,
  Zap,
  Users,
  MapPin
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Smart algorithm ranks donors by proximity, last donation date, and real-time availability for optimal matching.",
      highlights: ["Real-time ranking", "Compatibility scoring", "Automated notifications"],
      badge: "Intelligent",
      color: "secondary"
    },
    {
      icon: Trophy,
      title: "Donation History & Rewards",
      description: "Track your lifesaving contributions, earn badges, and build a reputation as a trusted community donor.",
      highlights: ["Achievement badges", "Donation credits", "Leaderboards"],
      badge: "Gamified",
      color: "success"
    },
    {
      icon: Smartphone,
      title: "Emergency SOS Mode",
      description: "Instant broadcast system alerts all nearby compatible donors during critical blood shortage emergencies.",
      highlights: ["One-click activation", "Geo-targeted alerts", "Hospital verified"],
      badge: "Critical",
      color: "emergency"
    },
    {
      icon: Building2,
      title: "Blood Bank Integration",
      description: "Seamless connection with local blood banks showing real-time inventory and availability when donors aren't nearby.",
      highlights: ["Live inventory", "Bank locations", "Stock alerts"],
      badge: "Connected",
      color: "primary"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Platform available in 15+ languages ensuring accessibility for diverse communities worldwide.",
      highlights: ["15+ languages", "Cultural adaptation", "Regional preferences"],
      badge: "Global",
      color: "secondary"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Medical-grade encryption and privacy controls ensure your health data remains secure and confidential.",
      highlights: ["HIPAA compliant", "End-to-end encryption", "Anonymous matching"],
      badge: "Secure",
      color: "muted"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Powered by Advanced Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform combines cutting-edge AI, real-time data, and intuitive design 
            to create the most efficient blood donation network ever built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-medical transition-all duration-300 border-border bg-card group">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-${feature.color}-soft flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-6 w-6 text-${feature.color}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Zap className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">99.7%</div>
              <div className="text-muted-foreground">Match Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-success mb-2">&lt;3min</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-emergency mb-2">24/7</div>
              <div className="text-muted-foreground">Emergency Support</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Save Lives?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of heroes who are already making a difference in their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary">
              <Users className="h-5 w-5 mr-2" />
              Join as Donor
            </Button>
            <Button size="lg" variant="outline">
              <MapPin className="h-5 w-5 mr-2" />
              Find Blood Banks
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;