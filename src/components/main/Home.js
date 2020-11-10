import React, { Component } from "react";
import logo from "../../img/logo.png";
import sprite from "../../img/sprite.svg";
import user_photo from "../../img/user.jpg";
import hotel1_img from "../../img/hotel-1.jpg";
import hotel2_img from "../../img/hotel-2.jpg";
import hotel3_img from "../../img/hotel-3.jpg";

class Home extends Component {
  render() {
    return (
      <div className="container">
        {/* HEADER */}
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
        {/*  */}
        <div className="content">
          {/* NAVIGATION - SIDEBAR*/}
          <nav className="sidebar">
            <ul className="side-nav">
              <li className="side-nav__item side-nav__item--active">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use href={sprite + "#icon-home"} />
                  </svg>
                  <span className="side-nav__icon-name">Hotel</span>
                </a>
              </li>
              <li className="side-nav__item ">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use href={sprite + "#icon-aircraft"} />
                  </svg>
                  <span className="side-nav__icon-name">Flight</span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use href={sprite + "#icon-key"} />
                  </svg>
                  <span className="side-nav__icon-name">Car </span>
                </a>
              </li>
              <li className="side-nav__item">
                <a href="#" className="side-nav__link">
                  <svg className="side-nav__icon">
                    <use href={sprite + "#icon-map"} />
                  </svg>
                  <span className="side-nav__icon-name">Tours</span>
                </a>
              </li>
            </ul>
            <div className="legal">
              &copy; 2020 by trillo. All rights reserved.
            </div>
          </nav>
          {/*  */}

          {/* HOTEL VIEW MAIN */}
          <main className="hotel-view">
            <div className="gallery">
              <figure className="gallery__item">
                <img
                  src={hotel1_img}
                  alt="Hotel 1"
                  className="gallery__photo"
                />
              </figure>
              <figure className="gallery__item">
                <img
                  src={hotel2_img}
                  alt="Hotel 2"
                  className="gallery__photo"
                />
              </figure>
              <figure className="gallery__item">
                <img
                  src={hotel3_img}
                  alt="Hotel 3"
                  className="gallery__photo"
                />
              </figure>
            </div>

            {/* OVERVIEW */}
            <div className="overview">
              <h1 className="overview__heading">Hotel Las Palmas</h1>
              <div className="overview__stars">
                <svg className="overview__icon-star">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__icon-star">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__icon-star">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__icon-star">
                  <use href={sprite + "#icon-star"} />
                </svg>
                <svg className="overview__icon-star">
                  <use href={sprite + "#icon-star"} />
                </svg>
              </div>
              <div className="overview__location">
                <svg className="overview__icon-location">
                  <use href={sprite + "#icon-location-pin"} />
                </svg>
                <button className="btn-inline">Miami, USA</button>
              </div>
              <div className="overview__rating">
                <div className="overview__rating-average">8.6</div>
                <div className="overview__rating-count">429 votes</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
export default Home;
