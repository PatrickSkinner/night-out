/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

MyTestCase = TestCase("MyTestCase");
MyTestCase.prototype.testA = function(){
   assertEquals("works", testworks());
};
MyTestCase.prototype.testWithinBounds = function(){
    assertTrue("didnt work with total size", withinBounds(100,100,90,90,10,10));
    
    
}




