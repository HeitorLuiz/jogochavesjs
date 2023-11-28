//código dos personagens

let xPersonagens = [820, 820, 820, 820, 820, 820, 820, 820];
let yPersonagens = [55, 111, 166, 220, 302, 362, 423, 490];
let velocidadePersonagens = [4.8, 3.8, 5.5, 4.2, 3.6, 4.5, 5.2, 6];
let comprimentoPersonagens = 60;
let alturaPersonagens = 50;

function mostraPersonagens(){
  for (let i = 0; i < imagemPersonagens.length; i++){
    image(imagemPersonagens[i], xPersonagens[i], yPersonagens[i], comprimentoPersonagens, alturaPersonagens);
  }
}

function movimentaPersonagens(){
  for (let i = 0; i < imagemPersonagens.length; i++){
    xPersonagens[i] -= velocidadePersonagens[i];
  }
}

function voltaPosicaoInicialDoChaves(){
  for (let i = 0; i < imagemPersonagens.length; i++){
    if (passouTodaATela(xPersonagens[i])){
      xPersonagens[i] = 820;
    }
  }
}

function passouTodaATela(xPersonagem){
  return xPersonagem < - 50;
}
