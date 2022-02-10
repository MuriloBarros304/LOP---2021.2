var x=0;
var n=0;
var r=0;
var alturaBtnDirecional=50;
var larguraBtnDirecional=50;
var xbde=20;
var xbdd=530;
var xMenu=200;
var ybd=350;
var yb1=170;
var yb2=235;
var yb3=300;
var larguraBtnMenu=200;
var alturaBtnMenu=50
var xt=300;
var yt1=205;
var yt2=270;
var yt3=335;
var larguraVoltar = 80;
var alturaVoltar = 30;
var xBtnVoltar = 20; 
var yBtnVoltar = 20; 
var larguraBordaMenu=5;
var tela = 0;
let imgMenu;
var corBtnMenu = 'rgb(50,50,120)';
var cor2Menu= 'rgb(255)';
var xr,yr,xo,yo;
var vo=1;
var pontos = 0;
var corObstaculo = 'rgb(175,175,175)';
var valor=[];
var xo = [];
var yo = [];
var quantidadeObst = 5;
var v1,v2;
var distMinimaEntreNaveObst=20;
var vidas=5;
var xJogador, yJogador;

//carregando as imagens presentes no menu
function preload() {
  imgMenu=loadImage('Background-4.png');
  imgNave=loadImage('ship3.png');
}





//função que detecta se o cursor está sobre um botão do menu 
function estaSobreBtn(yBtnMenu){
  return  mouseX > xMenu && mouseX < xMenu + larguraBtnMenu && mouseY > yBtnMenu && mouseY < yBtnMenu + alturaBtnMenu;
}

function direcionais(xbd){
  return  mouseY > ybd && mouseY < ybd + larguraBtnDirecional && mouseX > xbd && mouseX < xbd + alturaBtnDirecional;
}

//função que detecta se o cursor está sobre o botão voltar
function estaSobreBtnVoltar(){

  return  mouseX > xBtnVoltar && mouseX < xBtnVoltar + larguraVoltar && mouseY > yBtnVoltar && mouseY < yBtnVoltar + alturaVoltar;
}

//função que desenha o botão voltar
function desenhaBtnVoltar(){ 
  
  if (estaSobreBtnVoltar()){
    fill(50,50,120);
  } else {
    fill(150,150,150);
  }
  rect(xBtnVoltar,yBtnVoltar,larguraVoltar,alturaVoltar, 8);
  noStroke(); 
  textSize(20)
  fill(0);
  text("Voltar",xBtnVoltar+40,yBtnVoltar+22);
  
  
}

  //função que gera os obstáculos
function obstaculo(xo,yo,valor){
  fill(corObstaculo);
  ellipse(xo,yo,30,30);
  fill(0);
  text(valor,xo,yo+5);
}

function reiniciaObstaculo(indice){
  
      xo[i] = random(600);
      yo[i] = - random(100,400);
      valor[i]= parseInt(random(50));
      
  }
function próximaPergunta(){
    v1=parseInt(random(25));
    v2=parseInt(random(25));
    xr = random(600);
    yr = - random(100,400);
    yr = yr + vo;
    r=v1+v2;
    x=x+1;
}

  //se a variável "tela" recebe o valor 1, significa que a tela que deve ser exibida é a tela 1 (tela do jogo em si), isso para todas as outras telas:2 é a tela de créditos, 3 é a tela de instruções e 0 é a tela inicial
 
function fase1(){
    image(imgMenu,0,0,600,400);
    
  
        // movimenta a nave 
  
  if(tela==1){
    if(direcionais(xbde)){
      xJogador=xJogador-5;
    }
  if(direcionais(xbdd)){
      xJogador=xJogador+5;
    
  }
}

    if (keyIsDown(LEFT_ARROW)) {
      xJogador = xJogador - 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      xJogador += 5;
    }
    if (keyIsDown(UP_ARROW)) {
      yJogador -= 5;
    }
    if (keyIsDown(DOWN_ARROW)) {
      yJogador += 5;
    }
    if(pontos>500){
      vo=1.5;
      quantidadeObst=7;
    }
    if(pontos>1000){
      vo=2;
      quantidadeObst=10;
    }
    if(pontos>1500){
      vo=2.75;
      quantidadeObst=18;
    }
    if(pontos>2000){
      vo=3;
      quantidadeObst=25;
    }
    
    fill(255);
    textSize(25);
    stroke(0);
    strokeWeight(5);
    text(v1+"+"+v2,150,50);
    if(vidas==0){
      tela=4;
    }
    if(tela==4){
      pontos=0;
      vidas=5;
      vo=1;
      xJogador=300;
      yJogador=360;
    }
    yr = yr + vo;
    text("Pontos: "+pontos,450,50);
    text("Vidas: "+vidas,450,25);
    if(yr>400){
    xr = random(600)
    yr = - random(10,400);  
      
    
    }
    desenhaBtnVoltar();
 
  
  for(i=0;i<=quantidadeObst;i++){
    if(valor[i]!=r){
    obstaculo(xo[i],yo[i],valor[i]);}
    obstaculo(xr,yr,r);
    yo[i] = yo[i] + vo;
    if(yo[i]>400){
      reiniciaObstaculo(i);
    }
//colisão da resposta com a nave 
  if (dist(xr,yr,xJogador,yJogador) < distMinimaEntreNaveObst){
    pontos = pontos + 100; 
    próximaPergunta();
  }
//colisão dos obstáculos com a nave
  if (dist(xo[i],yo[i],xJogador,yJogador) < distMinimaEntreNaveObst){
    vidas=vidas-1; 
  
     for ( cont=0; cont<=quantidadeObst; cont++){
        yo[cont] = -random(100,500); 
      }
     }
}
  fill(corBtnMenu);
    stroke(0);
    strokeWeight(2);    rect(xbde,ybd,larguraBtnDirecional,alturaBtnDirecional);  rect(xbdd,ybd,larguraBtnDirecional,alturaBtnDirecional);
  
  //desenha a nave
  imageMode(CENTER);
  image(imgNave,xJogador,yJogador,35,35);
  imageMode(CORNERS);
}

