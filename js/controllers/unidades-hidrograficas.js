/**
 * Manipula o model e view das unidades hidrográficas.
   */
class UnidadesHidrograficasController {
  constructor(uh_model, uh_view) {
    this.uh_view = uh_view;
    this.uh_model = uh_model;
    this.uh_view.buscarUnidadesHidrograficas(this.buscarUnidadesHidrograficas)
  }
  /**
   * Solicita as unidades hidrográficas para a clase model (UnidadesHidrograficasModel).
     */
  buscarUnidadesHidrograficas = (checked) => {

    if (checked) {
      let _features = this.uh_model.features;
      this.uh_view.mostrar(_features)
    } else {
      let _features = null;
      this.uh_view.mostrar(_features)

    }

  }
}
export { UnidadesHidrograficasController }