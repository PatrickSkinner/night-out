function loadData(name){
    if(name === "pub"){
       var data = getPubFile(); 
    }else if(name === "club"){
        var data = getClubFile();
    } else if(name === "food"){
        var data = getFoodFile();
    } else {
        var data = getTaxiFile();
    }
    return data;
}


function splashScreen() {
    splashImage = new Image();
    splashImage.src = 'Assets/Starting_Logo.png';
    splashImage.onload = function () {
        drawImage(0, 0, splashImage);
    };
    window.setTimeout(mainMenu, 1000);
}

function mainMenu() {
    clear();
    
    menuImage = new Image();
    menuImage.src = '';
    menuImage.onload = function () {
        drawImage(0, 0, menuImage);
    };
    
    createButtonObject(20,20, 130, 130, "#00bcd4", "#0095a5", "Pubs", "#FFFFFF", toPub, loadData("pub") );
    createButtonObject(170,20, 130, 130, "#00bcd4", "#0095a5", "Clubs", "#FFFFFF", toClub, loadData("club") );
    createButtonObject(20,170, 130, 130, "#00bcd4", "#0095a5", "Food", "#FFFFFF", toFood, loadData("food") );
    createButtonObject(170,170, 130, 130, "#00bcd4", "#0095a5", "Taxi", "#FFFFFF", toTaxi, loadData("taxi") );
    loadData("JSONclubEmu.js");
}

function drawButtonList(size, data, passedFunction){
    var y = 20;
    for(var i = 0; i < size; i++){
       createButtonObject(20, y, 280, 45, "#00bcd4", "#0095a5", data[i].name, "#FFFFFF", mapTest, obj = {lat: -45.864518, long: 170.510971} );
       //console.log(buttons);
       y += 60;
    }
}

function toPub(data){
    clearButtons();
    clear();
    var pubs = data;
    var y = 20;
    var x;
    for (x in pubs){
        createButtonObject(20, y, 280, 45, "#00bcd4", "#0095a5", pubs[x].name, "#FFFFFF", mapTest, obj = {lat: -45.864518, long: 170.510971} );
        y += 60;
    }
}

function toClub(data){
    clearButtons();
    clear();
    var clubs = data;
    var y = 20;
    var x;
    for (x in clubs){
        createButtonObject(20, y, 280, 45, "#00bcd4", "#0095a5", clubs[x].name, "#FFFFFF", mapTest, obj = {lat: -45.864518, long: 170.510971} );
        y += 60;
    }
}

function toFood(data){
    clearButtons();
    clear();
    var food = data;
    var y = 20;
    var x;
    for (x in food){
        createButtonObject(20, y, 280, 45, "#00bcd4", "#0095a5", food[x].name, "#FFFFFF", mapTest, obj = {lat: -45.864518, long: 170.510971} );
        y += 60;
    }
}

function toTaxi(data){
    clearButtons();
    clear();
    var taxi = data;
    var y = 20;
    var x;
    for (x in taxi){
        createButtonObject(20, y, 280, 45, "#00bcd4", "#0095a5", taxi[x].name, "#FFFFFF", mapTest, obj = {lat: -45.864518, long: 170.510971} );
        y += 60;
    }
}

// Check if input is within button boundry, respond appropriately.
function checkInput(x, y){
    buttons = getButtons();
    console.log(buttons);
    for (var key in buttons) {
        button = buttons[key];
        if (withinBounds(x, y, button.xLocation, button.yLocation, button.width, button.height)) {
            console.log(button.text);
            button.onClickFunction();
        }
    }
}

splashScreen();
