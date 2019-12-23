import React, {useState, useEffect} from 'react';
import ReactMapGL, {Marker as MarkerTest, Popup as Test1} from "react-map-gl";
import MyVerticallyCenteredModal from './components/Modal';
import Form from "./components/Form";

import * as latlng from "./data/latlongtest.json";



function App() {
const [viewport, setViewport] = useState({
  latitude : 49.4431,
  longitude : 1.0993,
  width : "100vw",
  height : "100vh",
  zoom : 10
});

// const handleClick = (e) => {
//   const lat = e.latLng.lat();
//   const lng =e.latLng.lng();
//   alert(lat,lng)
// }
const [recherches, setRecherches] = useState(
  [
    {id: 1, nom : "Test Recherche"}
  ]
);

const [marqueurUtilisateur,setMarqueurUtilisateur] = useState(
  [
    {name :"test" , lat : 49.449596 , lng : 1.077410}
  ]
);

const handleAdd = recherche => {
  const updatedRecherches = [...recherches];
  updatedRecherches.push(recherche);
  ;
  setRecherches(updatedRecherches);
  

};

const handleClick = event =>{
  
  const newMarqueurUtilisateur = {name : "test" ,lng : event.lngLat[0],lat : event.lngLat[1]};
  const updatedMarqueurUtiliasateur = [...marqueurUtilisateur];
  updatedMarqueurUtiliasateur.push(newMarqueurUtilisateur);
  setMarqueurUtilisateur(updatedMarqueurUtiliasateur);

}

// function handleClick(map, event) {
//   const lngLat = event.lngLat;
//   console.log(lngLat);
// }

const [selectedPoint, setSelectedPoint] = useState(null);
useEffect(() => {
  const listener = e => {
    if(e.key === "Escape"){
      setSelectedPoint(null);
    }
  };
  window.addEventListener("keydown",listener);
},[]);


const [modalShow, setModalShow] = React.useState(false);

  



  return (
    <div className="RouenSec">
    
          
          <div className="App"  >
      <ReactMapGL {...viewport}
      mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/davy2407/ck3odefkl05e11cmj7dxg5wj8"
      onViewportChange = {(viewport) => {
        setViewport(viewport);
      }}
      onDblClick={handleClick}
      onClick={() => setModalShow(true)}
      >
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <Form onRechercheAdd={handleAdd}/>
        {latlng.markers.map((pointR)=> (
          <MarkerTest name={pointR.name} latitude={pointR.lat} longitude={pointR.lng}>
            <button className="marker-btn" onClick= {(e)=> {
              e.preventDefault();
              setSelectedPoint(pointR)
            }}>
              <img src="/Map_marker.svg" alt="Marker Icon"/>

            </button>

          </MarkerTest>
          
        ))}
        {marqueurUtilisateur.map((test)=> (
          <MarkerTest name="test" latitude={test.lat} longitude={test.lng}>
            <button className="marker-btn" onClick= {(e)=> {
              e.preventDefault();
              setSelectedPoint(test)
            }}>
              <img src="/Map_marker.svg" alt="Marker Icon"/>
            </button>
          </MarkerTest>
        ))}

        {selectedPoint ? (
          <Test1 
          latitude={selectedPoint.lat} 
          longitude={selectedPoint.lng}
          onClose={() => {
            setSelectedPoint(null);
          }}>
            <div>
              <h2>{selectedPoint.name}</h2>

            </div>

          </Test1>

        ) : null}




      </ReactMapGL>
      
    </div>

    

    </div>
  );
}

export default App;
