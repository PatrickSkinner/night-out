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
    
    createButtonObject(20,20, 130, 130, "#00bcd4", "#0095a5", "Pubs", "#FFFFFF", toNameList, "pub");
    createButtonObject(170,20, 130, 130, "#00bcd4", "#0095a5", "Clubs", "#FFFFFF", toNameList, "club");
    createButtonObject(20,170, 130, 130, "#00bcd4", "#0095a5", "Food", "#FFFFFF", toNameList, "food");
    createButtonObject(170,170, 130, 130, "#00bcd4", "#0095a5", "Taxi", "#FFFFFF", toNameList, "taxi");
    loadData("JSONclubEmu.js");
}

function toNameList(name){
    clearButtons();
    clear();

    var y = 20;
    var x;
    var data = loadData(name);
    
    for (x in data){
        createButtonObject(20, y, 280, 45, "#00bcd4", "#0095a5", data[x].name, "#FFFFFF", mapTest, obj = {lat: -45.864518, long: 170.510971} );
        y += 60;
    }
}

// Check if input is within button boundry, respond appropriately.
function checkInput(x, y){
    buttons = getButtons();
    for (var key in buttons) {
        button = buttons[key];
        if (typeof button !== 'undefined' && withinBounds(x, y, button.xLocation, button.yLocation, button.width, button.height)) {
            button.onClickFunction();
        }
    }
}

splashScreen();
