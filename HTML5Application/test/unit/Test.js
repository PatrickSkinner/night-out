var button1,button2,buttons;

MyTestCase = TestCase("MyTestCase");
MyTestCase.prototype.setup = function (){  
    button1 = createButton(20, 20, 130, 130, "#00bcd4", "#0095a5", "Pubs", "#FFFFFF",null,null);
    var mainCanvas = document.createElement('canvas');
    this.mainCanvas.id = 'MyCanvas';
    this.mainCanvas.width="320"; 
    this.mainCanvas.height="320"; 
    this.mainCanvas.style.border = "1px solid grey";
    document.body.appendChild(mainCanvas);
};

MyTestCase.prototype.testButtons = function() {
    button2 = createButtonObject(10,20,30,40,null,null);
    assertEquals("Expected 10",10,button2.xLocation);
    assertEquals("Expected 20",20,button2.yLocation);
    assertEquals("Expected 30",30,button2.width);
    assertEquals("Expected 40",40,button2.height);
    assertFunction("Should be a function",button2.onClickFunction);
    assertNull("Should be null",button2.data);
};

MyTestCase.prototype.testWithinBounds = function(){
    assertTrue("Should be founded within Bounds",withinBounds(100,100,90,90,15,15));
};

MyTestCase.prototype.testNotWithinBounds = function(){
    assertFalse("Should be not founded within bounds", withinBounds(100,100,100,100,30,30));
};

MyTestCase.prototype.testgetbuttons= function(){
   buttons = getButtons();
   assertArray("Doesnt return an array", buttons);
   buttons[0] = button1;
   assertEquals("should have one button in the array",1, buttons.length);
};

MyTestCase.prototype.testClearButtons = function() {
   assertEquals("should have one button in the array",1, buttons.length);
   clearButtons();
   assertEquals("Should have zero buttons in the array",0,buttons.length);
};

MyTestCase.prototype.testbuttonsZero = function() {
  assertEquals("Should have no buttons in the array to start",0 ,buttons.length);  
};

MyTestCase.prototype.testCheckInput = function () {
   buttons[0] = button1;
   assertUndefined("on click function should be undefined",checkInput(11,22));
  };
MyTestCase.prototype.testLoadData = function () {
     assertObject("load data(pub) should be called",loadData("pub"));
};

MyTestCase.prototype.testPubLoad = function () {
  var pub = getPubFile();
  assertArray("should have been the pub array", pub);
  assertEquals("Should contain the Bog", "The Bog", pub[0].name);
};

MyTestCase.prototype.testClubLoad = function () {
  var club = getClubFile();
  assertArray("should have been the club array", club);
  assertEquals("Should contain the Boogle", "Boogie", club[0].name);
};

MyTestCase.prototype.testFoodLoad = function () {
  var food = getFoodFile();
  assertArray("should have been the pub array", food);
  assertEquals("Should contain the McDonalds", "McDonalds", food[0].name);
};

MyTestCase.prototype.testTaxiLoad = function () {
  var taxi = getTaxiFile();
  assertArray("should have been the taxi array", taxi);
  assertEquals("Should contain the Blue Bubble Taxis", "Blue Bubble Taxis", taxi[0].name);
};

MyTestCase.prototype.testLoadAsserts = function () {
    loadAssets();
    assertEquals("Should be the pub image", imagePub, assets.SQUARE_Pub);
    assertEquals("Should be the pub image", imageClub, assets.SQUARE_Club);
    assertEquals("Should be the pub image", imageFood, assets.SQUARE_Food);
    assertEquals("Should be the pub image", imageTaxi, assets.SQUARE_Taxi);
};

MyTestCase.prototype.testGeoLocationPass = function () {
   
    
};

MyTestCase.prototype.testGeoLocationFail = function () {
    
    
};

MyTestCase.prototype.tearDown = function (){
    delete(button1);
    delete(button2);
    delete(buttons);
};
