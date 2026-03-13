import Navbar from "@components/layout/Navbar";
import Footer from "@components/layout/Footer";

import Hero from "@components/home/Hero";
import About from "@components/home/About";
import Services from "@components/home/Services";
import WhyChooseUs from "@components/home/WhyChooseUs";
import Process from "@components/home/Process";

import QuoteForm from "@components/forms/QuoteForm";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <QuoteForm />
      <Footer />
    </>
  );
}

export default Home;