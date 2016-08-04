var c;
var ctx;

function init(){
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    
    c.addEventListener('click', function(evt) {
        mousePos = onClick(evt);
        mousePosG = mousePos.x;
        console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
        checkInput(mousePos.x, mousePos.y);
    }, false);
}

function onClick(evt){
    //clear();
    
    var rect = c.getBoundingClientRect(), root = document.documentElement;

    // return relative mouse position
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
      x: mouseX,
      y: mouseY
    };
}

function drawRect(x,y,w,h,c){
    ctx.fillStyle = c;
    ctx.fillRect(x,y,w,h);
}

function drawShadowRect(x, y, w, h, c){
    ctx.fillStyle = c;
    ctx.shadowColor = '#999';
    ctx.shadowBlur = 15;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;
    ctx.fillRect(x,y,w,h);
}

function drawLine(x1, y1, x2, y2){
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

function drawCircle(x, y, r){
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.stroke();
}

function drawText(x, y, text, c){
    ctx.fillStyle = c;
    ctx.font = "30px Arial";
    ctx.fillText(text, x, y);
}

function mapTest(long, lat){
    var google_tile = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + long + "," + lat +"&zoom=16&size=320x320"  + "&markers=color:red%7Clabel:C%7C" + long + "," + lat;
    var imageObj = new Image();
    imageObj.src = google_tile;
    imageObj.onload = function() {
        ctx.drawImage(imageObj, 0, 0);
    };
}
function clear(){
    ctx.clearRect(0, 0, 320, 320);
}

init();