// Sam's setup script for quad solver and grapher.
// canvas set up and graph paper

// global variables
var k = 10, ctx, a ,b ,c , vX, vY, w, h;
function init() {
  canvas= document.getElementById("mycanvas");
  ctx = canvas.getContext("2d");
  w = canvas.width = 600;
  h = canvas.height = 400;
  console.log('canvas is loaded into context',w);
  graphpaper()
}
function graphpaper() {
  // the x and y axis drawn
  ctx.beginPath();
  ctx.moveTo( w/2,0 );
  ctx.lineTo( w/2,h);
  ctx.stroke( ); 

  // the x and y axis drawn
  ctx.beginPath();
  ctx.moveTo( w,h/2);
  ctx.lineTo( 0,h/2);
  ctx.stroke( ); 

// thin line with a 50% opacity using rgba() 
  ctx.lineWidth=1;
  ctx.strokeStyle="rgba(0,0,100,.2)";

  //using the direct variation constant, k
  //  here are the vertical and horizontal lines

  for (i=0; i<w/(2*k); i++) {
    // middle out to ensure graph paper is centered over axis
    ctx.beginPath();
    ctx.moveTo( w/2+i*k, 0 );
    ctx.lineTo( w/2+i*k, h );
    ctx.stroke();
} // end for loop

for (i=0; i<w/(2*k); i++) {
    // middle out to ensure graph paper is centered over axis
    ctx.beginPath();
    ctx.moveTo( w/2-i*k, 0 );
    ctx.lineTo( w/2-i*k, h );
    ctx.stroke();
} // end for loop



for (i=0; i<h/(2*k); i++) {
    // middle out to ensure graph paper is centered over axis
    ctx.beginPath();
    ctx.moveTo( 0, h/2 + i*k );
    ctx.lineTo(w, h/2 + i*k	 );
    ctx.stroke();
}
    for (i=0; i<h/(2*k); i++) {
    // middle out to ensure graph paper is centered over axis
    ctx.beginPath();
    ctx.moveTo( 0, h/2 - i*k );
    ctx.lineTo(w, h/2 - i*k	 );
    ctx.stroke();
}
} // end of graph paper funciton