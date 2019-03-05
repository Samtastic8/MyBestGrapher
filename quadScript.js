//  The scripts for quad solver solutions, graph, zoom, and reset functions.
function QF() {
  // getting values to do quadratic formula
  a = $("#quadA").val();
  b = $("#linB").val();
  c = $("#constant").val();
  results (); 		
  graphQuad();			
  console.log(a,b,c) ;							
}  // close QF
function results() {
  // finding vertext and displaying symline and yint results
  vX = -(b*1)/(2*a);
  vX = vX.toFixed(2);
  vY = plugX(vX).toFixed(2);			
  $("#vertex").text("Vertex is at (" + vX+","+vY+")");
  $("#symLine").text("The line of Symmetry is at x = " + vY);
  $("#yint").text("The y-intercept is at (0,"+ c+")");  

  ctx.beginPath();
  ctx.arc(scaledX(vX),scaledY(vY),5,0,6.28);
  ctx.fill();     

  

  ctx.lineWidth= 2;
  ctx.strokeStyle= "rgba(0,50,200,.3)";
  ctx.setLineDash([10,5]);
  ctx.beginPath();
  ctx.moveTo(scaledX(vX),0);
  ctx.lineTo(scaledX(vX),h);
  ctx.stroke();
  ctx.setLineDash([0]);

// quadratic formula and solutions
  d = b**2-4*a*c;
  	    
    x1 = (-b+Math.sqrt(d))/(2*a);
    x2 = (-b-Math.sqrt(d))/(2*a);
    $("#solution1").text("The x-intercept is ("+x1+",0)");   
    $("#solution2").text("The x-intercept is ("+x2+",0)"); 
    // <button type="button" class="btn btn-success glyphicon glyphicon-minus" onclick ="zoomIn()">Success</button>  
    // <button type="button" class="btn btn-success glyphicon glyphicon-plus"></button>   


  ctx.beginPath();
  ctx.arc(scaledX(x1),scaledY(0),5,0,6.28);
  ctx.fill(); 

  ctx.beginPath();
  ctx.arc(scaledX(x2),scaledY(0),5,0,6.28);
  ctx.fill(); 
} // close results	

function plugX(x)  {
   y = a*Math.pow(x,2)+b*x+c*1
   return y;
}

function zoomIn() {
	if (k<150) {}
	ctx.clearRect(0,0,w,h)
	k+=2;
	graphpaper();
	graphQuad();
	results();
}
	function zoomOut() {
	if (k>4){
	ctx.clearRect(0,0,w,h)
	k-=2;
	graphpaper();
	graphQuad();
	results();
}
}
// 
function graphQuad () {

  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    nx = (w/2-(i+1))/k;


    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Red";
    ctx.moveTo(scaledX(x),scaledY(plugX(x)));
    ctx.lineTo(scaledX(nx),scaledY(plugX(nx)));
    ctx.stroke();


  } // end for loop
  
}  // end graphQuad

function scaledX(x) {
	newx = w/2+x*k;
	return newx;
}

function scaledY(y) {
	newy = h/2-y*k;
	return newy;
}

function reset() {
ctx.clearRect(0,0,w,h)
k=10
graphpaper();

}