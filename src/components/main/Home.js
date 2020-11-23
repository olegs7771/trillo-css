import React, { Component } from "react";
import logo from "../../img/logo.png";
import sprite from "../../img/sprite.svg";
import user_photo from "../../img/user.jpg";
import hotel1_img from "../../img/hotel-1.jpg";
import hotel2_img from "../../img/hotel-2.jpg";
import hotel3_img from "../../img/hotel-3.jpg";
import user_1_img from "../../img/user-1.jpg";
import user_2_img from "../../img/user-2.jpg";
import user_3_img from "../../img/user-3.jpg";
import user_4_img from "../../img/user-4.jpg";

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
            <div className="legal-desktop">
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
            {/* DETAIL   contain 2 columns description + user reviews*/}
            <div className="detail">
              <div className="description">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium unde fuga, quae vel quibusdam iusto! Iusto nemo
                  odit sint assumenda repellendus voluptas maxime repellat qui
                  debitis. Ut cum dolores voluptas.
                </p>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium unde fuga, quae vel quibusdam iusto! .
                </p>
                <ul className="list">
                  <li className="list__item">Close to the beach</li>
                  <li className="list__item">Breakfast Included</li>
                  <li className="list__item">Free airport shuttle</li>
                  <li className="list__item">Free wifi in all rooms</li>
                  <li className="list__item">Pets allowed</li>
                  <li className="list__item">We speak all languages</li>
                  <li className="list__item">A/C in all rooms</li>
                  <li className="list__item">Perfect for all families</li>
                </ul>
                <div className="recommend">
                  <p className="recommend__count">
                    Lucy and 3 more friends recommended this
                  </p>
                  <div className="recommend__friends">
                    <img
                      src={user_1_img}
                      alt="user 1"
                      className="recommend__photo"
                    />
                    <img
                      src={user_2_img}
                      alt="user 2"
                      className="recommend__photo"
                    />
                    <img
                      src={user_3_img}
                      alt="user 3"
                      className="recommend__photo"
                    />
                    <img
                      src={user_4_img}
                      alt="user 4"
                      className="recommend__photo"
                    />
                  </div>
                </div>
              </div>
              <div className="user-reviews">
                <figure className="review">
                  <blockquote className="review__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni officia perspiciatis pariatur cumque quod dolorem
                    fugiat quae ducimus odio ipsa. Quidem necessitatibus,
                    voluptatem cumque culpa totam eaque at iure harum!
                  </blockquote>
                  <figcaption className="review__user">
                    <img
                      src={user_1_img}
                      alt="user 1"
                      className="review__photo"
                    />
                    <div className="review__user-box">
                      <p className="review__user-name">John Smith</p>
                      <p className="review__user-date">Feb 23rd,2020</p>
                    </div>
                    <div className="review__rating">7.8</div>
                  </figcaption>
                </figure>
                <figure className="review">
                  <blockquote className="review__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni officia perspiciatis pariatur cumque quod dolorem
                    fugiat quae ducimus odio ipsa. Quidem necessitatibus,
                    voluptatem cumque culpa totam eaque at iure harum!
                  </blockquote>
                  <figcaption className="review__user">
                    <img
                      src={user_2_img}
                      alt="user 1"
                      className="review__photo"
                    />
                    <div className="review__user-box">
                      <p className="review__user-name">Karen Brown</p>
                      <p className="review__user-date">Feb 22rd,2020</p>
                    </div>
                    <div className="review__rating">5.2</div>
                  </figcaption>
                </figure>

                <button className="btn-inline">
                  Show All <span>&rarr;</span>
                </button>
              </div>
            </div>
            {/* DETAIL END  */}
            <div className="cta">
              <h2 className="cta__book-now">
                Good news! we have 4 free rooms for your selected dates!
              </h2>
              <button className="btn">
                <span className="btn__visible">Book now</span>
                <span className="btn__invisible">Only 4 rooms left</span>
              </button>
            </div>
          </main>
        </div>
          <footer className="footer">
              <div className="footer__legal-desktop">
                &copy; 2020 by trillo. All rights reserved.
              </div>
          </footer>
      </div>
    );
  }
}
export default Home;
