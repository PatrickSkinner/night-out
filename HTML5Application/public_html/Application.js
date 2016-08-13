var lastFunction;
var lastParameter;
var assets = {};

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

function loadAssets(){
    imagePub = new Image();
    imagePub.src = 'Assets/Images/Buttons_Images/SQUARE_Pub.png';
    assets["SQUARE_Pub"] = imagePub;
    
    imageClub = new Image();
    imageClub.src = 'Assets/Images/Buttons_Images/SQUARE_Club.png';
    assets["SQUARE_Club"] = imageClub;
    
    imageFood = new Image();
    imageFood.src = 'Assets/Images/Buttons_Images/SQUARE_Food.png';
    assets["SQUARE_Food"] = imageFood;
    
    imageTaxi = new Image();
    imageTaxi.src = 'Assets/Images/Buttons_Images/SQUARE_Taxi.png';
    assets["SQUARE_Taxi"] = imageTaxi;
}

function splashScreen() {
    image = new Image();
    image.src = 'Assets/Starting_Logo.png';
    image.onload = function () {
        drawImage(0, 0, image);
    };
    loadAssets();
    window.setTimeout(mainMenu, 1000);
}

function mainMenu() {
    clearButtons();
    clear();
    
    createButton(20, 20, 130, 130, "#00bcd4", "#0095a5", toNameList, obj = {list: loadData("pub"), function: venueDisplay} );
    drawImage(20, 20, assets["SQUARE_Pub"]);
    
    createButton(170, 20, 130, 130, "#00bcd4", "#0095a5", toNameList, obj = {list: loadData("club"), function: venueDisplay} );
    drawImage(170, 20, assets["SQUARE_Club"]);

    createButton(20, 170, 130, 130, "#00bcd4", "#0095a5", toNameList, obj = {list: loadData("food"), function: venueDisplay} );
    drawImage(20, 170, assets["SQUARE_Food"]);

    createButton(170, 170, 130, 130, "#00bcd4", "#0095a5", toNameList, obj = { list: loadData("taxi"), function: taxiDisplay} );
    drawImage(170, 170, assets["SQUARE_Taxi"]);

}

function toNameList(data){
    clearButtons();
    clear();
    
    lastFunction = mainMenu;
    lastParameter = null;

    var x;
    var y = 5;
    
    for (x in data.list){
        createButton(20, y, 280, 45, "#00bcd4", "#0095a5", data.function, obj = { venue: data.list[x], list: data.list });
        y += 55;
    }
    
    createButton(20, 290, 280, 20, "#00bFd4", "#0095a5", goBack, null);
    drawText(135, 308, "Back", "#FFFFFF", 20);
}

function venueDisplay(data){
    lastFunction = toNameList;
    lastParameter = data.list;
    
    clearButtons();
    clear();
    
    drawRect(20 + 5, 10 + 5, 280, 260, "#666666");
    drawRect(20, 10, 280, 260, "#CCCCCC");
    
    createButton(20, 290, 80, 20, "#00bFd4", "#0095a5", goBack, null);
    drawText(35, 308, "Back", "#FFFFFF", 20);
    
    createButton(110, 290, 190, 20, "#00bFd4", "#0095a5", mapTest, obj = {lat: -45.864518, long: 170.510971});
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