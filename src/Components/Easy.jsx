import React from "react";
import taupe from "../images/taupe.png";
import cyber from "../images/cyber.svg";
import bot2 from "../images/bot-2.png";
import easyrental from "../images/easy_rental_fig.svg";
import logo from "../images/logo.png";
import envelope from "../images/envelope.svg";
import person from "../images/person.svg";
import money from "../images/money.svg";
import search from "../images/search.svg";
import ccard from "../images/c-card.svg";
import key from "../images/key.svg";
import desktop from "../images/desktop.svg";
function Easy() {
  return (
    <div style={{ backgroundColor: "#1c1c1c" }}>
      {/* <!-----navbar-------> */}
      <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark py-4">
        <div className="container py-2">
          <a href="/" className="navbar-brand">
            <img src={logo} className="img-fluid" alt="" />
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            type="button"
            data-target="#mainNavigation"
            area-control="mainNavigation"
            area-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavigation">
            <ul className="navbar-nav ml-auto justify-content-between w-75">
              <li className="nav-item">
                <a href="/" className="nav-link ">
                  {" "}
                  All Bots
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link active">
                  {" "}
                  How It Works
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link ">
                  {" "}
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link ">
                  {" "}
                  Drop Calender
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="btn btn-primary active">
                  {" "}
                  Go To Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!--------home----------------> */}
      <div className="main py-5">
        <div className="container py-5">
          <div className="row mb-5 align-item-center">
            <div className="col-md-6 py-5">
              <div>
                <h1
                  style={{
                    color: "#836fff",
                    fontSize: "55px",
                    fontWeight: "900px",
                  }}
                >
                  <strong>Easy Rentals</strong>
                </h1>
              </div>
              <div>
                <p style={{ fontSize: "25px", color: "#836fff" }}>
                  Renting{" "}
                  <strong style={{ color: "white" }}>Sneaker Bots</strong> Made
                  Easy
                </p>
              </div>
              <div>
                <a
                  href="/"
                  className="btn btn-lg w-50"
                  role="button"
                  style={{ backgroundColor: "#836fff", fontSize: "10px" }}
                >
                  Start Rating Now
                </a>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{
                width: "100%",
                maxWidth: "460px",
                marginLeft: "auto",
                display: "block",
              }}
            >
              <img src={easyrental} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      {/* <!------features bots-----------> */}
      <div className="features py-5">
        <div className="container py-5 text-white">
          <div>
            <li style={{ fontSize: "30px" }}>
              <strong>Features Bots</strong>
            </li>
          </div>
          <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 text-center py-5">
            <div className="col mb-5">
              <div className="card bg-dark">
                <div className="text-center">
                  <img src={cyber} height="195" width="100" alt="" />
                </div>
                <div>
                  <a
                    href="/"
                    className="btn btn-secondary w-50"
                    style={{ borderBottom: "5px solid limegreen" }}
                    type="button"
                  >
                    CyberAIo
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card bg-dark">
                <div className="text-center py-5">
                  <img src={bot2} height="100" width="100" alt="" />
                </div>
                <div className="mb-0">
                  <a
                    href="/"
                    className="btn btn-secondary w-50"
                    style={{ borderBottom: "5px solid dodgerblue" }}
                    type="button"
                  >
                    SoloAIo
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card bg-dark">
                <div className="text-center">
                  <img src={cyber} height="195" width="100" alt="" />
                </div>
                <div className="mb-0">
                  <a
                    href="/"
                    className="btn btn-secondary w-50"
                    style={{ borderBottom: "5px solid limegreen" }}
                    type="button"
                  >
                    CyberAIo
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card bg-dark">
                <div className="text-center py-5">
                  <img src={bot2} height="100" width="100" alt="" />
                </div>
                <div className="mb-0">
                  <a
                    href="/"
                    className="btn btn-secondary w-50"
                    style={{ borderBottom: "5px solid dodgerblue" }}
                    type="button"
                  >
                    SoloAIo
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card bg-dark">
                <div className="text-center">
                  <img src={cyber} height="195" width="100" alt="" />
                </div>
                <div className="mb-0">
                  <a
                    href="/"
                    className="btn btn-secondary w-50"
                    style={{ borderBottom: "5px solid limegreen" }}
                    type="button"
                  >
                    CyberAIo
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card bg-dark">
                <div className="text-center py-5">
                  <img src={bot2} height="100" width="100" alt="" />
                </div>
                <div className="mb-0">
                  <a
                    href="/"
                    className="btn btn-secondary w-50"
                    style={{ borderBottom: "5px solid dodgerblue" }}
                    type="button"
                  >
                    SoloAIo
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card bg-dark">
                <div className="text-center">
                  <img src={cyber} height="195" width="100" alt="" />
                </div>
                <div className="mb-0">
                  <a
                    href="/"
                    className="btn btn-secondary  w-50"
                    style={{ borderBottom: "5px solid limegreen" }}
                    type="button"
                  >
                    CyberAIo
                  </a>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card bg-dark">
                <div className="text-center py-5">
                  <img src={bot2} height="100" width="100" alt="" />
                </div>
                <div className="mb-0">
                  <a
                    href="/"
                    className="btn btn-secondary w-50"
                    style={{ borderBottom: "5px solid dodgerblue" }}
                    type="button"
                  >
                    SoloAIo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <a
                href="/"
                className="btn btn-primary btn-block btn-lg"
                type="button"
              >
                + View All Bots
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!--------how its works-------> */}
      <div className="works py-5">
        <div className="container text-white py-5">
          <div>
            <li style={{ fontSize: "30px" }}>
              <strong>How It Works</strong>
            </li>
          </div>
          <div className="text-center py-3">
            <h1>
              <strong>Purchasing Rental</strong>
            </h1>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5">
            <div className="col mb-5">
              <div className="card bg-dark text-center">
                <div className="container">
                  <div>
                    <img src={search} width="100" height="148" alt="" />
                  </div>
                  <div>
                    <h4>Search Listing</h4>
                  </div>
                  <div className="text-muted py-2">
                    <p style={{ fontSize: "15px" }}>
                      We have plenty of listings to search through and offer
                      safe, trustworthy transactions for every customer. Get
                      your bot and setup for a drop in an instant.
                    </p>
                  </div>
                  <div className="mb-0 pt-3">
                    <a
                      href="/"
                      className="btn btn-secondary w-25"
                      style={{ fontSize: "20px" }}
                      type="button"
                    >
                      1
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card bg-dark text-center">
                <div className="container">
                  <div>
                    <img src={ccard} width="90" height="129" alt="" />
                  </div>
                  <div className="py-3">
                    <h4>Purchasing Listing</h4>
                  </div>
                  <div className="text-muted">
                    <p style={{ fontSize: "15px" }}>
                      With the click of a buon, purchase rentals through our
                      website and get access to any bot. Don't be afraid of
                      scams or tricks, Easy Rentals vets every key we sell to
                      make sure it is up to our standard.
                    </p>
                  </div>
                  <div className="mb-0">
                    <a
                      href="/"
                      className="btn btn-secondary w-25"
                      style={{ fontSize: "20px" }}
                      type="button"
                    >
                      2
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card bg-dark text-center">
                <div className="container">
                  <div>
                    <img src={key} width="100" height="149" alt="" />
                  </div>
                  <div>
                    <h4>Search Listing</h4>
                  </div>
                  <div className="text-muted py-2">
                    <p style={{ fontSize: "15px" }}>
                      We have plenty of listings to search through and offer
                      safe, trustworthy transactions for every customer. Get
                      your bot and setup for a drop in an instant.
                    </p>
                  </div>
                  <div className="mb-0 pt-4">
                    <a
                      href="/"
                      className="btn btn-secondary w-25"
                      style={{
                        fontSize: "20px",
                        marginBottom: "0",
                        paddingBottom: "0",
                      }}
                      type="button"
                    >
                      3
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-----selling------> */}
      <div className="container text-white">
        <div className="text-center">
          <h1>
            <strong>Selling Rental</strong>
          </h1>
        </div>
        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 text-center py-5">
          <div className="col mb-5">
            <div className="card bg-dark text-center">
              <div className="container">
                <div>
                  <img src={envelope} height="150" width="100" alt="" />
                </div>
                <div>
                  <h4>Cashout</h4>
                </div>
                <div className="text-muted">
                  <p style={{ fontSize: "15px" }}>
                    Using our dashboard, create lisngs with custom prices,
                    license keys, download links, guides, and meframes all with
                    a couple clicks.
                  </p>
                </div>
                <div className="mb-0">
                  <a href="/" className="btn btn-secondary w-25" type="button">
                    1
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card text-center bg-dark">
              <div className="container">
                <div>
                  <img src={person} height="154" width="100" alt="" />
                </div>
                <div>
                  <h4>Sit Back And Relax</h4>
                </div>
                <div className="text-muted">
                  <p style={{ fontSize: "15px" }}>
                    Once your bot is listed, we can take it from there. Using
                    our millions in traffic, we connect you the seller, with new
                    buyers every hour.
                  </p>
                </div>
                <div className="mb-0">
                  <a href="/" className="btn btn-secondary w-25" type="button">
                    2
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card text-center bg-dark ">
              <div className="container">
                <div>
                  <img src={money} height="154" width="100" alt="" />
                </div>
                <div>
                  <h4>Create Listing</h4>
                </div>
                <div className="text-muted">
                  <p style={{ fontSize: "15px" }}>
                    That's it! We now send your payout straight to your back
                    account.
                  </p>
                </div>
                <div className="mb-0 pt-3">
                  <a href="/" className="btn btn-secondary w-25" type="button">
                    3
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--------drop calender------------> */}
      <div class="drop py-5">
        <div class="container text-white py-5">
          <div>
            <li style={{ fontSize: "30px" }}>
              <strong>Drop Calender</strong>
            </li>
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 py-5">
            <div class="col py-5">
              <div class="card  bg-dark">
                <div class="card-header" style={{ backgroundColor: "#212F3C" }}>
                  <div class="text-center">
                    <h4>Air Jordan 4 "Taupe"</h4>
                  </div>
                  <div class="text-center">
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Supereme
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Footsites
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Shopify
                    </a>
                  </div>
                </div>
                <div class="card-body" style={{ backgroundColor: "#1B2631" }}>
                  <div class="text-center">
                    <img src={taupe} height="300" width="250" alt="" />
                  </div>
                </div>
                <div
                  class="card-footer p-0  "
                  style={{
                    borderTop: "2px solid darkgrey",
                    backgroundColor: "#212F3C",
                  }}
                >
                  <div class="row p-0 m-0 ">
                    <div class="col-8 ">
                      <div class="text-white">
                        <small class="text-muted">Release date</small>
                        <h4>February 27th</h4>
                      </div>
                    </div>
                    <div class="col-4 border-left">
                      <div class="text-white">
                        <small class="text-muted">Retail</small>
                        <h4>$200</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col py-5">
              <div class="card  bg-dark">
                <div class="card-header" style={{ backgroundColor: "#212F3C" }}>
                  <div class="text-center">
                    <h4>Air Jordan 4 "Taupe"</h4>
                  </div>
                  <div class="text-center">
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Supereme
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Footsites
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Shopify
                    </a>
                  </div>
                </div>
                <div class="card-body" style={{ backgroundColor: "#1B2631" }}>
                  <div class="text-center">
                    <img src={taupe} height="300" width="250" alt="" />
                  </div>
                </div>
                <div
                  class="card-footer p-0"
                  style={{
                    borderTop: "2px solid darkgrey",
                    backgroundColor: "#212F3C",
                  }}
                >
                  <div class="row p-0 m-0 ">
                    <div class="col-8 ">
                      <div class="text-white">
                        <small class="text-muted">Release date</small>
                        <h4>February 27th</h4>
                      </div>
                    </div>
                    <div class="col-4 border-left">
                      <div class="text-white">
                        <small class="text-muted">Retail</small>
                        <h4>$200</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col py-5">
              <div class="card  bg-dark">
                <div class="card-header" style={{ backgroundColor: "#212F3C" }}>
                  <div class="text-center">
                    <h4>Air Jordan 4 "Taupe"</h4>
                  </div>
                  <div class="text-center">
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Supereme
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Footsites
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Shopify
                    </a>
                  </div>
                </div>
                <div class="card-body " style={{ backgroundColor: "#1B2631" }}>
                  <div class="text-center">
                    <img src={taupe} alt="" height="300" width="250" />
                  </div>
                </div>
                <div
                  class="card-footer p-0"
                  style={{
                    borderTop: "2px solid darkgrey",
                    backgroundColor: "#212F3C",
                  }}
                >
                  <div class="row p-0 m-0 ">
                    <div class="col-8 ">
                      <div class="text-white">
                        <small class="text-muted">Release date</small>
                        <h4>February 27th</h4>
                      </div>
                    </div>
                    <div class="col-4 border-left">
                      <div class="text-white">
                        <small class="text-muted">Retail</small>
                        <h4>$200</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col py-5">
              <div class="card  bg-dark">
                <div
                  class="card-header "
                  style={{ backgroundColor: "#212F3C" }}
                >
                  <div class="text-center">
                    <h4>Air Jordan 4 "Taupe"</h4>
                  </div>
                  <div class="text-center">
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Supereme
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Footsites
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Shopify
                    </a>
                  </div>
                </div>
                <div class="card-body" style={{ backgroundColor: "#1B2631" }}>
                  <div class="text-center">
                    <img src={taupe} alt="" height="300" width="250" />
                  </div>
                </div>
                <div
                  class="card-footer p-0"
                  style={{
                    borderTop: "2px solid darkgrey",
                    backgroundColor: "#212F3C",
                  }}
                >
                  <div class="row p-0 m-0 ">
                    <div class="col-8 ">
                      <div class="text-white">
                        <small class="text-muted">Release date</small>
                        <h4>February 27th</h4>
                      </div>
                    </div>
                    <div class="col-4 border-left">
                      <div class="text-white">
                        <small class="text-muted">Retail</small>
                        <h4>$200</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col py-5">
              <div class="card  bg-dark">
                <div class="card-header" style={{ backgroundColor: "#212F3C" }}>
                  <div class="text-center">
                    <h4>Air Jordan 4 "Taupe"</h4>
                  </div>
                  <div class="text-center">
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Supereme
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Footsites
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Shopify
                    </a>
                  </div>
                </div>
                <div
                  class="card-body"
                  style={{
                    borderTop: "2px solid darkgrey",
                    backgroundColor: "#1B2631",
                  }}
                >
                  <div class="text-center">
                    <img src={taupe} alt="" height="300" width="250" />
                  </div>
                </div>
                <div
                  class="card-footer p-0"
                  style={{
                    borderTop: "2px solid darkgrey",
                    backgroundColor: "#212F3C",
                  }}
                >
                  <div class="row p-0 m-0 ">
                    <div class="col-8 ">
                      <div class="text-white">
                        <small class="text-muted">Release date</small>
                        <h4>February 27th</h4>
                      </div>
                    </div>
                    <div class="col-4 border-left">
                      <div class="text-white">
                        <small class="text-muted">Retail</small>
                        <h4>$200</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col py-5">
              <div class="card  bg-dark">
                <div class="card-header" style={{ backgroundColor: "#212F3C" }}>
                  <div class="text-center">
                    <h4>Air Jordan 4 "Taupe"</h4>
                  </div>
                  <div class="text-center">
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Supereme
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Footsites
                    </a>
                    <a
                      href="/"
                      class="btn btn-primary mx-1 w-25"
                      style={{ fontSize: "8px" }}
                      type="button"
                    >
                      Shopify
                    </a>
                  </div>
                </div>
                <div class="card-body" style={{ backgroundColor: "#1B2631" }}>
                  <div class="text-center">
                    <img src={taupe} alt="" height="300" width="250" />
                  </div>
                </div>
                <div
                  class="card-footer p-0"
                  style={{
                    borderTop: "2px solid darkgrey",
                    backgroundColor: "#212F3C",
                  }}
                >
                  <div class="row p-0 m-0 ">
                    <div class="col-8 ">
                      <div class="text-white">
                        <small class="text-muted">Release date</small>
                        <h4>February 27th</h4>
                      </div>
                    </div>
                    <div class="col-4 border-left">
                      <div class="text-white">
                        <small class="text-muted">Retail</small>
                        <h4>$200</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!----------all boots----------------> */}
      <div className="main py-5">
        <div className="container text-white">
          <div className="row row-cols-1 py-5">
            <div className="col-sm-6 text-center">
              <div className="mx-5">
                <img
                  src={desktop}
                  alt=""
                  className="img-fluid ml-auto"
                  style={{ width: "100%", maxWidth: "300px", display: "block" }}
                />
              </div>
            </div>
            <div className="col-md-6 py-5">
              <div className="container">
                <div className="py-5">
                  <h1 className="pt-5">Browse Our Collection</h1>
                  <p style={{ fontSize: "20px", color: "lightgray" }}>
                    We've Got Plenty of Bots for All Your Needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menubar">
        <div className="container py-5">
          <div className="row justify-content-between py-5">
            <div className="col mb-4" style={{ maxWidth: "200px" }}>
              <a
                href="/"
                className="btn "
                style={{ width: "90px", backgroundColor: " #836fff" }}
              >
                All
              </a>
            </div>
            <div className="col mb-4" style={{ maxWidth: "200px" }}>
              <a
                href="/"
                className="btn btn-dark text-muted"
                style={{ width: "90px" }}
              >
                Supreme
              </a>
            </div>
            <div className="col mb-4" style={{ maxWidth: "200px" }}>
              <a
                href="/"
                className="btn btn-dark text-muted"
                style={{ width: "90px" }}
              >
                Foodsites
              </a>
            </div>
            <div className="col mb-4" style={{ maxWidth: "200px" }}>
              <a
                href="/"
                className="btn btn-dark text-muted"
                style={{ width: "90px" }}
              >
                Shopify
              </a>
            </div>
            <div className="col mb-4" style={{ maxWidth: "200px" }}>
              <a
                href="/"
                className="btn btn-dark text-muted"
                style={{ width: "90px" }}
              >
                Supreme
              </a>
            </div>
            <div className="col mb-4" style={{ maxWidth: "200px" }}>
              <a
                href="/"
                className="btn btn-dark text-muted"
                style={{ width: "90px" }}
              >
                Foodsites
              </a>
            </div>
            <div className="col mb-4" style={{ maxWidth: "200px" }}>
              <a
                href="/"
                className="btn btn-dark text-muted"
                style={{ width: "90px" }}
              >
                Shopify
              </a>
            </div>
            <div className="col mb-4" style={{ maxWidth: "200px" }}>
              <a
                href="/"
                className="btn btn-dark text-muted"
                style={{ width: "90px" }}
              >
                Supreme
              </a>
            </div>
            <div className="col mb-4" style={{ maxWidth: "200px" }}>
              <a
                href="/"
                className="btn btn-dark text-muted"
                style={{ width: "90px" }}
              >
                Foodsides
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card text-center bg-dark">
              <div className="container">
                <div className="row">
                  <div
                    className=" col col-md-8"
                    style={{ backgroundColor: "#212F3C" }}
                  >
                    <div className="header mb-3 pt-2 text-white">
                      <h4>CyberAIO</h4>
                    </div>
                    <div className="text-center mb-3">
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1 mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                    </div>
                    <div className="mb-3 text-white">
                      <span
                        className="btn-dark btn-block btn-lg text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        17 Available
                      </span>
                      <span
                        className="btn-block btn-lg"
                        style={{ fontSize: "10px", backgroundColor: "#836fff" }}
                      >
                        Reset Now
                      </span>
                    </div>
                  </div>
                  <div className="col col-md-4 ">
                    <div className="py-5">
                      <img src={cyber} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card text-center bg-dark">
              <div className="container">
                <div className="row">
                  <div
                    className=" col col-md-8"
                    style={{ backgroundColor: "#212F3C" }}
                  >
                    <div className="header mb-3 pt-2 text-white">
                      <h4>CyberAIO</h4>
                    </div>
                    <div className="text-center mb-3">
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1 mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                    </div>
                    <div className="mb-3 text-white">
                      <span
                        className="btn-dark btn-block btn-lg text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        17 Available
                      </span>
                      <span
                        className="btn-block btn-lg"
                        style={{ fontSize: "10px", backgroundColor: "#836fff" }}
                      >
                        Reset Now
                      </span>
                    </div>
                  </div>
                  <div className="col col-md-4 ">
                    <div className="py-5">
                      <img src={cyber} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card text-center bg-dark">
              <div className="container">
                <div className="row">
                  <div
                    className=" col col-md-8"
                    style={{ backgroundColor: "#212F3C" }}
                  >
                    <div className="header mb-3 pt-2 text-white">
                      <h4>CyberAIO</h4>
                    </div>
                    <div className="text-center mb-3">
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1 mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                    </div>
                    <div className="mb-3 text-white">
                      <span
                        className="btn-dark btn-block btn-lg text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        17 Available
                      </span>
                      <span
                        className="btn-block btn-lg"
                        style={{ fontSize: "10px", backgroundColor: "#836fff" }}
                      >
                        Reset Now
                      </span>
                    </div>
                  </div>
                  <div className="col col-md-4 ">
                    <div className="py-5">
                      <img src={cyber} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card text-center bg-dark">
              <div className="container">
                <div className="row">
                  <div
                    className=" col col-md-8"
                    style={{ backgroundColor: "#212F3C" }}
                  >
                    <div className="header mb-3 pt-2 text-white">
                      <h4>CyberAIO</h4>
                    </div>
                    <div className="text-center mb-3">
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1 mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                    </div>
                    <div className="mb-3 text-white">
                      <span
                        className="btn-dark btn-block btn-lg text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        17 Available
                      </span>
                      <span
                        className="btn-block btn-lg"
                        style={{ fontSize: "10px", backgroundColor: "#836fff" }}
                      >
                        Reset Now
                      </span>
                    </div>
                  </div>
                  <div className="col col-md-4 ">
                    <div className="py-5">
                      <img src={cyber} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card text-center bg-dark">
              <div className="container">
                <div className="row">
                  <div
                    className=" col col-md-8"
                    style={{ backgroundColor: "#212F3C" }}
                  >
                    <div className="header mb-3 pt-2 text-white">
                      <h4>CyberAIO</h4>
                    </div>
                    <div className="text-center mb-3">
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1 mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                    </div>
                    <div className="mb-3 text-white">
                      <span
                        className="btn-dark btn-block btn-lg text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        17 Available
                      </span>
                      <span
                        className="btn-block btn-lg"
                        style={{ fontSize: "10px", backgroundColor: "#836fff" }}
                      >
                        Reset Now
                      </span>
                    </div>
                  </div>
                  <div className="col col-md-4 ">
                    <div className="py-5">
                      <img src={cyber} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card text-center bg-dark">
              <div className="container">
                <div className="row">
                  <div
                    className=" col col-md-8"
                    style={{ backgroundColor: "#212F3C" }}
                  >
                    <div className="header mb-3 pt-2 text-white">
                      <h4>CyberAIO</h4>
                    </div>
                    <div className="text-center mb-3">
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1 mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                    </div>
                    <div className="mb-3 text-white">
                      <span
                        className="btn-dark btn-block btn-lg text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        17 Available
                      </span>
                      <span
                        className="btn-block btn-lg"
                        style={{ fontSize: "10px", backgroundColor: "#836fff" }}
                      >
                        Reset Now
                      </span>
                    </div>
                  </div>
                  <div className="col col-md-4 ">
                    <div className="py-5">
                      <img src={cyber} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card text-center bg-dark">
              <div className="container">
                <div className="row">
                  <div
                    className=" col col-md-8"
                    style={{ backgroundColor: "#212F3C" }}
                  >
                    <div className="header mb-3 pt-2 text-white">
                      <h4>CyberAIO</h4>
                    </div>
                    <div className="text-center mb-3">
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1 mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                    </div>
                    <div className="mb-3 text-white">
                      <span
                        className="btn-dark btn-block btn-lg text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        17 Available
                      </span>
                      <span
                        className="btn-block btn-lg"
                        style={{ fontSize: "10px", backgroundColor: "#836fff" }}
                      >
                        Reset Now
                      </span>
                    </div>
                  </div>
                  <div className="col col-md-4 ">
                    <div className="py-5">
                      <img src={cyber} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card text-center bg-dark">
              <div className="container">
                <div className="row">
                  <div
                    className=" col col-md-8"
                    style={{ backgroundColor: "#212F3C" }}
                  >
                    <div className="header mb-3 pt-2 text-white">
                      <h4>CyberAIO</h4>
                    </div>
                    <div className="text-center mb-3">
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1 mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                    </div>
                    <div className="mb-3 text-white">
                      <span
                        className="btn-dark btn-block btn-lg text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        17 Available
                      </span>
                      <span
                        className="btn-block btn-lg"
                        style={{ fontSize: "10px", backgroundColor: "#836fff" }}
                      >
                        Reset Now
                      </span>
                    </div>
                  </div>
                  <div className="col col-md-4 ">
                    <div className="py-5">
                      <img src={cyber} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="card text-center bg-dark">
              <div className="container">
                <div className="row">
                  <div
                    className=" col col-md-8"
                    style={{ backgroundColor: "#212F3C" }}
                  >
                    <div className="header mb-3 pt-2 text-white">
                      <h4>CyberAIO</h4>
                    </div>
                    <div className="text-center mb-3">
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1 mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Supreme
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Foodsides
                      </a>
                      <a
                        href="/"
                        className="btn btn-sm btn-dark mb-1  mx-1"
                        style={{ fontSize: "7px", width: "50px" }}
                        type="button"
                      >
                        Shopify
                      </a>
                    </div>
                    <div className="mb-3 text-white">
                      <span
                        className="btn-dark btn-block btn-lg text-muted"
                        style={{ fontSize: "10px" }}
                      >
                        17 Available
                      </span>
                      <span
                        className="btn-block btn-lg"
                        style={{ fontSize: "10px", backgroundColor: "#836fff" }}
                      >
                        Reset Now
                      </span>
                    </div>
                  </div>
                  <div className="col col-md-4 ">
                    <div className="py-5">
                      <img src={cyber} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-----------footer------------> */}
      <div className="footer" style={{ borderTop: "2px solid gray" }}>
        <div className="container text-white">
          <div className="row row-cols-sm-4">
            <div className="col-lg-3 py-3">
              <div>
                <h1>
                  <strong>Easy Rentals</strong>
                </h1>
              </div>
              <div className="text-secondary">
                <p>© 2020 Easy Rentals, LLC. All rights reserved.</p>
              </div>
            </div>
            <div className="col-lg-3 py-5">
              <ul>
                <h5>Navigation</h5>
                <a href="/" className="text-secondary">
                  All Bots
                </a>
                <br />
                <a href="/" className="text-secondary">
                  How It Works
                </a>
                <br />
                <a href="/" className="text-secondary">
                  Calender
                </a>
                <br />
              </ul>
            </div>
            <div className="col-lg-3 py-5">
              <ul>
                <h5>Legel</h5>
                <a href="/" className="text-secondary">
                  Term Of Service
                </a>
                <br />
                <a href="/" className="text-secondary">
                  Privacy Policy
                </a>
                <br />
                <a href="/" className="text-secondary">
                  Return Policy
                </a>
                <br />
              </ul>
            </div>
            <div className=" col-lg-3 py-5">
              <ul>
                <h5>Social</h5>
                <a href="/" className="text-secondary">
                  Join Our Discord
                </a>
                <br />
                <a href="/" className="text-secondary">
                  <i className="fa fa-twitter"></i> Follow Our Twitter
                </a>
                <br />
                <a href="/" className="text-secondary">
                  <i className="fa fa-instagram"></i> Follow Us To Instagram
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Easy;
