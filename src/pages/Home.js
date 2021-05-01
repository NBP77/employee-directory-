import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero backgroundImage="imgs/hero-img.jpg">
        <h1>The ultimate employee directory, if you need to find someone in your company this is the place to be</h1>
      </Hero>
         
    </div>
  );
}

export default Home;
