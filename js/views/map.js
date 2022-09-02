import { elements } from './elements.js';
let map = null;

function initMap() {
  try {
    const myLatLng = { lat: -15.816617049522396, lng: -47.65526409580683 };
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: myLatLng,
      mapTypeId: 'hybrid'
    });

    map.addListener("click", (e) => {
      // preenchet os inputs lat e lng com a coordenada clicada
      elements.input_lat.value = e.latLng.lat();
      elements.input_lng.value = e.latLng.lng();

    });

  } catch (error) {
    console.log(error)
  }
};
window.initMap = initMap;

export { map }