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
    var r = Math.floor(Math.random() * 4);
    imageSplash = new Image();
    imageSplash.src = 'Assets/Starting_Logo' + r + '.png';
    imageSplash.onload = function () {
        drawImage(0, 0, imageSplash);
    };
    loadAssets(getAssets());
    window.setTimeout(mainMenu, 4000);
}

/**
 * Draw the main menu, with four buttons, one for each list category.
 * 
 * @returns {undefined}
 */
function mainMenu() {
    clearButtons();
    clear();
    
    drawImage(0, 0, assets["Background"]);
    
    createButtonObject(20, 20, 130, 130, toNameList, obj = {list: loadData("pub"), function: venueDisplay} );
    drawImage(20, 20, assets["SQUARE_Pub"]);
    
    createButtonObject(170, 20, 130, 130, toNameList, obj = {list: loadData("club"), function: venueDisplay} );
    drawImage(170, 20, assets["SQUARE_Club"]);

    createButtonObject(20, 170, 130, 130, toNameList, obj = {list: loadData("food"), function: venueDisplay} );
    drawImage(20, 170, assets["SQUARE_Food"]);

    createButtonObject(170, 170, 130, 130, toNameList, obj = { list: loadData("taxi"), function: taxiDisplay} );
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
    
    drawImage(0, 0, assets["Background"]);
    
    lastFunction = mainMenu;
    lastParameter = null;

    var x;
    var y = 10;
    
    for (x in data.list){
        createButtonObject(20, y, 280, 45, data.function, obj = { venue: data.list[x], list: data.list, old: data});
        drawImage(20, y, assets[data.list[x].name]);
        if(getDistance({lat: data.list[x].latitude, lng: data.list[x].longitude}) < 9999){
            drawText(253, (y + 40), Math.floor(getDistance({lat: data.list[x].latitude, lng: data.list[x].longitude})), "#FFFFFF", 18, "Arial");
        } else {
            drawText(253, (y + 40), "2Far", "#FFFFFF", 18, "Arial");
        }
        y += 55;
    }
    
    createButtonObject(20, 290, 280, 20, goBack, null);
    drawImage(20, 290, assets["Back Long"]);
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
    
    drawImage(0, 0, assets["Background"]);
    
    drawImage(20, 10, assets[data.venue.name + " Back"]);
    
    drawText(30, 40, data.venue.name + ":", "#FFFFFF", 26, "Arial");
    
    drawText(30, 70, data.venue.address, "#FFFFFF", 22, "Arial");
    drawText(30, 95, data.venue.city, "#FFFFFF", 22, "Arial");
    
    drawText(30, 130, data.venue.open, "#FFFFFF", 22, "Arial");
    drawText(30, 155, data.venue.phone, "#FFFFFF", 22, "Arial");
    
    drawText(30, 190, "Rating: " + data.venue.rating, "#FFFFFF", 22, "Arial");
    
    createButtonObject(35, 230, 280, 50, drawMap, obj = {lat: data.venue.latitude, lng: data.venue.longitude, function: data.old.function, old: data});
    drawImage(35, 210, assets["GetDirectionsButton"]);
    
    createButtonObject(20, 290, 80, 20, goBack, null);
    drawImage(20, 290, assets["Back Small"]);
    
    createButtonObject(110, 290, 190, 20, webRedirect, data.venue.webLink);
    drawImage(110, 290, assets["Website"]);
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
    
    drawImage(0, 0, assets["Background"]);
    
    drawImage(20, 10, assets[data.venue.name + " Back"]);
    
    drawText(30, 40, data.venue.name + ":", "#FFFFFF", 26, "Arial");
    
    drawText(30, 70, data.venue.phone, "#FFFFFF", 22, "Arial");
    
    createButtonObject(35, 90, 250, 100, null, null);
    drawImage(35, 90, assets["Call Taxi"]);
    
    createButtonObject(35, 210, 520, 50, drawMap, obj = {lat: data.venue.latitude, lng: data.venue.longitude, function: data.old.function, old: data});
    drawImage(35, 210, assets["GetDirectionsButton"]);
    
    createButtonObject(20, 290, 80, 20, goBack, null);
    drawImage(20, 290, assets["Back Small"]);
    
    createButtonObject(110, 290, 190, 20, webRedirect, data.venue.webLink);
    drawImage(110, 290, assets["Website"]);

}

/**
 * Check if input is within button boundry, respond appropriately.
 * 
 * @param {number} x - The x coordinate of the mouse click.
 * @param {number} y - The y coordinate of the mouse click.
 * @returns {undefined}
 */
function checkInput(x, y){
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
    lastFunction = data.function;
    lastParameter = data.old;
    
    clear();
    clearButtons();
    
    drawImage(0, 0, assets["Background"]);
    
    createButtonObject(20, 300, 320, 20,goBack, null);
    drawImage(20, 300, assets["Back Long"]);
    
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
