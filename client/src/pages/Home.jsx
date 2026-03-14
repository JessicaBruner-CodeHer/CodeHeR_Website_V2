import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";

import Hero from "@components/home/Hero";
import TrustStrip from "@components/home/TrustStrip";
import Services from "@components/home/Services";

import About from "@components/home/About";
import QuoteForm from "@components/forms/QuoteForm";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
         <About />
       
         <QuoteForm />
      </main>
      <Footer />
     
    </>
  );
}

export default Home;