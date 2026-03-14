import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";

import Hero from "@components/home/Hero";
import TrustStrip from "@components/home/TrustStrip";
import Services from "@components/home/Services";
import Hosting from "@components/home/Hosting";
import About from "@components/home/About";
import ContactCTA from "@components/home/ContactCTA";
import QuoteForm from "@components/forms/QuoteForm";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Hosting />
        <About />
        <ContactCTA />
         <QuoteForm />
      </main>
      <Footer />
     
    </>
  );
}

export default Home;