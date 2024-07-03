import React from "react";
import emailicon from "../assets/email3.png";
import checkicon from "../assets/check.png";
import arrowicon from "../assets/arrow.png";
import searchIcon from "../assets/search.png";
import cartIcon from "../assets/cart.png";
import userIcon from "../assets/user.png";
import "./Header.css";

import Logo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="firstHead">
          <div className="headtitle">
            <img src={emailicon} alt="email" className="textlogo" />
            SHAKARAHUBS.com
          </div>

          <div className="headOthers">
            <span className="headItem">
              NGN
              <img src={arrowicon} alt="arrow" className="icon" />
            </span>
            |
            <span className="headItem">
              English
              <img src={arrowicon} alt="arrow" className="icon" />
            </span>
            |
            <span className="headItem">
              <img src={checkicon} alt="check" className="icon" />
              Checkout
            </span>
          </div>
        </div>
      </header>

      <div className="SecondHeader">
        <div className="logo">
          <img src={Logo} alt="logo" className="icon" />
        </div>

        <div className="SecondHeadDiv">
          <div className="searchContainer">
            <div className="search-wrapper">
              <button className="dropdown-button">
                All
                <img src={arrowicon} alt="All" className="icon" />
              </button>
              <input
                type="text"
                className="search-input"
                placeholder="Search for products, brands and categories..."
              />

              <button className="search-button">
                <img src={searchIcon} alt="Search" className="icon" />
              </button>
            </div>
          </div>

          <div className="right-icons">
            <div className="cart">
              <img src={cartIcon} alt="Cart" className="icon" />
              <div className="item-count">2</div>
              <span>CART - ₦12000.00</span>
            </div>
            <div className="login">
              <img src={userIcon} alt="Login/Create Account" className="icon" />
              <span>Login/Create Account</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ThirdHeader">
        <nav className="navbar">
          <div className="menu-icon">&#9776;</div>
          <div className="navleft">
            <a href="#" className="nav-link">
              All Categories
            </a>
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Today's Deal
            </a>
            <a href="#" className="nav-link">
              Contact Us
            </a>
            <a href="#" className="nav-link">
              FAQ
            </a>
          </div>
          <a href="#" className="nav-link blog">
            Blog
          </a>
        </nav>
      </div>

      <nav className="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/adire-products">Adire Products</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/adire-designs">Adire Designs</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Adire Styles
          </li>
        </ol>
      </nav>

      <hr className="separator" />
    </>
  );
};

export default Header;
