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

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <Carousel />
        <OwnerQuote />
        <MasonryLayout />
        <Parallax image="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" />
        <ContactForm />
      </div>
    );
  }
}
export default App;
