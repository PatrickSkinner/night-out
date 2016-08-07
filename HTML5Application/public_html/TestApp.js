//background
drawRect(0,0,320,320,"#F2F2F2");

//buttons
createButtonObject(85, 60, 150, 40, "#00bcd4", "#0095a5", "Botany", "#FFFFFF", mapTest, obj = {lat: -45.864518, long: 170.510971} );
createButtonObject(85, 120, 150, 40, "#00bcd4", "#0095a5", "Owheo", "#FFFFFF", mapTest, obj = {lat: -45.866997, long: 170.518195});
createButtonObject(85, 180, 150, 40, "#00bcd4", "#0095a5", "Octagon", "#FFFFFF", mapTest, obj = {lat: -45.874307, long: 170.504151});

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
}