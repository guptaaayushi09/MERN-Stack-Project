import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/carousel";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="m-2">
        <Carousel />
      </div>
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
