import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

import Hero from "./sections/Hero";
import Services from "./sections/Services";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </React.Fragment>
  );
}
