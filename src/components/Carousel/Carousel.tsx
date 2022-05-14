import React, { useState, useEffect, useCallback } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Image = {
  src: string;
  title: string;
  description: string;
};

type CarouselProps = {
  images: Image[];
};

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
  const [active, setActive] = useState(1);
  const [transition, setTransition] = useState(false);
  const [carouselTimeout, setCarouselTimeout] = useState();
  const first = 0;
  const last = images.length - 1;
  const previous = active ? active - 1 : last;
  const next = active === last ? first : active + 1;

  const transitionActive = useCallback(
    (index: number) => () => {
      setTransition(index === previous ? "right" : "left");

      setTimeout(() => {
        setActive(index);
        setTransition(false);
        setTimeout(() => {
          clearTimeout(carouselTimeout);
          setCarouselTimeout(null);
        }, 0);
      }, 300);
    },
    [previous, carouselTimeout]
  );

  useEffect(() => {
    if (!carouselTimeout) {
      setCarouselTimeout(
        setTimeout(() => {
          transitionActive(next)();
        }, 5000)
      );
    }
  }, [transitionActive, next]);

  return (
    <div className="carousel-container">
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