function creditos(){
   image(imgMenu,0,0,600,400);
    
    fill(255);
    stroke(5);
    strokeWeight(5);
    textFont('Impact');
    textSize(25);
    text('Créditos',300,50);
    textSize(20);
    text("Programador", 300, 120);
    text("Educadora", 300, 200);
    text("Professor Orientador", 300, 300);
    textFont('Roboto');
   
    text("Murilo Barros, estudante do curso de Bacharelado" , 300, 140);
    text("em Ciências e Tecnologia - UFRN", 300, 160);
    text("Vânia Suhelen, professora do 3º ano do ensino fundamental I",300,220);
    text("da Escola Estadual em Tempo Integral Dom Nivaldo Monte", 300, 240);
    text("em Parnamirim-RN",300,260);
    text("Orivaldo Santana, professor da disciplina: Lógica de Programação (LOP)", 300, 320);
    text("do curso de Bacharelado em Ciências e Tecnologia - UFRN",300,340);
    
    
    desenhaBtnVoltar();
}

function instrucoes(){
    image(imgMenu,0,0,600,400);
    textSize(25);
    stroke(5);
    fill(255);
    strokeWeight(5);
    textFont('Impact');
    text('Instruções',300,50);
    textFont('Roboto');
    textSize(20);
    text("No celular/tablet, pressione os botões na lateral para mover a nave", 300,150);
  text("No computador, pressione os botões direcionais para mover a nave", 300,170);
    text("Desvie dos obstáculos e colete o lixo espacial", 300, 200);
    text("Lixo espacial: resultados corretos das operações matemáticas", 300, 270);
    text("Obstáculos: resultados errados", 300, 320);
    desenhaBtnVoltar();
}

function game_over(){
    background(0);
    textSize(50);
    fill(255);
    stroke(255,0,0);
    strokeWeight(5);
    textFont('Oswald');
    text("FIM DE JOGO",300,200);
    textSize(20);
    noStroke();
    textFont('Roboto');
    text("Sua nave foi destruída, tente novamente",300,300);
    fill(150,150,150);
  desenhaBtnVoltar();
  }


  

function setup() {
  createCanvas(600, 400);
  image(imgMenu,0,0,600,400);
  xr = random(100,400);
  yr = - random(0,400);
  v1= parseInt(random(25));
  v2= parseInt(random(25));
  r=v1+v2;
  for (i=0;i<=quantidadeObst;i++){
    xo[i]=random(600);
    yo[i]=-random(100,400);
    valor[i]=parseInt(random(0,50));
  
  }
   
  xJogador=300;
  yJogador=360;
  
  
}

//função para desenhar os asteróides, os retângulos dos botões, os textos e a nave
function draw() {
  if(tela==0){ 
  image(imgMenu,0,0,600,400);
  stroke(5);
  strokeWeight(10);
  textAlign(CENTER);
  textSize(50);
  fill(150);
  textFont('Impact');
  text("Space Cleaner",300,100);
 fill(corBtnMenu);
  strokeWeight(1);
  if ( estaSobreBtn(yb1) ){//a borda aumenta a espessura quando o cursor se 
      strokeWeight(larguraBordaMenu);//encontra dentro do botão
      }
  
  rect(xMenu,yb1,200,50,20);
  fill(255);
  textFont('Roboto');
  textSize(30);
  text("Jogar",xt,yt1);
  
  fill(corBtnMenu);
  strokeWeight(1);
  if ( estaSobreBtn(yb2) ){
      strokeWeight(larguraBordaMenu);
      }
  rect(xMenu,yb2,larguraBtnMenu,alturaBtnMenu,20);
  fill(255);
  text("Créditos",xt,yt2); 
  fill(corBtnMenu);
   strokeWeight(1);
  if (estaSobreBtn(yb3)){ 
      strokeWeight(larguraBordaMenu);
      }
  
  rect(xMenu,yb3,larguraBtnMenu,alturaBtnMenu,20);
  fill(255);
 
  text("Instruções",xt,yt3);

  
}
 
if(tela == 1){
  fase1();
}

if (tela == 2){
  creditos();
  }
  
if (tela == 3){
  instrucoes();
  }
if (tela == 4){
  game_over();
} 
}
//função que detecta um clique do mouse, se a função detecta um clique e a função que detecta se o cursor está dentro do botão receber a informação de que está dentro do botão ao mesmo tempo, a variável tela muda de valor de acordo com o botão que foi selecionado
function mouseClicked() {
  if(tela==0){if (estaSobreBtn(yb1)){
    tela = 1; 
  }
  if (estaSobreBtn(yb2)){
    tela = 2; 
  }
  if (estaSobreBtn(yb3)){
    tela = 3; 
  }}
  if(vidas == 0){
    tela = 4;
  }
  
  if ( tela == 0.5 || tela == 1 || tela == 2 || tela == 3 || tela == 4){
    if ( estaSobreBtnVoltar() ){
      tela = 0; 
    }}
  
  
}




