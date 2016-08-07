//background
drawRect(0,0,320,320,"#F2F2F2");

//buttons, wrap this stuff in to an emulator function later

//drawRect(90,65,150,40,"#0095a5");
//drawRect(85,60,150,40,"#00bcd4");
//drawText(115, 90, "Botany", "#FFFFFF");

createButtonObject(85, 60, 150, 40, "#00bcd4", "#0095a5", "Botany", "#FFFFFF", mapTest, -45.864518, 170.510971);

//drawRect(90,125,150,40,"#0095a5");
//drawRect(85,120,150,40,"#00bcd4");
//drawText(115, 150, "Owheo", "#FFFFFF");
createButtonObject(85, 120, 150, 40, "#00bcd4", "#0095a5", "Owheo", "#FFFFFF", mapTest, -45.866997, 170.518195);

//drawRect(90,185,150,40,"#0095a5");
//drawRect(85,180,150,40,"#00bcd4");
//drawText(105, 210, "Octagon", "#FFFFFF");
createButtonObject(85, 180, 150, 40, "#00bcd4", "#0095a5", "Octagon", "#FFFFFF", mapTest, -45.874307, 170.504151);

// Check if input is within button boundry, respond appropriately.
function checkInput(x, y){
    buttons = getButtons();
    for (var key in buttons) {
        button = buttons[key];
        if (withinBounds(x, y, button.xLocation, button.yLocation, button.width, button.height)) {
            console.log(button.text);
            button.onClickFunction();
        }
    }
//    if(60 < y && y < 105){
//        clear();
//        mapTest(-45.864518, 170.510971);   
//    }
//    
//    if(120 < y && y < 165){
//        clear();
//        mapTest(-45.866997, 170.518195);   
//    }
//    
//    if(180 < y && y < 225){
//        clear();
//        mapTest(-45.874307, 170.504151);   
//    }
}