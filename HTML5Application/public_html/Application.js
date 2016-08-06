function splashScreen(){
    splashImage = new Image();
    splashImage.src = '';
    splashImage.onload = function(){
        drawImage(splashImage, 0, 0);
    };
    window.setTimeout(mainMenu, 2000);
}

function mainMenu(){
    
}