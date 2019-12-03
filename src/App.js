import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import * as latlng from "./data/latlongtest.json";



function App() {
const [viewport, setViewport] = useState({
  latitude : 49.4431,
  longitude : 1.0993,
  width : "100vw",
  height : "50vh",
  zoom : 10
});

const [selectedPoint, setSelectedPoint] = useState(null);
useEffect(() => {
  const listener = e => {
    if(e.key === "Escape"){
      setSelectedPoint(null);
    }
  };
  window.addEventListener("keydown",listener);
},[]);
  return (
    <div className="RouenSec">
    
          <div className="Container">
            <h1>Titre</h1>
            <p>BLabakbakbakblzdhffuzbjvjzbuofzehojzlenfklnuiefguzkejfjbzysfkfjvnjezdjbvdbvhbzyegfbdkhbvkb</p>


          </div>
          <div className="App">
      <ReactMapGL {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoiZGF2eTI0MDciLCJhIjoiY2szb2N5NXpjMWpibTNucXhqY2hzdnczZSJ9.iCSTSNxMJ4purLDyJht0zA"
      mapStyle="mapbox://styles/davy2407/ck3odefkl05e11cmj7dxg5wj8"
      onViewportChange = {(viewport) => {
        setViewport(viewport);
      }}
      >
        {latlng.markers.map((pointR)=> (
          <Marker name={pointR.name} latitude={pointR.lat} longitude={pointR.lng}>
            <button className="marker-btn" onClick= {(e)=> {
              e.preventDefault();
              setSelectedPoint(pointR)
            }}>
              <img src="/Map_marker.svg" alt="Marker Icon"/>

            </button>

          </Marker>
        ))}

        {selectedPoint ? (
          <Popup 
          latitude={selectedPoint.lat} 
          longitude={selectedPoint.lng}
          onClose={() => {
            setSelectedPoint(null);
          }}>
            <div>
              <h2>{selectedPoint.name}</h2>

            </div>

          </Popup>

        ) : null}




      </ReactMapGL>
      
    </div>

    <div className= "ListeRisques">

      <ul>
        <li>Risques industrielles</li>
        <li>Propreté</li>
        <li>Insécurité</li>
      </ul>
    </div>

    </div>
  );
}

export default App;
