alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() *numeroMaximo) +1;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se chute for igual a número secreto
    if (chute == numeroSecreto){
        break
    } else {
        if (chute > numeroSecreto){
            alert(`O número secreto é menor do que ${chute}`);
        }
        else{
            alert(`O número secreto é maior do que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
alert(`Isso aí! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

