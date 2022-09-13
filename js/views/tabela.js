class Tabela {
  constructor(div_id) {
    this.tbody = this.createTBody(div_id);
  }

  createTBody(div_id) {
    let table = _createElement('table', '', 'table_' + div_id, '', '');
    document.getElementById(div_id).appendChild(table);

    let tbody = _createElement('tbody', '', 'tbody_' + div_id, '', '');
    table.appendChild(tbody);

    let tr = _createElement('tr', '', 'tr_' + div_id, '', '');
    tbody.appendChild(tr);

    let th_info = ['Usuário', 'CPF/CNPJ', 'Processo', 'Endereço', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    th_info.forEach(info => {
      let th = _createElement('th', '', '', '', info);
      tr.appendChild(th);
    });

    return tbody;

  }
  atualizeTBody(outorgas) {

    outorgas.forEach(o => {

      let tr = _createElement('tr', '', '', '', '');
      this.tbody.appendChild(tr);

      tr.appendChild(_createElement('td', '', '', '', o.attributes.USUARIO));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.CPF_CNPJ));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.NUM_PROCES));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.LOGRADOURO));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_JAN));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_FEV));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_MAR));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_ABR));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_MAI));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_JUN));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_JUL));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_AGO));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_SET));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_OUT));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_NOV));
      tr.appendChild(_createElement('td', '', '', '', o.attributes.Q_SEG_DEZ));

    });


  }
}

function _createElement(type, name, id, className, innerHTML) {
  let elem = document.createElement(type);
  elem.name = name;
  elem.id = id;
  elem.className = className;
  elem.innerHTML = innerHTML;
  return elem;
}

export {Tabela}