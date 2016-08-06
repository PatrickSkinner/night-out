/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

MyTestCase = TestCase("MyTestCase");
MyTestCase.prototype.testA = function(){
   var testApp = new Emulator();
   assertequals("works", testApp.testworks());
};





