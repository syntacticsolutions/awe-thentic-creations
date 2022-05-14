import React from "react";
import { useCarousel } from "../Carousel";

const testimonials = [
  {
    title: "Ellie J.",
    description:
      "Jessica was absolutely amazing to work with! The food waas so tasty and guests couldn't stop complimenting how good it all was!",
  },
  {
    title: "Jarrett A.",
    description:
      "The cake was amazing! I said it looked too beautiful to eat and Jessica countered that it was too delicious not to eat. She was right. Dinner was fantastic! Everything was better than expected. A sublimely professional experience.",
  },
  {
    title: "Rebecca M.",
    description:
      "Jessica was outstanding! Food was amazing , extremely flavorful! Her stuffed mushrooms are out of this world! Thank you again Jessica for making my husband's birthday a hit! All our guests loved your food and service ass well, Will be using you(AweThentic Creations) again!",
  },
];

export const Testimonials = () => {
  const { transition, active } = useCarousel(testimonials);

  return (
    <div
      className="carousel-container"
      style={{ background: "white" }}
      id="testimonials"
    >
      <div
        className="overlay"
        style={{ background: "rgba(255,192,203,0.3)" }}
      />
      <section className="carousel-content">
        <h1 style={{ color: "#bbb" }}>Testimonials</h1>
        <h2 style={{ color: "#aaa" }} className={transition ? "" : "active"}>
          {testimonials[active].title}
        </h2>
        <p style={{ color: "#aaa" }} className={transition ? "" : "active"}>
          {testimonials[active].description}
        </p>
      </section>
      <div className="carousel" style={{ background: "white" }}></div>
    </div>
  );
};
