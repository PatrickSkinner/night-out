//background
drawRect(0,0,320,320,"#e8e8e8");

//buttons, wrap this stuff in to an emulator function later
drawRect(90,65,150,40,"#a3a3a3");
drawRect(85,60,150,40,"#bfbfbf");
drawText(115, 90, "Botany", "#111111");

drawRect(90,125,150,40,"#a3a3a3");
drawRect(85,120,150,40,"#bfbfbf");
drawText(115, 150, "Owheo", "#111111");


drawRect(90,185,150,40,"#a3a3a3");
drawRect(85,180,150,40,"#bfbfbf");
drawText(105, 210, "Octagon", "#111111");


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