
//Funções do P5:
function setup() {
    createCanvas(1100, 620);
    trilha2.loop(0, 1, 0.25);
}
  
function draw() {

    background(35);
    mBolinhaERaquete();
    movBolinha();
    movRaq();
    movAdv();
    borda();
    colisao();
    comandos();
    pontuacao();
    bolinhaNaoFicaPresa();
}
//Velocidade da Bolinha:
let velocidade = 15;
let vxBolinha = velocidade;
let vyBolinha = velocidade;

//Variaveis de Pontuação:
let meuPonto = 0;
let advPonto = 0;

//Variaveis da Bolinha:
let xBolinha = 550;
let yBolinha = 310;
let dBolinha = 30;
let raio = dBolinha/2;

//Variaveis da Raquete:
let xRaq = 10;
let yRaq = 255;
let wRaq = 10;
let hRaq = 110;

//Variaveis da Raquete Adversaria:
let xAdv = 1070;
let yAdv = 255;
let wAdv = 10;
let hAdv = 110;
let dirRaq = 1;

//Sons:
let trilha1;
let trilha2;
let trilha3;
let sponto;
let sraquetada;



//Funções de Funcionamento do Jogo:
function mBolinhaERaquete(){
    circle(xBolinha, yBolinha, dBolinha);
    rect(xRaq, yRaq, wRaq, hRaq);
    rect(xAdv, yAdv, wAdv, hAdv);
    fill(255);
    textSize(55);
    text(meuPonto, 480, 70);
    text(advPonto, 580, 70);
}
function movBolinha(){
    xBolinha += vxBolinha;
    yBolinha += vyBolinha;
}
function movRaq(){
    if (keyIsDown(UP_ARROW)){
        yRaq -= 20;
    }
    if (keyIsDown(DOWN_ARROW)){
        yRaq += 20;
    }
}

function borda(){
    if (xBolinha + raio > width || xBolinha - raio < 0){
        vxBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0){
        vyBolinha *= -1;
    }
    
}
function colisao (){
    if (xBolinha - raio < xRaq + wRaq && yBolinha - raio < yRaq + hRaq && yBolinha + raio > yRaq){
        vxBolinha *= -1;
    }
    if (xBolinha + raio > xAdv + wAdv && yBolinha + raio < yAdv + hAdv && yBolinha + raio > yAdv ){
        vxBolinha *= -1;
    }
    
}
function bolinhaNaoFicaPresa() {
    if (xBolinha + raio < 0){
      xBolinha = 550;
    } else {
      if (xBolinha - raio >= 1099){
        xBolinha = 550;
      }
    }
}
function movAdv(){
    if (keyIsDown(87)){
        yAdv -= 20;
    }
    if (keyIsDown(83)){
        yAdv += 20;
    }
}
function pontuacao(){
    if (xBolinha + raio < 30){
        meuPonto += 1;
        sponto.play();
    }
    if (xBolinha + raio > 1100){
        advPonto += 1;
        sponto.play();
    }

}

//Funções de Usabilidade:
function comandos(){
    if (keyIsDown(27)){
        vxBolinha = 0;
        vyBolinha = 0;
        

    }
    if (keyIsDown(32)){
        vxBolinha = velocidade;
        vyBolinha = velocidade;

    }
    if (keyIsDown(82)){
        document.location.reload(true);
    }
}
function preload(){
    trilha1 = loadSound('music/ghostbusters.mp3');
    trilha2 = loadSound('music/hey-ya.mp3');
    trilha3 = loadSound('music/soviet-union-anthem.mp3');
    sponto = loadSound('music/ponto.mp3');
    sraquetada = loadSound('music/raquetada.mp3');
}