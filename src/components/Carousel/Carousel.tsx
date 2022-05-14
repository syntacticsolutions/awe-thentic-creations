import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// @ts-ignore
import { CarouselProps, useCarousel } from "./index.js";

const steakImage = require("../../assets/img/steak.jpg");
const cakeImage = require("../../assets/img/cake.jpg");
const sopesImage = require("../../assets/img/sopes.jpg");

const tempImages = [
  {
    src: sopesImage,
    title: "Hispanic Cuisine",
    description:
      "Our Hispanic dishes contain all of the five food groups as well as AweThentic salsas that are out of this world!",
  },
  {
    src: steakImage,
    title: "Steaks",
    description:
      "We make the most perfectly temped steaks and add the perfect spices to bring out the most flavor.",
  },
  {
    src: cakeImage,
    title: "Cakes",
    description:
      "We make professional cakes for any occasion! Every bite is a delicious delight!",
  },
];

export const Carousel = ({ images = tempImages }: CarouselProps) => {
  const { transition, transitionActive, previous, next, active } = useCarousel(
    images
  );

  return (
    <div className="carousel-container" id="home">
      <div className="chevron-left" onClick={transitionActive(previous)}>
        <BsChevronLeft color="white" />
      </div>
      <div className="overlay" />
      <div className="carousel-content">
        <h2 className={transition ? "" : "active"}>{images[active].title}</h2>
        <p className={transition ? "" : "active"}>
          {images[active].description}
        </p>
      </div>
      <div className="carousel">
        <figure className={transition === "right" && "transition-right"}>
          <img src={images[previous].src} />
        </figure>
        <figure
          className={
            transition === "right"
              ? "transition-right"
              : transition === "left" && "transition-left"
          }
        >
          <img src={images[active].src} />
        </figure>
        <figure className={transition === "left" && "transition-left"}>
          <img src={images[next].src} />
        </figure>
      </div>
      <div className="chevron-right" onClick={transitionActive(next)}>
        <BsChevronRight color="white" />
      </div>
    </div>
  );
};
