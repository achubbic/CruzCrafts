import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class CruzMap extends Component {
  // constructor() {
  //   super();
  // }

  constructor(props) {
    super(props);
    //const {count, setCount} = useState(0)
    var pos;

    console.log(pos);
    this.state = {
      currentLatLng: {
        lat: 0,
        lng: 0
      },
      stores: [
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: 47.359423, longitude: -122.021071 },
        { latitude: 47.2052192687988, longitude: -121.988426208496 },
        { latitude: 47.6307081, longitude: -122.1434325 },
        { latitude: 47.3084488, longitude: -122.2140121 },
        { latitude: 47.5524695, longitude: -122.0425407 }
      ]
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    navigator.geolocation.getCurrentPosition(position => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.setState(state => {
        return { currentLatLng: pos };
      });
    });

    return (
      <Map
        google={this.props.google}
        zoom={13}
        style={mapStyles}
        //defaultCenter={{
        // lat: this.state.currentLatLng.lat,
        //lng: this.state.currentLatLng.lng
        //}}
        //initialCenter= {{currentLatLng.lat,currentLatLng.lon}}
        center={{
          lat: this.state.currentLatLng.lat,
          lng: this.state.currentLatLng.lng
        }}
      >
        {this.displayMarkers()}
        <Marker position={{ lat: 36.962421, lng: -122.023331 }} />
      </Map>
      <button>Heo</button>
    );
  }
}

// export {CruzMap};
// export default CruzMap
export default GoogleApiWrapper({
  apiKey: "AIzaSyB_DqsvVb7sdqj9wQ123Bi8NgAAfZvuz5g"
})(CruzMap);

const mapStyles = {
  width: "100%",
  height: "100%"
};
