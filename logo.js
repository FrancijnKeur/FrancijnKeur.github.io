let font;
let fontsize = 35;
let pg;

async function setup() {

    font = await loadFont('\assets\\static\\SourceCodePro-Bold.ttf');
    let cnv = createCanvas(350, 80);
    textFont(font);
    textSize(fontsize);
    pg = createGraphics(350, 80);
    cnv.style('display', 'block');
    cnv.parent('logo-container');
}

function draw() {
  background(255);


  // PGraphics

  pg.background(255);
  pg.fill(0);
  // pg.textFont(font);
  pg.textSize(fontsize);
  pg.push();
  pg.translate(width/2, height/2);
  pg.textAlign(CENTER, CENTER);
  pg.text("Francijn Keur", 0, 0);
  pg.pop();


  let tilesX = 50;
  let tilesY = 10;

  let tileW = int(width/tilesX);
  let tileH = int(height/tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      // WARP
      let waveX = int(sin(frameCount * 0.75 + ( x * y ) * 1.5) * 2);
      let waveY = int(sin(frameCount * 0.75 + ( x * y ) * 1.5) * 2);
      
      // image(pg,0,0)
      if ((mouseX > 350)||(mouseY>80)){
        waveX = 0
        waveY = 0
      } 
      
      // SOURCE
      let sx = x*tileW + waveX;
      let sy = y*tileH + waveY;
      let sw = tileW;
      let sh = tileH;


      // DESTINATION
      let dx = x*tileW;
      let dy = y*tileH;
      let dw = tileW;
      let dh = tileH;



      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

    }
  }
}
