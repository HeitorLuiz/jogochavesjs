// imagens e sons do jogo

let imagemDaVila;
let imagemDoChaves;
let imagemPersonagem;
let imagemPersonagem2;
let imagemPersonagem3;
let imagemPersonagem4;
let imagemPersonagem5;
let imagemPersonagem6;
let imagemPersonagem7;
let imagemPersonagem8;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaVila = loadImage("imagens/mapa.jpg");
  imagemDoChaves = loadImage("imagens/chaves.jpg");
  imagemPersonagem = loadImage("imagens/madruga.jpg");
  imagemPersonagem2 = loadImage("imagens/kiko.jpeg");
  imagemPersonagem3 = loadImage("imagens/florinda.jpg");  
  imagemPersonagem4 = loadImage("imagens/barriga.jpg");
  imagemPersonagem5 = loadImage("imagens/bruxa.jpg");
  imagemPersonagem6 = loadImage("imagens/professor.jpg");
  imagemPersonagem7 = loadImage("imagens/chiquinha.png");
  imagemPersonagem8 = loadImage("imagens/nhonho.jpeg");
  imagemPersonagens = [imagemPersonagem, imagemPersonagem2, imagemPersonagem3, imagemPersonagem4, imagemPersonagem5, imagemPersonagem6, imagemPersonagem7, imagemPersonagem8]
  
  somDaTrilha = loadSound("./sons/chavesTrilha.mp3");
  somDaColisao = loadSound("./sons/pancada.mp3");
  somDoPonto = loadSound("./sons/chavesPonto.mp3");
}