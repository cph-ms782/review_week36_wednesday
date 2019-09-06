/**
 * 1.
 * kommenteret ud pga 3. længere nede
 */
//function Person(name){
//  this.name = name;
//  console.log("Name: "+ this.name);
//  setTimeout(function(){
//    console.log("Hi  "+this.name);  //Explain this -> setTimeout har ikke givet en værdi til this.name
//  },2000);
//}

//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut1");  //This calls the function
console.log("I'm global1: "+ name);  //Explain this  -> name er ikke blevet deklareret og er derfor global

/**
 * 2.
 */
var p = new Person("Kurt Wonnegut2");  //Create an instance using the constructor function
console.log("I'm global2: "+ name);  //What’s different ? -> den kører den samme timeout function men benytter det gamle navn

/**
 * 3.
 */

//Store a reference to the outer this
//function Person(name){
//  this.name = name;
//  var self = this;
//  console.log("Name: "+ this.name);
//  setTimeout(function(){
//    console.log("Hi  "+self.name);  
//  },2000);
//}

//Using the bind(..) function
function Person(name){
  this.name = name;  
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  
  }.bind(this),2000);
}

/**
 * 4.
 */
var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,5000);
setTimeout(g2,8000);  
