import React, { Component } from "react";

export class Reports extends Component {
  data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  render() {
    return (
      <div>
        <div className="row page-title-header">
          <div className="col-12">
            <div className="page-header">
              <h4 className="page-title">Reports</h4>
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
                <h4 className="card-title">Purchase Report</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Purchased On</th>
                        <th>Bag #</th>
                        <th>Invoice #</th>
                        <th>Commodity</th>
                        <th>Farmer</th>
                        <th>Agent Name</th>
                        <th>Weight (Kgs)</th>
                        <th>Price (Ksh)</th>
                        <th>Total (Ksh)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.data.map(() => (
                        <tr>
                          <td>02/06/2023</td>
                          <td>345</td>
                          <td>INV-00899</td>
                          <td>Soya Beans</td>
                          <td>Jackson Mwaura</td>
                          <td>Fidelis Gichuhi</td>
                          <td> 123.00 </td>
                          <td> 245 </td>
                          <td> 3,900 </td>
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
export default Reports;
