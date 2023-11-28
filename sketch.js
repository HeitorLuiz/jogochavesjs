  function setup() {
  createCanvas(800, 600);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaVila);
  mostraChaves();
  mostraPersonagens();
  movimentaPersonagens();
  movimentaChaves();
  voltaPosicaoInicialDoChaves();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}









