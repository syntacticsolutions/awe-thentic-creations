import React from "react";

type ParallaxProps = {
  image: string;
};

export const Parallax = ({ image }: ParallaxProps) => {
  return (
    <div className="parallax-container">
      <img src={image}></img>
    </div>
  );
};
