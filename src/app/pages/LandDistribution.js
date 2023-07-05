import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { statesData } from "../mock_data.js";

const LandDistribution = () => {
  const center = [0.6152755281593159, 38.25378483873096];

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
          <MapContainer
            center={center}
            zoom={4.6}
            style={{ width: "100vw", height: "100vh" }}
          >
            {/* <TileLayer
              url="https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=ZUF71i2dIzD2fEwFbkPy"
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            /> */}
            {statesData.features.map((state) => {
              const coordinates = state.geometry.coordinates[0].map((item) => [
                item[1],
                item[0],
              ]);

              return (
                <Polygon
                  pathOptions={{
                    fillColor: "#FD8D3C",
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: 3,
                    color: "white",
                  }}
                  positions={coordinates}
                  eventHandlers={{
                    mouseover: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        dashArray: "",
                        fillColor: "#BD0026",
                        fillOpacity: 0.7,
                        weight: 2,
                        opacity: 1,
                        color: "white",
                      });
                    },
                    mouseout: (e) => {
                      const layer = e.target;
                      layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 2,
                        dashArray: "3",
                        color: "white",
                        fillColor: "#FD8D3C",
                      });
                    },
                    click: (e) => {},
                  }}
                />
              );
            })}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default LandDistribution;
