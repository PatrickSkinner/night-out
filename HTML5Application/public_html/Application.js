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
    window.setTimeout(mainMenu, 2000);
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



function toPub(){
    clearButtons();
    clear();
    console.log("toPub");
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

splashScreen();
