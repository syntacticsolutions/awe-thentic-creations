import React from "react";
import { Header } from "./components/Header/Header.jsx";
import { Carousel } from "./components/Carousel";
import { OwnerQuote } from "./components/OwnerQuote";
import { MasonryLayout } from "./components/MasonryLayout";
import { Parallax } from "./components/Parallax";
import { ContactForm } from "./components/ContactForm";

import "./app.styles.scss";
import "./assets/css/banquet-core.min.css";
import "./assets/css/main.min.css";

const beefRavioli = require("./assets/img/beef-ravioli.jpg");

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Carousel />
        <OwnerQuote />
        <MasonryLayout />
        <Parallax image={beefRavioli} />
        <ContactForm />
      </div>
    );
  }
}
export default App;
