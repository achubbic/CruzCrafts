import React from "react";
import "./styles.css";
import CruzMap from "./components/CruzMap";
import Radar from "radar-sdk-js";
import { CameraFeed } from "./components/camera-feed";

//import { Map, GoogleApiWrapper } from 'google-maps-react';
export default function App() {
  //apiKey: "TOKEN HERE";
  Radar.initialize("prj_test_sk_437e218037d8a17e3cf4cdf1b0342f97795b40e8");
  //Radar.setUserId(userId);
  //Radar.startTracking();

  Radar.trackOnce(function(status, location, user, events) {
    // do something with status, location, user, events
    if (status === Radar.STATUS.SUCCESS) {
      console.log("You tracked me!");
      for (const geofence in user.geofences) {
        //console.log("Test" + user.place.chain.slug);
        //console.log("You tracked me!");
        //console.log(user);
        //console.log(user.geofences);
        console.log(user.geofences[geofence].description);
        //console.log("Test");
      }
    }
  });

  const uploadImage = async file => {
    const formData = new FormData();
    formData.append("file", file);

    // Connect to a seaweedfs instance
  };

  return (
    <div className="App">
      <div className="Map">
        <CruzMap />
      </div>
      <div>{/* <CameraFeed sendFile={uploadImage} /> */}</div>
    </div>
  );
}
