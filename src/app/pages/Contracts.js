import React, { Component } from "react";

export class Contracts extends Component {
  data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  render() {
    return (
      <div>
        <div className="row page-title-header">
          <div className="col-12">
            <div className="page-header">
              <h4 className="page-title">Contracts</h4>
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
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Contracts</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#Ref</th>
                        <th>Farmer</th>
                        <th>Commodity</th>
                        <th>Yield</th>
                        <th>Offeered</th>
                        <th>Planting Date</th>
                        <th>Harvest Date</th>
                        <th>Expected Sale Date</th>
                        <th>Status</th>
                        <th>Agent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.data.map(() => (
                        <tr>
                          <td>11086</td>
                          <td>Abdinasir Abdullahi </td>
                          <td>Soya Beans</td>
                          <td>300.00</td>
                          <td>200.00</td>
                          <td>03/11/2022</td>
                          <td>31/01/2023</td>
                          <td>02/02/2023</td>
                          <td>Active</td>
                          <td>Margret Mwende</td>
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
export default Contracts;
