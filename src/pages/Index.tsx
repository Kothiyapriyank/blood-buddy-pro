import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmergencySOS from "@/components/EmergencySOS";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <EmergencySOS />
        <Features />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;