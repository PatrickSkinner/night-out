var lastFunction;
var lastParameter;
var assets = {};

/**
 * 
 * 
 * @param {String} name - The
 * @returns {unresolved}
 */
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

function loadAssets(data){
//    imagePub = new Image();
//    imagePub.src = "Assets/Images/Buttons_Images/SQUARE_Pub.png";
//    assets["SQUARE_Pub"] = imagePub;
//    
//    imageClub = new Image();
//    imageClub.src = "Assets/Images/Buttons_Images/SQUARE_Club.png";
//    assets["SQUARE_Club"] = imageClub;
//    
//    imageFood = new Image();
//    imageFood.src = "Assets/Images/Buttons_Images/SQUARE_Food.png";
//    assets["SQUARE_Food"] = imageFood;
//    
//    imageTaxi = new Image();
//    imageTaxi.src = "Assets/Images/Buttons_Images/SQUARE_Taxi.png";
//    assets["SQUARE_Taxi"] = imageTaxi;
    
    var x;
    for (x in data.assets){
       image = new Image();
       image.src = data.assets[x].filepath;
       assets[data.assets[x].name] = image;
    }
    
}

/**
 * Display a static splash screen while loading assets, then move to main menu.
 * 
 * @returns {undefined}
 */
function splashScreen() {
    imageSplash = new Image();
    imageSplash.src = 'Assets/Starting_Logo.png';
    imageSplash.onload = function () {
        drawImage(0, 0, imageSplash);
    };
    loadAssets(getAssets());
    window.setTimeout(mainMenu, 2000);
}

/**
 * Draw the main menu, with four buttons, one for each list category.
 * 
 * @returns {undefined}
 */
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

/**
 * Display a list of venues in a given category, list items can be clicked to go through to the venue display screen.
 * 
 * @param {Object} data - An object holding a function and a list of businesses as datafields.
 * @returns {undefined}
 */
function toNameList(data){
    clearButtons();
    clear();
    
    lastFunction = mainMenu;
    lastParameter = null;

    var x;
    var y = 10;
    
    for (x in data.list){
        createButton(20, y, 280, 45, "#00bcd4", "#0095a5", data.function, obj = { venue: data.list[x], list: data.list, old: data});
        drawImage(20, y, assets[data.list[x].name]);
        drawText(245, (y + 35), getDistance({lat: data.list[x].latitude, lng: data.list[x].longitude}), "#000000", 18, "Arial");
        //drawText(30, (y + 33), data.list[x].name, "#FFFFFF", 26, "Arial");
        y += 55;
    }
    
    createButton(20, 290, 280, 20, "#00bFd4", "#0095a5", goBack, null);
    drawText(135, 308, "Back", "#FFFFFF", 20, "Arial");
}

/**
 * Display the info for a given venue.
 * 
 * @param {Object} data - An object holding the details for a venue.
 * @returns {undefined}
 */
function venueDisplay(data){
    lastFunction = toNameList;
    lastParameter = data.old;
    
    clearButtons();
    clear();
    
    drawImage(20, 10, assets[data.venue.name + " Back"]);
    //drawRect(20 + 5, 10 + 5, 280, 260, "#666666");
    //drawRect(20, 10, 280, 260, "#CCCCCC");
    
    drawText(30, 40, data.venue.name + ":", "#00bFd4", 26, "Arial");
    
    drawText(30, 70, data.venue.address, "#FFFFFF", 22, "Arial");
    drawText(30, 95, data.venue.city, "#FFFFFF", 22, "Arial");
    
    drawText(30, 130, data.venue.open, "#FFFFFF", 22, "Arial");
    drawText(30, 155, data.venue.phone, "#FFFFFF", 22, "Arial");
    
    drawText(30, 190, "Rating: " + data.venue.rating, "#FFFFFF", 22, "Arial");
    
    createButton(20, 230, 280, 50, "#00bFd4", "#0095a5", drawMap, obj = {lat: data.venue.latitude, lng: data.venue.longitude, old: data});
    drawImage(20, 230, assets["GetDirectionsButton"]);
    drawText(90, 265, "Get Directions", "#FFFFFF", 22, "Arial");
    
    createButton(20, 290, 80, 20, "#00bFd4", "#0095a5", goBack, null);
    drawText(35, 308, "Back", "#FFFFFF", 20, "Arial");
    
    //createButton(110, 290, 190, 20, "#00bFd4", "#0095a5", mapTest, obj = {lat: data.venue.latitude, long: data.venue.longitude});
    createButton(110, 290, 190, 20, "#00bFd4", "#0095a5", webRedirect, data.venue.webLink);
    drawText(165, 308, "Website", "#FFFFFF", 20, "Arial");
}

/**
 * Display the info for a given taxi company.
 * 
 * @param {Object} data - An object holding the details for a taxi company.
 * @returns {undefined}
 */
function taxiDisplay(data){
    lastFunction = toNameList;
    lastParameter = data.old;
    
    clearButtons();
    clear();
    
    drawRect(20 + 5, 10 + 5, 280, 260, "#666666");
    drawRect(20, 10, 280, 260, "#CCCCCC");
    
    drawText(30, 40, data.venue.name + ":", "#FFFFFF", 26, "Arial");
    
    drawText(30, 70, data.venue.phone, "#FFFFFF", 22, "Arial");
    
    createButton(30, 90, 90, 30, "#00bFd4", "#0095a5", webRedirect, data.venue.webLink);
    drawText(35, 113, "Website", "#FFFFFF", 22, "Arial");
    
    createButton(20, 290, 80, 20, "#00bFd4", "#0095a5", goBack, null);
    drawText(35, 308, "Back", "#FFFFFF", 20, "Arial");

}

/**
 * Check if input is within button boundry, respond appropriately.
 * 
 * @param {int} x - The x coordinate of the mouse click.
 * @param {int} y - The y coordinate of the mouse click.
 * @returns {undefined}
 */
function checkInput(x, y){
    console.log(x + ", " + y);
    buttons = getButtons();
    for (var key in buttons) {
        button = buttons[key];
        if (typeof button !== 'undefined' && withinBounds(x, y, button.xLocation, button.yLocation, button.width, button.height) ) {
            button.onClickFunction();
        }
    }
}

/**
 * Clear the cavnas and draw a map on top giving users directions to the chosen destinate.
 * 
 * @param {type} data - An object holding the latitude and longitude on the desired destination.
 * @returns {undefined}
 */
function drawMap(data){
    lastFunction = venueDisplay;
    lastParameter = data.old;
    
    clear();
    clearButtons();
    createButton(0, 300, 320, 20, "#00bFd4", "#0095a5", goBack, null);
    
    updateLocation();
    getDistance(data);
    initDirection(data);
}

/**
 * Call the function currently stored in the lastFunction variable, usually the previous page visited.
 * 
 * @returns {undefined}
 */
function goBack(){
    clear();
    clearButtons();
    document.getElementById('map').style.display = 'none';

    if(lastParameter !== null){
        lastFunction(lastParameter);

    }else{
      lastFunction();
    }
}

updateLocation();
splashScreen();
