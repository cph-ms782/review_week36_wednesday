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
//Første gæt: Result from the two numbers: 3-3=0
console.log( cb(4,3,sub) );
// Resultat: 

//7. console.log(cb(3,3,add())); // What will it print (and what was the problem)
//Første gæt: 
//console.log(cb(3,3,add()));
// Resultat: 

//8. console.log(cb(3,"hh",add));// What will it print
//Første gæt: 
//console.log(cb(3,"hh",add));
// Resultat: 
