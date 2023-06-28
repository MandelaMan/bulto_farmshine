import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Trans } from "react-i18next";

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
          <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                      <img
                        className="img-xs rounded-circle"
                        src={require("../../assets/images/faces/face8.jpg")}
                        alt="profile"
                      />
                      <div className="dot-indicator bg-success"></div>
                    </div>
                    <div className="text-wrapper">
                      <p className="profile-name">Elijah Mwangi</p>
                      <p className="designation">Administrator</p>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item
                    className="dropdown-item p-0 preview-item d-flex align-items-center"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center text-small"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Manage Accounts</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center text-small"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Change Password</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center text-small"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Check Inbox</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item preview-item d-flex align-items-center text-small"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <Trans>Sign Out</Trans>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
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
              <span className="menu-title">
                <Trans>Dashboard</Trans>
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
                <Trans>Contracts</Trans>
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
                <Trans>Farmers</Trans>
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
                <Trans>Agents</Trans>
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
                <Trans>Gallery</Trans>
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
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">
                <Trans>Reports</Trans>
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
