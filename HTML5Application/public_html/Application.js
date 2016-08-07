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



function toPub(data){
    clearButtons();
    clear();
    var pubs = data;
    console.log(pubs.pubs[0].name);
    var y = 20;
    for(var i = 0; i < 5; i++){
       createButtonObject(20, y, 280, 45, "#00bcd4", "#0095a5", pubs.pubs[i].name, "#FFFFFF", mapTest, obj = {lat: -45.864518, long: 170.510971} );
       console.log(buttons);
       y += 60;
    }
    
}

function toClub(){
    clearButtons();
    clear();
    console.log("toClub");
}

function toFood(){
    clearButtons();
    clear();
    console.log("toFood");
}

function toTaxi(){
    clearButtons();
    clear();
    console.log("toTaxi");
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
