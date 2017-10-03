const mapboxgl = require("mapbox-gl");

const icons = {
    hotel: "url(http://i.imgur.com/D9574Cu.png)",
    activity: "url(http://i.imgur.com/WbMOfMl.png)",
    resturant: "url(http://i.imgur.com/cqR6pUI.png)"
}

let builder = function (type, location)    {
    const mdel = document.createElement('div');
    mdel.style.width = '32px';
    mdel.style.height = '39px';
    mdel.style.backgroundImage = icons[type.toLowerCase()];
    return new mapboxgl.Marker(mdel)
        .setLngLat(location);
} 
module.exports = builder;

