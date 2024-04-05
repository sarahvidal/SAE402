let hero;
let poucerouge;
let poucevert;
let bonus;
let bouclier;

let chancer;
let chancev;
let chanceb;

let hauteur = 600;

let toutr = [];
let toutv = [];
let toutb = [];

let score = 0;

let gameover = false;
let premiergame = true;

let gain = 20;
let gainplus = 50;
let perte = 50;

let bonusactiv = false;
let invisibilite = false;

let herosheet;

let fond;
let Ig;
let Id;
let IIg;
let IId;
let IIIg;
let IIId;
let IVd;
let montI;
let montII;
let montIII;
let sol;

let fondy = -500;
let Igx = 0, Igy = 447, Igw = 372, Igh = 352;
let Idx = 470, Idy = 280, Idw = 329, Idh = 520;
let IIgx = 0, IIgy = 150, IIgw = 800, IIgh = 653;
let IIdx = 0, IIdy = 140, IIdw = 800, IIdh = 662;
let IIIgx = 0, IIIgy = 50, IIIgw = 800, IIIgh = 726;
let IIIdx = 0, IIIdy = 440, IIIdw = 800, IIIdh = 383;
let IVdx = 0, IVdy = 220, IVdw = 800, IVdh = 572;
let montIx = 0, montIy = 75, montIw = 800, montIh = 721;
let montIIx = 0, montIIy = -30, montIIw = 800, montIIh = 828;
let montIIIx = 0, montIIIy = -350, montIIIw = 800, montIIIh = 1151;
let solx = 175, soly = 723, solw = 324, solh = 77;

let musiquefond;
let ambiance;
let poucerougeson;
let poucevertson;
let bonusson;
let bouclierson;

let teko;

function preload() {
  herosheet = loadImage('assets/anim-perso.png');
  fond = loadImage('assets/fond/fond.png');
  montIII = loadImage('assets/fond/montagnetroisiemeplan.png');
  montII = loadImage('assets/fond/montagnesecondplan.png');
  montI = loadImage('assets/fond/montagnepremierplan.png');
  IVd = loadImage('assets/fond/quatriemeplandroit.png');
  IIIg = loadImage('assets/fond/troisiemeplangauche.png');
  IIId = loadImage('assets/fond/troisiemeplandroit.png');
  IIg = loadImage('assets/fond/secondplangauche.png');
  IId = loadImage('assets/fond/secondplandroit.png');
  Ig = loadImage('assets/fond/premierplangauche.png');
  sol = loadImage('assets/fond/sol.png');
  Id = loadImage('assets/fond/premierplandroit.png');

  soundFormats('mp3', 'ogg');
  musiquefond = loadSound('assets/son/musiquefond');
  ambiance = loadSound('assets/son/ambiance');
  poucerougeson = loadSound('assets/son/poucerouge');
  poucevertson = loadSound('assets/son/poucevert');
  bonusson = loadSound('assets/son/bonus');
  bouclierson = loadSound('assets/son/bouclier');

  teko = loadFont('assets/font/Teko-Regular.ttf');
}

function setup() {
  new Canvas(800, 800);

  hero = new Sprite(400, 400, 500, 900);
  hero.spriteSheet = herosheet;
  allSprites.pixelPerfect = true;
  hero.scale = 0.1;

  hero.addAnis({
    stand: { w:900, h: 900, row: 0, frames: 6, frameDelay: 8 },
    poucevert: { w: 900, h: 900, row: 1, frames: 8, frameDelay: 8 },
    poucevertplus: { w: 900, h: 900, row: 2, frames: 8, frameDelay: 8 },
    poucerouge: { w: 900, h: 900, row: 3, frames: 8, frameDelay: 8 },
    bonus: { w: 900, h: 900, row: 4, frames: 8, frameDelay: 8 },
  });

  hero.changeAni("stand");

  world.gravity.y = 10;
  hero.y = hauteur;
  poucerouge = new Sprite(random(0, 800), -10, 900, 900);
  poucevert = new Sprite(random(0, 800), -10, 900, 900);
  bonus = new Sprite(random(0, 800), -10, 900, 900);
  bonus.img = 'assets/bonus.png';
  bonus.scale = 0.075;

  toutr.push(poucerouge);
  toutv.push(poucevert);
  toutb.push(bonus);

  textSize(50);
  textFont(teko);
  text("APPUYEZ SUR ESPACE POUR COMMENCER", 400, 20);
  textAlign(CENTER, CENTER);

  resetGame();
  noLoop();
}

