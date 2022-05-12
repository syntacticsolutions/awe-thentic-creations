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

const content = [
  {
    type: "image",
    src:
      "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
  },
  {
    content: function Content() {
      return (
        <div>
          <HighlightContent
            title="catering"
            subTitle="Social Events"
            description="We love to host catering events. We offer chef, bartender and food service. Make your event unforgettable by hiring a highly competent team to host your events!"
            link="#"
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
            title="catering"
            subTitle="Corporate Parties"
            description="Did you just finish that project and would like to celebrate? We will happily come to the office to give you an experience of a lifetime."
            link="#"
          />
        </div>
      );
    },
    link: "#",
  },
  {
    type: "image",
    src:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    type: "image",
    src:
      "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    content: function Content() {
      return (
        <div>
          <HighlightContent
            title="catering"
            subTitle="Weddings"
            description="Our weddings are the best! Not only do we have the best food, but we also have the best professional photographers around. Let us make your event last the test of time."
            link="#"
          />
        </div>
      );
    },
    link: "#",
  },
];

export const MasonryLayout = () => {
  return (
    <div className="masonry-container">
      {content.map((item) => {
        if (item.type === "image") {
          return (
            <figure className="item-container">
              <img src={item.src} />
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
