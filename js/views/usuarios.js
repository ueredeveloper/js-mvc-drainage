import { setInfoWindowContent } from './infowindow.js'

class UsuariosView {
  constructor() {
    // mostrar informação sobre o ponto, como usuario, coordenadas...
    this.infowindow = new google.maps.InfoWindow({});

  }

  mostrarUsuarios(map, features) {

    let _features = features;

    _features.features.forEach(feature => {
      // algumas latitudes e logitudes estão nulas no banco, não criar marcador com elas
      if (feature.attributes.Latitude !== null) {
        // criar um marcador para o ponto encontrado.
        let marker = new google.maps.Marker({
          attributes: feature.attributes,
          position: { lat: feature.attributes.Latitude, lng: feature.attributes.Longitude },
          // não mostrar no mapa, só mostrar os marcadores relacionados com a área de drenagem
          //map, 
        });
        // ao clicar no marcador, mostrar informacoes sobre o ponto encontrado dentro do poligono (rings).
        marker.addListener("click", () => {
          infowindow.setMap(null);
          let point = feature.attributes;
          infowindow.setContent(
            setInfoWindowContent(point)

          )
          infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
          });
        });

        // analysis.gwf.uh.m.push(marker)
      } else {
        // enviar para o lucas coordenadas nulas no banco
        //console.log(feature.attributes.OBJECTID, feature.USUARIO, feature.attributes.NUM_PROCES, feature.attributes.Latitude, feature.attributes.Longitude)
      }
    });

    /* 22/06/22

continuar daqui 

é preciso separar os marcadores de toda a unidade hidrografica dos marcadores que ficam só na área de drenagem

    */



  }
}

export { UsuariosView }