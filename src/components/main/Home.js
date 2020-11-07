import React, { Component } from "react";
import logo from "../../img/logo.png";
import sprite from "../../img/sprite.svg";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <img src={logo} alt="logo" class="logo" />
          <form action="#" className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search Hotels"
            />
            <div className="button search__button">
              <svg className="search__icon">
                <use href={sprite + "#icon-magnifying-glass"} />
              </svg>
            </div>
          </form>
        </header>
        <div className="content">
          <nav className="sidebar">Navigation</nav>
          <main className="hotel-view">Hotel View</main>
        </div>
      </div>
    );
  }
}
export default Home;
