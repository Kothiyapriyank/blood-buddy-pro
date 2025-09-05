import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Bell, Menu, X, Globe } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const languages = ["EN", "ES", "FR", "DE", "ZH", "AR"];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary rounded-lg p-2">
              <Heart className="h-6 w-6 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-bold text-foreground">LifeLink</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <MapPin className="h-4 w-4 mr-2" />
              Find Donors
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <Bell className="h-4 w-4 mr-2" />
              Requests
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              My Donations
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Blood Banks
            </Button>
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "EN" ? "ES" : "EN")}
                className="flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span>{language}</span>
              </Button>
            </div>
            <Button variant="secondary">Sign In</Button>
            <Button variant="default" className="bg-gradient-primary">
              Register as Donor
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              <Button variant="ghost" className="justify-start">
                <MapPin className="h-4 w-4 mr-2" />
                Find Donors
              </Button>
              <Button variant="ghost" className="justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Requests
              </Button>
              <Button variant="ghost" className="justify-start">
                My Donations
              </Button>
              <Button variant="ghost" className="justify-start">
                Blood Banks
              </Button>
              <div className="flex space-x-2 pt-2">
                <Button variant="secondary" className="flex-1">Sign In</Button>
                <Button variant="default" className="bg-gradient-primary flex-1">
                  Register
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;