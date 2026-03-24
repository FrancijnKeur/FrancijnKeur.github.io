let font;
let fontsize = 35;

async function setup() {

    font = await loadFont('\assets\\static\\SourceCodePro-Bold.ttf');
    let cnv = createCanvas(350, 80);
    //background(71, 129, 69);
    background("clear");
    textFont(font);
    textSize(fontsize);

    
    textAlign(CENTER, CENTER);
    drawWords(width * 0.50);

    cnv.style('display', 'block');
    cnv.parent('logo-container');
}

function drawWords(x) {
  // The drawWords() function creates four text() instances,
  // using the x coordinate supplied by each column created
  // in setup().
  fill(clear)

  text('Francijn Keur', x, 40);
}
