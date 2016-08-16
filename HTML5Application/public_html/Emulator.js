var c;
var ctx;
var buttons = [];
var userPosition = {lat: 0, lng: 0};

function createButton(x, y, w, h, c, sc, onClickFunction, data) {    
    var createdButton = createButtonObject(x, y, w, h, onClickFunction, data);    
    drawButton(x, y, w, h, c, sc);
    buttons[x + "," + y] = createdButton;
}

function createButtonObject(x, y, w, h, onClickFunction, data) {
    var createdButton = {
        xLocation: x,
        yLocation: y,
        width: w,
        height: h,
        onClickFunction: function() {onClickFunction(data);},
        data: data
    };
    
    return createdButton;
}

function withinBounds (x, y, objX, objY, objW, objH) {
    if ((objX < x && objY < y) && (objW+objX > x && objY+objH > y)) {
        return true;
    }
    return false;
}

function getButtons(){
    return buttons;
}

function clearButtons(){
    buttons = [];
}

function init(){
    c = document.getElementById("myCanvas");
    document.getElementById('map').style.display = 'none';
    ctx = c.getContext("2d");
    c.addEventListener('click', function(evt) {
    mousePos = onClick(evt);
    mousePosG = mousePos.x;
    console.log('Mouse position: ' + mousePos.x + ',' + mousePos.y);
    checkInput(mousePos.x, mousePos.y);
    }, false);
    
}

function onClick(evt){
    var rect = c.getBoundingClientRect(), root = document.documentElement;

    // return relative mouse position
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
      x: mouseX,
      y: mouseY
    };
}

function drawRect(x, y, w, h, c){
    ctx.fillStyle = c;
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

function drawText(x, y, text, c, s, font){
    ctx.fillStyle = c;
    ctx.font = s + "px " + font;
    ctx.fillText(text, x, y);
}

function drawImage(x, y, img){
    ctx.drawImage(img, x, y);
}

function drawButton(x, y, w, h, colour, shadowColour){
    drawRect(x + 5, y + 5, w, h, shadowColour);
    drawRect(x, y, w, h, colour);
}

function mapTest(obj){
    var google_tile = "http://maps.google.com/maps/api/staticmap?sensor=false&center=" + obj.lat + "," + obj.long +"&zoom=16&size=320x320"  + "&markers=color:red%7Clabel:C%7C" + obj.lat + "," + obj.long;
    var imageObj = new Image();
    imageObj.src = google_tile;
    imageObj.onload = function() {
        ctx.drawImage(imageObj, 0, 0);
    };
}

function initMap() {
    // Create a map object and specify the DOM element for display.
    document.getElementById('map').style.display = 'block';
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: userPosition.lat, lng: userPosition.long},
        scrollwheel: false,
        zoom: 8
    });
}

function initDirection(targetLocation) {
    console.log(targetLocation);
    console.log(userPosition);
    // Create a map object and specify the DOM element for display.
    document.getElementById('map').style.display = 'block';
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: userPosition.lat, lng: userPosition.lng},
        scrollwheel: false,
        zoom: 8
    });
    
    var directionsDisplay = new google.maps.DirectionsRenderer({
        map: map
    });
    
    var request = {
        destination: targetLocation,
        origin: userPosition,
        travelMode: 'WALKING'
    };
    
    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status) {
        if (status == 'OK') {
            directionsDisplay.setDirections(response);
        }
    });
}

function clear(){
    ctx.clearRect(0, 0, 320, 320);
}

function drawTextBox(){
    
}

function updateLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            userPosition = {lat: position.coords.latitude, lng: position.coords.longitude};
        });
    }
}

init();
