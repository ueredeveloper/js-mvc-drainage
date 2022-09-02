import { buscarUnidadesHidrograficas } from '../services/index.js';
/**
  * Representação da entidade Unidades Hidrográficas.
  **/
class UnidadesHidrograficasModel {

  constructor() {
   this.features = buscarUnidadesHidrograficas();
  }
  /**
  * Capturar a unidade hidrográfica de acordo com as coordenadas indicadas.
  * @param {number} lat Latitude do ponto.
  * @param {number} lng Longitude do ponto.
  * @return {Object} Unidade Hidrográfica com atributos.
  **/
  async getFeature(lat, lng) {
    let feature = null;
    let features = await this.features;
    console.log(features)
    features.features.forEach(_feature => {
      // transformar a feature em um polígono para fazer o contains
      let _polygon = new google.maps.Polygon({ paths: _feature.geometry.rings[0], attributes: _feature.attributes });
      if (google.maps.geometry.poly.containsLocation({ lat: parseFloat(lat), lng: parseFloat(lng) }, _polygon)) {
        feature = _polygon;
      }
    });
    return feature;
  }
}

export { UnidadesHidrograficasModel }