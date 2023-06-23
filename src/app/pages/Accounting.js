import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

export class Accounting extends Component {
  data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  render() {
    return (
      <div>
        <div className="row page-title-header">
          <div className="col-12">
            <div className="page-header">
              <h4 className="page-title">Accounting</h4>
              <div className="quick-link-wrapper w-10 d-md-flex flex-md-wrap">
                <ul className="quick-links ml-auto">
                  <li>
                    <a href="!#" onClick={(evt) => evt.preventDefault()}>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="!#" onClick={(evt) => evt.preventDefault()}>
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a href="!#" onClick={(evt) => evt.preventDefault()}>
                      Watchlist
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="page-header-toolbar">
              <div
                className="btn-group toolbar-item"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-secondary">
                  <i className="mdi mdi-chevron-left"></i>
                </button>
                <button type="button" className="btn btn-secondary">
                  03/02/2019 - 20/08/2019
                </button>
                <button type="button" className="btn btn-secondary">
                  <i className="mdi mdi-chevron-right"></i>
                </button>
              </div>
              <div className="filter-wrapper">
                <a
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                  className="advanced-link toolbar-item"
                >
                  More Filter Options
                </a>
                <div className="dropdown toolbar-item">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="btn btn-secondary dropdown-toggle"
                      id="dropdownMenuButton1"
                    >
                      Due
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Reversals</Dropdown.Item>
                      <Dropdown.Item>Draft</Dropdown.Item>
                      <Dropdown.Item>Cancelled</Dropdown.Item>
                      <Dropdown.Item>Expired</Dropdown.Item>
                      <Dropdown.Item>Paid</Dropdown.Item>
                      <Dropdown.Item>Uncleared</Dropdown.Item>
                      <Dropdown.Item>Deleted</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Invoice</th>
                        <th>Farmer</th>
                        <th>Agent</th>
                        <th>Weight(Kgs)</th>
                        <th>Price(Ksh)</th>
                        <th>Payment Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.data.map(() => (
                        <tr>
                          <td>#123</td>
                          <td>Jackson Mwaura</td>
                          <td>Damaris Kivuli</td>
                          <td>12.99</td>
                          <td>03/05/2023</td>
                          <td>Paid</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Accounting;
