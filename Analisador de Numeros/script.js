let number = document.getElementById("number");
let list = document.getElementById("boxNumber");
let result = document.getElementById("result");
let values = [];

function isValid(number) {
  if (Number(number) > 0 && Number(number) < 101) {
    window.alert("Numero valido");
    return true;
  } else false;
}

function adicionar() {
    let num = Number(number.value)
  if (isValid(number.value) && !inList(values, num) ){
    values.push(num);
    let item = document.createElement("option");
    item.text = `Valor ${number.value} adicionado`;
    list.appendChild(item);
    result.innerHTML = "";
  } else {
    window.alert("Valor encontrado ou numero fora do intervalo");
  }
  number.value = "";
  number.focus();
}

function inList(list, number) {
  return list.includes(number);
}

function finalizar() {
  if (values.length === 0) {
    return window.alert("Insira valores para continuar");
  }
  let nElementos = values.length;
  let menor = values[0];
  let maior = values[0];
  let soma = 0;
  let media = 0;
  for (let posicao in values) {
    soma += values[posicao];
    if (values[posicao] > maior) {
        maior = values[posicao];
    }
    if (values[posicao] < menor) {
      menor = values[posicao];
    }
  }
  media = soma / nElementos;
  result.innerHTML += `<p>Ao todo temos ${nElementos} números cadastrados.`;
  result.innerHTML += `<p>O maior valor é: ${maior}</p>`;
  result.innerHTML += `<p>O menor valor é: ${menor}</p>`;
  result.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`;
  result.innerHTML += `<p>A média dos valores é: ${media}</p>`;
}
