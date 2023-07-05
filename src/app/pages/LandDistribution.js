import React from "react";
import { GoogleMap } from "react-google-maps";
import { MAP } from "react-google-maps/lib/constants";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -0.71809, lng: 37.158951 }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const LandDistribution = () => {
  return (
    <div>
      <div className="row page-title-header">
        <div className="col-12">
          <div className="page-header">
            <h4 className="page-title">Land Distribution</h4>
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
        <div className="col-12">
          <div style={{ width: "100vw", height: "100vh" }}>
            <WrappedMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandDistribution;
