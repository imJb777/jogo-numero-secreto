let listaNumeroSorteado = [];
let numeroLimite = 100;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
// Funções com parametros sem retorno

function exibirTela(tag, texto) {
  let lugar = document.querySelector(tag);
  lugar.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}
function mensagemIncial() {
  exibirTela("h1", " jogo do numero secreto");
  exibirTela("p", "Descubra o número de 1 a 100");
}
mensagemIncial();

// função sem parametro e com retorno

function numeroAleatorio() {
  let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosLista = listaNumeroSorteado.length;
  if (listaNumeroSorteado.length == numeroLimite) {
    listaNumeroSorteado = [];
  }
  if (listaNumeroSorteado.includes(numeroSorteado)) {
    return numeroAleatorio();
  } else {
    listaNumeroSorteado.push(numeroSorteado);
    console.log(listaNumeroSorteado);
    return numeroSorteado;
  }
}

// Função sem parametro e sem retorno

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTela("h1", "ACERTOU!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentantiva";
    let numeroTentativas = `Parabéns você conseguiu com ${tentativas} ${palavraTentativa} !`;
    exibirTela("p", numeroTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    exibirTela("p", "O seu número secreto é menor");
  } else {
    exibirTela("p", "O seu número secreto é maior");
  }
  tentativas++;
  limparCampo();
}
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarGame() {
  numeroSecreto = numeroAleatorio();
  limparCampo();
  mensagemIncial();
  tentativas = 1;
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
