import React, { useEffect, useState } from "react";
const ReactDOM = require('react-dom');
const WorldMap = require('react-world-map');

// const [selected, onSelect] = useState();

const MapChart = () => {
  return (
    <>
      <WorldMap  />
    </>
  );
}

export default MapChart;


//------------------------------------------------------------------------------
// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup
// } from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const MapChart = () => {
//   return (
//     <div>
//       <ComposableMap>
//         <ZoomableGroup zoom={1}>
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map(geo => (
//                 <Geography key={geo.rsmKey} geography={geo} />
//               ))
//             }
//           </Geographies>
//         </ZoomableGroup>
//       </ComposableMap>
//     </div>
//   );
// };

// export default MapChart;
