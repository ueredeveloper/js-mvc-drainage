import { elements } from './elements.js';
import { map } from './map.js';
/**
  * Representação da tela de visualização das Unidades Hidrográficas.
  **/
class UnidadesHidrograficasView {
  constructor() {
    this.check_uhs = elements.check_uhs;
    this.polygons = []
  }
  buscarUnidadesHidrograficas(handler) {
    this.check_uhs.addEventListener('change', function() {
      if (this.checked) {
        console.log('handler 1')
        handler(this.checked)
      } else {
        console.log('handler else')
        handler(this.checked)
      }
    });
  }

  async mostrar(features) {

    if (features == null) {
      this.polygons.forEach(p => { p.setMap(null) })
      this.polygons = [];
    } else {
      let _features = await features
      _features.features.forEach(f => {
        // escolhe uma cor aleatória para cada polígono
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);

        this.polygons.push(
          new google.maps.Polygon({
            paths: f.geometry.rings[0],
            strokeColor: '#' + randomColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#' + randomColor,
            fillOpacity: 0.35,
            map: map
          })
        );
      });
    }
  }
}
export { UnidadesHidrograficasView }
