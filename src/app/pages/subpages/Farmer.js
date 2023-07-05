import React from "react";
import { Link } from "react-router-dom";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { AiFillFastBackward } from "react-icons/ai";
import { Carousel } from "react-carousel-minimal";
import farm1 from "../../../assets/images/soya-beans.jpg";
import farm2 from "../../../assets/images/soya-beans2.jpg";
import farm3 from "../../../assets/images/soya-beans3.jpg";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";

const Farmer = () => {
  const data = [
    {
      image: farm1,
      // caption: "San Francisco",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div>
      <div className="row page-title-header">
        <div className="col-12">
          <div className="page-header">
            <Link to="/farmers">
              <AiFillFastBackward size={20} />
              &nbsp;Back to Farmer details
            </Link>
            <div className="quick-link-wrapper w-10 d-md-flex flex-md-wrap">
              <ul className="quick-links ml-auto">
                <li>
                  <a href="!#" onClick={(evt) => evt.preventDefault()}>
                    Edit details
                  </a>
                </li>
                <li>
                  <a href="!#" onClick={(evt) => evt.preventDefault()}>
                    Generate Report
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5 grid-margin">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src={require("../../../assets/images/farmer-default.jpg")}
                        alt="user icon"
                      />
                    </div>
                    <div className="col-md-9">
                      <ul style={{ listStyle: "none" }}>
                        <li>
                          <span className="card-title">Name</span>
                          &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;Jackson Mwatela
                        </li>
                        <li>
                          <span className="card-title">Gender</span>
                          &nbsp;:&nbsp;&nbsp;Male
                        </li>
                        <li>
                          <span className="card-title">Mobile</span>
                          &nbsp;&nbsp;:&nbsp;&nbsp;+254 701 567455
                        </li>

                        <li>
                          <span className="card-title">County</span>
                          &nbsp;:&nbsp;&nbsp;Kisii
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper">
                    <h5 className="mb-2 font-weight-medium text-primary">
                      Acreage
                    </h5>
                    <h3 className="mb-0 font-weight-semibold">
                      1.6{" "}
                      <span style={{ color: "#58d8a3", fontSize: "0.5em" }}>
                        <BiSolidUpArrow
                          size={12}
                          style={{ marginTop: "-1%" }}
                        />
                        &nbsp;+0.50%
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper">
                    <h5 className="mb-2 font-weight-medium text-primary">
                      Offered
                    </h5>
                    <h3 className="mb-0 font-weight-semibold">0</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper">
                    <h5 className="mb-2 font-weight-medium text-primary">
                      Purchased Volume (T)
                    </h5>
                    <h3 className="mb-0 font-weight-semibold">
                      3,136{" "}
                      <span style={{ color: "#F95F53", fontSize: "0.5em" }}>
                        <BiSolidDownArrow
                          size={12}
                          style={{ marginTop: "-1%" }}
                        />
                        &nbsp;+0.90%
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper">
                    <h5 className="mb-2 font-weight-medium text-primary">
                      Inventory Volume (T)
                    </h5>
                    <h3 className="mb-0 font-weight-semibold">
                      3,136{" "}
                      <span style={{ color: "#F95F53", fontSize: "0.5em" }}>
                        <BiSolidDownArrow
                          size={12}
                          style={{ marginTop: "-1%" }}
                        />
                        &nbsp;+0.50%
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <Carousel
                    data={data}
                    time={1000}
                    width="850px"
                    height="300px"
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    style={{
                      textAlign: "center",
                      maxWidth: "850px",
                      maxHeight: "400px",
                      margin: "10px auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farmer;
