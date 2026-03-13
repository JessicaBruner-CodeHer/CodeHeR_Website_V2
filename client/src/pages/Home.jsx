import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ContactCTA from "../components/home/ContactCTA";
import QuoteForm from "../components/forms/QuoteForm";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <ContactCTA />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}

export default Home;