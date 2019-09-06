/**
 * Reusable Modules with Closures
 */

 /**
  * 1.
  */
var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {changeBy(1);},
      decrement: function() {changeBy(-1);},
      value: function() { return privateCounter;}
    }
  };
  var counter1 = makeCounter();
  var counter2 = makeCounter();

counter1.increment();
counter1.increment();
//alert(counter1.value()); /* Alerts 2 */

/**
 * 2.
 */
var makePerson = function() {
    var age = 452;
    var name = "Petere";
    function ageing(val) {
        age += val;
        console.log("ageing age: " + age);
    }
    function naming(val2) {
        name += val2;
        console.log("naming name: " + name);
    }
    console.log(name, age);
    return {
      setAge: function() {ageing(45);},
      setName: function() {naming("Peter");},
      getInfo: function() {return name + " : " + age;}
    }
  };
  var counter3 = makePerson();
  var counter4 = makePerson();
