import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Bell, Menu, X, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const languages = ["EN", "ES", "FR", "DE", "ZH", "AR"];

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-primary rounded-lg p-2">
              <Heart className="h-6 w-6 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-bold text-foreground">LifeLink</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/donor-dashboard">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <MapPin className="h-4 w-4 mr-2" />
                Find Donors
              </Button>
            </Link>
            <Link to="/request-blood">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Bell className="h-4 w-4 mr-2" />
                Requests
              </Button>
            </Link>
            <Link to="/donor-dashboard">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                My Donations
              </Button>
            </Link>
            <Link to="/recipient-dashboard">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Blood Banks
              </Button>
            </Link>
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
            <Link to="/register">
              <Button variant="default" className="bg-gradient-primary">
                Register as Donor
              </Button>
            </Link>
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
              <Link to="/donor-dashboard">
                <Button variant="ghost" className="justify-start w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Donors
                </Button>
              </Link>
              <Link to="/request-blood">
                <Button variant="ghost" className="justify-start w-full">
                  <Bell className="h-4 w-4 mr-2" />
                  Requests
                </Button>
              </Link>
              <Link to="/donor-dashboard">
                <Button variant="ghost" className="justify-start w-full">
                  My Donations
                </Button>
              </Link>
              <Link to="/recipient-dashboard">
                <Button variant="ghost" className="justify-start w-full">
                  Blood Banks
                </Button>
              </Link>
              <div className="flex space-x-2 pt-2">
                <Button variant="secondary" className="flex-1">Sign In</Button>
                <Link to="/register" className="flex-1">
                  <Button variant="default" className="bg-gradient-primary w-full">
                    Register
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;