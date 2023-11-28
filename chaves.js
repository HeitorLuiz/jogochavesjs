//código do Chaves
let xChaves = 400;
let yChaves = 550;
let colisao = false;
let meusPontos = 0;

function mostraChaves(){
  image(imagemDoChaves, xChaves, yChaves, 50, 50);
}

function movimentaChaves(){
  if (keyIsDown(UP_ARROW)){
    yChaves -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yChaves += 3;
    }
  }
    if (keyIsDown(LEFT_ARROW)){
        if(podeSeMover2()){
          xChaves -= 3;
        } 
      }
      if (keyIsDown(RIGHT_ARROW)){
      if(podeSeMover3()){
          xChaves += 3;
        }
      }
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemPersonagens.length; i++){
    colisao = collideRectCircle(xPersonagens[i], yPersonagens[i], comprimentoPersonagens, alturaPersonagens, xChaves, yChaves, 15)
    if (colisao){
      voltaChavesParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  }
}

function voltaChavesParaPosicaoInicial(){
  yChaves = 553;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(38);
  fill(color(255, 0, 0))
  text(meusPontos, width / 11.6, 42);
}

function marcaPonto(){
  if (yChaves < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaChavesParaPosicaoInicial();
  } 
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yChaves < 550;
}

function podeSeMover2(){
  return xChaves > 1;
}

function podeSeMover3(){
  return xChaves < 749;
}






