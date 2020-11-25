import React from "react";

// Alpine Stock
import AlpineStock from "../img/alpine_home.png";
import AlpineStock1 from "../img/alpine_img1.png";
import AlpineStock2 from "../img/alpine_img2.png";
import AlpineStock3 from "../img/alpine_img3.png";
import AlpineStock4 from "../img/alpine_img4.png";
import AlpineStock5 from "../img/alpine_img5.png";
import AlpineStock6 from "../img/alpine_img6.png";
import AlpineStock7 from "../img/alpine_img7.png";

// Scholar Counter Stock
import SCStock from "../img/sc_img1.png";
import SCStock2 from "../img/sc_img2.png";
import SCStock3 from "../img/sc_img3.png";
import SCStock4 from "../img/sc_img4.png";
import SCStock5 from "../img/sc_img5.png";
import SCStock6 from "../img/sc_img6.png";
import SCStock7 from "../img/sc_img7.png";
import SCStock8 from "../img/sc_img8.png";
import SCStock9 from "../img/sc_img9.png";

// Harvesting Tool Stock
import HTStock from "../img//ht_home.png";
import HTStock1 from "../img/ht_img1.png";
import HTStock2 from "../img/ht_img2.png";
import HTStock3 from "../img/ht_img3.png";
import HTStock4 from "../img/ht_img4.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">My Work</h3>
                <p className="subtitle-a">
                  Here are some Projects thats are developed by me and my Team during Training at Gindowa Technologies Private Limited
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <a href={AlpineStock} data-lightbox="alpine">
                  <div className="work-img">
                    <img src={AlpineStock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Alpine College Website</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Angular NodeJS Express MySQL
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        {/* <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={AlpineStock1}
                  data-lightbox="alpine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={AlpineStock2}
                  data-lightbox="alpine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={AlpineStock3}
                  data-lightbox="alpine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={AlpineStock4}
                  data-lightbox="alpine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={AlpineStock5}
                  data-lightbox="alpine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={AlpineStock6}
                  data-lightbox="alpine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={AlpineStock7}
                  data-lightbox="alpine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div align="center">
                  <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="https://github.com/shuaibabs/running-alpine-college-project"
                  role="button"
                >
                  GitHub Link
                </a>
                </div>
                <br></br>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={SCStock} data-lightbox="scholar-counter">
                  <div className="work-img">
                    <img src={SCStock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Scholar Counter</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Angular NodeJS Express MySQL
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        {/* <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={SCStock2}
                  data-lightbox="scholar-counter"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={SCStock3}
                  data-lightbox="scholar-counter"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={SCStock4}
                  data-lightbox="scholar-counter"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={SCStock5}
                  data-lightbox="scholar-counter"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={SCStock6}
                  data-lightbox="scholar-counter"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={SCStock7}
                  data-lightbox="scholar-counter"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={SCStock8}
                  data-lightbox="scholar-counter"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={SCStock9}
                  data-lightbox="scholar-counter"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div align="center">
                  <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="https://github.com/shuaibabs/scholar-counter"
                  role="button"
                >
                  GitHub Link
                </a>
                </div>
                <br></br>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={HTStock} data-lightbox="harvesting-tool">
                  <div className="work-img">
                    <img src={HTStock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Harvesting Tool</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                           C# .NET
                          </span>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        {/* <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={HTStock1}
                  data-lightbox="harvesting-tool"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={HTStock2}
                  data-lightbox="harvesting-tool"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={HTStock3}
                  data-lightbox="harvesting-tool"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={HTStock4}
                  data-lightbox="harvesting-tool"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <div align="center">
                  <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="https://github.com/shuaibabs/harvesting-tool"
                  role="button"
                >
                  GitHub Link
                </a>
                </div>
                <br></br>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio;
