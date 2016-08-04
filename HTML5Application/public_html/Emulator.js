var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

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

function mapTest(){
    var google_tile = "http://maps.google.com/maps/api/staticmap?sensor=false&center=-45.864518,170.510971&zoom=16&size=320x320";
    var imageObj = new Image();
    imageObj.src = google_tile;
    imageObj.onload = function() {
        ctx.drawImage(imageObj, 0, 0);
    };
}
function clear(){
    ctx.clearRect(0, 0, 320, 320);
}