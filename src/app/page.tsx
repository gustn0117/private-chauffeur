import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Vehicle from "@/components/Vehicle";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Vehicle />
        <Services />
        <Experience />
        <Reviews />
        <Pricing />
        <Booking />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
