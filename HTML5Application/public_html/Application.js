function loadData(name){
    if(name === "pub"){
        return getPubFile(); 
    }else if(name === "club"){
        return getClubFile();
    } else if(name === "food"){
        return getFoodFile();
    } else {
        return getTaxiFile();
    }
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
    
    createButtonObject(20, 20, 130, 130, "#00bcd4", "#0095a5", "Pubs", "#FFFFFF", toNameList, obj = {name: "pub", function: "venueDisplay"} );
    createButtonObject(170, 20, 130, 130, "#00bcd4", "#0095a5", "Clubs", "#FFFFFF", toNameList, obj = {name: "club", function: "venueDisplay"} );
    createButtonObject(20, 170, 130, 130, "#00bcd4", "#0095a5", "Food", "#FFFFFF", toNameList, obj = {name: "food", function: "venueDisplay"} );
    createButtonObject(170, 170, 130, 130, "#00bcd4", "#0095a5", "Taxi", "#FFFFFF", toNameList, obj = {name: "taxi", function: "taxiDisplay"} );
}

function toNameList(data){
    clearButtons();
    clear();

    var x;
    var y = 20;
    var d = loadData(data.name);
    
    for (x in d){
        createButtonObject(20, y, 280, 45, "#00bcd4", "#0095a5", d[x].name, "#FFFFFF", data.function, d);
        y += 60;
    }
}

function venueDisplay(data){
    
}

function taxiDisplay(data){
    
}

// Check if input is within button boundry, respond appropriately.
function checkInput(x, y){
    buttons = getButtons();
    for (var key in buttons) {
        button = buttons[key];
        if (typeof button !== 'undefined' && withinBounds(x, y, button.xLocation, button.yLocation, button.width, button.height) ) {
            button.onClickFunction();
        }
    }
}

splashScreen();
