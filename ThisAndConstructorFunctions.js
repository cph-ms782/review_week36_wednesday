/**
 * 1.
 */
function Person(name){
  this.name = name;
  console.log("Name: "+ this.name);
  setTimeout(function(){
    console.log("Hi  "+this.name);  //Explain this -> setTimeout har ikke givet en værdi til this.name
  },2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut1");  //This calls the function
console.log("I'm global1: "+ name);  //Explain this  -> name er ikke blevet deklareret og er derfor global

/**
 * 2.
 */
var p = new Person("Kurt Wonnegut2");  //Create an instance using the constructor function
console.log("I'm global2: "+ name);  //What’s different ? -> den kører den samme timeout function men benytter det gamle navn
