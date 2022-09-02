function setInfoWindowContent (point) {

// div principal
let info = document.createElement("div");
info.id = "content";
// css: coluna linhas de divisão dashed apenas embaixo
info.className = "flex flex-col divide-y divide-dashed divide-x-0 "
document.body.appendChild(info);
// div com o nome do usuário
let info1 = createElement('div', '', 'info1', 'flex flex-row py-1 justify-start font-bold', '')
document.getElementById('content').appendChild(info1)
document.getElementById('info1').appendChild(createElement('p', '', '', 'px-2', 'Usuário:'));
document.getElementById('info1').appendChild(createElement('p', '', 'lblUsuario', '', point.USUARIO));

// cpfcnpf e processo
let info2 = createElement('div', '', 'info2', 'flex flex-row px-2 flex-wrap py-1 justify-between border-solid border-b-2', '')
document.getElementById('content').appendChild(info2)
document.getElementById('info2').appendChild(createElement('label', '', '', 'px-2', 'CPF/CNPJ:'));
document.getElementById('info2').appendChild(createElement('label', '', 'lblCPFCNPJ', '', point.CPF_CNPJ));
document.getElementById('info2').appendChild(createElement('label', '', '', 'px-2', 'Processo:'));
document.getElementById('info2').appendChild(createElement('label', '', 'lblProcesso', '', point.NUM_PROCES));
// endereço
let info3 = createElement('div', '', 'info3', 'flex flex-row px-2 py-1 justify-between', '')
document.getElementById('content').appendChild(info3)
document.getElementById('info3').appendChild(createElement('label', '', 'lblEndereco', 'px-2', "Endereço:"));
document.getElementById('info3').appendChild(createElement('label', '', 'lblEndereco', '', point.LOGRADOURO));
// coordenadas do ponto e um botão para copiar as coordenadas
let info4 = createElement('div', '', 'info4', 'flex flex-row px-2 py-1 justify-between', '')
document.getElementById('content').appendChild(info4)
document.getElementById('info4').appendChild(createElement('label', '', '', '', 'Latitude:'));
document.getElementById('info4').appendChild(createElement('label', '', 'lblLat', '', point.Latitude));
document.getElementById('info4').appendChild(createElement('label', '', '', '', 'Longitude:'));
document.getElementById('info4').appendChild(createElement('label', '', 'lblLng', '', point.Longitude));
let btnCopy = createElement('button', '', 'btn', '', '');
  // align middle - centralizar o ícone no botão
let icon = createElement('ion-icon', 'copy-outline', '', 'h-4 align-middle', '')
btnCopy.appendChild(icon);
document.getElementById('info4').appendChild(btnCopy);

return info;
}

export {setInfoWindowContent}