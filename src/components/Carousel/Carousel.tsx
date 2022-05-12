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

const tempImages = [
  {
    src:
      "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
    title: "title",
    description:
      "some description that describes this image and is really awesome!",
  },
  {
    src:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    title: "title",
    description:
      "some description that describes this image and is really awesome!",
  },
  {
    src:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    title: "title",
    description:
      "some description that describes this image and is really awesome!",
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
