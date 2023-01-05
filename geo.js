var restaurants = [
    { 
        name: "shubham Shop", address: "Varthur",
        lat: 12.9446229, lon: 77.7323736
    },
    { 
        name: "raju chai wala", address: "kormangla",
        lat: 12.9354422, lon: 77.5645523
    },
    { 
        name: "Didhiti", address: "mg  road",
        lat: 12.974864, lon: 77.6099268
    },
    { 
        name: "Rishikesh", address: "spice garden, 15",
        lat: 12.956959, lon: 77.7040633
    },
    { 
        name: "central food ", address: "btm layout",
        lat:12.9135218 , lon: 77.5950804
    },
    { 
        name: "raj ka khana", address: "ram nagar",
        lat: 12.714359, lon: 77.2668972
    },
];

/* Calculate distance between two points in Earth in KM */
function getDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}