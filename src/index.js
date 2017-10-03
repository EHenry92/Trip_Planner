console.log("Working with webpack");
const mapboxgl = require("mapbox-gl");
const mdel = require('./marker.js')

mapboxgl.accessToken = "pk.eyJ1IjoiZ3Vhbmd6IiwiYSI6ImNqOGJxNmU0dDAwbGIyd29rOW0zc3ZtMnYifQ.iEbWVWAJLhIKAdZExWT9Tw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack coordinates
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// const mdel = document.createElement('div');
// mdel.style.width = '32px';
// mdel.style.height = '39px';
// mdel.style.backgroundImage = "url(http://)";
// // // mdel.textContent = "🤚"
let first = mdel('hotel', [-74.009151, 40.705086]);
first.addTo(map);