import { elements } from './elements.js';
import {map} from './map.js';
/**
 * Ouvite das modificações dos inputs de coordenadas na tela.
 * 
   */
class DrenagensView {
  /**
 * Captura os elementos de latitude, longitude e botão de pesquisa.
 * @param lat {number} Latitude de um ponto.
 * @param lng {number} Longitude de um ponto.
   */
  constructor() {
    this.btn_lat_lng = elements.btn_lat_lng
    this.input_lat = elements.input_lat;
    this.input_lng = elements.input_lng;
    this.polylines = [];
  }
  /**
 * Ouvir a manipulação acontecida no controlador (DrenagemControlador)
 * @param handler {function} Função no manipulador (DrenagemControlador) que solicita as áreas de drenagem.
   */
  buscarDrenagens = (handler) => {
    this.btn_lat_lng.addEventListener('click', event => {
      event.preventDefault();
      handler(this.input_lat.value, this.input_lng.value)
    })
    
  }
  async mostrarDrenagens (features) {
    let _features = await features;
    this.polylines.forEach(p=>{p.setMap(null)});
    this.polylines = [];
    
    _features.forEach(f => {
      this.polylines.push(
        new google.maps.Polyline({
          path: f.geometry.rings[0][0],
          geodesic: true,
          strokeColor: '#0000FF',
          strokeOpacity: 0.8,
          strokeWeight: 1,
          map: map
        })
      );
    });
  }
}
export { DrenagensView }