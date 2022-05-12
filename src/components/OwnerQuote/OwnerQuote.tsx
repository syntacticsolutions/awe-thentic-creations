import React from "react";

const quoteText = "lorem ipsem dolor sit amet consectetur adipiscing elit";

export const OwnerQuote = () => {
  return (
    <div className="owner-quote">
      <p className="quote-text">{quoteText}</p>
      <p className="quote-author">- Jessica Gonzalez</p>
    </div>
  );
};
