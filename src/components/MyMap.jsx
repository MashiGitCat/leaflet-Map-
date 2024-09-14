import React, { Component } from "react";
import { GeoJSON, MapContainer } from "react-leaflet";
import mapData from "./../Data/countries.json";
import "leaflet/dist/leaflet.css";
import "./MyMap.css";

class MyMap extends Component {
  state = {};

  countryStyle = {
    fillColor: "red",
    fillOpacity: "1",
    color: "black",
    weight: 2,
  };

  onEachFeature = (feature, layer) => {
    const featureName = feature.properties.ADMIN;
    console.log(featureName);
    layer.bindPopup(featureName);
    layer.on({
      click: (event) => {},
    });
  };
  render() {
    return (
      <div>
        {" "}
        <h1 style={{ textAlign: "center" }}> My Map</h1>
        <MapContainer style={{ height: "80vh" }} zoom={"2"} center={[20, 100]}>
          <GeoJSON
            style={this.countryStyle}
            data={mapData.features}
            onEachFeature={this.onEachFeature}
          />
        </MapContainer>
      </div>
    );
  }
}
export default MyMap;
