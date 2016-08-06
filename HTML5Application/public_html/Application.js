splashScreen();

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
    
    createButtonObject(20,20, 130, 130, "#00bcd4", "#0095a5", "Botany", "#FFFFFF", null, null );
    createButtonObject(170,20, 130, 130, "#00bcd4", "#0095a5", "Botany", "#FFFFFF", null, null );
    createButtonObject(20,170, 130, 130, "#00bcd4", "#0095a5", "Botany", "#FFFFFF", null, null );
    createButtonObject(170,170, 130, 130, "#00bcd4", "#0095a5", "Botany", "#FFFFFF", null, null );
}