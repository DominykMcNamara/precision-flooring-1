import React from "react";
import { ContactForm } from "../components/ContactForm";
import { Header } from "../components/Header";
import { Services } from "../components/Services";

export const Home = () => {
  return (
    <>
      <header className="w-100">
        <Header />
      </header>
      <section>
        <Services />
      </section>
      <section>
        <ContactForm />
      </section>
    </>
  );
};
