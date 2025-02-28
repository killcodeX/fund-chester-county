import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Container from "@/app/components/container";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
      <Container>
        <Hero />
        <Services />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
}