function resetGame(){
  score = 0;
  gameover = false;
  hauteur = 600;
  for (poucerouge of toutr) {
    poucerouge.remove();    
  }
  for (poucevert of toutv) {
    poucevert.remove();    
  }
  for (bonus of toutb) {
    bonus.remove();    
  }
  gain = 20;
  gainplus = 50;
  perte = 50;
  world.gravity.y = 10;
  
  fondy = -500;
  Igx = 0, Igy = 447, Igw = 372, Igh = 352;
  Idx = 470, Idy = 280, Idw = 329, Idh = 520;
  IIgx = 0, IIgy = 150, IIgw = 800, IIgh = 653;
  IIdx = 0, IIdy = 140, IIdw = 800, IIdh = 662;
  IIIgx = 0, IIIgy = 50, IIIgw = 800, IIIgh = 726;
  IIIdx = 0, IIIdy = 440, IIIdw = 800, IIIdh = 383;
  IVdx = 0, IVdy = 220, IVdw = 800, IVdh = 572;
  montIx = 0, montIy = 75, montIw = 800, montIh = 721;
  montIIx = 0, montIIy = -30, montIIw = 800, montIIh = 828;
  montIIIx = 0, montIIIy = -350, montIIIw = 800, montIIIh = 1151;
  solx = 175, soly = 723, solw = 324, solh = 77;

  musiquefond.stop();
  musiquefond.loop();
  musiquefond.setVolume(0.1);
  ambiance.stop();
  ambiance.loop();
  loop();
}

function drawScore() {
  if (gameover) {
    for (poucerouge of toutr) {
      poucerouge.remove();    
    }
    for (poucevert of toutv) {
      poucevert.remove();    
    }
    for (bonus of toutb) {
      bonus.remove();    
    }
    fill(0, 0, 0, 100);
    rect(0, 0, width, height);
    textAlign(CENTER);
    textSize(75);
    fill(255);
    text('TU AS EU ' + score + ' ABONNÉS', width / 2, height / 3);
    
    textSize(50);
    text('APPUIE SUR ESPACE POUR RECOMMENCER', width / 2, height / 2);
  } else if(premiergame){
    fill(0, 0, 0, 100);
    rect(0, 0, width, height);
    textAlign(CENTER);
    textSize(50);
    fill(255);
    text('APPUIE SUR ESPACE POUR JOUER', width / 2, height / 2);
  }
 
}

