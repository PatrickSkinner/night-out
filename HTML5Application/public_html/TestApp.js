//background
drawRect(0,0,320,320,"#F2F2F2");

//buttons, wrap this stuff in to an emulator function later

drawRect(90,65,150,40,"#0095a5");
drawRect(85,60,150,40,"#00bcd4");
drawText(115, 90, "Botany", "#FFFFFF");

//drawRect(90,125,150,40,"#0095a5");
//drawRect(85,120,150,40,"#00bcd4");
//drawText(115, 150, "Owheo", "#FFFFFF");
drawButton(85, 120, 150, 40, "#00bcd4", "#0095a5", "Owheo");

drawRect(90,185,150,40,"#0095a5");
drawRect(85,180,150,40,"#00bcd4");
drawText(105, 210, "Octagon", "#FFFFFF");


// Check if input is within button boundry, respond appropriately.
function checkInput(x, y){
    if(60 < y && y < 105){
        clear();
        mapTest(-45.864518, 170.510971);   
    }
    
    if(120 < y && y < 165){
        clear();
        mapTest(-45.866997, 170.518195);   
    }
    
    if(180 < y && y < 225){
        clear();
        mapTest(-45.874307, 170.504151);   
    }
}