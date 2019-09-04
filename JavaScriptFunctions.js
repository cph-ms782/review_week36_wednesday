/**
 * 1)
 */

//Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
};

//Function Expression
var sub = function(n1,n2){
  return n1 - n2;
};


/**
 * 3)
 */
//Callback example
var cb = function(n1,n2, callback){
  console.log(n1, typeof n1);
  console.log(n2, typeof n2);
  if (typeof n1 !== "number" ){ throw new Error('first number NaN!');};
  if (typeof n2 !== "number" ){ throw new Error('second number NaN!');};
  if (typeof callback !== "function" ){ throw new Error('Callback not a function ref');};
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};


/**
 *  2)
 */
//1. console.log( add(1,2) )     // What will this print?
//Første gæt: 3
console.log( add(1,2) );
// Resultat: 3

//2. console.log( add )          // What will it print and what does add represent?
//Første gæt: undefined, den skrives som en variabel, som ikke er deklararet
console.log( add );
// Resultat: Den skrev metode-deklarationen ud: function add(n1, n2){ … }
//           Sikkert for at fortælle at den skulle have haft nogle værdier med til metoden

//3. console.log( add(1,2,3) ) ; // What will it print
//Første gæt: 3
console.log( add(1,2,3) );
// Resultat: 3, den er åbenbart ligeglad med overflødige attributer

//4. console.log( add(1) );	  // What will it print 	
//Første gæt: 1
console.log( add(1) );
// Resultat: NaN, den manglende attribut ser ud til at give intet nummer. 1 + undefined = NaN

//5. console.log( cb(3,3,add) ); // What will it print
//Første gæt: 6 (ups, så ikke at metoden var cb og ikke add)
console.log( cb(3,3,add) );
// Resultat: Result from the two numbers: 3+3=6

//6. console.log( cb(4,3,sub) ); // What will it print
//Første gæt: Result from the two numbers: 4-3=1
console.log( cb(4,3,sub) );
// Resultat: Result from the two numbers: 4+3=1

//7. console.log(cb(3,3,add())); // What will it print (and what was the problem)
//Første gæt: Fejl, men jeg ved ikke hvilken. add() er en metode og det så ud til at syntaxen skal være som var det en tekst
console.log("Starter try catch");
try{console.log(cb(3,3,add))
} catch(e){
  console.log("Der er sket en fejl. En af de vedlagt attributer er af den forkerte type: \n" + e.name + ': ' + e.message);
};
// Resultat: TypeError: callback is not a function. Det skal nok være en reference til en function

//8. console.log(cb(3,"hh",add));// What will it print
//Første gæt: 3hh
//console.log(cb(3,"hh",add));
// Resultat: Result from the two numbers: 3+hh=3hh


/**
 * 4)
 */

//Function Expression
var mul = function(n1,n2){
  return n1 * n2;
};
console.log("Starter mul function");
try{console.log(cb(3,3,mul))
} catch(e){
  console.log("Der er sket en fejl. En af de vedlagt attributer er af den forkerte type: \n" + e.name + ': ' + e.message);
};
// Result from the two numbers: 3+3=9

/**
 * 5)
 */
try{console.log(cb(3,3, function(num1, num2){return num1/num2}))
} catch(e){
  console.log("Der er sket en fejl. En af de vedlagt attributer er af den forkerte type: \n" + e.name + ': ' + e.message);
};
//Result from the two numbers: 3+3=1