import React from "react";
import { ContactForm } from "../components/ContactForm";
import { CurrentSpecials } from "../components/CurrentSpecials";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Services } from "../components/Services";

export const Home = () => {
  return (
    <>
      <header className="w-screen">
        <Header />
      </header>
      <section>
        <Services />
      </section>
      <section>
        <CurrentSpecials />
      </section>
      <section>
        <ContactForm />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
