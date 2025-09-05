import { Button } from "@/components/ui/button";
import { Heart, Mail, Phone, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Find Donors", href: "#donors" },
    { label: "Blood Banks", href: "#banks" },
    { label: "Emergency SOS", href: "#emergency" },
    { label: "My Dashboard", href: "#dashboard" }
  ];

  const resources = [
    { label: "How it Works", href: "#how" },
    { label: "Safety Guidelines", href: "#safety" },
    { label: "FAQs", href: "#faq" },
    { label: "Support", href: "#support" }
  ];

  const legal = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Medical Disclaimer", href: "#disclaimer" },
    { label: "HIPAA Compliance", href: "#hipaa" }
  ];

  const languages = [
    "English", "Español", "Français", "Deutsch", "中文", "العربية"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary rounded-lg p-2">
                <Heart className="h-6 w-6 text-primary-foreground fill-current" />
              </div>
              <span className="text-xl font-bold text-foreground">LifeLink</span>
            </div>
            
            <p className="text-muted-foreground">
              Connecting lives through technology. Our AI-powered platform makes 
              blood donation more efficient, accessible, and lifesaving.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>Emergency: 1-800-LIFELINK</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@lifelink.health</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Available nationwide</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="w-10 h-10 p-0">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Language */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              {legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Selector */}
            <div>
              <h4 className="font-medium text-foreground mb-3 flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                Languages
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang, index) => (
                  <button
                    key={index}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 LifeLink. All rights reserved. Saving lives through technology.
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Platform Status: Operational</span>
              </div>
              <div>
                Last updated: Jan 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;