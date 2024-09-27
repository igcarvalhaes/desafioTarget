// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

let numeroInformado = 21;

function fibonacci(numero) {
  const fiboArr = [0, 1];
  for (let i = 2; i <= 100; i++) {
    let aux = fiboArr[i - 2] + fiboArr[i - 1];
    fiboArr.push(aux);
  }
  return fiboArr.includes(numero)
    ? `O numero ${numeroInformado} existe na sequência de Fibonnaci.`
    : `O numero ${numeroInformado} não existe na sequência de Fibonnaci.`;
}

console.log(fibonacci(numeroInformado));

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

let palavraSendoVerificada = "Abacate";

function verificarString(palavra) {
  let palavraMinuscula = palavra.toLowerCase();
  let arrayDePalavras = palavraMinuscula.split("");
  let contador = 0;

  for (i = 0; i <= arrayDePalavras.length - 1; i++) {
    if (arrayDePalavras[i] === "a") {
      contador++;
    }
  }
  return contador > 0
    ? `A palavra ${palavraSendoVerificada} tem a letra "a" e aparece ${contador} vez(es) nela.`
    : `A palavra ${palavraSendoVerificada} não tem a letra "a".`;
}

console.log(verificarString(palavraSendoVerificada));

// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
let indice = 12;
let soma = 0;
let k = 1;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma);
// Resposta é 77;
