var lastFunction;
var lastParameter;

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
    
    createButton(20, 20, 130, 130, "#00bcd4", "#0095a5", "Pubs", "#FFFFFF", toNameList, obj = {list: loadData("pub"), function: venueDisplay} );
    createButton(170, 20, 130, 130, "#00bcd4", "#0095a5", "Clubs", "#FFFFFF", toNameList, obj = {list: loadData("club"), function: venueDisplay} );
    createButton(20, 170, 130, 130, "#00bcd4", "#0095a5", "Food", "#FFFFFF", toNameList, obj = {list: loadData("food"), function: venueDisplay} );
    createButton(170, 170, 130, 130, "#00bcd4", "#0095a5", "Taxi", "#FFFFFF", toNameList, obj = { list: loadData("taxi"), function: taxiDisplay} );
}

function toNameList(data){
    clearButtons();
    clear();
    
    lastFunction = mainMenu;
    lastParameter = null;

    var x;
    var y = 5;
    
    for (x in data.list){
        createButton(20, y, 280, 45, "#00bcd4", "#0095a5", data.list[x].name, "#FFFFFF", data.function, obj = { venue: data.list[x], list: data.list });
        y += 55;
    }
    
    createButton(20, 290, 280, 20, "#00bFd4", "#0095a5", "", "#FFFFFF", goBack, null);
    drawText(135, 308, "Back", "#FFFFFF", 20);
}

function venueDisplay(data){
    lastFunction = toNameList;
    lastParameter = data.list;
    
    clearButtons();
    clear();
    
    drawRect(20 + 5, 10 + 5, 280, 260, "#666666");
    drawRect(20, 10, 280, 260, "#CCCCCC");
    
    createButton(20, 290, 80, 20, "#00bFd4", "#0095a5", "", "#FFFFFF", goBack, null);
    drawText(35, 308, "Back", "#FFFFFF", 20);
    
    createButton(110, 290, 190, 20, "#00bFd4", "#0095a5", "", "#FFFFFF", mapTest, obj = {lat: -45.864518, long: 170.510971});
    drawText(145, 308, "View on Map", "#FFFFFF", 20);
}

function taxiDisplay(data){
    lastFunction = toNameList;
    lastParameter = data.list;
    
    clearButtons();
    clear();
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

function goBack(){
    clear();
    clearButtons();
    
    if(lastParameter !== null){
        lastFunction(lastParameter);
    }
    
    lastFunction();
}

splashScreen();