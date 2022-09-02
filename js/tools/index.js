/**
*  Converter o formato obtido no arcgis rest servie - [[-47,-15]] - para o formato da gmaps api - [{lat: ..., lng: ...}]
*  @param {object[]} features  Array no formato arcgis rest service, ex:  [[[-47,-15], ...]] 
*  @returns {object[]} gmaps Array no formato gmaps api, ex: [[{lat: ..., lng: ...}, ]]
*/
const arcGisToGmaps = (features) => {

  let gmaps = [];
  features.forEach(f=>{
      let attributes = f.attributes
      let geometry = {rings:[]}
      f.geometry.rings.forEach((rr,i)=>{
        let rings = [[]]
        rr.forEach(r=>{
          rings[0].push({ lat: r[1], lng: r[0] });
        });
        geometry.rings.push(rings);
      });
      gmaps.push({attributes, geometry});
    });

  return gmaps;
}

/**
*  Converter uma união de shapes feita na jtst com formato do gmaps api para o formato que possa ser utilizado na arcgis rest service.
*  @param {object[]} rings Array com coordenadas no formato gmaps api, ex: [{lat: -17, lng: -47},...]
*  @returns {object[]} toArcGis Array no formato Arg Gis, ex: [[[-47...,-15...],...,[-48...,-16...]]]
*/
const gmapsToArcGis = (rings) => {
  // arcGis = [[]] => [[[-47,-16], [-47,-17], [-47,-18]]]
  let arcGis = [[]];
  rings.forEach (r=>{
    // adicionar tudo na posição 0 da array.
    arcGis[0].push([r.lng(), r.lat()])
  })
  return arcGis;
}

export {arcGisToGmaps, gmapsToArcGis}