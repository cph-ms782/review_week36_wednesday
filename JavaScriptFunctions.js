//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
};

//Function Expression
var sub = function(n1,n2){
  return n1 - n2
};

//Callback example
var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

//1. console.log( add(1,2) )     // What will this print?
//Første gæt: 3
console.log( add(1,2) );
// 3

//2. console.log( add )          // What will it print and what does add represent?
//Første gæt: undefined, den skrives som en variabel, som ikke er deklararet
console.log( add );
// Den skrev metoden deklarationen ud: function add(n1, n2){ … }
//Sikkert for at fortælle at den skulle have haft nogle værdier med til metoden

//3. console.log( add(1,2,3) ) ; // What will it print
//Første gæt: 
//console.log( add(1,2,3) );      //

//4. console.log( add(1) );	  // What will it print 	
//Første gæt: 
//console.log( add(1) );      //

//5. console.log( cb(3,3,add) ); // What will it print
//Første gæt: 
//console.log( cb(3,3,add) );     //

//6. console.log( cb(4,3,sub) ); // What will it print
//Første gæt: 
//console.log( cb(4,3,sub) );         //

//7. console.log(cb(3,3,add())); // What will it print (and what was the problem)
//Første gæt: 
//console.log(cb(3,3,add()));         //

//8. console.log(cb(3,"hh",add));// What will it print
//Første gæt: 
//console.log(cb(3,"hh",add));      //
