import { useState, useEffect, useCallback } from "react";
// @ts-ignore
import { Image } from "./index.js";

export const useCarousel = (images: Image[]) => {
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

  return { transition, transitionActive, previous, next, active };
};
