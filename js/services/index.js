import { arcGisToGmaps } from '../tools/index.js'

const url = 'https://njs-contribution-area.ueredeveloper.repl.co/drainage?'
/**
 * Solicita as unidades de drenagem à montante.
 * @param lat {number} Latitude de um ponto.
 * @param lng {number} Longitude de um ponto.
 * @param uh_codigo {number} Código da unidade hidrográfica a qual pertence o ponto indicado.
   */
async function buscarAreasDeDrenagem(lat, lng, uh_codigo) {
  try {
    // https://njs-contribution-area.ueredeveloper.repl.co/drainage?lat=-15.733880&lng=-47.488187&uh=6
    let url_params = url
      + new URLSearchParams({
        lat: lat,
        lng: lng,
        uh: uh_codigo
      });

    let drenagens = await fetch(url_params, { method: 'GET', })
      .then(features => {
        return features.json();
      })
      .then(features => {
        return arcGisToGmaps(features);
      });
    return drenagens;
  } catch (error) {
    console.log(error)
  }

}
/**
 * Solicita as unidades hidrográficas do DF.
 * 
 */
async function buscarUnidadesHidrograficas() {
  try {
    let unidades_hidrograficas = fetch('../../json/uhs-to-gmaps.json')
      .then(response => {
        return response.json();
      }).then(features => {
        return features;
      });
    return unidades_hidrograficas;
  } catch (error) {
  }
}

async function buscarUsuarios(rings) {
  try {

    let _rings = { rings: rings }

    let _features = await fetch('https://njs-contribution-area.ueredeveloper.repl.co/getPointsInPolygon',
      {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(_rings),
      });
    return _features;

  } catch (error) {
    console.log(error)
  }
}

export { buscarAreasDeDrenagem, buscarUnidadesHidrograficas, buscarUsuarios }