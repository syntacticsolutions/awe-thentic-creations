import React from "react";

const HighlightContent = ({ title, subTitle, description, link }: any) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <p>{description}</p>
      {link && <a href={link || "#"}>- Learn More</a>}
    </div>
  );
};

const strawBerryCheeseCake = require("../../assets/img/strawberry-cake.jpg");
const padTai = require("../../assets/img/pad-tai.jpg");
const irishStew = require("../../assets/img/irish-stew.jpg");

const content = [
  {
    type: "image",
    src: irishStew,
    alt: "irish-stew",
  },
  {
    content: function Content() {
      return (
        <div>
          <HighlightContent
            title="Irish Stew"
            subTitle="Social Events"
            description="We love to host catering events. We offer chef, bartender and food service. Make your event unforgettable by hiring a highly competent team to host your events!"
            link="#contact-form"
          />
        </div>
      );
    },
  },
  {
    content: function Content() {
      return (
        <div>
          <HighlightContent
            title="Pad Tai"
            subTitle="Personal Chef"
            description="Are you looking for the pefect person to cook for you in-home? I have amazing experience cooking some of the highest quality foods with any type of cuisine for my clients."
            link="#contact-form"
          />
        </div>
      );
    },
  },
  {
    type: "image",
    src: padTai,
    alt: "pad-tai",
  },
  {
    type: "image",
    src: strawBerryCheeseCake,
    alt: "strawberry-cake",
  },
  {
    content: function Content() {
      return (
        <div>
          <HighlightContent
            title="Strawberry Cheesecake"
            subTitle="Weddings"
            description="Our weddings are the best! Not only do we have the best food, but we also have the best professional photographers around. Let us make your event last the test of time."
            link="#contact-form"
          />
        </div>
      );
    },
  },
];

export const MasonryLayout = () => {
  return (
    <div className="masonry-container">
      {content.map((item) => {
        if (item.type === "image") {
          return (
            <figure className="item-container">
              <img src={item.src} alt={`${item.alt}-image`} />
            </figure>
          );
        } else if (item.content) {
          return <div className="item-container">{item.content()}</div>;
        } else {
          return null;
        }
      })}
    </div>
  );
};
