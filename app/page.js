import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Partnerships from "@/components/Partnerships";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import CATFramework from "@/components/CATFramework";
import HowWeDeliver from "@/components/HowWeDeliver";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Partnerships />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CATFramework />
        <HowWeDeliver />
        <FAQ />
        <Testimonials />
        <LeadForm />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
