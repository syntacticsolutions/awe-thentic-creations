import React, { useState } from "react";

export const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <header id="qodef-page-header">
      <div id="qodef-page-header-inner">
        <div className="qodef-header-logo-wrapper">
          <a
            itemProp="url"
            className="qodef-header-logo-link qodef-height--not-set"
            href="#home"
            rel="home"
          >
            AweThentic
          </a>
        </div>
        <nav
          className={`qodef-header-navigation ${active ? "active" : ""}`}
          role="navigation"
          aria-label="Top Menu"
        >
          <ul id="qodef-main-navigation-menu" className="menu">
            <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-23 qodef-menu-item--narrow">
              <a href="#home">
                <span className="qodef-menu-item-inner">
                  <span className="qodef-menu-item-text">Home</span>
                </span>
              </a>
              <span className="qodef-menu-arrow"></span>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-24 qodef-menu-item--narrow">
              <a href="#services">
                <span className="qodef-menu-item-inner">
                  <span className="qodef-menu-item-text">Services</span>
                </span>
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-565 qodef-menu-item--narrow">
              <a href="#personal-chef">
                <span className="qodef-menu-item-inner">
                  <span className="qodef-menu-item-text">Testimonials</span>
                </span>
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-25 qodef-menu-item--narrow">
              <a href="#about">
                <span className="qodef-menu-item-inner">
                  <span className="qodef-menu-item-text">About Us</span>
                </span>
              </a>
            </li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-26 qodef-menu-item--narrow">
              <a href="#contact-form">
                <span className="qodef-menu-item-inner">
                  <span className="qodef-menu-item-text">Contact</span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div
          className="qodef-widget-holder"
          onClick={() => setActive((active) => !active)} // eslint-disable-line
        >
          <div className="qodef-last-widget-wrapper">
            <div
              id="banquet_core_side_area_opener-2"
              className="widget widget_banquet_core_side_area_opener qodef-header-widget-area-one"
              data-area="header-widget-one"
            >
              <a
                itemProp="url"
                className="qodef-side-area-opener qodef-side-area-opener--predefined"
                data-hover-color="#ffffff"
                style={{ color: "#ffffff" }}
                href="#"
              >
                <span className="qodef-lines">
                  <span className="qodef-line qodef-line-1"></span>
                  <span className="qodef-line qodef-line-2"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
