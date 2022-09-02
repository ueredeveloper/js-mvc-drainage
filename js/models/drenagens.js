import { buscarAreasDeDrenagem } from '../services/index.js';
/**
* Classe que representa as unidades de drenagem à montante.
  *
  *
  */
class DrenagensModel {
  constructor() { }
  /**
 * Obtem as unidades de drenagem à montante de um ponto
 * @param lat {number} Latitude de um ponto.
 * @param lng {number} Longitude de um ponto.
 * @param uh_codigo {number} Código da unidade hidrográfica a qual pertence o ponto indicado.
 * @return {Object[]} features.
 */
  async getFeatures(lat, lng, uh_codigo) {
    let _uh_codigo = uh_codigo;
    let features = await buscarAreasDeDrenagem(lat, lng, _uh_codigo)
    return features;
  }
}

export { DrenagensModel }