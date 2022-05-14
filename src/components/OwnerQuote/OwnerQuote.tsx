import React from "react";

const quoteText =
  "My passion is to make food so good that you hum and sing when you eat it. Our family recipes have been in the family for generations. We are proud to be a family-owned business and we are honored to be able to share our passion for food with you.";

export const OwnerQuote = () => {
  return (
    <div className="owner-quote" id="about">
      <p className="quote-text">{quoteText}</p>
      <p className="quote-author">- Jessica Gonzalez</p>
    </div>
  );
};
