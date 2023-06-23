import React, { Component } from "react";

export class Agents extends Component {
  data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  render() {
    return (
      <div>
        <div className="row page-title-header">
          <div className="col-12">
            <div className="page-header">
              <h4 className="page-title">Agents</h4>
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
                <h4 className="card-title">Agents List</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Agent Name</th>
                        <th>Phone Number</th>
                        <th>Totals Farmers</th>
                        <th>Acreas Registered </th>
                        <th>Farmer Traded </th>
                        <th>Purchased Volume (T)</th>
                        <th>Inventory Volume (T) </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.data.map(() => (
                        <tr>
                          <td className="py-1">
                            <img
                              src={require("../../assets/images/faces/face1.jpg")}
                              alt="user icon"
                            />
                          </td>
                          <td> Jackson Mwatela </td>
                          <td>+254742044215</td>
                          <td> 13 </td>
                          <td> -</td>
                          <td> -</td>
                          <td> 0.00 </td>
                          <td> 0.00 </td>
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
export default Agents;
