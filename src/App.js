import React from "react";
// import all the containers
import { About, Footer, Header, Skills, Work, Testimonials } from "./container";
// Styling
import './App.scss';
// import all components
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
