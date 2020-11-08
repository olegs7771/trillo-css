import React, { Component } from "react";
import logo from "../../img/logo.png";
import sprite from "../../img/sprite.svg";
import user_photo from "../../img/user.jpg";


class Home extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <img src={logo} alt="logo" className="logo" />
          <form action="#" className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search Hotels"
            />
            <button className="button search__button">
              <svg className="search__icon">
                <use href={sprite + "#icon-magnifying-glass"} />
              </svg>
</button>
          </form>
          <nav className="user-nav">
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <use href={sprite + "#icon-bookmark"} />
              </svg>
              <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
              <svg className="user-nav__icon">
                <use href={sprite + "#icon-chat"} />
              </svg>
              <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__user">
              <img
                src={user_photo}
                alt="user_photo"
                className="user-nav__user-photo"
              />
              <span className="user-nav__user-name">Oleg</span>
            </div>
          </nav>
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
