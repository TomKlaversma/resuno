import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EchoHero from "@/components/hero/EchoHero";
import ProblemStatement from "@/components/layout/ProblemStatement";
import ServicesGrid from "@/components/services/ServicesGrid";
import ContactForm from "@/components/cta/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <EchoHero />
        <ProblemStatement />
        <ServicesGrid />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
