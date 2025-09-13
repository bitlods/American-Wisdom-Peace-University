import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Talents from "./components/Talents";
import Awards from "./components/Awards";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppChat from "./components/WhatsAppChat";
function App() {
  return (
    <div className="font-sans bg-gradient-to-r from-indigo-50 via-white to-indigo-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Talents />
      <Awards />
      <Gallery />
      <ContactForm />
      <Footer />
      <WhatsAppChat/>
    </div>
  );
}

export default App;
