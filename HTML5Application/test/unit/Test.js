/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
MyTestCase = TestCase("MyTestCase");
MyTestCase.prototype.setup = function (){  
   
    
    
    
};
MyTestCase.prototype.testA = function(){
   assertEquals("works", testworks());
};
MyTestCase.prototype.testWithinBounds = function(){
    assertTrue(withinBounds(100,100,90,90,15,15));
    
    
};
/*MyTestCase.prototype.testButtons = function(){
    assertEquals("button x was wrong",10,createdButton.xLocation);
    assertEquals("button y was wrong",10,createdButton.yLocation);
    assertEquals("button width was wrong",10,createdButton.width);
    assertEquals("button height was wrong",10,createdButton.height);
    assertEquals("button colour was wrong","#00bcd4",createdButton.colour);
    assertEquals("buttons shadowcolour was wrong","#0095a5",createdButton.shadowColour);
    assertEquals("buttons text is wrong","button",createdButton.text);
    assertEquals("buttons text colour is wrong","#FFFFFF",createdButton.textColour);
    assertEquals("this should be null",null,createdButton.onClickFunction());
    assertEquals("this should be null",null,createdButton.imagePath);
    
};
*/
MyTestCase.prototype.tearDown = function(){
    createdButton = null;
};