function draw() {
  clear();
  
  image(fond, 0, fondy, 800, 1427);
  image(montIII, montIIIx, montIIIy, montIIIw, montIIIh);
  image(montII, montIIx, montIIy, montIIw, montIIh);
  image(montI, montIx, montIy, montIw, montIh);
  image(IVd, IVdx, IVdy, IVdw, IVdh);
  image(IIIg, IIIgx, IIIgy, IIIgw, IIIgh);
  image(IIId, IIIdx, IIIdy, IIIdw, IIIdh);
  image(IIg, IIgx, IIgy, IIgw, IIgh);
  image(IId, IIdx, IIdy, IIdw, IIdh);
  image(Ig, Igx, Igy, Igw, Igh);
  image(sol, solx, soly, solw, solh);
  image(Id, Idx, Idy, Idw, Idh);

  hero.x = mouse.x;
  hero.y = hauteur;
  hero.rotationLock = true;
  chanceb = round(random(0,3000));
  bonus.drag = 7;

  for (poucerouge of toutr) {
    if (bonusactiv == true) {
      hero.overlaps(poucerouge);
      bouclier.x = hero.x;
      bouclier.y = hauteur;
      bouclier.rotationSpeed = .5;
      if (frameCount >= 60*10) {
        bouclier.remove();
        bonusactiv = false;
      }
    }
    if (invisibilite == true) {
      hero.overlaps(poucerouge);
      if (frameCount >= 60*1) {
        invisibilite = false;
      }
    }
    if (hero.collides(poucerouge)) {
      if (hauteur >= 800) {
        gameover = true;
        noLoop();
      }
      hauteur += 40;
      score = score - perte;
      poucerouge.remove();
      invisibilite = true;
      frameCount = 0;
      hero.changeAni(['poucerouge', 'stand']);
      poucerougeson.play();
    }
    for (bonus of toutb) {
      bonus.overlaps(poucerouge);
    }
  }
  for (poucevert of toutv) {
    if (hero.collides(poucevert)) {
      if (hauteur > 480) {
        score = score + gain;
        hauteur -= 40;
        hero.changeAni(['poucevert', 'stand']);
      }
      else {
        score = score + gainplus;
        hero.changeAni(['poucevertplus', 'stand']);
      }
      poucevert.remove();
      poucevertson.play();
    }
    for (bonus of toutb) {
      bonus.overlaps(poucevert);   
    }
  }
  for (bonus of toutb) {
    if (hero.collides(bonus)) {
      bonus.remove();
      bonusactiv = true;
      frameCount = 0;
      hero.changeAni(['bonus', 'stand']);
      bouclier = new Sprite(hero.x, hauteur, 900, 900);
      bouclier.img = 'assets/bouclier.png';
      bouclier.scale = 0.111;
      bonusson.play();
      bouclierson.play();
      bouclierson.setVolume(0.5);
    }
  }
  textSize(50);
  textFont(teko);
  fill(0);
  text("ABONNÉS : " + score, 400, 20);
  textAlign(CENTER, CENTER);
  
  if (score <= 5000) {
    score += 1;
    chancer = round(random(0,75));
    chancev = round(random(0,50));

    Idw = Idw*1.0001;
    Idh = Idh*1.0001;
    Igx = Igx-0.03;
    Igw = Igw*1.0001;
    Igh = Igh*1.0001;
    soly = soly+0.03;
    solw = solw*1.0002;
    solh = solh*1.0002;
    IIdx = IIdx-0.01;
    IIdw = IIdw*1.00005;
    IIdh = IIdh*1.00005;
    IIgx = IIgx-0.03;
    IIgw = IIgw*1.00005;
    IIgh = IIgh*1.00005;
    IIIdx = IIIdx+0.005;
  } else if (score > 5000 && score <= 10000) {
    score += 3;
    world.gravity.y = 11;
    chancer = round(random(0,50));
    chancev = round(random(0,50));
    gain = 100;
    gainplus = 300;
    perte = 100;

    Idw = Idw*1.0003;
    Idh = Idh*1.0003;
    Igx = Igx-0.08;
    Igw = Igw*1.0003;
    Igh = Igh*1.0003;    
    solx = solx-0.2;
    soly = soly+0.05;
    solw = solw*1.001;
    solh = solh*1.001;
    IIdx = IIdx-0.01;
    IIdw = IIdw*1.0001;
    IIdh = IIdh*1.0001;
    IIgx = IIgx-0.06;
    IIgw = IIgw*1.0001;
    IIgh = IIgh*1.0001;
    IIIdx = IIIdx+0.03;
    IIIdw = IIIdw*1.00005;
    IIIdh = IIIdh*1.00005;
  } else if (score > 10000 && score <= 25000) {
    score += 5;
    world.gravity.y = 13;
    chancer = round(random(0,30));
    chancev = round(random(0,75));
    gain = 600;
    gainplus = 1000;
    perte = 500;

    Idx = Idx+0.3;
    Idw = Idw*1.001;
    Idh = Idh*1.001;
    Igx = Igx-0.7;
    Igw = Igw*1.001;
    Igh = Igh*1.001;    
    solx = solx-1.5;
    soly = soly+0.3;
    solw = solw*1.005;
    solh = solh*1.005;
    IIdx = IIdx-0.02;
    IIdy = IIdy-0.07;
    IIdw = IIdw*1.0003;
    IIdh = IIdh*1.0003;
    IIgx = IIgx-0.1;
    IIgw = IIgw*1.0003;
    IIgh = IIgh*1.0003;
    IIIdx = IIIdx+0.06;
    IIIdw = IIIdw*1.0001;
    IIIdh = IIIdh*1.0001;
    IIIgx = IIIgx-0.06;
    IIIgw = IIIgw*1.0001;
    IIIgh = IIIgh*1.0001;
  } else if (score > 25000 && score <= 50000) {
    score += 8;
    world.gravity.y = 15;
    chancer = round(random(0,20));
    chancev = round(random(0,100));
    gain = 2000;
    gainplus = 5000;
    perte = 1000;

    IIdx = IIdx-0.02;
    IIdy = IIdy-0.07;
    IIdw = IIdw*1.0008;
    IIdh = IIdh*1.0008;
    IIgx = IIgx-0.4;
    IIgw = IIgw*1.0008;
    IIgh = IIgh*1.0008;
    IIIdx = IIIdx+0.2;
    IIIdw = IIIdw*1.0004;
    IIIdh = IIIdh*1.0004;
    IIIgx = IIIgx-0.2;
    IIIgw = IIIgw*1.0004;
    IIIgh = IIIgh*1.0004;
    IVdx = IVdx+0.05;
    IVdw = IVdw*1.0002;
    IVdh = IVdh*1.0002;
    montIy = montIy+0.05;
    montIw = montIw*1.0001;
    montIh = montIh*1.0001;
  } else if (score > 50000 && score <= 100000) {
    score += 10;
    world.gravity.y = 17;
    chancer = round(random(0,10));
    chancev = round(random(0,150));
    gain = 3000;
    gainplus = 5000;
    perte = 2000;

    IIdy = IIdy+0.1;
    IIdw = IIdw*1.001;
    IIdh = IIdh*1.001;
    IIgx = IIgx-0.7;
    IIgw = IIgw*1.001;
    IIgh = IIgh*1.001;
    IIIdx = IIIdx+0.2;
    IIIdy = IIIdy-0.1;
    IIIdw = IIIdw*1.001;
    IIIdh = IIIdh*1.001;
    IIIgx = IIIgx-0.3;
    IIIgw = IIIgw*1.0007;
    IIIgh = IIIgh*1.0007;
    IVdx = IVdx+0.07;
    IVdw = IVdw*1.0004;
    IVdh = IVdh*1.0004;
    montIx = montIx-0.07;
    montIy = montIy+0.07;
    montIw = montIw*1.0003;
    montIh = montIh*1.0003;
    montIIx = montIIx-0.03;
    montIIy = montIIy+0.03;
    montIIw = montIIw*1.0001;
    montIIh = montIIh*1.0001;
    montIIIx = montIIIx-0.01;
    montIIIy = montIIIy+0.01;
    montIIIw = montIIIw*1.00005;
    montIIIh = montIIIh*1.00005;
  } else if (score > 100000 && score <= 500000){
    score += 30;
    world.gravity.y = 20;
    chancer = round(random(0,5));
    chancev = round(random(0,150));
    gain = 10000;
    gainplus = 20000;
    perte = 2500;

    IIIdx = IIIdx+0.5;
    IIIdw = IIIdw*1.005;
    IIIdh = IIIdh*1.005;
    IIIgx = IIIgx-1.5;
    IIIgw = IIIgw*1.002;
    IIIgh = IIIgh*1.002;
    IVdx = IVdx+0.2;
    IVdw = IVdw*1.001;
    IVdh = IVdh*1.001;
    montIx = montIx-0.2;
    montIy = montIy+0.2;
    montIw = montIw*1.0006;
    montIh = montIh*1.0006;
    montIIx = montIIx-0.07;
    montIIy = montIIy+0.07;
    montIIw = montIIw*1.0002;
    montIIh = montIIh*1.0002;
    montIIIx = montIIIx-0.03;
    montIIIy = montIIIy+0.03;
    montIIIw = montIIIw*1.0001;
    montIIIh = montIIIh*1.0001;
  } else if (score > 500000 && score <= 1000000){
    score += 70;
    world.gravity.y = 22;
    chancer = round(random(0,4));
    chancev = round(random(0,200));
    gain = 15000;
    gainplus = 40000;
    perte = 3000;

    montIy = montIy+1;
    montIIx = montIIx-0.3;
    montIIy = montIIy+0.2;
    montIIw = montIIw*1.0006;
    montIIh = montIIh*1.0006;
    montIIIx = montIIIx-0.15;
    montIIIy = montIIIy+0.02;
    montIIIw = montIIIw*1.0002;
    montIIIh = montIIIh*1.0002;
    fondy = fondy+0.02;
  } else if (score > 1000000){
    score += 150;
    world.gravity.y = 25;
    chancer = round(random(0,2));
    chancev = round(random(0,200));
    gain = 30000;
    gainplus = 100000;
    perte = 3000;

    if (fondy < 0 ) {
      fondy = fondy+0.1;
    }
    montIIIy = montIIIy+0.1;
  }

  if (chancer == 1) {
    poucerouge = new Sprite(random(0, 800), -10, 900, 900);
    poucerouge.img = 'assets/poucerouge.png';
    poucerouge.scale = 0.044;
    toutr.push(poucerouge);
  }
  if (chancev == 1) {
    poucevert = new Sprite(random(0, 800), -10, 900, 900);
    poucevert.img = 'assets/poucevert.png';
    poucevert.scale = 0.044;
    toutv.push(poucevert);
  }
  if (chanceb == 1) {
    bonus = new Sprite(random(0, 800), -10, 900, 900);
    bonus.img = 'assets/bonus.png';
    bonus.scale = 0.075;
    toutb.push(bonus);
  }

  if (hero.x > 800) {
    hero.x = 800;
  }
  if (hero.x < 0) {
    hero.x = 0;
  }
  drawScore();
}

function keyPressed(){
  if (gameover == true && key == ' ') {
    resetGame();
  } else if (premiergame == true && key == ' ') {
    resetGame();
    premiergame = false;
  }
}