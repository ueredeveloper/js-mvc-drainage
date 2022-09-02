
/**
* Classe representando o controlador das bacias de drenagem à montante.
*
  */

class DrenagensController {

  constructor(drenagens_model, drenagens_view, uh_model) {
    this.drenagens_model = drenagens_model;
    this.drenagens_view = drenagens_view;
    this.drenagens_view.buscarDrenagens(this.buscarDrenagens)
    this.uhs_model = uh_model
  }

  /**
  * Manipula a classe model para obter as unidades de drenagem à montante de um ponto
  * @param lat {number} Latitude de um ponto.
  * @param lng {number} Longitude de um ponto.
  * @param uh_codigo {number} Código da unidade hidrográfica a qual pertence o ponto indicado.
    */
  buscarDrenagens = (lat, lng) => {
    this.mostrarDrenagens(lat, lng)
  }
  /**
  * Mostrar o resultado das polylines à montante do ponto.
  * @param lat {number} Latitude de um ponto.
  * @param lng {number} Longitude de um ponto.
  * @param map {Object} Mapa criado (gmaps api)
  * @param polylines {Object[]} Array de polilinhas
    */
  async mostrarDrenagens(lat, lng) {
    // capturar informações da unidade hidrográfica
    let uh_feature = await this.uhs_model.getFeature(lat, lng);
    // capturar o código da unidade hidrográfica
    let uh_codigo = uh_feature.attributes.uh_codigo;
    // capturar as áreas de drenagem à montante
    let dren_features = this.drenagens_model.getFeatures(lat, lng, uh_codigo);
    // mostrar no mapa
    this.drenagens_view.mostrarDrenagens(dren_features);
  }

}
export { DrenagensController }
