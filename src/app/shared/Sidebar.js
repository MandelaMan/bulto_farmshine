import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
// import { Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";
import { TfiDashboard } from "react-icons/tfi";
import { LiaFileContractSolid } from "react-icons/lia";
import { GiFarmer } from "react-icons/gi";
import { ImUserTie } from "react-icons/im";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { TfiGallery } from "react-icons/tfi";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/dashboard", state: "dashboardMenuOpen" },
      { path: "/accounting", state: "accountingMenuOpen" },
      { path: "/reports", state: "reportsMenuOpen" },
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/basic-ui", state: "basicUiMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html">
            {/* <img src={require("../../assets/images/logo.svg")} alt="logo" /> */}
            <img
              src={require("../../assets/images/logo-bulto.jpg")}
              alt="logo"
            />
          </a>
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html">
            <img
              src={require("../../assets/images/logo-mini.svg")}
              alt="logo"
            />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile not-navigation-link"></li>
          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.dashboardMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("dashboardMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              &nbsp;
              <span className="menu-title">
                <Trans>
                  <TfiDashboard size={21} style={{ marginTop: "-3%" }} />
                  &nbsp; &nbsp;Dashboard
                </Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.dashboardMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/dasboard")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/dasboard"
                  >
                    <Trans>General</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/farmer-summary")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/farmer-summary"
                  >
                    <Trans>Farmer Summary</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/contracts") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/contracts">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">
                <Trans>
                  <LiaFileContractSolid
                    size={22}
                    style={{ marginTop: "-5%" }}
                  />
                  &nbsp;&nbsp;Contracts
                </Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/farmers") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/farmers">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">
                <Trans>
                  <GiFarmer size={23} style={{ marginTop: "-5%" }} />
                  &nbsp;&nbsp;Farmers
                </Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/agents") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/agents">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">
                <Trans>
                  <ImUserTie size={20} style={{ marginTop: "-5%" }} />
                  &nbsp;&nbsp;Agents
                </Trans>
              </span>
            </Link>
          </li>
          <li
            className={
              this.isPathActive("/gallery") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/gallery">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">
                <Trans>
                  <TfiGallery size={20} style={{ marginTop: "-5%" }} />
                  &nbsp;&nbsp;Gallery
                </Trans>
              </span>
            </Link>
          </li>

          {/* <li
            className={
              this.isPathActive("/accounting") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.accountingMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("accountingMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">
                <Trans>Accounting</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.accountingMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/accounting")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/accounting"
                  >
                    <Trans>Invoices</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li> */}
          <li
            className={
              this.isPathActive("/reports") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.reportsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("reportsMenuOpen")}
              data-toggle="collapse"
            >
              <i className="mdi mdi-report-bar menu-icon"></i>
              <span className="menu-title">
                <Trans>
                  <HiOutlineDocumentReport
                    size={22}
                    style={{ marginTop: "-5%" }}
                  />
                  &nbsp;&nbsp;Reports
                </Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.reportsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/reports")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/reports"
                  >
                    <Trans>Purchases</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/stock")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/stock"
                  >
                    <Trans>Stock</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      this.isPathActive("/land-distribution")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/land-distribution"
                  >
                    <Trans>Land Distribution</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
