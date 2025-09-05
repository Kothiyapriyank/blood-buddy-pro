import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Clock, Rocket } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Foundation & Core Features",
      status: "completed",
      timeline: "Q1 2024",
      features: [
        "User registration and profile management",
        "Basic donor-patient matching algorithm",
        "Emergency SOS notification system",
        "Mobile-responsive web platform",
        "Basic blood bank integration"
      ]
    },
    {
      phase: "Phase 2", 
      title: "AI-Powered Intelligence",
      status: "in-progress",
      timeline: "Q2 2024",
      features: [
        "Advanced AI matching with machine learning",
        "Predictive analytics for blood demand",
        "Automated donor eligibility screening",
        "Real-time location tracking and routing",
        "Multi-language support (5 languages)"
      ]
    },
    {
      phase: "Phase 3",
      title: "Enhanced User Experience",
      status: "planned",
      timeline: "Q3 2024", 
      features: [
        "Native mobile apps (iOS & Android)",
        "Gamification and rewards system",
        "Social features and community building",
        "Advanced notification preferences",
        "Integration with wearable devices"
      ]
    },
    {
      phase: "Phase 4",
      title: "Scale & Advanced Features",
      status: "planned",
      timeline: "Q4 2024",
      features: [
        "Enterprise hospital management portal",
        "Advanced analytics dashboard",
        "API for third-party integrations",
        "International expansion framework",
        "Blockchain-based donation verification"
      ]
    },
    {
      phase: "Phase 5",
      title: "Global Expansion",
      status: "future",
      timeline: "2025",
      features: [
        "Multi-country deployment",
        "Regulatory compliance automation",
        "Advanced AI health predictions",
        "Integration with national health systems",
        "Telemedicine consultation features"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-success" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-primary" />;
      case 'planned':
        return <Circle className="h-5 w-5 text-secondary" />;
      case 'future':
        return <Rocket className="h-5 w-5 text-muted-foreground" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'in-progress':
        return 'primary';
      case 'planned':
        return 'secondary';
      case 'future':
        return 'muted';
      default:
        return 'muted';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      case 'future':
        return 'Future';
      default:
        return 'Unknown';
    }
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Development Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our journey to revolutionize blood donation through technology. 
            Track our progress and see what's coming next.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-6 w-5 h-5 bg-background border-2 border-border rounded-full items-center justify-center">
                  <div className={`w-2 h-2 rounded-full ${
                    phase.status === 'completed' ? 'bg-success' :
                    phase.status === 'in-progress' ? 'bg-primary' :
                    phase.status === 'planned' ? 'bg-secondary' : 'bg-muted-foreground'
                  }`}></div>
                </div>

                <Card className={`lg:ml-16 p-8 ${
                  phase.status === 'in-progress' ? 'border-primary shadow-medical' : ''
                }`}>
                  <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(phase.status)}
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {phase.phase}: {phase.title}
                          </h3>
                          <p className="text-muted-foreground">{phase.timeline}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={getStatusColor(phase.status) as any}
                        className="w-fit"
                      >
                        {getStatusText(phase.status)}
                      </Badge>
                    </div>

                    <ul className="space-y-3">
                      {phase.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                            phase.status === 'completed' ? 'text-success' : 'text-muted-foreground'
                          }`} />
                          <span className={`text-sm ${
                            phase.status === 'completed' ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-16 bg-card rounded-xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Development Progress</h3>
            <p className="text-muted-foreground">Current milestone achievements</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Core Features Complete</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">60%</div>
              <div className="text-sm text-muted-foreground">AI Integration Progress</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">12</div>
              <div className="text-sm text-muted-foreground">Months to Full Launch</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;